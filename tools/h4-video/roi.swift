// Leikkaa videon jokaisesta kuvasta suorakulmaisen alueen (ROI) luminanssina kalibrointi-iskujen analyysiin.
// Alue annetaan samoissa koordinaateissa kuin frames.swift:n PNG-kuvat, mutta täydellä resoluutiolla
// (PNG-kuvan koordinaatit × 2). Jokaiselle ROI-pikselille haetaan puskurin pikseli samalla muunnoksella,
// jolla frames.swift piirtää PNG:n (CIImage + preferredTransform), joten kuvasta valittu alue osuu oikein.
// Kirjoittaa: roi.u8 (kuvat peräkkäin, oh × ow tavua kukin), roi.json (koko, aikaleimat, puskuririvien osuudet)
// ja roi-esikatselu.png (valitun ajan ROI tarkistusta varten, ei repoon).
// Ajo: roi <video> <ulostulokansio> <x> <y> <leveys> <korkeus> [askel px, oletus 2] [esikatselun aika s]
import AVFoundation
import Foundation
import ImageIO
import UniformTypeIdentifiers

let args = CommandLine.arguments
let url = URL(fileURLWithPath: args[1])
let outDir = URL(fileURLWithPath: args[2])
let rx = Int(args[3])!, ry = Int(args[4])!, rw = Int(args[5])!, rh = Int(args[6])!
let step = args.count > 7 ? Int(args[7])! : 2
let previewAt = args.count > 8 ? Double(args[8])! : -1
let ow = rw / step, oh = rh / step

let asset = AVURLAsset(url: url, options: [AVURLAssetPreferPreciseDurationAndTimingKey: true])
let sem = DispatchSemaphore(value: 0)
Task {
  do {
    let track = try await asset.loadTracks(withMediaType: .video)[0]
    let transform = try await track.load(.preferredTransform)
    let inverse = transform.inverted()
    var preview: [UInt8]? = nil
    let reader = try AVAssetReader(asset: asset)
    let out = AVAssetReaderTrackOutput(track: track, outputSettings: [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA])
    reader.add(out)
    reader.startReading()
    var data = Data(capacity: ow * oh * 1000)
    var pts: [Double] = []
    var map: [Int] = []       // ROI-pikselin puskurisiirtymä (tavua)
    var rowFracs: [Double] = []
    var bufW = 0, bufH = 0
    while let buf = out.copyNextSampleBuffer() {
      guard let pix = CMSampleBufferGetImageBuffer(buf) else { continue }
      CVPixelBufferLockBaseAddress(pix, .readOnly)
      let w = CVPixelBufferGetWidth(pix), h = CVPixelBufferGetHeight(pix)
      let stride = CVPixelBufferGetBytesPerRow(pix)
      if map.isEmpty {
        bufW = w; bufH = h
        // CIImage: origo vasemmassa alakulmassa. PNG: rivi 0 ylhäällä, x alkaa kuvan rajauksen vasemmasta reunasta.
        let ext = CGRect(x: 0, y: 0, width: Double(w), height: Double(h)).applying(transform)
        for v in 0..<oh {
          for u in 0..<ow {
            let ci = CGPoint(x: Double(rx + u * step) + 0.5 + ext.minX, y: ext.maxY - (Double(ry + v * step) + 0.5))
            let p = ci.applying(inverse)
            let bx = min(max(Int(p.x), 0), w - 1), by = min(max(Int(Double(h) - p.y), 0), h - 1)
            map.append(by * stride + bx * 4)
            rowFracs.append((Double(by) + 0.5) / Double(h))
          }
        }
      }
      let base = CVPixelBufferGetBaseAddress(pix)!.assumingMemoryBound(to: UInt8.self)
      var frame = [UInt8](repeating: 0, count: ow * oh)
      for i in 0..<map.count {
        let q = base + map[i]
        frame[i] = UInt8(min(255.0, 0.0722 * Double(q[0]) + 0.7152 * Double(q[1]) + 0.2126 * Double(q[2])).rounded())
      }
      CVPixelBufferUnlockBaseAddress(pix, .readOnly)
      data.append(contentsOf: frame)
      pts.append(CMSampleBufferGetPresentationTimeStamp(buf).seconds)
      if preview == nil && previewAt >= 0 && pts.last! >= previewAt { preview = frame }
    }
    try data.write(to: outDir.appendingPathComponent("roi.u8"))
    if let frame = preview {
      let provider = CGDataProvider(data: Data(frame) as CFData)!
      let image = CGImage(width: ow, height: oh, bitsPerComponent: 8, bitsPerPixel: 8, bytesPerRow: ow, space: CGColorSpaceCreateDeviceGray(),
                          bitmapInfo: CGBitmapInfo(rawValue: 0), provider: provider, decode: nil, shouldInterpolate: false, intent: .defaultIntent)!
      let dest = CGImageDestinationCreateWithURL(outDir.appendingPathComponent("roi-esikatselu.png") as CFURL, UTType.png.identifier as CFString, 1, nil)!
      CGImageDestinationAddImage(dest, image, nil)
      CGImageDestinationFinalize(dest)
    }
    let sorted = rowFracs.sorted()
    let json: [String: Any] = [
      "x": rx, "y": ry, "leveys": rw, "korkeus": rh, "askel": step, "ow": ow, "oh": oh,
      "puskuri": [bufW, bufH], "transform": [transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty],
      // Rullaava suljin lukee puskurin rivejä järjestyksessä: ROI:n rivien osuus puskurin korkeudesta.
      "puskuririviOsuus": ["min": sorted.first ?? 0, "mediaani": sorted[sorted.count / 2], "max": sorted.last ?? 0],
      "pts": pts,
    ]
    try JSONSerialization.data(withJSONObject: json, options: [.prettyPrinted, .sortedKeys]).write(to: outDir.appendingPathComponent("roi.json"))
    print("ROI", rx, ry, rw, rh, "askel", step, "→", ow, "×", oh, "kuvia", pts.count, "puskurin rivit", sorted.first ?? 0, "…", sorted.last ?? 0)
  } catch { print("virhe", error) }
  sem.signal()
}
sem.wait()

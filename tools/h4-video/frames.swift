// Lukee videon kuvat (BGRA) ja kirjoittaa jokaisesta kuvasta luminanssiruudukon (GW × GH lohkoa) sekä
// halutut kuvat PNG:nä. Ajo: swift frames.swift <video> <ulostulokansio> [png-aika ...]
import AVFoundation
import CoreImage
import Foundation
import ImageIO
import UniformTypeIdentifiers

let args = CommandLine.arguments
let url = URL(fileURLWithPath: args[1])
let outDir = URL(fileURLWithPath: args[2])
let pngTimes = args.dropFirst(3).compactMap(Double.init)
let GW = 54, GH = 96

let asset = AVURLAsset(url: url, options: [AVURLAssetPreferPreciseDurationAndTimingKey: true])
let sem = DispatchSemaphore(value: 0)
Task {
  do {
    let track = try await asset.loadTracks(withMediaType: .video)[0]
    let transform = try await track.load(.preferredTransform)
    print("preferredTransform", transform)
    let reader = try AVAssetReader(asset: asset)
    let out = AVAssetReaderTrackOutput(track: track, outputSettings: [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA])
    reader.add(out)
    reader.startReading()
    var csv = "pts," + (0..<(GW * GH)).map { "b\($0)" }.joined(separator: ",") + "\n"
    var saved = Set<Int>()
    let ctx = CIContext()
    var n = 0
    var gridW = 0, gridH = 0
    while let buf = out.copyNextSampleBuffer() {
      guard let pix = CMSampleBufferGetImageBuffer(buf) else { continue }
      let pts = CMSampleBufferGetPresentationTimeStamp(buf).seconds
      CVPixelBufferLockBaseAddress(pix, .readOnly)
      let w = CVPixelBufferGetWidth(pix), h = CVPixelBufferGetHeight(pix)
      let stride = CVPixelBufferGetBytesPerRow(pix)
      let base = CVPixelBufferGetBaseAddress(pix)!.assumingMemoryBound(to: UInt8.self)
      // Kuvapuskurin oma suunta (w × h); ruudukko otetaan samassa suunnassa.
      let gw = w > h ? GH : GW, gh = w > h ? GW : GH
      var sums = [Double](repeating: 0, count: gw * gh)
      var counts = [Int](repeating: 0, count: gw * gh)
      var y = 0
      while y < h {
        let gy = y * gh / h
        var x = 0
        while x < w {
          let p = base + y * stride + x * 4
          let lum = 0.0722 * Double(p[0]) + 0.7152 * Double(p[1]) + 0.2126 * Double(p[2])
          let gi = gy * gw + x * gw / w
          sums[gi] += lum
          counts[gi] += 1
          x += 4
        }
        y += 4
      }
      CVPixelBufferUnlockBaseAddress(pix, .readOnly)
      if n == 0 { print("puskuri", w, "x", h, "ruudukko", gw, "x", gh); gridW = gw; gridH = gh }
      csv += String(format: "%.6f", pts) + "," + zip(sums, counts).map { String(format: "%.1f", $0 / Double($1)) }.joined(separator: ",") + "\n"
      for (i, t) in pngTimes.enumerated() where !saved.contains(i) && pts >= t {
        saved.insert(i)
        let image = CIImage(cvPixelBuffer: pix).transformed(by: transform)
        let scaled = image.transformed(by: CGAffineTransform(scaleX: 0.5, y: 0.5))
        let file = outDir.appendingPathComponent(String(format: "kuva-%.3f.png", pts))
        try ctx.writePNGRepresentation(of: scaled, to: file, format: .RGBA8, colorSpace: CGColorSpace(name: CGColorSpace.sRGB)!)
      }
      n += 1
    }
    try csv.write(to: outDir.appendingPathComponent("ruudukko.csv"), atomically: true, encoding: .utf8)
    try "{\"gw\":\(gridW),\"gh\":\(gridH),\"kuvia\":\(n)}".write(to: outDir.appendingPathComponent("ruudukko.json"), atomically: true, encoding: .utf8)
    print("kuvia", n)
  } catch { print("virhe", error) }
  sem.signal()
}
sem.wait()

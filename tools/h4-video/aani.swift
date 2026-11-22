// Purkaa videon ääniraidan float32-PCM:ksi (kanavat erikseen, lomitettuna) ja tulostaa ensimmäisen näytteen aikaleiman.
// Kirjoittaa lisäksi <ulos.f32>.json: kanavamäärä ja ensimmäisen näytteen aikaleima.
// Ajo: swift aani.swift <video> <ääniraidan indeksi 0..> <ulos.f32>
import AVFoundation
import Foundation

let args = CommandLine.arguments
let url = URL(fileURLWithPath: args[1])
let index = Int(args[2])!
let outURL = URL(fileURLWithPath: args[3])
let asset = AVURLAsset(url: url, options: [AVURLAssetPreferPreciseDurationAndTimingKey: true])
let sem = DispatchSemaphore(value: 0)
Task {
  do {
    let track = try await asset.loadTracks(withMediaType: .audio)[index]
    let reader = try AVAssetReader(asset: asset)
    let settings: [String: Any] = [AVFormatIDKey: kAudioFormatLinearPCM, AVLinearPCMBitDepthKey: 32, AVLinearPCMIsFloatKey: true,
                                   AVLinearPCMIsBigEndianKey: false, AVLinearPCMIsNonInterleaved: false, AVSampleRateKey: 48000]
    let out = AVAssetReaderTrackOutput(track: track, outputSettings: settings)
    reader.add(out)
    reader.startReading()
    var data = Data()
    var first: Double? = nil
    var channels = 0
    while let buf = out.copyNextSampleBuffer() {
      if first == nil {
        first = CMSampleBufferGetPresentationTimeStamp(buf).seconds
        if let f = CMSampleBufferGetFormatDescription(buf), let asbd = CMAudioFormatDescriptionGetStreamBasicDescription(f)?.pointee {
          channels = Int(asbd.mChannelsPerFrame)
        }
      }
      guard let block = CMSampleBufferGetDataBuffer(buf) else { continue }
      var length = 0
      var pointer: UnsafeMutablePointer<CChar>? = nil
      CMBlockBufferGetDataPointer(block, atOffset: 0, lengthAtOffsetOut: nil, totalLengthOut: &length, dataPointerOut: &pointer)
      data.append(UnsafeBufferPointer(start: UnsafeRawPointer(pointer!).assumingMemoryBound(to: UInt8.self), count: length))
    }
    try data.write(to: outURL)
    let side = "{\"kanavia\":\(channels),\"naytetaajuus\":48000,\"ensimmainenPts\":\(first ?? -1)}"
    try side.write(to: outURL.appendingPathExtension("json"), atomically: true, encoding: .utf8)
    print("tila", reader.status.rawValue, "ensimmäinen pts", first ?? -1, "kanavia", channels, "näytteitä/kanava", data.count / 4 / max(channels, 1))
  } catch { print("virhe", error) }
  sem.signal()
}
sem.wait()

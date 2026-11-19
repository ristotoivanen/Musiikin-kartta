// Tulostaa videon raidat, muokkauslistat, kuvien aikaleimat ja metatiedot (sijainnin vain olemassaolona).
// Ajo: swift info.swift <video>
import AVFoundation
import Foundation

let url = URL(fileURLWithPath: CommandLine.arguments[1])
let asset = AVURLAsset(url: url, options: [AVURLAssetPreferPreciseDurationAndTimingKey: true])
let sem = DispatchSemaphore(value: 0)
Task {
  do {
    let duration = try await asset.load(.duration)
    print("kesto", duration.seconds, "timescale", duration.timescale)
    let meta = try await asset.load(.metadata)
    for item in meta {
      let id = item.identifier?.rawValue ?? "?"
      // Sijaintitietoa ei tulosteta: kerrotaan vain, että se on tiedostossa.
      if id.lowercased().contains("location") { print("meta", id, "(sijaintitieto on tiedostossa, arvoa ei tulosteta)"); continue }
      let value = try? await item.load(.stringValue)
      print("meta", id, value ?? "")
    }
    for track in try await asset.load(.tracks) {
      let range = try await track.load(.timeRange)
      let ts = try await track.load(.naturalTimeScale)
      let fps = try await track.load(.nominalFrameRate)
      let minDur = try await track.load(.minFrameDuration)
      let size = try await track.load(.naturalSize)
      let segs = try await track.load(.segments)
      let fmts = try await track.load(.formatDescriptions)
      print("raita", track.trackID, track.mediaType.rawValue, "alku", range.start.seconds, "kesto", range.duration.seconds,
            "timescale", ts, "fps", fps, "minFrameDuration", minDur.seconds, "koko", size)
      for seg in segs {
        print("  edit", "source", seg.timeMapping.source.start.seconds, seg.timeMapping.source.duration.seconds,
              "target", seg.timeMapping.target.start.seconds, seg.timeMapping.target.duration.seconds, "empty", seg.isEmpty)
      }
      for f in fmts {
        let sub = CMFormatDescriptionGetMediaSubType(f)
        let code = String(format: "%c%c%c%c", (sub >> 24) & 255, (sub >> 16) & 255, (sub >> 8) & 255, sub & 255)
        print("  formaatti", code)
        if let asbd = CMAudioFormatDescriptionGetStreamBasicDescription(f)?.pointee {
          print("  ääni", asbd.mSampleRate, "Hz, kanavia", asbd.mChannelsPerFrame, "framesPerPacket", asbd.mFramesPerPacket)
        }
      }
      if track.mediaType == .video {
        let reader = try AVAssetReader(asset: asset)
        let out = AVAssetReaderTrackOutput(track: track, outputSettings: nil)
        out.alwaysCopiesSampleData = false
        reader.add(out)
        reader.startReading()
        var pts: [Double] = []
        while let buf = out.copyNextSampleBuffer() {
          if CMSampleBufferGetNumSamples(buf) > 0 { pts.append(CMSampleBufferGetPresentationTimeStamp(buf).seconds) }
        }
        pts.sort()
        var deltas: [String: Int] = [:]
        for i in 1..<pts.count { deltas[String(format: "%.4f", pts[i] - pts[i - 1]), default: 0] += 1 }
        print("  kuvia", pts.count, "ensimmäinen", pts.first ?? -1, "viimeinen", pts.last ?? -1)
        print("  kuvavälit", deltas.sorted { $0.value > $1.value }.prefix(8))
      }
      if track.mediaType == .audio {
        let reader = try AVAssetReader(asset: asset)
        let out = AVAssetReaderTrackOutput(track: track, outputSettings: nil)
        reader.add(out)
        reader.startReading()
        var first: Double? = nil
        var last = 0.0
        var count = 0
        var priming: [String] = []
        while let buf = out.copyNextSampleBuffer() {
          let t = CMSampleBufferGetPresentationTimeStamp(buf).seconds
          if first == nil {
            first = t
            if let trim = CMGetAttachment(buf, key: kCMSampleBufferAttachmentKey_TrimDurationAtStart, attachmentModeOut: nil) { priming.append("trimAlku \(trim)") }
          }
          last = t + CMSampleBufferGetDuration(buf).seconds
          count += CMSampleBufferGetNumSamples(buf)
        }
        print("  äänipaketteja", count, "ensimmäinen pts", first ?? -1, "loppu", last, priming)
      }
    }
  } catch { print("virhe", error) }
  sem.signal()
}
sem.wait()

import AppKit
// kooste.swift ulos.png otsikko1=kuva1.png otsikko2=kuva2.png ...
let args = Array(CommandLine.arguments.dropFirst())
let out = args[0]
let items = args.dropFirst().map { a -> (String, NSImage) in
  let p = a.split(separator: "=", maxSplits: 1).map(String.init); return (p[0], NSImage(contentsOfFile: p[1])!) }
func px(_ i: NSImage) -> NSSize { let r = i.representations[0]; return NSSize(width: r.pixelsWide, height: r.pixelsHigh) }
let gap: CGFloat = 40, label: CGFloat = 80
let W = items.reduce(gap) { $0 + px($1.1).width + gap }
let H = (items.map { px($0.1).height }.max() ?? 0) + label + gap * 2
let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: Int(W), pixelsHigh: Int(H), bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
NSGraphicsContext.saveGraphicsState(); NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)
NSColor(white: 0.96, alpha: 1).setFill(); NSRect(x: 0, y: 0, width: W, height: H).fill()
var x = gap
for (t, i) in items { let s = px(i)
  (t as NSString).draw(at: NSPoint(x: x, y: H - gap - 64), withAttributes: [.font: NSFont.boldSystemFont(ofSize: 54), .foregroundColor: NSColor.black])
  i.draw(in: NSRect(x: x, y: H - gap - label - s.height, width: s.width, height: s.height)); x += s.width + gap }
NSGraphicsContext.restoreGraphicsState()
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: out))

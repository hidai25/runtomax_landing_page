import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.heartRateStrap;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  robots: { index: false, follow: true },
  openGraph: { type: "article", modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
});

export default function HeartRateStrapGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Sensors</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">Use a heart-rate chest strap with Apple Watch</h1>
      <GuideDetails guide={guide} />
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>Yes, you can connect a compatible Bluetooth heart-rate strap.</strong> In RunToMax, pair it on the Watch and check for live BPM before starting. Pairing inside the app changes your live reading; it does not, by itself, replace the heart-rate samples saved in Apple Health.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <h2>Check your sensor first</h2>
        <p>RunToMax looks for the standard Bluetooth heart-rate service. An ANT+-only strap cannot connect through this screen. Check your model’s Bluetooth support and follow its instructions for wearing it and waking it up. We have not tested every strap model.</p>
        <h2>Pair it in RunToMax</h2>
        <ol className="list-decimal space-y-4 pl-5">
          <li>Wear and activate your strap following its manufacturer’s instructions.</li>
          <li>Open <strong>RunToMax on your Apple Watch</strong>. Tap the settings gear on the home screen.</li>
          <li>Choose <strong>Sensors → External Strap → Scan for Straps</strong>, then tap your sensor’s name.</li>
          <li>Wait for <strong>Live · BPM</strong> and a heart-rate number. A saved name or “Waiting for first sample” does not mean a reading is arriving.</li>
          <li>Return to the run screen and start your run. RunToMax remembers the pairing and attempts to reconnect on subsequent runs; check it before setting off.</li>
        </ol>
        <p>Chest-strap support is included with free Outdoor and Treadmill recording. You do not need Pro just to pair one.</p>
        <h2>Live heart rate and the saved record</h2>
        <p>In RunToMax 1.3.5, a fresh strap reading takes priority for the live heart-rate display. If the strap stops sending fresh readings, the app can use incoming Watch heart-rate data again.</p>
        <p><strong>The saved Apple Health record is separate.</strong> RunToMax’s in-app pairing does not write the strap’s samples into that record; the Watch’s workout recording still supplies them. Do not assume the live number proves which sensor supplied a later Health chart. System-level Bluetooth pairing is a separate setup, and this guide does not verify its saved-data behavior with RunToMax.</p>
        <h2>If no reading appears</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li>Check the strap’s battery, fit and activation instructions, and that Bluetooth is on.</li>
          <li>Check whether another app or device is using its available connection. For example, Polar documents a <a href="https://support.polar.com/en/support/can_i_pair_h10_with_several_devices">two-device Bluetooth setting for the H10</a>; other models differ.</li>
          <li>If pairing remains stuck, use <strong>Forget Strap</strong> in RunToMax and scan again. Wait for live BPM before relying on it.</li>
        </ul>
        <h2>Do you need a strap—or RunToMax?</h2>
        <p>Neither is a requirement for recording heart rate on Apple Watch. Apple also supports <a href="https://support.apple.com/en-us/105002">external Bluetooth heart-rate monitors</a>. If you use Apple’s Workout app, start with Apple’s guidance; use the setup supported by the app you record with.</p>
        <p>In <a href="https://www.reddit.com/r/AppleWatchFitness/comments/1vpuef8/can_i_calibrate_my_apple_watch_to_my_chest_strap/">this runner discussion</a>, some people prefer a strap for quicker changes while others report little difference during steady running. These are individual experiences, not a guarantee of better readings or a reason everyone needs another sensor.</p>
        <p className="text-sm text-zinc-400">Instructions checked against the public App Store 1.3.5 release source on November 5, 2026. Physical strap pairing and saved-data checks are still pending; this draft is not a device test.</p>
        <p>Next: <Link href="/guides/apple-watch-running-pace/">choose your running pace fields</Link> · <Link href="/features/apple-watch/">RunToMax on Apple Watch</Link> · <Link href="/support/">Setup help</Link></p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Get RunToMax for Apple Watch</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

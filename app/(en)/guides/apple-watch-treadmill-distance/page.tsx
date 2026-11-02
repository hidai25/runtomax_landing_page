import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apple Watch treadmill distance wrong? Calibrate a run in RunToMax",
  description: "Understand why treadmill and Apple Watch distances differ, and learn how to correct a treadmill run in RunToMax.",
  alternates: { canonical: "/guides/apple-watch-treadmill-distance/" },
};

const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export default function TreadmillDistanceGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl justify-between"><Link href="/" className="font-bebas text-2xl">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Apple Watch</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">Apple Watch and treadmill distance don't match?</h1>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <p>Your watch and treadmill can report different distances for the same run. The watch estimates indoor distance from motion; the treadmill has its own measurement. Neither number is guaranteed to be exact, so compare a few runs before drawing a conclusion.</p>
        <h2>Correct a run in RunToMax</h2>
        <p>After a treadmill run recorded in RunToMax, you can enter the belt distance in the Watch summary. The calibration card is available for treadmill runs with recorded steps.</p>
        <ol><li>Finish your treadmill run and open its summary on the Watch.</li><li>Find <strong>Calibrate</strong> and enter the distance shown on the treadmill. Check the units first.</li><li>Tap <strong>Save calibration</strong>. Check the updated summary and look for any Apple Health sync or retry message.</li></ol>
        <p>RunToMax uses the entry for this run and as a baseline for future treadmill runs. It may take time to sync, and a correction cannot establish which device was closest to the true distance.</p>
        <h2>Check your Apple Watch calibration</h2>
        <p>For Apple’s Workout app, Apple recommends checking <strong>Location Services → System Services → Motion Calibration &amp; Distance</strong> on your iPhone, then doing an Outdoor Walk or Outdoor Run in a flat, open area for about 20 minutes at your usual pace. See <a href="https://support.apple.com/en-us/105048">Apple’s calibration instructions</a> for details and different speeds. This is Apple’s procedure; it is separate from entering a belt distance in RunToMax.</p>
        <h2>Still seeing a difference?</h2>
        <p>Check that the treadmill starts at zero and compare the same elapsed portion of the workout. Calibration may help but won’t eliminate every discrepancy. If a RunToMax correction fails, follow the retry message, check Health permissions, and <Link href="/support/">contact support</Link> with your app and device versions.</p>
        <p>Using another running app? Check whether it offers its own treadmill correction, or follow the watch maker’s calibration guidance.</p>
        <p><Link href="/features/apple-watch/">Explore RunToMax on Apple Watch</Link> · <Link href="/guides/interval-workouts-apple-watch/">Create intervals in RunToMax</Link></p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Get RunToMax</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

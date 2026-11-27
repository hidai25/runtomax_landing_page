import GuideDetails from "@/app/_components/GuideDetails";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.treadmill;

export const metadata: Metadata = pageMetadata("/guides/apple-watch-treadmill-distance/", {
  // The words runners search (Search Console, Aug to Nov 2026): "treadmill
  // pace wrong", "don't match", "why is my apple watch distance different",
  // "how to calibrate apple watch for treadmill".
  title: "Apple Watch treadmill distance or pace wrong? Why, and how to calibrate",
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
  alternates: guideAlternates(guide.path),
});

const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=en-guide-treadmill&mt=8";

export default function TreadmillDistanceGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl justify-between"><Link href="/" className="font-bebas text-2xl">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a id="app-store-nav" href={download} className="text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Apple Watch</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">Apple Watch and treadmill distance don't match?</h1>
      <GuideDetails guide={guide} />
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6 text-base leading-relaxed">
        <p className="font-semibold">The short answer</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-200">
          <li><strong>Why they differ:</strong> the treadmill measures its belt. Indoors, the watch has no GPS and estimates your distance from your arm movement and the stride length it has learned.</li>
          <li><strong>Why the pace is off too:</strong> pace is time divided by distance. If the watch counts less distance than the belt, its pace reads slower by the same share.</li>
          <li><strong>Which to trust:</strong> neither is proven right by the gap alone. For a log that matches the machine, use the belt. Whichever you pick, keep it for every run.</li>
          <li><strong>How to fix it:</strong> correct the run with the belt distance (below), and calibrate the watch outdoors so future indoor runs start closer.</li>
        </ul>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <h2>My treadmill says 5.0 km and my Apple Watch says 4.7 km. Which distance should I log?</h2>
        <p>If you want your training log to match the treadmill, use 5.0 km. First check that the belt and watch measured the same part of the run. If the belt counted a warm-up before you started the watch, the two totals cover different distances.</p>
        <p>Even with the same start and finish, the numbers can differ. The treadmill reports how far its belt travelled. Indoors, the watch estimates how far you ran from your movement and learned stride length. The difference alone can’t tell you which reading is closer. For runs you compare week to week on the same machine, pick one source and use it consistently.</p>
        <h2>Why is my Apple Watch pace wrong on the treadmill?</h2>
        <p>Because the pace comes from the distance. The watch divides the time by the distance it estimated, so a distance that is 6% short gives a pace about 6% slower than the belt shows. Fix the distance and the pace follows: correcting a RunToMax run with the belt total also corrects its pace and splits.</p>
        <p>Live pace on a treadmill also moves more than outdoors, because each estimate leans on your arm swing. Holding the rails, carrying a phone or a bottle in the watch hand, or changing your stride on an incline can all shift it. The run's average is steadier than any single moment.</p>
        <h2>How do I save the treadmill distance to Apple Health?</h2>
        <p>If you recorded the run with RunToMax on Apple Watch, you can use the belt reading for that workout in Apple Health. Note the treadmill total before the display resets.</p>
        <ol>
          <li>Open the finished run’s summary in RunToMax on your watch. Find <strong>Calibrate</strong>. The card appears for treadmill runs with recorded steps.</li>
          <li>Check whether the watch is showing miles or kilometres. Set the distance to the belt reading (5.00 if the display read 5.0 km and the watch is set to kilometres). Set the incline to match the treadmill.</li>
          <li>Tap <strong>Save calibration</strong>. RunToMax updates the run’s distance and pace and uses the entry to refine your stride estimate for future treadmill runs.</li>
        </ol>
        <p>RunToMax then tries to sync the correction to Apple Health. Once sync succeeds, the RunToMax workout in Health carries the belt total (5.0 km in this example). You can check the workout in Fitness on your iPhone. There’s no need to log the extra 0.3 km as a separate workout.</p>
        <p>If the summary says <strong>Updating Apple Health…</strong>, the sync is still in progress. If it reports a failure, open RunToMax on the watch, check its Health permissions and tap <strong>Retry Apple Health sync</strong>. If the old distance persists, <Link href="/support/">contact RunToMax support</Link> with your app and watchOS versions.</p>
        <p>Want the belt distance in Apple Health next time? <a id="app-store-treadmill-health" href={download}>Get RunToMax on the App Store</a> and record your next treadmill run with it on Apple Watch.</p>
        <h2>What if I recorded the run with Apple’s Workout app?</h2>
        <p>RunToMax can correct a workout it recorded. For future runs recorded with Apple’s Workout app, you can help the watch learn your stride. On iPhone, check that <strong>Settings → Privacy &amp; Security → Location Services → System Services → Motion Calibration &amp; Distance</strong> is on. Then record about 20 minutes at your usual pace with <strong>Outdoor Run</strong> or <strong>Outdoor Walk</strong> on flat, open ground with good GPS reception. If you train at different speeds, Apple recommends calibrating at each pace. <a href="https://support.apple.com/en-us/105048">Apple’s calibration instructions</a></p>
        <h2>What if I recorded my treadmill run on a Garmin?</h2>
        <p>If the Garmin and belt disagree, see <Link href={guides.garminTreadmill.path}>how to calibrate a Garmin treadmill run or correct the saved distance</Link>. The belt correction above applies to runs recorded with RunToMax on Apple Watch. In RunToMax 1.4, you can bring new runs into your iPhone training log through <Link href="/faq/#garmin-connect">Garmin Connect</Link>.</p>
        <p><Link href="/features/apple-watch/">Explore RunToMax on Apple Watch</Link> · <Link href="/guides/interval-workouts-apple-watch/">Create intervals in RunToMax</Link></p>
      </div>
      <a id="app-store-bottom" href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Get RunToMax</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

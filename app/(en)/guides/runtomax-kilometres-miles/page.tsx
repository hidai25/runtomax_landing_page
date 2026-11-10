import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.distanceUnits;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  robots: { index: false, follow: true },
  openGraph: { type: "article", modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
});

export default function DistanceUnitsGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Units</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">{guide.title}</h1>
      <GuideDetails guide={guide} />
      <aside aria-label="Draft status" className="mt-6 rounded-2xl border border-amber-300/30 p-5 text-sm leading-relaxed text-amber-100">Unpublished draft. Shipping-device checks are pending. A possible Auto-Lap unit mismatch in the 1.3.5 source also needs verification before publication.</aside>
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>Set the units inside RunToMax.</strong> On iPhone, open Settings → Units &amp; language and choose KM or MI under Distance. On your Watch, the setting is inside RunToMax → Settings → System → Distance.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <h2>Set it before your next run</h2>
        <ol className="list-decimal space-y-4 pl-5">
          <li>In RunToMax on iPhone, tap the <strong>Settings gear</strong>, then <strong>Units &amp; language</strong>.</li>
          <li>Under <strong>Distance</strong>, choose <strong>KM</strong> for kilometres or <strong>MI</strong> for miles.</li>
          <li>Open RunToMax on your paired Watch. In <strong>Settings → System → Distance</strong>, check that <strong>Kilometers</strong> or <strong>Miles</strong> matches your choice. You can change it there too.</li>
          <li>Before relying on a pace number, check its suffix: <strong>/km</strong> or <strong>/mi</strong>. If the devices disagree, check both settings again while they are connected.</li>
        </ol>
        <h2>Why your pace number changes</h2>
        <p>A mile is longer than a kilometre, so the same effort takes more minutes per mile. As a conversion example, <strong>5:00/km is about 8:03/mi</strong>. Likewise, 10 km is about 6.21 miles. These are equivalent distances and paces, not a change in fitness or a new run measurement.</p>
        <p>Units and pace fields answer different questions. Lap Pace is still the average for your current lap whether it appears per kilometre or per mile. See <Link href="/guides/apple-watch-running-pace/">which pace field to choose</Link> if the number itself keeps jumping.</p>
        <h2>Check auto-lap separately</h2>
        <p>Display units tell you how to read distance and pace. Auto-lap decides when a lap ends. Changing KM to MI is not a reliable troubleshooting step for a lap alert arriving at the wrong distance.</p>
        <p>RunToMax’s Watch controls for this are under <strong>Settings → Workout → Auto-Lap</strong>. If the displayed unit and the distance between laps disagree, <Link href="/support/">contact support</Link> with your app version, selected units and auto-lap setting. Don’t assume a displayed “1.0 mi” guarantees a mile-based boundary without checking it.</p>
        <h2>If you record with Apple’s Workout app</h2>
        <p>Use the settings for the app recording your run. Apple publishes its own <a href="https://support.apple.com/en-gb/guide/watch/apde0be691be/26/watchos/26">Workout measurement-unit instructions</a>; those are separate from the RunToMax controls above. You do not need another running app just to choose miles or kilometres.</p>
        <p>A <a href="https://www.reddit.com/r/AppleWatch/comments/1flb745/outdoor_walk_split_alerts_in_km_instead_of_miles/">watchOS 11 discussion</a> describes miles selected but kilometre split alerts, including a similar report for running. It illustrates the distinction; it does not establish a current watchOS bug or diagnose your Watch.</p>
        <p>Changing the label cannot repair incorrectly recorded distance. If the units are already right, see our separate <Link href="/guides/apple-watch-treadmill-distance/">treadmill distance guide</Link> or ask support about the recording problem.</p>
        <p className="text-sm text-zinc-400">RunToMax instructions reviewed against the App Store 1.3.5 release source on November 10, 2026. Device verification is still pending; this is not a first-hand test.</p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Explore RunToMax on the App Store</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

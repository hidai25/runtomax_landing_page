import GuideDetails from "@/app/_components/GuideDetails";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.runningCadence;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  robots: guide.published ? { index: true, follow: true } : { index: false, follow: true },
  openGraph: { type: "article", publishedTime: guide.published ?? undefined, modifiedTime: guide.updated },
  alternates: guideAlternates(guide.path),
});

export default function RunningCadenceGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Cadence</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">{guide.title}</h1>
      <GuideDetails guide={guide} />
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>Look for cadence in steps per minute (spm).</strong> In Apple’s Workout app, open the Metrics 2 view during an Outdoor Run. In RunToMax, cadence is already one of the five default fields on the free running screen.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <p>An <a href="https://www.reddit.com/r/AppleWatchFitness/comments/1r3p9oy/cadence_on_apple_watch/">Apple Watch Ultra runner</a> wondered whether they needed another app to see live cadence. After finding the field in Apple’s Workout app, they confirmed they could see their steps per minute.</p>
        <h2>Where is cadence in Apple’s Workout app?</h2>
        <p>For Outdoor Run, Apple lists cadence in the <strong>Metrics 2</strong> and <strong>Power</strong> views. During the run, turn the Digital Crown to move between enabled views. If you only see pace and distance, check which views you’ve included for Outdoor Run. <a href="https://support.apple.com/guide/watch/workout-views-and-running-metrics-apd1f24d4d35/26/watchos/26">Apple’s guide to running metrics</a></p>
        <h2>How do I put cadence on my RunToMax screen?</h2>
        <p>If you’ve changed the default layout or want cadence in a different spot, use your iPhone to choose where it appears.</p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>In RunToMax 1.4, open <strong>You → Apple Watch → Watch screens</strong>.</li>
          <li>Choose the run type you’ll start on your Watch, such as <strong>Outdoor</strong> or <strong>Treadmill</strong>. Each has its own field choices.</li>
          <li>Tap a field in the watch preview and choose <strong>Running Form → Cadence</strong>.</li>
          <li>Changes save on your iPhone. Open RunToMax on your paired Watch and check the field on your next run of that type. If you still see the previous layout, tap <strong>Sync</strong> in the iPhone editor to request another transfer.</li>
        </ol>
        <h2>What does 170 spm mean?</h2>
        <p>At 170 spm, your left and right feet together take about 170 steps per minute. The number on your wrist describes your current rhythm. Your workout summary can show a different average if you walked during the warm-up or changed speed. <a href="https://www8.garmin.com/manuals/webhelp/GUID-607F08F6-33FC-40BF-9727-84E54043D82D/EN-GB/GUID-73BCE454-042E-420D-96A4-9DBA46626CD4.html">Garmin’s cadence field definitions</a></p>
        <p>To see how your rhythm changes with speed, put cadence beside <Link href="/guides/apple-watch-running-pace/">a pace field</Link>. If the field stays empty while you run, tell <Link href="/support/">RunToMax support</Link> your Watch model, run type and app version.</p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Get RunToMax</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.trackLanes;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  openGraph: { type: "article", publishedTime: guide.published ?? undefined, modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
  robots: { index: Boolean(guide.published), follow: true, googleBot: { index: Boolean(guide.published), follow: true } },
});

export default function TrackLaneGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Track running</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">Running on a track? Choose your lane in RunToMax</h1>
      <GuideDetails guide={guide} />
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>Expecting every lap to be 400 metres?</strong> A full circuit in an outer lane is longer than one in lane 1. In RunToMax, choose the lane you will actually use before starting Track mode.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <p>This guide is for a <strong>standard outdoor 400 m oval</strong>. Track mode is part of <strong>RunToMax Pro</strong>; ordinary Outdoor and Treadmill recording remain free.</p>

        <h2>Set up your track run on the Watch</h2>
        <ol className="mb-6 list-decimal space-y-4 pl-5">
          <li>At the track, open <strong>RunToMax on your Apple Watch</strong> and choose <strong>TRACK</strong>.</li>
          <li>Use the <strong>Lane</strong> control to select your lane. The picker supports lanes 1–8 and shows the lap distance RunToMax will use.</li>
          <li>Tap <strong>Start Track Run</strong> to prepare the run. Complete the normal ready/start flow and check that recording has begun before setting off.</li>
          <li>Run complete circuits in that lane, returning to the same starting point. Recheck the lane on your next visit: RunToMax remembers your previous choice.</li>
        </ol>
        <p>Choose a lane that fits the track’s local rules. Do not select lane 1 just to make the display say 400 m while running farther out.</p>

        <h2>What the lane setting changes</h2>
        <p>RunToMax uses GPS to recognize a return to your starting area. When it detects a completed circuit, it adjusts the track distance to the selected lane’s configured lap length. Between those detections, distance still depends on the incoming measurements.</p>
        <p>That setting is for <strong>whole circuits</strong>. A marked 400 m effort from a staggered start is different from running a full outer-lane circuit back to the same point. Use the track markings and your session’s instructions to decide where each effort starts and finishes.</p>

        <h2>When to use ordinary Outdoor instead</h2>
        <p>Use <strong>Outdoor</strong> if the track is non-standard, you do not know its length, you are using a lane outside the picker’s range, or your route repeatedly cuts across the infield. Track mode assumes the selected lane’s geometry; choosing a lane does not measure an unknown track.</p>
        <p>GPS reception and missed lap detections can still affect the result. Try a few complete laps before relying on it for a session, and compare the recorded laps with the ones you ran. A lane setting is not a guarantee of exact distance or timing.</p>

        <h2>Is this Apple’s automatic track detection?</h2>
        <p>No. In RunToMax you explicitly choose <strong>TRACK</strong> and your lane. Apple’s own Workout app offers a lane prompt when it detects a track during an Outdoor Run; see <a href="https://support.apple.com/en-mt/guide/watch/apdf2260a232/26/watchos/26">Apple’s track-running instructions</a>. If that already suits your needs, it is another option.</p>
        <p className="text-sm text-zinc-400">RunToMax steps checked against the App Store 1.3.5 release source on November 7, 2026. This is a setup guide, not a new on-track accuracy test.</p>
        <p><Link href="/guides/apple-watch-running-pace/">Choose your pace fields</Link> · <Link href="/features/apple-watch/">RunToMax on Apple Watch</Link> · <Link href="/support/">Setup help</Link></p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Explore RunToMax on Apple Watch</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

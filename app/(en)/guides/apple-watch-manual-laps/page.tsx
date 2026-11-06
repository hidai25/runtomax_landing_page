import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.manualLaps;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  robots: { index: false, follow: true },
  openGraph: { type: "article", modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
});

export default function ManualLapsGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Laps</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">How to mark laps on Apple Watch during a run</h1>
      <GuideDetails guide={guide} />
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>You can mark laps without building a workout first.</strong> During an Outdoor run in RunToMax, swipe left from your metrics and tap LAP. It closes the current lap, starts the next and keeps the run recording.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <h2>For sessions that unfold as you go</h2>
        <p>Maybe your running group decides the session when you arrive. Or your warm-up ends when you reach a suitable stretch of path, rather than after exactly ten minutes. Manual laps let you record those changes without deciding every step beforehand.</p>
        <p>For example, mark a lap when the warm-up ends, another when a rep finishes, and another when recovery ends. Each press separates one part of the run from the next.</p>

        <h2>Mark a lap in RunToMax</h2>
        <ol className="mb-6 list-decimal space-y-4 pl-5">
          <li>Start an ordinary <strong>Outdoor</strong> run in RunToMax on your Apple Watch.</li>
          <li>From the running metrics, <strong>swipe left</strong> to open the controls.</li>
          <li>Tap <strong>LAP</strong>. It is in the bottom-left position in the default layout.</li>
          <li>RunToMax returns to your metrics. The next lap begins; the overall run continues.</li>
        </ol>
        <p>Manual laps are available with free Outdoor recording. If LAP is missing, open RunToMax’s settings gear before your run, choose the <strong>Buttons</strong> category, then its <strong>Buttons</strong> row. Select a position and assign <strong>Lap</strong>.</p>
        <p>Choose the plain <strong>Lap</strong> action: <strong>Lap + Pause</strong> also pauses the run, and <strong>Lap + End</strong> asks to end it.</p>

        <h2>Want only the laps you mark?</h2>
        <p>Before starting, open RunToMax’s settings gear on your Apple Watch. Go to <strong>Workout → Auto-Lap</strong> and turn <strong>Enabled</strong> off.</p>
        <p>Otherwise, automatic distance laps can still be recorded alongside your manual laps. Pressing LAP does not switch Auto-Lap off.</p>

        <h2>Use the Ultra’s Action button</h2>
        <p>In RunToMax’s Watch settings, go to <strong>Buttons → Shortcuts</strong> and choose <strong>System workout style</strong>. During a run, this maps the Action button to Lap and Action + Side button to pause or resume.</p>
        <p>The Action button also needs to be linked to RunToMax in Apple’s Watch settings; follow the binding instructions shown in RunToMax. Try the mapping on a short practice run before using it in a session. Other shortcut layouts can assign different actions to the same buttons.</p>

        <h2>See the pace for this lap</h2>
        <p>Add <strong>Lap Pace</strong> to your running screen to follow the average for the current lap. <strong>Avg Pace</strong> covers the whole run. Our <Link href="/guides/apple-watch-running-pace/">guide to pace fields</Link> explains how to choose them.</p>
        <p>If you want the Watch to count down work and recovery instead, <Link href="/guides/interval-workouts-apple-watch/">create a structured interval workout</Link>.</p>

        <h2>If you record with Apple’s Workout app</h2>
        <p>Apple also supports manual segments: double-tap the display during a workout. See <a href="https://support.apple.com/en-az/guide/watch/apdd16e8761a/watchos">Apple’s workout controls guide</a>. Those controls belong to Apple’s app; in RunToMax, use LAP or your configured button shortcut.</p>
        <p className="text-sm text-zinc-400">RunToMax instructions checked against the App Store 1.3.5 release source on November 6, 2026. Physical Watch checks are still pending before this draft is published.</p>
        <p><Link href="/features/apple-watch/">RunToMax on Apple Watch</Link> · <Link href="/support/">Setup help</Link></p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Explore RunToMax on Apple Watch</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.pausing;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  robots: { index: false, follow: true },
  openGraph: { type: "article", modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
});

export default function PausingGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Recording</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">Should you pause your running watch at traffic lights?</h1>
      <GuideDetails guide={guide} />
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>For an ordinary run, either choice can be useful.</strong> Pause if you want to separate an enforced stop from your running time. Keep the timer going if you want the whole outing included. For a race or time trial, use elapsed time, including stops.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <h2>Two clocks, two questions</h2>
        <p><strong>Elapsed time</strong> is the time from start to finish, pauses included. <strong>Moving time</strong> excludes pauses, but apps can calculate it differently: some use the recorded timer, others estimate movement from GPS.</p>
        <p>For example, a 5 km run with 30 minutes of running and two minutes paused at lights has a moving pace of <strong>6:00/km</strong> and an elapsed pace of <strong>6:24/km</strong>. Those numbers describe the same outing. This is an illustrative example, not a recorded run.</p>
        <p>Neither number makes a stop-start run equivalent to an uninterrupted race. Pick a consistent comparison, and keep the stops in mind.</p>

        <h2>Set auto-pause in RunToMax</h2>
        <ol className="list-decimal space-y-4 pl-5">
          <li>Open <strong>RunToMax on your Apple Watch</strong> and tap the settings gear.</li>
          <li>Choose <strong>Workout</strong>, then scroll to <strong>Session → Auto-Pause</strong>.</li>
          <li>Turn it on for automatic pauses at stops, or off to keep the timer running unless you pause it yourself. It is off by default in 1.3.5.</li>
          <li>Before relying on it, try a brief stop and restart somewhere safe. Check that the timer resumes; a pause triggered by you is different from an automatic pause.</li>
        </ol>
        <p>This setting is available with free Outdoor recording. After a saved run, open it in the iPhone app’s <strong>Runs</strong> tab and compare <strong>Avg Pace</strong> with <strong>Elapsed Pace</strong>. In RunToMax, Avg Pace uses time excluding recorded pauses; Elapsed Pace includes them.</p>

        <h2>Keep planned recovery inside your workout</h2>
        <p>A timed recovery between reps is part of a structured session. In RunToMax 1.3.5, speed-based auto-pause is disabled while a structured interval workout is active, so standing still should not freeze that recovery countdown. That exception does not cover intervals you improvise during an ordinary Outdoor run.</p>
        <p>If you want timed work and recovery steps, <Link href="/guides/interval-workouts-apple-watch/">build an interval workout in RunToMax</Link>. For an actual race, turn auto-pause off beforehand if you want the live timer to keep counting through stops.</p>

        <h2>If you use Apple Workout or Strava</h2>
        <p>Apple’s Workout app also has auto-pause. In the Watch’s <strong>Settings app → Workout → Auto-Pause</strong>, you can change its behavior for supported running and cycling workouts. That is a different settings screen from RunToMax’s. See <a href="https://support.apple.com/en-az/guide/watch/apde0be691be/watchos">Apple’s Workout settings guide</a>.</p>
        <p>If you view the run in Strava, its <a href="https://support.strava.com/en-us/articles/15401804-moving-time-speed-and-pace-calculations">moving-time rules</a> can explain a different average. Strava says runs with recorded pauses use timer time; without pauses, it calculates moving time from GPS. Runs marked as races use elapsed time. This does not mean direct RunToMax-to-Strava sync is available in public 1.3.5.</p>

        <h2>Choose what you can use consistently</h2>
        <p>In <a href="https://www.reddit.com/r/runninglifestyle/comments/1wp12yr/to_stop_the_watch_or_not_stop_the_watch/">this runner discussion</a>, some people want stops excluded; others leave the timer running because they have forgotten to resume it before. These are individual preferences, not evidence that one method is best for everyone.</p>
        <p>Choose the setting before leaving. Stop safely at crossings, and let the watch wait.</p>
        <p className="text-sm text-zinc-400">RunToMax instructions checked against the App Store 1.3.5 release source on November 6, 2026. Watch behavior still needs a physical-device check before this draft is published.</p>
        <p><Link href="/guides/apple-watch-running-pace/">Choose your pace fields</Link> · <Link href="/features/apple-watch/">RunToMax on Apple Watch</Link> · <Link href="/support/">Setup help</Link></p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Explore RunToMax on Apple Watch</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

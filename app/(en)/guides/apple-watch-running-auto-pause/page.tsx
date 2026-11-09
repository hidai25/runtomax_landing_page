import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.runningPauses;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  robots: { index: Boolean(guide.published), follow: true, googleBot: { index: Boolean(guide.published), follow: true } },
  openGraph: { type: "article", publishedTime: guide.published ?? undefined, modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
});

export default function RunningPausesGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Run timing</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">{guide.title}</h1>
      <GuideDetails guide={guide} />
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>Pause if you want to exclude the wait from your active timer. Leave it running if you want that wait included.</strong> Both are useful choices for a training log. For a race or a timed attempt, use elapsed time: the clock includes stops.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <h2>Decide what you want the number to tell you</h2>
        <p>At a crossing, getting across safely matters more than the watch. Once stopped, you have three options:</p>
        <ul className="list-disc space-y-3 pl-6">
          <li><strong>Auto-pause:</strong> useful when you want the app to handle stops and restarts. It relies on detected movement, so do not expect every transition to happen instantly.</li>
          <li><strong>Manual pause:</strong> useful when you want to choose exactly when the active timer stops. Remember to resume before running again.</li>
          <li><strong>No pause:</strong> simplest if you want the whole outing counted, or do not want to manage another control.</li>
        </ul>
        <p>In <a href="https://www.reddit.com/r/runninglifestyle/comments/1wp12yr/to_stop_the_watch_or_not_stop_the_watch/">this traffic-light discussion</a>, some runners pause to separate running from waiting; others leave the clock on because they have forgotten to restart it. These are individual preferences, not evidence of one universally correct setting.</p>

        <h2>Turn on auto-pause in RunToMax</h2>
        <ol className="mb-6 list-decimal space-y-3 pl-6">
          <li>Open <strong>RunToMax on your Apple Watch</strong>, then open its <strong>Settings</strong>.</li>
          <li>Choose <strong>Workout</strong> and scroll to <strong>Session</strong>.</li>
          <li>Turn <strong>Auto-Pause</strong> on. Turn it off if you prefer manual control or uninterrupted timing.</li>
        </ol>
        <p>Try a short Outdoor run before relying on it: stop somewhere safe, check that the timer pauses, then check that it resumes when you run again. A manually paused RunToMax session needs a manual resume; auto-resume applies to an automatic pause.</p>
        <p><strong>Interval exception:</strong> in RunToMax 1.3.5, auto-pause is disabled while an interval workout is active, including its recovery steps. Standing still during a timed recovery should not freeze that recovery. If a crossing interrupts a rep, use manual pause when safe, then resume deliberately. See <Link href="/guides/interval-workouts-apple-watch/">setting up intervals in RunToMax</Link>.</p>

        <h2>Moving time and elapsed time answer different questions</h2>
        <p>For a run recorded in RunToMax, the summary’s <strong>Time</strong> is active, or moving, time: it excludes recorded pauses. <strong>Elapsed Time</strong> includes them. “Moving” does not mean the app can reconstruct every stop: time spent standing with the timer still running can remain in active time.</p>
        <p>Here is a made-up example: a 10 km run with 50 minutes on the active timer and 5 minutes of recorded pauses.</p>
      </div>
      <dl className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5"><dt className="text-sm text-zinc-400">Moving time · excludes pauses</dt><dd className="mt-2 text-3xl font-bold">50 minutes<span className="mt-2 block text-lg font-normal text-[#1FE26C]">5:00/km average pace</span></dd></div>
        <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5"><dt className="text-sm text-zinc-400">Elapsed time · includes pauses</dt><dd className="mt-2 text-3xl font-bold">55 minutes<span className="mt-2 block text-lg font-normal text-[#1FE26C]">5:30/km elapsed pace</span></dd></div>
      </dl>
      <div className="legal-prose mt-8 text-base leading-relaxed text-zinc-300">
        <p>Open the saved run on your iPhone and compare <strong>Avg Pace</strong> with <strong>Elapsed Pace</strong>. Tap <strong>Elapsed Time</strong> or <strong>Elapsed Pace</strong> for the explanation. Use the same timing basis when comparing runs; excluding a break does not make it an uninterrupted effort.</p>

        <h2>What if you record in another app?</h2>
        <p>Apple’s Workout app has its own <a href="https://support.apple.com/en-me/guide/watch/apde0be691be/watchos">auto-pause setting</a> in the Watch’s <strong>Settings → Workout → Auto-Pause</strong>. That is a different settings screen from the one inside RunToMax.</p>
        <p>If you compare a run with Strava, check which time it displays. <a href="https://support.strava.com/en-us/articles/15401804-moving-time-speed-and-pace-calculations">Strava documents how it handles moving and elapsed time</a>: recorded pauses can be respected, while runs without them may have moving time calculated from GPS. Matching elapsed times does not guarantee matching moving times.</p>
        <p className="text-sm text-zinc-400">RunToMax instructions checked against the App Store 1.3.5 release source on November 9, 2026. This is not a new physical-Watch test.</p>
      </div>
      <aside className="mt-12 rounded-2xl border border-white/10 bg-zinc-950 p-6" aria-label="Related guides">
        <h2 className="text-xl font-bold">Make the Watch easier to read and control</h2>
        <p className="mt-3 text-zinc-400"><Link className="underline underline-offset-4" href="/guides/apple-watch-running-pace/">Choose between current, lap and average pace</Link></p>
        <p className="mt-3 text-zinc-400"><Link className="underline underline-offset-4" href="/guides/apple-watch-ultra-action-button/">Use the Ultra Action button when screen taps are awkward</Link></p>
        <a href={download} className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#1FE26C] px-5 font-semibold text-black">Get RunToMax for Apple Watch</a>
      </aside>
    </article>
    <footer className="border-t border-white/10 px-6 py-8 text-sm text-zinc-500"><div className="mx-auto flex max-w-3xl flex-wrap gap-6"><Link href="/guides/">Guides</Link><Link href="/support/">Support</Link><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link></div></footer>
  </main>;
}

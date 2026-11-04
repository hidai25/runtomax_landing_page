import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.runningPace;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: "Apple Watch pace jumping? Choose the right pace field",
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
});

const fields = [
  { name: "Pace", window: "Recent movement", text: "Useful for checking a change of speed. Expect more movement in this number than in a longer average." },
  { name: "Lap Pace", window: "The current lap", text: "Useful for following a sustained section. It starts again at each new lap, so check your lap settings before treating it as an interval average." },
  { name: "Smoothed Pace", window: "Roughly the last minute", text: "Useful when you want a steadier recent number. It takes longer to reflect a surge or slowdown and needs enough recorded data before it can show a value." },
  { name: "Avg Pace", window: "The whole run so far", text: "Useful for the overall picture. An earlier warm-up still affects it, so it does not tell you the pace of your current rep." },
];

export default function RunningPaceGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Watch screens</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">Apple Watch pace jumping? Choose the right pace field</h1>
      <GuideDetails guide={guide} />
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>Start by checking which pace you’re reading.</strong> Recent pace, lap pace and whole-run average answer different questions. For a steady stretch, try Lap Pace or Smoothed Pace in RunToMax. Neither can repair inaccurate distance data.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <h2>Why the numbers can disagree</h2>
        <p>A short window reacts sooner; a longer average changes more slowly. Both your changes of speed and the recorded distance affect the result. A believable average at the finish does not prove every live reading was accurate.</p>
        <p>One runner describes exactly that frustration: <a href="https://www.reddit.com/r/AppleWatchFitness/comments/1rol02b/pace_all_over_the_place/">jumping live pace, but a plausible final average</a>. It is an individual report, not a diagnosis of their Watch or evidence that every model behaves that way.</p>
        <h2>Choose a field for the question you have</h2>
      </div>
      <dl className="mt-5 grid gap-4 sm:grid-cols-2">
        {fields.map(field => <div key={field.name} className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
          <dt className="text-lg font-semibold">{field.name}<span className="mt-1 block text-sm font-normal text-[#1FE26C]">{field.window}</span></dt>
          <dd className="mt-3 text-sm leading-relaxed text-zinc-300">{field.text}</dd>
        </div>)}
      </dl>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <h2>Set it up in RunToMax</h2>
        <ol className="list-decimal space-y-4 pl-5">
          <li>On your iPhone, open <strong>Watch → Watch Screens</strong>.</li>
          <li>Select the run type you want to edit, such as <strong>Outdoor</strong>. Each run type has its own screens.</li>
          <li>Tap a field in the Watch preview, then choose <strong>Lap Pace</strong> or <strong>Smoothed Pace</strong> from the field menu. Keep distance and time alongside it for context.</li>
          <li>Changes save automatically. Open RunToMax on your Watch to sync, and check the screen before leaving.</li>
        </ol>
        <p>These pace fields are available in the free five-field screen. Additional screens and layouts require Pro.</p>
        <h2>For short intervals, mind the window</h2>
        <p>A one-minute average can still contain recovery time after a short rep begins. And a distance-based auto-lap can cut across a workout interval. Check where your laps start and finish before using Lap Pace to judge a rep. See <Link href="/guides/interval-workouts-apple-watch/">how to set up intervals in RunToMax</Link>.</p>
        <h2>You don’t have to watch every number</h2>
        <p>Start with one pace field rather than four competing readings. Runners in <a href="https://www.reddit.com/r/AppleWatchFitness/comments/1xf4jvf/do_you_actually_look_at_your_watch_during_runs_or/">this discussion</a> describe different preferences, including occasional checks and audio prompts. There is no single screen everyone needs.</p>
        <p>If you use Apple’s Workout app, it also offers <a href="https://support.apple.com/en-gb/guide/watch/apd73a43493f/watchos">customizable metrics and Split and Segment views</a>. You do not need RunToMax just to change which running numbers you see.</p>
        <p>If the recorded distance itself looks wrong, changing the display is not a fix. Check Apple’s <a href="https://support.apple.com/en-us/105048">Watch calibration guidance</a>, or our separate guide to <Link href="/guides/apple-watch-treadmill-distance/">treadmill distance differences</Link>. Calibration is not a guarantee of accurate live pace in every situation.</p>
        <p className="text-sm text-zinc-400">RunToMax instructions checked against the App Store 1.3.5 release source on November 4, 2026. This is not a new device test.</p>
        <p><Link href="/features/apple-watch/">Explore RunToMax on Apple Watch</Link> · <Link href="/support/">Setup help</Link></p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Set up your running screen</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

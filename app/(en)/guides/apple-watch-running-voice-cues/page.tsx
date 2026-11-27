import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.audioCues;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  robots: guide.published ? { index: true, follow: true } : { index: false, follow: true },
  openGraph: { type: "article", publishedTime: guide.published ?? undefined, modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
});

export default function AudioCuesGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Spoken cues</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">{guide.title}</h1>
      <GuideDetails guide={guide} />
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>To hear each kilometre or mile in a RunToMax interval workout, open Settings → Voice in RunToMax on your watch.</strong> Turn on <strong>Spoken Cues</strong>, <strong>Auto-lap splits</strong> and <strong>Km/mile cues in sessions</strong>. You’ll hear how long the last kilometre or mile took, even when it includes both running and recovery.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <h2>If you started the run in Apple’s Workout app</h2>
        <p>On your watch, open <strong>Settings → Workout → Voice Feedback</strong>. If you already hear announcements on ordinary runs, open <strong>Workout</strong>, find the run you plan to do and review its <strong>Alerts</strong>. Apple documents voice feedback for key alerts. Its instructions don’t promise a spoken pace at every kilometre of every custom workout. A runner who heard pace on walks reported losing it during run/walk intervals. <a href="https://support.apple.com/guide/watch/adjust-apple-watch-during-a-workout-apd72879df4d/watchos">Apple’s Voice Feedback instructions</a> · <a href="https://support.apple.com/guide/watch/apd66fcd5c5c/watchos">Apple’s workout alerts</a> · <a href="https://discussions.apple.com/thread/256150386">The runner’s question</a></p>
        <h2>If you start the interval workout in RunToMax</h2>
        <ol className="list-decimal space-y-3 pl-5">
          <li>In <strong>Settings → Voice</strong> on the watch, turn on <strong>Spoken Cues</strong> to reveal the announcement settings.</li>
          <li>Turn on <strong>Auto-lap splits</strong>. A second switch appears just below it. Turn on <strong>Km/mile cues in sessions</strong> to hear splits during structured runs.</li>
          <li>Keep <strong>Interval transitions</strong> on if you also want to hear when to switch from running to recovery. You can change that switch independently.</li>
        </ol>
        <h2>Which pace am I hearing?</h2>
        <p>Suppose you run 400 m, jog 200 m, then run another 400 m. Together those steps make one kilometre. If they take 5 minutes 30 seconds, the first split is 5:30, an average of 5:30/km across all three steps. That’s why the number can sound slower than your fast reps. The cue leaves your programmed intervals intact.</p>
        <p>With miles selected, the first split comes at one full mile. Warmup and recovery distance count, so a split can arrive halfway through a rep.</p>
        <h2>If you hear the rep changes but miss the splits</h2>
        <p>Check <strong>Km/mile cues in sessions</strong> first. If everything is silent, connect the headphones you’ll use for the run. In RunToMax on the watch, open <strong>Settings → Voice → Test cue</strong> and tap <strong>Test cue</strong>. Check RunToMax’s Quiet Mode if the test reports that speech is muted. If your headphones are connected to your iPhone, check <strong>Speak cues on iPhone</strong> in the same Voice settings.</p>
        <p><Link href="/guides/interval-workouts-apple-watch/">Build an interval workout</Link> or <Link href="/guides/apple-watch-running-pace/">choose which pace to show on your watch</Link>.</p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Get RunToMax</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

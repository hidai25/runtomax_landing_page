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
        <p className="text-lg leading-relaxed"><strong>Want to hear when the next rep starts, without a distance update interrupting it?</strong> RunToMax has separate switches for interval transitions and kilometre or mile announcements. Set them before your next run.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <h2>Choose what you want to hear</h2>
        <p>In RunToMax 1.3.5 on iPhone, open <strong>Settings → Audio coach</strong>. On Apple Watch, open <strong>RunToMax → Settings → Voice</strong>. These are RunToMax’s settings, separate from Apple’s Workout app.</p>
        <p>For distance updates on ordinary runs but fewer interruptions during intervals:</p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>Keep <strong>Spoken cues</strong> on.</li>
          <li>Keep <strong>Auto-lap splits</strong> on, then turn <strong>Km/mile cues in sessions</strong> off.</li>
          <li>Keep <strong>Interval transitions</strong> on for the next workout step.</li>
        </ol>
        <p>To silence distance announcements on ordinary runs too, turn <strong>Auto-lap splits</strong> off. This is a speech setting; it does not switch off distance recording.</p>
        <p><strong>Coach cues</strong> is another layer: rep previews, countdowns and feedback. It requires <strong>RunToMax Pro</strong>. Turn it off as well if you want fewer comments. Basic audio settings are free to open; changing them does not unlock Pro workouts.</p>
        <h2>Want a completely quiet run?</h2>
        <p>Turn <strong>Spoken cues</strong> off. Disabling only splits still allows other enabled speech, such as manual laps or pace corrections. RunToMax’s Quiet Mode also suppresses spoken cues, so check it if you want speech back.</p>
        <h2>Check the sound before heading out</h2>
        <p>On the Watch, open <strong>Settings → Voice → Test cue</strong> and tap <strong>Test cue</strong>. Use the same headphones and music source you plan to run with. For headphones connected to your iPhone, the Watch has a <strong>Speak cues on iPhone</strong> switch; keep it on when you want that route.</p>
        <p>If the test is silent, check Spoken cues, Quiet Mode and where your headphones are connected. A successful test checks one cue on that setup; it does not prove every workout announcement or music transition will behave the same.</p>
        <h2>Using Apple’s Workout app instead?</h2>
        <p>You do not need to switch apps just to adjust speech. Apple documents <a href="https://support.apple.com/en-gb/guide/watch/apd72879df4d/26/watchos/26">Settings → Workout → Voice Feedback</a> on the Watch. That control belongs to Apple’s Workout app, not RunToMax.</p>
        <p>Runner reports show why checking your own setup matters: <a href="https://www.reddit.com/r/AppleWatch/comments/1pxoeuc/workout_notifications_in_airpods/">one runner wanted distance speech off while keeping wrist taps</a>; <a href="https://www.reddit.com/r/AppleWatch/comments/1nij1kp/watchos26_workout_app_voice_feedback_pausing/">another reported different music behaviour with different headphones</a>. These are individual reports about Apple’s app, not tests of RunToMax or a promised fix.</p>
        <p>Next: <Link href="/guides/interval-workouts-apple-watch/">build an interval session</Link>, or <Link href="/guides/apple-watch-running-pace/">choose the pace fields you see</Link>.</p>
        <p className="text-sm text-zinc-400">Checked against RunToMax 1.3.5 release source on November 13, 2026. A shipping iPhone and Watch audio walkthrough is pending; no new device or headphone test is claimed.</p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Get RunToMax</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

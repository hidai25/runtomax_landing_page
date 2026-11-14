import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
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
  alternates: { canonical: guide.path },
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
        <p className="text-lg leading-relaxed"><strong>You can see running cadence during an Apple Watch run.</strong> Apple’s Workout app includes it, and RunToMax lets you choose it as a field on your running screen. You do not need another app just to see the number.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <h2>What does spm mean?</h2>
        <p>Running cadence is steps per minute, counting both feet. A reading of <strong>170 spm</strong> means a rate of 170 steps a minute across left and right, not 170 per foot. It is a rate, not your total steps. Garmin’s <a href="https://www8.garmin.com/manuals/webhelp/GUID-607F08F6-33FC-40BF-9727-84E54043D82D/EN-GB/GUID-73BCE454-042E-420D-96A4-9DBA46626CD4.html">data-field definitions</a> distinguish running cadence from average cadence and heart rate.</p>
        <p>Keep the units in view: <strong>spm</strong> is step rate, <strong>bpm</strong> is heart rate, and <strong>min/km or min/mi</strong> is pace. The 170 example is an explanation, not a target for your running.</p>
        <h2>If you use Apple’s Workout app</h2>
        <p>Apple lists running cadence in the <strong>Metrics 2</strong> and <strong>Power</strong> views for Outdoor Run. Check the workout’s available views before installing something else. See Apple’s <a href="https://support.apple.com/guide/watch/workout-views-and-running-metrics-apd1f24d4d35/26/watchos/26">watchOS 26 running-metrics guide</a>; view names and controls can differ by software version.</p>
        <h2>Put cadence on your RunToMax screen</h2>
        <p>These steps apply to the public <strong>RunToMax 1.3.5</strong> layout on iPhone:</p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>Open the <strong>Watch</strong> tab, then <strong>Watch Screens</strong>.</li>
          <li>Select the run type you intend to use, such as <strong>Outdoor</strong>. Each run type has its own saved field choices.</li>
          <li>Tap the field you want to replace in the Watch preview. Choose <strong>Running Form → Cadence</strong>.</li>
          <li>Changes save automatically. Open RunToMax on your paired Watch and check the matching run screen before heading out. The editor’s <strong>Sync</strong> button can resend saved settings.</li>
        </ol>
        <p><strong>Cadence is a free field.</strong> The free screen has five selectable fields; additional screens and advanced layouts require Pro. Selecting a field is not proof that a live sensor reading has arrived.</p>
        <h2>Keep the number useful</h2>
        <p>Place cadence beside a pace field if you want to read step rate and speed together. Use <Link href="/guides/apple-watch-running-pace/">our pace-field guide</Link> to choose between current, lap and average pace. A live cadence reading and a whole-run average describe different time windows, so they need not match.</p>
        <p>If cadence is missing, first check that you edited the same run type you started and that the saved screen reached the Watch. Report a persistent missing reading through <Link href="/support/">RunToMax support</Link>, with your app version, Watch model and run type. This guide does not diagnose sensor accuracy or prescribe a cadence target.</p>
        <p className="text-sm text-zinc-400">Checked against RunToMax 1.3.5 release source on November 14, 2026. A shipping iPhone and Watch walkthrough is pending; no new device test or accuracy claim is made.</p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Get RunToMax</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

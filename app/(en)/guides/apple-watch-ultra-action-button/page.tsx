import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.ultraActionButton;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  robots: { index: false, follow: true },
  openGraph: { type: "article", modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
});

export default function UltraActionButtonGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Apple Watch Ultra</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">Sweaty screen? Use the Apple Watch Ultra Action button</h1>
      <GuideDetails guide={guide} />
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>Sweaty fingers making screen taps frustrating?</strong> Set up RunToMax so one press of the Ultra’s Action button pauses your run, and another resumes it. You can mark laps with the buttons, too.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <p>Make these choices before heading out. The setup below is for <strong>Apple Watch Ultra with watchOS 11 or later</strong>, with RunToMax installed on the Watch. These controls work with free Outdoor recording.</p>

        <h2>Set up one-press pause and resume</h2>
        <ol className="mb-6 list-decimal space-y-4 pl-5">
          <li>On your Ultra, open Apple’s <strong>Settings</strong> app → <strong>Action Button → Action</strong>, and choose <strong>Workout</strong>.</li>
          <li>Choose <strong>RunToMax</strong> as the app. Select its <strong>Outdoor Run</strong> option when choosing the workout to start.</li>
          <li>Open <strong>RunToMax on the Watch</strong>, tap its settings gear, then go to <strong>Buttons → Shortcuts</strong>.</li>
          <li>Under <strong>Layout</strong>, choose <strong>RunToMax</strong>.</li>
        </ol>
        <p>Apple’s setting chooses which app receives the button press. RunToMax’s layout chooses what that press does during your run. You need both.</p>

        <h2>What to press during your run</h2>
        <ul className="mb-6 list-disc space-y-4 pl-5">
          <li><strong>Action button:</strong> press once to pause. Press again to resume.</li>
          <li><strong>Action + Side button together:</strong> mark a lap while keeping an ordinary Outdoor run recording. The side button is the flat button beside the Digital Crown.</li>
        </ul>
        <p>Use brief presses. Pressing and holding the Action button can trigger a different system function. Check the on-screen pause or resume confirmation so you know the run is in the state you intended.</p>
        <p>Pausing leaves the activity open. When you finish, use RunToMax’s End control and finish the save flow.</p>

        <h2>Prefer one-press laps?</h2>
        <p>In <strong>Buttons → Shortcuts</strong>, choose <strong>System workout style</strong>. This swaps the mapping: <strong>Action</strong> marks a lap, while <strong>Action + Side</strong> pauses or resumes.</p>
        <p>Choose the layout you will remember when tired. The individual controls underneath also allow custom mappings, so recheck them if a press does something unexpected.</p>

        <h2>Start with the button, too</h2>
        <p>On the same Shortcuts screen, open <strong>Start mode</strong> and choose <strong>Precision Start</strong>. With the Outdoor Run binding above, the first press from idle opens readiness and starts the GPS preparation; the next press starts recording. If readiness is already open, the next press starts the run.</p>

        <h2>Try it before your next session</h2>
        <p>On a short practice run, check your chosen start, pause, resume and lap controls. Do this before relying on them during a hard rep or at a finish line. Setup and saving still use the screen; the aim is fewer taps while you are running.</p>
        <p>If the button opens another app, recheck Apple’s Action Button setting. Apple’s Workout app also supports physical controls; its behavior is described in <a href="https://support.apple.com/en-mt/guide/watch/apda005904ef/watchos">Apple’s Action button guide</a>. RunToMax’s two layouts above let you choose whether one press prioritizes pausing or laps.</p>
        <p className="text-sm text-zinc-400">RunToMax instructions checked against the App Store 1.3.5 release source on November 6, 2026. Physical Ultra checks are still pending before this draft is published.</p>
        <p><Link href="/guides/apple-watch-running-pace/">Choose your pace fields</Link> · <Link href="/features/apple-watch/">RunToMax on Apple Watch</Link> · <Link href="/support/">Setup help</Link></p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Explore RunToMax on Apple Watch</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

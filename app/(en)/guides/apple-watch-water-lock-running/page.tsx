import type { Metadata } from "next";
import Link from "next/link";
import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";

const guide = guides.waterLock;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  robots: guide.published ? undefined : { index: false, follow: false },
  openGraph: { type: "article", publishedTime: guide.published ?? undefined, modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
});

export default function WaterLockGuide() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link href="/" aria-label="RunToMax home" className="font-bebas text-2xl">RUNTO<span className="text-[#1FE26C]">MAX</span></Link>
          <a href={download} className="text-sm font-semibold">Get the app</a>
        </div>
      </nav>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/guides/" className="mb-8 inline-block text-sm text-zinc-400 hover:text-white">← All guides</Link>
        <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">{guide.title}</h1>
        <GuideDetails guide={guide} />
        <p className="mt-8 text-lg leading-relaxed">If your wet cuff keeps brushing the watch, start your run and turn on <strong>Water Lock</strong>. Your Apple Watch ignores screen touches while your run keeps recording. You can still glance at the screen, so choose the view you want before you lock it.</p>
        <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
          <h2>Keep your pace screen in view</h2>
          <ol className="mb-5 list-decimal space-y-3 pl-6">
            <li>Start recording in your usual running app. Bring up the screen you want to see, such as lap pace and distance.</li>
            <li>On watchOS 10 or later, press the <strong>side button</strong> to open Control Center. Tap the <strong>water droplet</strong> to turn on Water Lock.</li>
            <li>If Control Center is still open, press the side button again to close it. Leave the lock on while your sleeve is wet.</li>
          </ol>
          <p>This works with Apple’s Workout app as well as RunToMax. Apple shows the droplet icon and unlock gesture in its <a href="https://support.apple.com/en-us/108352">Water Lock instructions</a>.</p>
          <h2>Lock from the RunToMax controls</h2>
          <p>With a run already recording, swipe left from your metrics. Tap <strong>LOCK</strong>, the droplet in the bottom-right corner of the default controls. If you’ve rearranged those buttons or want to keep your splits in view, use Control Center from your preferred screen instead.</p>
          <h2>Unlock to pause or finish</h2>
          <p>Press and hold the <strong>Digital Crown</strong> until the watch says <strong>Unlocked</strong>. You’ll hear tones as it clears water from the speaker. Unlocking leaves the workout open. In RunToMax, return to the run controls and tap <strong>PAUSE</strong> if you’re taking a break. At the finish, tap <strong>END</strong>, then <strong>SAVE</strong>.</p>
          <p>Use an Ultra and prefer a physical button for laps? See <Link href="/guides/apple-watch-ultra-action-button/">how to set up the Action button for running</Link>.</p>
        </div>
      </article>
    </main>
  );
}

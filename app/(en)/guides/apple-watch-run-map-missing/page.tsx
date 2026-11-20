import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.missingRunMap;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  robots: { index: Boolean(guide.published), follow: true, googleBot: { index: Boolean(guide.published), follow: true } },
  openGraph: { type: "article", publishedTime: guide.published ?? undefined, modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
});

export default function MissingRunMapGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Missing maps</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">{guide.title}</h1>
      <GuideDetails guide={guide} />
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>First, open the same workout in Fitness on your iPhone.</strong> If you see a map there, the route exists. Check whether RunToMax can read it. If the map is missing there too, check the app that recorded the run.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <p>A <a href="https://www.reddit.com/r/AppleWatchFitness/comments/1u7br2j/why_no_apple_watch_maproute_data/">Series 7 runner</a> usually saw a route after running with their iPhone. On a phone-free Outdoor Run, the map was still missing hours later, even though Location Services appeared enabled. A GPS-only Apple Watch can use its own GPS on an outdoor run. <a href="https://support.apple.com/en-euro/guide/watch/apd0443fb403/watchos">Apple’s guide to using the Watch without its paired iPhone</a></p>
        <h2>The map is in Fitness but missing in RunToMax</h2>
        <ol className="list-decimal space-y-3 pl-6">
          <li>On iPhone, open <strong>Health</strong>, tap your profile picture, then choose <strong>Apps</strong> under <strong>Privacy</strong>.</li>
          <li>Choose <strong>RunToMax</strong>. Check whether it can read both <strong>Workouts</strong> and <strong>Workout Routes</strong>. The workout can supply distance and time even when the app cannot read its route.</li>
          <li>Let the Watch and iPhone reconnect. Return to <strong>Runs</strong> in RunToMax and reopen that workout.</li>
        </ol>
        <p>Apple explains how to <a href="https://support.apple.com/en-us/108779">review Health access for each app</a>. An empty map alone cannot tell you which permission you granted.</p>
        <h2>The map is missing in Fitness too</h2>
        <p>Check which workout you started. An indoor treadmill workout can have distance and splits without a GPS path. If you recorded outdoors with another app, open its copy of the workout. A map there means the app has a route. Whether it shared the route with Apple Health is a separate question.</p>
        <p>Before your next outdoor run, open <strong>Settings → Privacy &amp; Security → Location Services</strong> on the Watch. Check location access for the app you use to record, such as Workout or RunToMax. Try a short Outdoor Run, save it, and check for a map after your devices reconnect. <a href="https://support.apple.com/en-gb/guide/personal-safety/ips9bf20ad2f/web">Apple Watch Location Services settings</a></p>
        <h2>Can I recover yesterday’s route?</h2>
        <p>If the recording app saved the route, syncing or restoring access may make it visible. If it never saved GPS points, distance and pace alone cannot reconstruct the streets you ran. Keep the original workout while you check.</p>
        <p>If another outdoor run also has no map, <Link href="/support/">contact RunToMax support</Link> with the Watch model, recording app, and whether the route appears in Fitness.</p>
      </div>
      <aside className="mt-12 rounded-2xl border border-white/10 bg-zinc-950 p-6" aria-label="Related guides">
        <h2 className="text-xl font-bold">Before your next run</h2>
        <p className="mt-3 text-zinc-400"><Link className="underline underline-offset-4" href="/guides/run-apple-watch-without-iphone/">What to check before leaving your iPhone at home</Link></p>
        <p className="mt-3 text-zinc-400"><Link className="underline underline-offset-4" href="/features/apple-watch/">Explore RunToMax on Apple Watch</Link></p>
        <a href={download} className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#1FE26C] px-5 font-semibold text-black">Get RunToMax</a>
      </aside>
    </article>
    <footer className="border-t border-white/10 px-6 py-8 text-sm text-zinc-500"><div className="mx-auto flex max-w-3xl flex-wrap gap-6"><Link href="/guides/">Guides</Link><Link href="/support/">Support</Link><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link></div></footer>
  </main>;
}

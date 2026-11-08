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
        <p className="text-lg leading-relaxed"><strong>A distance and a finish time do not guarantee a recorded route.</strong> For an outdoor run, check two separate things: whether the recording app could use your location, and whether RunToMax can read Workout Routes in Apple Health.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <h2>First, give a new run time to sync</h2>
        <p>A workout can reach your iPhone before its route. Bring the Watch and iPhone back together, let them reconnect, then reopen the run in RunToMax. Check that you recorded an outdoor run; a treadmill session does not produce an outdoor route.</p>
        <p>Waiting is worth trying, but it is not a diagnosis. In <a href="https://www.reddit.com/r/AppleWatchFitness/comments/1u7br2j/why_no_apple_watch_maproute_data/">one runner discussion</a>, a reply described a short delay while the original poster still had no map hours later.</p>

        <h2>1. Let RunToMax read the route</h2>
        <ol className="list-decimal space-y-3 pl-6">
          <li>On your iPhone, open <strong>Health</strong> and tap your profile picture.</li>
          <li>Under <strong>Privacy → Apps</strong>, choose <strong>RunToMax</strong>. Some Health versions also offer app access through <strong>Sharing → Apps</strong>.</li>
          <li>Check that RunToMax can read <strong>Workouts</strong> and <strong>Workout Routes</strong>, then return to RunToMax and reopen the run.</li>
        </ol>
        <p>Apple explains where to manage <a href="https://support.apple.com/en-us/108779">Health access for each app</a>. Allowing workouts and allowing their routes are separate choices.</p>
        <p>RunToMax may show an <strong>Open Health</strong> notice on the Runs page when recent outdoor runs arrive without readable routes. It is a prompt to check access, not proof that you denied it. A missing notice does not prove every permission is correct.</p>

        <h2>2. Check location on the Watch</h2>
        <p>On Apple Watch, open <strong>Settings → Privacy &amp; Security → Location Services</strong>. Check that Location Services is on and that the app you use to record can access your location. Apple documents <a href="https://support.apple.com/en-au/guide/watch/apdea7480950/26/watchos/26">this Watch settings path</a> and <a href="https://support.apple.com/en-us/102515">how app location permissions work</a>.</p>
        <p>If you record with RunToMax, check RunToMax’s permission. If you record with Apple’s Workout app instead, check that app’s permission; you can also inspect the original workout in Fitness before troubleshooting its appearance in RunToMax. RunToMax’s iPhone Health access does not grant location access to the recording app.</p>

        <h2>Will this bring an old map back?</h2>
        <p>It may help if the route exists but was unavailable because of access or syncing. If no route was recorded, changing a permission cannot recreate the path from distance and pace alone. Keep the saved workout while investigating.</p>
        <p>Before your next important run, try a short <strong>Outdoor</strong> recording in RunToMax, save it, and check its map after syncing. If routes remain missing, <Link href="/support/">contact support</Link> with your app and watchOS versions, the recording app, and whether one run or every outdoor run is affected.</p>
        <p className="text-sm text-zinc-500">Instructions checked against the App Store 1.3.5 source on November 8, 2026. This is troubleshooting guidance, not a new physical-device recovery test.</p>
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

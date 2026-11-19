import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.gpxRoute;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  openGraph: { type: "article", publishedTime: guide.published ?? undefined, modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
  ...(!guide.published ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
});

export default function GPXRouteGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Routes</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">{guide.title}</h1>
      <GuideDetails guide={guide} />
      {!guide.published && <p role="note" className="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm leading-relaxed text-amber-100">Draft for review. The steps have been checked against release source; the shipping iPhone-and-Watch walkthrough is still pending.</p>}
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>Have a GPX file for your next run?</strong> Import it in RunToMax on iPhone, send it to Apple Watch, then select the course on your wrist. Check that it has arrived before you head out. Importing and following routes requires <strong>RunToMax Pro</strong>.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <p>A GPX file contains geographic points describing a course. It is different from a screenshot of a map or a link to a route. This guide uses RunToMax 1.3.5 on your paired iPhone and Apple Watch.</p>
        <h2>1. Save the course to Files</h2>
        <p>Download the GPX track from your race organiser or route planner and save it somewhere you can open in the iPhone Files app. For a race, use the organiser’s latest course file and check the direction and start location.</p>
        <h2>2. Import it in RunToMax</h2>
        <p>On iPhone, open <strong>Watch → Routes → Import GPX</strong> and select the file. The route appears in your library. Open its preview and check that the shape and distance match the run you intended.</p>
        <p>A GPX file may contain little or no elevation information. A missing elevation chart does not establish that a course is flat.</p>
        <h2>3. Send it, then check your Watch</h2>
        <p>Tap <strong>Send to Watch</strong> on the route’s card. Keep the devices nearby and open RunToMax on your Watch. Look for <strong>ROUTE READY</strong> with the correct route name.</p>
        <p>The phone’s send confirmation is not proof that the Watch has received the file: transfers can wait in a queue. Check the Watch itself. Sending a route does not start recording a run.</p>
        <h2>4. Select the course and start</h2>
        <p>Tap <strong>ROUTE READY</strong> when you are ready to run. You can also open <strong>ROUTE</strong> on the Watch and choose a saved course from <strong>My Routes</strong>.</p>
        <p>Follow the start prompt on your Watch: tap <strong>START</strong>, or use the Action button if that is your configured start control. During a route run, tap <strong>Map</strong> to see the course. It shows the course line, your position and direction cues, with an off-course warning when you move away from the course.</p>
        <p>Check the course on a short, familiar outing before relying on it for an unfamiliar race or trail.</p>
        <h2>If something is missing</h2>
        <ul>
          <li><strong>The file will not import:</strong> check that you downloaded the actual GPX file. In version 1.3.5, the importer needs track points; a file containing only waypoints or route points will not import as a track. If your planner offers a GPX track export, choose that.</li>
          <li><strong>The route is on iPhone but not on Watch:</strong> open RunToMax on both devices, keep them nearby and check the Watch’s route list again. Read any error shown on the phone. If it still fails, contact <Link href="/support/">RunToMax support</Link> with your app and watchOS versions and the error text.</li>
          <li><strong>You need the route without your phone:</strong> first confirm it is saved on the Watch. The saved course and the background map are different things. The iPhone’s <strong>Map cache</strong> feature loads regions on the iPhone; it is not a promise of downloaded Watch maps.</li>
        </ul>
        <p>Our <Link href="/guides/run-apple-watch-without-iphone/">guide to running without your iPhone</Link> explains what else to prepare.</p>
        <h2>Already using another route app?</h2>
        <p>You may not need to switch. Strava also documents <a href="https://support.strava.com/en-us/articles/15401820-strava-apple-watch-app">following saved routes on Apple Watch</a>. Choose the workflow that suits you; these import and start steps are specifically for RunToMax.</p>
        <p className="text-sm text-zinc-400">Release availability checked against the <a href="https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260">App Store listing</a> and RunToMax 1.3.5 release source on November 11, 2026. No new physical-device test is claimed.</p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Explore RunToMax Pro</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Export an Apple Watch run as a FIT file | RunToMax",
  description: "Save or share one Apple Watch run as a FIT file using RunToMax on your iPhone.",
  alternates: { canonical: "/guides/export-apple-watch-run-fit/" },
};

const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export default function ExportRunGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl justify-between"><Link href="/" className="font-bebas text-2xl">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Apple Watch</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">Export an Apple Watch run as a FIT file</h1>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <p>Want to share one run without automatically syncing every workout? RunToMax can prepare a FIT file for a run in your history. You can save the file or share it with a compatible service.</p>
        <h2>Export your run</h2>
        <ol><li>Open RunToMax on your iPhone and tap <strong>Runs</strong>.</li><li>Choose the run you want to export, then scroll down to its export actions.</li><li>Tap <strong>Export FIT</strong> or <strong>Export as FIT</strong>. Wait while the file is prepared.</li><li>Tap <strong>Share file</strong> or <strong>Share FIT File</strong>, then choose where to send or save it.</li></ol>
        <p>Labels depend on which run detail screen you see. The available data depends on what was recorded and is available to the app. If the export option is missing, make sure the workout is available in Apple Health and RunToMax has the relevant Health permissions.</p>
        <h2>Upload it to Strava</h2>
        <p>For a one-off upload, save the FIT file and use <a href="https://www.strava.com/upload/select">Strava’s file uploader</a> on the web. Strava accepts FIT files containing workout data up to 25 MB; see <a href="https://support.strava.com/en-us/articles/15402066-how-do-i-get-my-activities-to-strava">Strava’s upload guide</a>. Check whether the run is already there before uploading to avoid a duplicate.</p>
        <h2>Other ways to share</h2>
        <p>If your run was recorded with Apple’s Workout app, <a href="https://support.strava.com/en-us/articles/15402024-apple-health-and-strava">Strava can import eligible recent workouts from Apple Health</a>. Another workout export app may suit other activity types. A FIT export is useful when you want a file you can keep or send yourself.</p>
        <p>Workout files can contain sensitive information such as route and heart-rate data. Share them only with people or services you trust.</p>
        <p><Link href="/features/apple-watch/">Explore RunToMax on Apple Watch</Link> · <Link href="/support/">Get help</Link></p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Get RunToMax</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

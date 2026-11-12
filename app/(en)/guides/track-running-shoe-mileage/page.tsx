import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.shoeMileage;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  robots: guide.published ? { index: true, follow: true } : { index: false, follow: true },
  openGraph: { type: "article", publishedTime: guide.published ?? undefined, modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
});

export default function ShoeMileageGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Running gear</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">{guide.title}</h1>
      <GuideDetails guide={guide} />
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>Your run records the distance; you choose which shoes get it.</strong> In RunToMax, add each pair, enter any earlier mileage, then assign your saved runs. The Shoes library used below requires <strong>RunToMax Pro</strong> in version 1.3.5.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <h2>One total for each pair</h2>
        <p>If you rotate between a daily trainer and a race shoe, give them separate entries. Your Watch does not identify which pair you wore. Checking the assignment after each run keeps the total useful.</p>
        <p>A runner <a href="https://www.reddit.com/r/AppleWatch/comments/1wx6f02/shoe_mileage_tracking/">switching from Garmin to Apple Watch asked how to keep shoe mileage</a>. Replies described different solutions, including Strava. You can use a simple log too; the important part is consistently assigning distance to the right pair.</p>
        <h2>1. Add your shoes on iPhone</h2>
        <ol className="list-decimal space-y-3 pl-5">
          <li>In RunToMax 1.3.5, open <strong>Watch → Shoes</strong>.</li>
          <li>Tap <strong>+</strong>, or <strong>Add a shoe</strong> if the library is empty. Enter a name you will recognise and the brand.</li>
          <li>Use <strong>Already run</strong> for distance from before this log. Check the displayed unit. Leave it at zero for a new pair.</li>
          <li>Review <strong>Retire at</strong>, your chosen mileage threshold, then tap <strong>Save</strong>.</li>
        </ol>
        <p>The mileage bar and labels compare your logged distance with that threshold. They do not measure the shoe’s condition or determine whether it is safe to keep using.</p>
        <h2>2. Assign a saved run</h2>
        <p>Open <strong>Runs</strong> on iPhone and select the run. Scroll to <strong>No shoe logged</strong>, tap it and choose the pair you wore. If a pair is already assigned, tap its name to change it. Choose <strong>Unassigned</strong> to remove the association.</p>
        <p>Return to <strong>Watch → Shoes</strong> to see the total. It includes your starting mileage plus the distances of runs assigned to that pair. Assigning the shoe changes the shoe log, not the run’s recorded distance.</p>
        <h2>3. Avoid counting earlier runs twice</h2>
        <p>For example, imagine a pair already has <strong>240 km</strong> before you start this log. Enter 240 in <strong>Already run</strong>. Assign a new 10 km run and the total becomes 250 km.</p>
        <p>If you also assign historical runs that are included in those 240 km, they will be counted again. Either assign that history individually or keep it in the starting mileage. If you mix the two, subtract the overlap from <strong>Already run</strong>. Tap the shoe’s card to edit it.</p>
        <h2>If the total looks wrong</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li>Check that the run appears in RunToMax and is assigned to the intended pair.</li>
          <li>Check for duplicate runs and overlap with <strong>Already run</strong>.</li>
          <li>Check the run’s distance and the displayed unit. For indoor runs, see our <Link href="/guides/apple-watch-treadmill-distance/">treadmill distance guide</Link>.</li>
        </ul>
        <h2>Already tracking shoes elsewhere?</h2>
        <p>You do not need to move a working log. Strava supports <a href="https://support.strava.com/en-us/articles/15402143-how-do-i-add-gear-to-my-activities-on-strava">shoe entries, default gear and changing the shoes on an activity</a>. These RunToMax steps maintain a separate log; they do not import or sync your shoe assignments from Strava or Garmin.</p>
        <p className="text-sm text-zinc-400">Instructions checked against the public RunToMax 1.3.5 release source on November 12, 2026. Physical iPhone and Watch verification is pending; no new device test is claimed.</p>
        <p><Link href="/features/apple-watch/">Explore RunToMax on Apple Watch</Link> · <Link href="/support/">Get setup help</Link></p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Explore RunToMax Pro</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

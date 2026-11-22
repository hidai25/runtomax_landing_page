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
        <p className="text-lg leading-relaxed"><strong>Give each pair a starting distance, then assign new runs to the pair you wore.</strong> If you switch watches halfway through a pair’s life, you can carry its mileage forward without re-entering every old workout.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <p>A <a href="https://www.reddit.com/r/AppleWatch/comments/1wx6f02/shoe_mileage_tracking/">runner switching from Garmin to Apple Watch</a> missed tracking mileage for each pair. If you already keep your runs in Strava, its gear log lets you add shoes, set a default and change the pair on an activity. A simple log with one total per pair also works. <a href="https://support.strava.com/en-us/articles/15402143-how-do-i-add-gear-to-my-activities-on-strava">Strava’s gear instructions</a></p>
        <h2>Carry your existing mileage into RunToMax</h2>
        <ol className="list-decimal space-y-3 pl-5">
          <li>In RunToMax Pro on iPhone, open <strong>You</strong>. Under <strong>Gear and routes</strong>, tap <strong>Shoes</strong>. If you already have a pair, the row can show its name instead.</li>
          <li>Tap <strong>Add a pair</strong> and give it a name you’ll recognize. If you rotate two pairs of the same model, use names like “Blue daily” and “White race.”</li>
          <li>In <strong>Already run</strong>, enter the distance from your old log in the unit shown. Leave it at zero for a new pair, then tap <strong>Save</strong>.</li>
        </ol>
        <h2>Choose which pair gets the next run</h2>
        <p>In the shoe library, turn on <strong>Choose shoes on Apple Watch</strong> to pick a pair before recording with RunToMax. If you pick a <strong>Default pair</strong>, it’s used when you skip the picker.</p>
        <p>To correct a saved workout on iPhone, open it in <strong>Runs</strong>, expand <strong>Shoes, flyover, export</strong> and tap the shoe name or <strong>No shoe logged</strong>. Choose the pair you actually wore. Return to the shoe library to check its total.</p>
        <h2>Why is the total higher than expected?</h2>
        <p>Suppose your old Garmin log shows <strong>240 km</strong> on one pair. Enter 240 km as its starting distance. After you assign a new 10 km run, the pair shows <strong>250 km</strong>. If you also assign an older 10 km run already included in the 240, the total rises to 260 km.</p>
        <p>Pick a handover date. Keep earlier runs in the starting number and assign runs after that date individually. If you’d rather assign the old runs too, subtract their distance from <strong>Already run</strong> first.</p>
        <p>If the shoe assignment looks right but the workout distance looks wrong, see <Link href="/guides/apple-watch-treadmill-distance/">why treadmill and Apple Watch distances can differ</Link>.</p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Explore RunToMax Pro</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

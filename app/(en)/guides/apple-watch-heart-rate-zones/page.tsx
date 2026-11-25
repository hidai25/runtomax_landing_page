import Image from "next/image";
import Link from "next/link";
import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";

const guide = guides.heartRateZones;
const store = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  alternates: { canonical: guide.path },
  robots: { index: Boolean(guide.published), follow: true },
  openGraph: { type: "article", publishedTime: guide.published ?? undefined, modifiedTime: guide.updated },
});

export default function HeartRateZonesGuide() {
  return (
    <PageShell lang="en" eyebrow="Running guides · Heart rate" title={guide.title}
      updated={guide.updated} storeUrl={store}
      intro={<p>Already running? In Apple’s Workout app, turn the Digital Crown until the five colored heart rate zones appear. Already home? Open <strong>Fitness → Sessions</strong> on your iPhone, choose the run, then tap <strong>Show More</strong> beside <strong>Heart Rate</strong>.</p>}>
      <h2>I can see my pulse. Where’s Zone 2?</h2>
      <p>A reading such as <strong>142 bpm</strong> tells you how fast your heart is beating. To see which zone that falls into for you, scroll through the workout views on your watch. The Heart Rate Zones view highlights your current zone and shows how long you’ve spent in it. Apple personalizes the ranges, so two runners at 142 bpm can see different zone numbers.</p>
      <h2>What if the zones screen never appears?</h2>
      <ol>
        <li>Before your next run, open <strong>Workout</strong> on the watch and find the run type you use, such as <strong>Outdoor Run</strong>.</li>
        <li>Tap the <strong>Views</strong> button for that workout. Scroll to <strong>Heart Rate Zones</strong> and turn on <strong>Include</strong>. If you also want it on the treadmill, check the views for <strong>Indoor Run</strong> separately.</li>
        <li>If you still have no calculated zones, check that your date of birth is entered in <strong>Health</strong> on your iPhone. Apple uses it to calculate the ranges.</li>
      </ol>
      <p><a href="https://support.apple.com/en-asia/guide/watch/apd73a43493f/watchos">Apple’s instructions for customizing running views</a></p>
      <h2>How much of my run was actually in Zone 2?</h2>
      <p>On the iPhone, the expanded Heart Rate chart in Fitness breaks down the estimated time in each zone. Read the duration beside <strong>Zone 2</strong>. An average heart rate can hide the difference between a steady run and a session with quick repeats and slow recoveries.</p>
      <p><a href="https://support.apple.com/en-mide/guide/watch/apd897dccddf/watchos">Apple’s guide to viewing and editing heart rate zones</a></p>
      <h2>What if I record with RunToMax?</h2>
      <p>In RunToMax Pro, choose the <strong>Centered 4</strong> watch layout and set the bottom field to <strong>Heart Rate</strong>. Your pulse appears above a five-segment bar. Read the marker from left to right to see which zone you’re in. <Link href="/guides/apple-watch-running-pace/">See how to change a field on your RunToMax watch screen</Link>.</p>
      <figure className="mx-auto my-8 w-full max-w-72">
        <Image src="/guides/runtomax-watch-heart-rate-zone.png"
          alt="RunToMax Centered 4 with time at the top, distance and lap pace in the middle, and 132 bpm above the highlighted second zone at the bottom."
          width={422} height={514} className="h-auto w-full rounded-2xl" />
        <figcaption className="mt-3 text-sm leading-relaxed">The white marker above the second segment means Zone 2. This Centered 4 simulator example shows a heart rate of 132 bpm.</figcaption>
      </figure>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

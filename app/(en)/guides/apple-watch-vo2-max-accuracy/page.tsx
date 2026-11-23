import Image from "next/image";
import Link from "next/link";
import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";

const guide = guides.vo2Accuracy;
const store = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  alternates: guideAlternates(guide.path),
  robots: { index: Boolean(guide.published), follow: true },
  openGraph: { type: "article", publishedTime: guide.published ?? undefined, modifiedTime: guide.updated },
});

export default function VO2AccuracyGuide() {
  return (
    <PageShell lang="en" eyebrow="Running guides · Cardio fitness" title={guide.title} updated={guide.updated} alternate={guides.frVo2Accuracy.path} storeUrl={store}
      intro={<p>If your Apple Watch VO₂ max dropped a point after a run that felt easier, that reading alone is a weak reason to change your training. In <a href="https://pubmed.ncbi.nlm.nih.gov/42094313/">a Series 10 study by Rory Lambe and colleagues</a>, Apple’s estimates differed from lab measurements by about 6.8 mL/kg/min on average. That’s a group average, so it can’t tell you how far off your own score is.</p>}>
      <h2>How close was Apple’s estimate to a lab test?</h2>
      <p>VO₂ max is the most oxygen your body can use per minute during intense exercise, expressed relative to body weight. A lab can measure it from the air you breathe. Apple Watch estimates it from your heart rate and movement during an Outdoor Run, Outdoor Walk or Hiking workout. Age, weight and other details in your Health profile also feed into the estimate. <a href="https://support.apple.com/en-us/108790">How Apple estimates cardio fitness</a>.</p>
      <p>Rory Lambe and colleagues enrolled 40 healthy adults. The 35 in the final comparison were young and mostly highly fit. The average absolute difference was 6.79 mL/kg/min. That counts misses in either direction. It cannot tell you how far off your own reading is. <a href="https://pubmed.ncbi.nlm.nih.gov/42094313/">Read the 2026 Series 10 study</a>.</p>
      <p>To see your own readings, open <strong>Health → Browse → Heart → Cardio Fitness</strong> on your iPhone. Select the month view and check the dates. An indoor treadmill workout can improve your running without adding a new Apple cardio fitness estimate.</p>
      <h2>My pace improved. Why did my score drop?</h2>
      <p>A faster finish tells you how quickly you covered the distance. It leaves out how hard you worked. Imagine two runs on your usual flat loop. Last month you averaged 6:00/km at 145 bpm. This month you ran 5:45/km at the same average heart rate. If the weather, stops and effort were similar, you have a concrete sign of progress on that route. If the faster outing was a race and the earlier one an easy jog, the comparison tells you much less.</p>
      <p>Look for that pattern across several comparable runs. If the only change you can find is a dip in the watch estimate, keep your next easy run easy. If there’s a gap in the readings, check which outdoor workouts you recorded during that period.</p>
      <h2>What went into my RunToMax estimate?</h2>
      <p>With RunToMax Pro, open <strong>Trends → VO₂ max</strong> and check the source under the heading. When it says <strong>Estimated from your running data</strong>, tap the info button. You’ll see which inputs the app used and how much confidence it places in the result.</p>
      <figure className="my-8">
        <Image src="/guides/vo2-estimate-evidence.png" alt="RunToMax explains its confidence and lists the example runner’s maximum heart rate, resting heart rate and recent 5 km effort." width={864} height={943} className="mx-auto h-auto w-full max-w-sm rounded-2xl" />
        <figcaption className="mx-auto mt-3 max-w-sm text-sm leading-relaxed">RunToMax 1.4.1 on the iPhone simulator. The heart rates and 5K time are example data.</figcaption>
      </figure>
      <p>In this example, the runner set a maximum heart rate of <strong>184 bpm</strong>. Apple Health supplied a resting rate of <strong>50 bpm</strong>, and the run history includes a <strong>24-minute 5K</strong>. The heart-rate calculation and the 5K performance point to different fitness levels. RunToMax flags that disagreement. The first thing this runner can check is where 184 came from. A guessed maximum is a shaky reason to rewrite a week of training.</p>
      <p>Your screen can show different inputs. When RunToMax has suitable outdoor runs, it can estimate fitness from the relationship between pace and heart rate. The information button shows which method produced your number.</p>
      <p><Link href="/guides/apple-watch-running-pace/">Choose a pace field for your next comparison run</Link> · <Link href="/guides/">All running guides</Link></p>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

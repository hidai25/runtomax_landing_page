import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";
import { pageMetadata } from "@/app/_lib/site";

// Every week below is what RunToMax's own plan builder produced on
// 2026-11-22, with app PR #599 (race on the last day, half long run to
// 16 km), for one sample runner (beginner, about 15 km a week, longest
// recent run 8 km, four days: Tue, Thu, Sat, Sun, half marathon in 12 weeks).
// Rebuild it from the app's composer before changing any number.
const path = "/plans/beginner-half-marathon-12-weeks/";
const store = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=plan-beginner-half&mt=8";

export const metadata: Metadata = pageMetadata(path, {
  title: "Beginner half marathon training plan: 12 weeks, 4 runs a week",
  description:
    "A 12-week beginner half marathon plan, four runs a week: every week's distance and long run, two example weeks in full, and how the plan grows from about 15 km a week.",
  alternates: { canonical: path },
});

// [week, phase, km before the weekend, weekend run]
const weeks: [number, string, number, string][] = [
  [1, "Base", 14, "8 km"], [2, "Base", 13, "9 km"], [3, "Base", 13, "10 km"],
  [4, "Build", 13, "7 km"], [5, "Build", 13, "11 km"], [6, "Build", 12, "12 km"], [7, "Build", 15, "13 km"],
  [8, "Sharpen", 13, "9 km"], [9, "Sharpen", 14, "15 km"], [10, "Sharpen", 14, "16 km"],
  [11, "Taper", 12, "11 km"], [12, "Taper", 12, "Race: 21.1 km"],
];

export default function BeginnerHalfPlan() {
  return (
    <PageShell
      lang="en"
      eyebrow="Training plan · Half marathon"
      title="Beginner half marathon training plan: 12 weeks"
      updated="2026-11-22"
      storeUrl={store}
      intro={
        <p>
          Twelve weeks, four runs a week, starting from about 15 km a week. One easy run, one easy run with
          short strides, one session with a little faster running, and a long run at the weekend. Below is every
          week at a glance, then two weeks in full.
        </p>
      }
    >
      <h2>Who this plan is for</h2>
      <ul>
        <li>You already run two or three times a week, about 15 km in total, and your longest recent run is around 8 km.</li>
        <li>You can give four days a week to running, with one longer slot at the weekend (up to about two and a half hours by the end).</li>
        <li>You want to finish a half marathon comfortably, not chase a time. If you are starting from zero, build to 15 km a week first.</li>
      </ul>

      <h2>The 12 weeks at a glance</h2>
      <div className="not-prose overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-zinc-400">
            <tr><th className="py-2 pr-4 font-semibold">Week</th><th className="py-2 pr-4 font-semibold">Phase</th><th className="py-2 pr-4 font-semibold">Tue to Sat</th><th className="py-2 font-semibold">Sunday</th></tr>
          </thead>
          <tbody className="text-zinc-200">
            {weeks.map(([week, phase, midweek, sunday]) => (
              <tr key={week} className="border-t border-white/10">
                <td className="py-2 pr-4">{week}</td><td className="py-2 pr-4">{phase}</td>
                <td className="py-2 pr-4">about {midweek} km</td><td className="py-2">{sunday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The long run grows by about a kilometre a week, from 8 km to 16 km, with a lighter week 4 and week 8 so
        the body can absorb the work. The two weeks before the race come down, so you start it rested.
      </p>

      <h2>Week 1 in full</h2>
      <ul>
        <li><strong>Tuesday:</strong> 25 minutes easy, then 10 minutes at a steady, comfortable-hard effort and 5 more minutes at that effort.</li>
        <li><strong>Thursday:</strong> easy 4 km, finishing with 4 relaxed strides of about 100 m.</li>
        <li><strong>Saturday:</strong> easy 3 km.</li>
        <li><strong>Sunday:</strong> long run, 8 km, at a pace you could talk at.</li>
      </ul>

      <h2>Week 10 in full, the biggest week</h2>
      <ul>
        <li><strong>Tuesday:</strong> 10 minutes warm-up, 10 × 1 minute at about your 5K effort with 1 minute jogging between, 10 minutes cool-down.</li>
        <li><strong>Thursday:</strong> easy 4 km with 6 strides.</li>
        <li><strong>Saturday:</strong> easy 3 km.</li>
        <li><strong>Sunday:</strong> long run, 16 km, easy. The longest run of the plan.</li>
      </ul>

      <h2>Race week</h2>
      <ul>
        <li><strong>Tuesday:</strong> 20 minutes easy, then 4 short, relaxed accelerations of about 15 seconds.</li>
        <li><strong>Thursday:</strong> easy 4 km with 4 strides.</li>
        <li><strong>Saturday:</strong> easy 3 km to loosen up.</li>
        <li><strong>Sunday:</strong> race day, 21.1 km. Start slower than feels right for the first few kilometres.</li>
      </ul>

      <h2>How to run it</h2>
      <ul>
        <li><strong>Most of it is easy.</strong> Easy means you could hold a conversation. If you are breathing hard on an easy day, slow down.</li>
        <li><strong>The Tuesday session is the only hard one.</strong> It starts as short pieces at a comfortable-hard effort and moves to faster minutes near the end.</li>
        <li><strong>Move days, not runs.</strong> If Tuesday does not work, run the session another day, with an easy day or a rest day around it.</li>
        <li><strong>A missed week is fine.</strong> Repeat the previous week rather than jumping ahead.</li>
      </ul>

      <h2>A plan that starts from your own running</h2>
      <p>
        These weeks are what RunToMax built for one sample runner. In the app, the plan starts from the runs
        already in Apple Health or Garmin Connect, your days and your time, then changes with you: an easier week
        when your recovery is low, a moved session when life gets in the way, and you approve every change.
        Sessions go to your Apple Watch or your Garmin. The first week of every plan is free, with no subscription.
      </p>
      <p className="text-sm text-zinc-500">
        This is general training guidance, not medical advice. If you have pain, an injury or a health condition,
        talk to a doctor before you start.
      </p>
    </PageShell>
  );
}

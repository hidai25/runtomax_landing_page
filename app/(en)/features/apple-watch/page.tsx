import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";
import Shot from "@/app/_components/Shot";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Apple Watch run tracking",
  description:
    "How RunToMax records runs on Apple Watch: custom run screens, structured intervals with haptic cues, phone-free recording, and what it needs (iOS 17, watchOS 10).",
  alternates: alternatesFor("/features/apple-watch/", "en"),
};

export default function AppleWatchFeaturePage() {
  return (
    <PageShell
      lang="en"
      eyebrow="Feature · Apple Watch"
      title="Run tracking on Apple Watch"
      alternate="/fr/fonctionnalites/apple-watch/"
      updated="2026-09-22"
      intro={
        <p>
          RunToMax records on the Watch, not on the phone. The screens are yours to design, structured sessions run on the wrist
          with a haptic cue at every transition, and the iPhone can stay at home.
        </p>
      }
    >
      <h2>What it needs</h2>
      <ul>
        <li>An Apple Watch running <strong>watchOS 10 or later</strong> — Series 4 and newer, every Apple Watch SE, every Apple Watch Ultra.</li>
        <li>An iPhone running <strong>iOS 17 or later</strong>, for setup, analysis and plans.</li>
        <li>No cellular plan and no phone on the run: GPS, heart rate and motion come from the Watch itself.</li>
        <li>Recording requires the Apple Watch. Runs recorded by other watches can be read from Apple Health, but with basic data only (see the <a href="/faq/">FAQ</a>).</li>
      </ul>

      <h2>Screens you design</h2>
      <p>
        Every run screen is a grid of fields you choose: pace, lap pace, heart rate, zone, distance, elapsed time, cadence, power
        if you run with a pod, and more. Layout presets cover easy runs, intervals and races, and you can save your own. A dedicated
        pace-grid screen shows the session target and your current pace side by side so a glance answers the only question that matters mid-rep.
      </p>
      <Shot src="watch-grid.png" alt="Apple Watch run screen showing a grid of chosen metrics" caption="A custom field grid on the Watch." watch />
      <Shot src="watch-select.png" alt="Apple Watch layout picker with presets for different workouts" caption="Layouts per workout type." watch />

      <h2>Structured sessions on the wrist</h2>
      <p>
        Warm-up, reps, recoveries and cool-down run as steps. The Watch vibrates at each transition and shows the target band for the
        current step, so you do not need to read the screen to know a rep has started. Sessions come from your RunToMax plan, from a
        workout you paste as text on the iPhone, or from the Watch’s own presets.
      </p>
      <Shot src="watch-gauge.png" alt="Apple Watch showing current pace against the session target" caption="Pace against the step target." watch />

      <h2>Laps and splits, live</h2>
      <p>
        Each kilometre (or mile) posts a lap receipt as it closes, and the splits screen keeps the run’s history in view. Lap pace is a
        single source on the Watch, so the number you see mid-run is the number the summary shows afterwards.
      </p>
      <Shot src="watch-splits.png" alt="Apple Watch splits screen listing lap times, heart rate and progress" caption="Splits with heart rate and progress." watch />

      <h2>What the Watch records</h2>
      <ul>
        <li>Distance and route from the Watch GPS, using Apple’s workout distance engine. How this compares with a Garmin is documented on the <a href="/accuracy/">accuracy page</a>.</li>
        <li>Heart rate from the Watch’s optical sensor, cadence from the Watch’s motion sensors, elevation from the barometer.</li>
        <li>Optional running power and pod distance from a Stryd pod, when paired.</li>
        <li>Every run is written to Apple Health as a normal workout. Nothing is locked inside RunToMax.</li>
      </ul>

      <h2>After the run</h2>
      <p>
        The Watch hands the finished run to the iPhone, where RunToMax classifies it, writes a plain-language verdict and scores it against
        what the plan asked for. That side of the app is described in <a href="/features/coaching-from-apple-health/">coaching from Apple Health</a>.
      </p>
    </PageShell>
  );
}

import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = pageMetadata("/accuracy/", {
  title: "How we test tracking accuracy — results and limitations",
  description:
    "How RunToMax checks distance, splits, cadence and elevation on Apple Watch against a Garmin worn on the other wrist: the method, the numbers from paired runs, and where it is still wrong.",
  alternates: alternatesFor("/accuracy/", "en"),
});

export default function AccuracyPage() {
  return (
    <PageShell
      lang="en"
      eyebrow="Evidence"
      title="How accurate is it, and how do we know"
      alternate="/fr/precision/"
      updated="2026-11-02"
      intro={
        <p>
          These are historical observations from a small paired-run sample reported on September 22, 2026: an Apple Watch running RunToMax
          on one wrist and a Garmin Forerunner on the other. They are not a new validation of version 1.3.5 or a guarantee for every runner.
        </p>
      }
    >
      <h2>Method</h2>
      <ul>
        <li><strong>Paired runs.</strong> Since May 2026, more than 35 runs by two runners have been recorded on both watches. Each Garmin FIT file and each RunToMax export is kept and compared: total distance, per-kilometre splits, heart rate, cadence and elevation.</li>
        <li><strong>A scored corpus.</strong> Seventeen of those runs form a fixed test set with a written pass/fail gate: total distance within 1% of the reference, and per-kilometre splits whose error does not drift with speed. This historical test set does not establish accuracy across all watch models, runners or later releases.</li>
        <li><strong>An honest reference.</strong> A Garmin is not ground truth. On stop-start runs its headline distance can exceed the distance implied by its own speed record; in those cases we judge against the Garmin’s own integral, not its headline.</li>
      </ul>

      <h2>Distance — observed comparisons</h2>
      <p>
        The reported sample used Apple’s workout distance engine, fed by the Watch GPS and motion sensors.
        Results against the Garmin in that sample:
      </p>
      <ul>
        <li><strong>Steady runs:</strong> within about 1%. Examples from the paired set: −0.93% on a 9.9 km run, −0.95% on a 9.0 km run, and +0.006% on a 7 km run — the closest agreement recorded.</li>
        <li><strong>Interval and stop-heavy runs:</strong> 1–3% short of the Garmin. A 4 × 800 m session read 142 m short over 8.5 km (−1.7%); a run with a 95-second walk break read −2.8%, of which most was the two watches counting the stopped time differently.</li>
      </ul>

      <h2>Splits</h2>
      <p>
        In this sample, on clean runs, per-kilometre splits agreed with the Garmin within about 5 seconds. Where they differ it is usually the kilometre
        that contains several stops: each pause and resume introduces roughly 1.5 seconds of clock disagreement between the two watches, and a
        kilometre with four stops can differ by 8–10 seconds. Lap pace shown live on the Watch is the same number the summary shows afterwards.
      </p>

      <h2>Cadence, heart rate, elevation</h2>
      <ul>
        <li><strong>Cadence</strong> from the Watch’s motion sensors matches the Garmin: median 180 vs 181 steps per minute across a 1,700-sample run.</li>
        <li><strong>Heart rate</strong> is the Watch’s optical sensor. Two wrist sensors disagree run to run in both directions; we do not claim either is right.</li>
        <li><strong>Elevation</strong> uses the barometer with GPS drift correction. The earlier report described differences of about 9 metres per run; that is a sample observation, not a guaranteed error bound.</li>
      </ul>

      <h2>Known limitations</h2>
      <ul>
        <li>Agreement between two watches does not establish true distance. Errors can be larger than those observed here.</li>
        <li>Pause handling contributed to the differences in stop-heavy sessions; GPS quality and other conditions can also affect results.</li>
        <li>Tall buildings, tunnels and dense tree cover degrade Watch GPS as they do any GPS.</li>
        <li>Indoor distance is estimated from motion or a supported sensor. RunToMax also offers <a href="/guides/apple-watch-treadmill-distance/">treadmill calibration</a>; entering a belt distance does not prove that the belt is exact.</li>
        <li>Ground contact time from the wrist is not reliable enough to coach from, so RunToMax does not use it for form guidance.</li>
      </ul>
      <p>
        If you record paired runs and see something different, send the files — the corpus grows one run at a time. Contact is on the{" "}
        <a href="/support/">support page</a>.
      </p>
    </PageShell>
  );
}

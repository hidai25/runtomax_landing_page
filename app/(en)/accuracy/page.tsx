import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "How we test tracking accuracy — results and limitations",
  description:
    "How RunToMax checks distance, splits, cadence and elevation on Apple Watch against a Garmin worn on the other wrist: the method, the numbers from paired runs, and where it is still wrong.",
  alternates: alternatesFor("/accuracy/", "en"),
};

export default function AccuracyPage() {
  return (
    <PageShell
      lang="en"
      eyebrow="Evidence"
      title="How accurate is it, and how do we know"
      alternate="/fr/precision/"
      updated="2026-09-22"
      intro={
        <p>
          Every claim on this page comes from paired runs: an Apple Watch running RunToMax on one wrist, a Garmin Forerunner on the other,
          same runner, same route, same moment. We publish the gap, not the adjective.
        </p>
      }
    >
      <h2>Method</h2>
      <ul>
        <li><strong>Paired runs.</strong> Since May 2026, more than 35 runs by two runners have been recorded on both watches. Each Garmin FIT file and each RunToMax export is kept and compared: total distance, per-kilometre splits, heart rate, cadence and elevation.</li>
        <li><strong>A scored corpus.</strong> Seventeen of those runs form a fixed test set with a written pass/fail gate: total distance within 1% of the reference, and per-kilometre splits whose error does not drift with speed. Any change to the distance code is replayed against all seventeen before it ships.</li>
        <li><strong>An honest reference.</strong> A Garmin is not ground truth. On stop-start runs its headline distance can exceed the distance implied by its own speed record; in those cases we judge against the Garmin’s own integral, not its headline.</li>
      </ul>

      <h2>Distance — what ships today</h2>
      <p>
        RunToMax uses Apple’s workout distance engine — the same distance the Watch writes to Apple Health — fed by the Watch GPS and motion sensors.
        Results against the Garmin:
      </p>
      <ul>
        <li><strong>Steady runs:</strong> within about 1%. Examples from the paired set: −0.93% on a 9.9 km run, −0.95% on a 9.0 km run, and +0.006% on a 7 km run — the closest agreement recorded.</li>
        <li><strong>Interval and stop-heavy runs:</strong> 1–3% short of the Garmin. A 4 × 800 m session read 142 m short over 8.5 km (−1.7%); a run with a 95-second walk break read −2.8%, of which most was the two watches counting the stopped time differently.</li>
      </ul>

      <h2>Distance — what is in testing</h2>
      <p>
        A GPS filter that sums position deltas over a smoothed track runs in the shadow on every run and is scored against the corpus. On the
        most recent paired runs its totals are within ±0.3% of the Garmin, including runs with 25–33 stops. It is <strong>not shipped</strong>:
        per-kilometre splits on stop-dense kilometres still miss the 8-second bound on some runs, and two of three runs by the second runner
        showed speed-correlated drift. It ships when the gate passes, not before.
      </p>

      <h2>Splits</h2>
      <p>
        On clean runs, per-kilometre splits agree with the Garmin within about 5 seconds. Where they differ it is usually the kilometre
        that contains several stops: each pause and resume introduces roughly 1.5 seconds of clock disagreement between the two watches, and a
        kilometre with four stops can differ by 8–10 seconds. Lap pace shown live on the Watch is the same number the summary shows afterwards.
      </p>

      <h2>Cadence, heart rate, elevation</h2>
      <ul>
        <li><strong>Cadence</strong> from the Watch’s motion sensors matches the Garmin: median 180 vs 181 steps per minute across a 1,700-sample run.</li>
        <li><strong>Heart rate</strong> is the Watch’s optical sensor. Two wrist sensors disagree run to run in both directions; we do not claim either is right.</li>
        <li><strong>Elevation</strong> uses the barometer with GPS drift correction. Treat totals as accurate to about 9 metres per run.</li>
      </ul>

      <h2>Known limitations</h2>
      <ul>
        <li>Two watches never agree exactly. Expect ±1% on any single run, from either device.</li>
        <li>Stop-heavy sessions are where the remaining error lives — pause handling, not GPS quality.</li>
        <li>Tall buildings, tunnels and dense tree cover degrade Watch GPS as they do any GPS.</li>
        <li>Treadmill distance is Apple’s stride estimate unless a pod provides it.</li>
        <li>Ground contact time from the wrist is not reliable enough to coach from, so RunToMax does not use it for form guidance.</li>
      </ul>
      <p>
        If you record paired runs and see something different, send the files — the corpus grows one run at a time. Contact is on the{" "}
        <a href="/support/">support page</a>.
      </p>
    </PageShell>
  );
}

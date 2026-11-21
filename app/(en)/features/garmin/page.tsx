import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";
import { alternatesFor, pageMetadata } from "@/app/_lib/site";

export const metadata: Metadata = pageMetadata("/features/garmin/", {
  title: "RunToMax with a Garmin watch",
  description:
    "Keep your Garmin: RunToMax imports your new runs from Garmin Connect for free and, with Pro, sends your planned workouts to the watch's calendar.",
  alternates: alternatesFor("/features/garmin/", "en"),
});

export default function GarminFeaturePage() {
  return (
    <PageShell
      lang="en"
      eyebrow="Feature · Garmin Connect"
      title="RunToMax with a Garmin watch"
      alternate="/fr/fonctionnalites/garmin/"
      updated="2026-11-21"
      intro={
        <p>
          You do not have to change watches. Run with your Garmin as you always do: your new runs arrive in RunToMax on iPhone, and your
          workouts go to the Garmin Connect calendar.
        </p>
      }
    >
      <h2>What you need</h2>
      <ul>
        <li>An iPhone on <strong>iOS 17 or later</strong> with <strong>RunToMax 1.4</strong>.</li>
        <li>A <strong>Garmin Connect</strong> account and a compatible Garmin watch that syncs to it.</li>
        <li>No Apple Watch is required.</li>
      </ul>

      <h2>Import your runs, free</h2>
      <p>
        Connect your account in RunToMax settings, under <strong>Connections</strong> then <strong>Garmin Connect</strong>, and turn on{" "}
        <strong>Import Garmin runs</strong>. After your watch syncs with Garmin Connect, the new run appears in RunToMax. You can also tap{" "}
        <strong>Check for new runs</strong>.
      </p>
      <ul>
        <li>The run arrives with what the watch recorded: distance, duration, route, laps, heart rate, cadence and running power.</li>
        <li>If you run with a Stryd pod paired to the watch, its power and form metrics come along when Garmin provides the activity file.</li>
        <li>Only <strong>new</strong> runs are imported. Your existing Garmin history is not.</li>
        <li>Importing is free and does not start a subscription.</li>
      </ul>

      <h2>Send your workouts to the watch, with Pro</h2>
      <p>
        Open a running workout in your plan or the library, check the repeats, recoveries and target, then tap{" "}
        <strong>Send to Garmin</strong>. The workout joins your Garmin Connect calendar. Sync the watch and you will find the session in its
        training calendar, with no need to re-enter each repeat.
      </p>
      <p>
        Sending workouts is part of RunToMax Pro. The guide{" "}
        <a href="/guides/send-interval-workout-garmin-connect/">How to send an interval workout to Garmin Connect</a> covers each step,
        including what to check on the watch before you start.
      </p>

      <h2>What RunToMax does with your runs</h2>
      <ul>
        <li>They fill your log, charts and laps, without duplicating runs from Apple Health or Strava.</li>
        <li>They are matched to the sessions in your plan, so the plan moves with you.</li>
        <li>Training load, the recovery estimate and plan adjustments are calculated on your iPhone.</li>
      </ul>

      <h2>Recovery, if you want it</h2>
      <p>
        A second switch, <strong>Import Garmin health data</strong>, is off by default. If you turn it on, RunToMax keeps only three values
        per night: your time asleep, your resting heart rate and your overnight HRV average. They feed your morning recovery read when Apple
        Health has nothing for that night.
      </p>

      <h2>Your data</h2>
      <ul>
        <li>We do not sell Garmin data.</li>
        <li>It is never sent to a cloud AI, to advertising or to product analytics.</li>
        <li>You can turn off importing or disconnect the account at any time in settings.</li>
      </ul>
      <p>
        The details are in the <a href="https://garmin.runtomax.com/privacy/garmin-import/">Garmin import privacy notice</a>.
      </p>

      <h2>Free or Pro?</h2>
      <ul>
        <li><strong>Free:</strong> importing your new runs, your history in the app, and the first week of every plan.</li>
        <li><strong>Pro:</strong> sending workouts to Garmin Connect, the rest of the plan after its first week, and coaching.</li>
      </ul>
      <p>
        Prices and trial terms are in the <a href="/faq/#garmin-connect">FAQ</a>.
      </p>
      <p className="text-sm text-zinc-500">Garmin and Garmin Connect are trademarks of Garmin Ltd. or its subsidiaries. RunToMax is not affiliated with Garmin.</p>
    </PageShell>
  );
}

import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";
import Shot from "@/app/_components/Shot";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Race-date training plans that adapt with your approval",
  description:
    "RunToMax builds 5K to marathon plans anchored to your race date, sends each session to your Apple Watch, and proposes changes based on how you respond — you approve them. Or run with no plan at all.",
  alternates: alternatesFor("/features/race-plans/", "en"),
};

export default function RacePlansFeaturePage() {
  return (
    <PageShell
      lang="en"
      eyebrow="Feature · Plans"
      title="Plans built around your race date"
      alternate="/fr/fonctionnalites/plans-de-course/"
      updated="2026-09-22"
      intro={
        <p>
          Pick a race and a date and RunToMax composes the weeks between here and there. Each session runs on your Watch, each finished session
          is scored, and when your body says the plan is too much or too little, the plan proposes a change and you decide.
        </p>
      }
    >
      <h2>How a plan is built</h2>
      <ul>
        <li><strong>Anchor:</strong> distance (5K, 10K, half marathon, marathon) and race date. The calendar is laid out backwards from race day.</li>
        <li><strong>Level:</strong> four plan levels set the weekly structure; the starting point comes from your Apple Health history, not a questionnaire.</li>
        <li><strong>Paces:</strong> every session target is derived from your threshold pace, so targets move when your fitness does.</li>
        <li><strong>Variety:</strong> quality sessions rotate through workout families so a 16-week block is not the same Tuesday sixteen times.</li>
      </ul>
      <Shot src="iphone-workout-structure.jpg" alt="Workout structure screen showing each rep and recovery of a session" caption="A quality day: the steps, the targets, the coach note." />

      <h2>Adaptation you approve</h2>
      <p>
        RunToMax reads how you are responding — the grades of your recent hard sessions, how easy runs felt, training load, readiness — and when
        the signals disagree with the plan it <strong>proposes</strong> a change: ease a session, move it, replace it. Nothing changes silently.
        You keep the session, take the proposal, or move it yourself, and the plan records what happened and why.
      </p>

      <h2>On the wrist</h2>
      <p>
        Today’s session is sent to the Apple Watch as a structured workout: warm-up, reps, recoveries, cool-down, with the target band for each
        step and a haptic cue at each transition. How that works is on the <a href="/features/apple-watch/">Apple Watch page</a>.
      </p>

      <h2>No plan is also a plan</h2>
      <p>
        You can use RunToMax with no plan at all. Every run is still classified and gets its verdict, your threshold and training paces still
        update, and readiness still reads each morning. Plans are there when a race is; the coach is there either way.
      </p>

      <h2>Bring a workout from elsewhere</h2>
      <p>
        A session written by another coach or app can be pasted as text on the iPhone. RunToMax parses it on the device into steps and sends
        it to the Watch like one of its own.
      </p>
    </PageShell>
  );
}

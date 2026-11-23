import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Faq, { type FaqItem } from "@/app/_components/Faq";
import PageShell from "@/app/_components/PageShell";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = pageMetadata("/faq/", {
  title: "FAQ — do I need an Apple Watch, and other questions before you buy",
  description:
    "Record with just your iPhone on iOS 26 or later, import new Garmin runs for free and try the first week of a plan without subscribing. See what requires Pro.",
  alternates: alternatesFor("/faq/", "en"),
});

const items: FaqItem[] = [
  {
    q: "Do I need an Apple Watch?",
    a: "No. You can record a run for free with just your iPhone on iOS 26 or later. If you prefer to leave your phone at home, the RunToMax Watch app records on an Apple Watch running watchOS 10 or later. You can also record on a compatible Garmin and import new runs for free through Garmin Connect.",
  },
  {
    q: "Can I run without my phone?",
    a: "Yes. GPS, heart rate and motion come from the Watch. Structured sessions, haptic cues, laps and your custom screens all work with the iPhone at home. The run syncs to the iPhone when the two are back in range.",
  },
  {
    q: "Can I use it without a training plan?",
    a: "Yes. Plans are optional. You can record without one, and Pro offers additional analysis and coaching based on your runs.",
  },
  {
    q: "What works with cloud coaching disabled?",
    a: "Basic recording remains free. Pro includes on-device coaching and analysis even if cloud coaching is off; optional cloud coaching adds written notes. A Pro subscription or eligible trial is needed for Pro features.",
  },
  {
    q: "Is RunToMax free?",
    a: "Yes. Run recording and imports of new Garmin runs are free. The first week of every training plan is also free, without starting a trial or subscription. Continuing the plan after week one requires Pro. Local recording has no time limit and needs no account. On Apple Watch, free recording includes outdoor and treadmill runs, one screen with five fields you choose, and chest-strap heart rate. Your run summary, history, Apple Health sync, FIT/GPX export and 3D route replay are free too.",
  },
  {
    q: "Can I try RunToMax Pro?",
    a: "Eligible runners can start a free trial of Pro through Apple. Apple shows your eligibility, trial length, price and renewal terms before you confirm. The subscription renews automatically unless cancelled; manage or cancel it in your Apple Account subscriptions. Recording remains free without Pro.",
  },
  {
    q: "What does RunToMax Pro include?",
    a: "Ongoing coaching: today’s call and readiness every day, race-date plans that adapt, structured sessions and the session library, route planning, deeper run analysis and Trends, customizable Watch screens, Stryd support and optional cloud coaching notes. In the US it is $29.99 per year or $5.99 per month, billed by Apple; eligible runners may receive a 14-day annual or 7-day monthly trial. Local prices and eligibility vary, and the subscription renews automatically unless cancelled. If you stop subscribing, recording stays free and your saved runs, exports and earned reports remain. Cancel any time in your Apple ID subscriptions.",
  },
  {
    id: "garmin-connect",
    q: "Can I use RunToMax with my Garmin watch?",
    a: "Yes. Importing new runs from a compatible Garmin is free. Sign in to RunToMax on your iPhone, link Garmin Connect and turn on Import Garmin runs. Runs recorded from the day you connect arrive after your watch syncs and can include route, laps and heart rate. Sending planned workouts from RunToMax to your Garmin Connect calendar requires Pro. Your compatible watch receives them on its next sync. If you use Apple Health instead, RunToMax can read the distance, duration and available heart rate for runs Garmin shares there.",
  },
  {
    q: "What about COROS, Polar or Suunto?",
    a: "If your watch shares runs with Apple Health, RunToMax can read the distance, duration and available heart rate.",
  },
  {
    q: "Does it sync with Strava?",
    a: "Not in the App Store version yet. Strava sync is available only to testers in supported TestFlight builds. Every run is written to Apple Health, and runs can be exported as FIT files in the meantime.",
  },
  {
    q: "Which languages does it support?",
    a: "English and French, on both the iPhone and the Watch.",
  },
  {
    q: "Why is it 18+?",
    a: "RunToMax gives training advice, and we chose to offer it to adults only. The first screen confirms you are 18 or older; on iOS 26 it can use Apple’s Declared Age Range service. The app keeps only the yes/no result, never a birth date.",
  },
  {
    q: "Where is my data stored?",
    a: "Runs, routes and heart rate are stored in Apple Health and local app storage; no account is required. Account sync with Sign in with Apple is optional. If you enable it, Cloudflare stores an encrypted training archive, including workout heart rate but no raw GPS routes, for recovery. Optional cloud coaching and analytics have separate consent. See the privacy policy for the data, controls and retention. No ads, no data sale.",
  },
  {
    q: "How accurate is the distance?",
    a: "In the small paired-run sample described on our accuracy page, steady-run distances differed by about 1% from a Garmin on the other wrist; stop-heavy runs differed by 1–3%. These observations are not a guarantee for your run, and neither watch is ground truth. The method and the numbers are on the accuracy page.",
  },
];

export default function FaqPage() {
  return (
    <PageShell
      lang="en"
      eyebrow="Before you download"
      title="Questions runners ask first"
      alternate="/fr/faq/"
      updated="2026-11-23"
      intro={<p>These answers cover RunToMax on iPhone, Apple Watch and compatible Garmin watches.</p>}
    >
      <Faq items={items} />
      <h2>Still unsure?</h2>
      <p>
        Have a question about your device or plan? Email the developer from the <a href="/support/">support page</a>.
      </p>
    </PageShell>
  );
}

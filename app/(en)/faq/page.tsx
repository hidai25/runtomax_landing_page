import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Faq, { type FaqItem } from "@/app/_components/Faq";
import PageShell from "@/app/_components/PageShell";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = pageMetadata("/faq/", {
  title: "FAQ — do I need an Apple Watch, and other questions before you buy",
  description:
    "Straight answers before you download RunToMax: Apple Watch requirement, running without the phone, what is free, the Pro trial, what Pro includes, Garmin, Strava, languages and age.",
  alternates: alternatesFor("/faq/", "en"),
});

const items: FaqItem[] = [
  {
    q: "Do I need an Apple Watch?",
    a: "You need an Apple Watch with watchOS 10 or later to record in the RunToMax Watch app. With a compatible Garmin, you can record on your Garmin and import the run on iPhone using Garmin Connect in RunToMax 1.4.",
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
    a: "Recording is. Outdoor and treadmill runs on the Apple Watch, with one data screen showing five fields you choose, chest-strap heart rate, a basic summary, your history, Apple Health and FIT/GPX export stay free, with no account and no time limit. From version 1.3.2 the 3D flyover replay of your route is free too. Coaching is the paid part, and you can try it first: see the next two answers.",
  },
  {
    q: "Can I try RunToMax Pro?",
    a: "Eligible runners can start a free trial of Pro through Apple. Apple shows your eligibility, trial length, price and renewal terms before you confirm. The subscription renews automatically unless cancelled; manage or cancel it in your Apple Account subscriptions. Recording remains free without Pro. Version 1.3.5 also offers three included coached runs to eligible runners; check eligibility and terms in the app. This separate offer does not start a subscription.",
  },
  {
    q: "What does RunToMax Pro include?",
    a: "Ongoing coaching: today’s call and readiness every day, race-date plans that adapt, structured sessions and the session library, route planning, deeper run analysis and Trends, customizable Watch screens, Stryd support and optional cloud coaching notes. In the US it is $29.99 per year or $5.99 per month, billed by Apple; eligible runners may receive a 14-day annual or 7-day monthly trial. Local prices and eligibility vary, and the subscription renews automatically unless cancelled. If you stop subscribing, recording stays free and your saved runs, exports and earned reports remain. Cancel any time in your Apple ID subscriptions.",
  },
  {
    id: "garmin-connect",
    q: "Can I use RunToMax with my Garmin watch?",
    a: "Yes. In RunToMax 1.4, sign in to your RunToMax account on iPhone and connect Garmin Connect. Choose a planned running workout to send to a compatible Garmin watch. To bring completed runs back into RunToMax, turn on Import Garmin runs. New runs arrive after your watch syncs with Garmin Connect and can include the route, laps and heart rate when recorded. If you have version 1.3.5, RunToMax can read distance, duration and available heart rate for runs Garmin shares with Apple Health.",
  },
  {
    q: "What about COROS, Polar or Suunto?",
    a: "If your watch shares runs with Apple Health, RunToMax can read the distance, duration and available heart rate.",
  },
  {
    q: "Does it sync with Strava?",
    a: "Not in App Store version 1.3.5. Strava sync is available only to testers in supported TestFlight builds. Every run is written to Apple Health, and runs can be exported as FIT files in the meantime.",
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
    a: "Runs, routes and heart rate are stored in Apple Health and local app storage; no account is required. In version 1.3.5, account sync with Sign in with Apple is optional. If you enable it, Cloudflare stores an encrypted training archive, including workout heart rate but no raw GPS routes, for recovery. Optional cloud coaching and analytics have separate consent. See the privacy policy for the data, controls and retention. No ads, no data sale.",
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
      updated="2026-11-19"
      intro={<p>These answers cover version 1.3.5 and the Garmin Connect integration in 1.4. If yours is missing, email the developer from the support page.</p>}
    >
      <Faq items={items} />
      <h2>Still unsure?</h2>
      <p>
        Recording is free, so pair the Watch and go for a run. When you want coaching, explore Pro and check your trial eligibility in the app. Support is one email away on the <a href="/support/">support page</a>.
      </p>
    </PageShell>
  );
}

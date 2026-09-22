import type { Metadata } from "next";
import Faq, { type FaqItem } from "@/app/_components/Faq";
import PageShell from "@/app/_components/PageShell";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "FAQ — do I need an Apple Watch, and other questions before you buy",
  description:
    "Straight answers before you download RunToMax: Apple Watch requirement, running without the phone, using it without a plan, what works with cloud coaching off, what the subscription includes, Garmin, Strava, languages and age.",
  alternates: alternatesFor("/faq/", "en"),
};

const items: FaqItem[] = [
  {
    q: "Do I need an Apple Watch?",
    a: "Yes, to record runs. RunToMax records on the Apple Watch (watchOS 10 or later: Series 4 and newer, SE, Ultra) and analyzes on the iPhone (iOS 17 or later). Runs recorded by other devices can be read from Apple Health, but they carry basic data only.",
  },
  {
    q: "Can I run without my phone?",
    a: "Yes. GPS, heart rate and motion come from the Watch. Structured sessions, haptic cues, laps and your custom screens all work with the iPhone at home. The run syncs to the iPhone when the two are back in range.",
  },
  {
    q: "Can I use it without a training plan?",
    a: "Yes. Without a plan, every run is still classified, gets a plain-language verdict, updates your threshold and training paces, and feeds the daily readiness read. Plans are optional and anchored to a race date when you want one.",
  },
  {
    q: "What works with cloud coaching disabled?",
    a: "Everything except the longer written coach notes. Recording, the starting profile from Apple Health, threshold and training paces, run classification, the post-run verdict, plan building, plan scores, adaptation proposals, readiness and heat-adjusted targets are all computed on your iPhone. Cloud coaching is opt-in and only generates the written notes.",
  },
  {
    q: "What does the subscription include?",
    a: "One subscription, RunToMax Pro, unlocks the whole app: Watch recording, analysis, plans and cloud coaching. In the US it is $29.99 per year with a 14-day free trial, or $5.99 per month with a 7-day trial, billed by Apple; local prices vary. There is no free tier: after the trial the app locks until you subscribe, and every run you recorded stays in Apple Health. Cancel any time in your Apple ID subscriptions.",
  },
  {
    q: "I run with a Garmin (or Coros, Polar, Suunto). Can I use RunToMax?",
    a: "Partly. If your watch syncs to Apple Health, RunToMax can read those runs, but they carry only distance, time and heart rate — no route, laps or splits — so the analysis is limited. Recording and the full analysis need the Apple Watch. Direct sync for other watches is planned, not available today.",
  },
  {
    q: "Does it sync with Strava?",
    a: "Not in the App Store version yet. Strava sync is built and in testing with a limited number of runners while Strava reviews the integration. Every run is written to Apple Health, and runs can be exported as FIT files in the meantime.",
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
    a: "On your device. Runs, routes and heart rate live in Apple Health; RunToMax has no account and keeps no cloud copy of your training history. The optional cloud coaching sends a minimized summary through a RunToMax proxy and nothing else. No ads, no data sale.",
  },
  {
    q: "How accurate is the distance?",
    a: "On steady runs, within about 1% of a Garmin worn on the other wrist. On runs with many stops and restarts the gap widens to 1–3%, mostly from how the two watches handle pauses. The method and the numbers are on the accuracy page.",
  },
];

export default function FaqPage() {
  return (
    <PageShell
      lang="en"
      eyebrow="Before you download"
      title="Questions runners ask first"
      alternate="/fr/faq/"
      updated="2026-09-22"
      intro={<p>Short answers, checked against the current App Store version. If yours is missing, email the developer from the support page.</p>}
    >
      <Faq items={items} />
      <h2>Still unsure?</h2>
      <p>
        The trial is 14 days on the annual plan. Pair the Watch, go for one run, read the verdict — that is the fastest way to know if RunToMax is
        for you. Support is one email away on the <a href="/support/">support page</a>.
      </p>
    </PageShell>
  );
}

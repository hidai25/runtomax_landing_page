import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import LegalLayout from "@/app/_components/LegalLayout";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/app/_lib/contact";

export const metadata: Metadata = pageMetadata("/support/", {
  title: "Support",
  description:
    "Get help with RunToMax: contact the developer, manage your subscription, and find the privacy policy.",
  alternates: { canonical: "/support/" },
  robots: { index: true, follow: true },
});

export default function SupportPage() {
  return (
    <LegalLayout
      title="Support"
      effectiveDate="November 2, 2026"
      intro={
        <p>
          Email{" "}
          <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>{" "}
          with a bug, a question, or a feature request and you&apos;ll get a
          reply from the developer as soon as possible.
        </p>
      }
    >
      <h2>Contact</h2>
      <p>
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
      </p>

      <h2>Adult eligibility</h2>
      <p>
        RunToMax is available only to adults aged 18 and older. The first
        iPhone screen establishes 18+ eligibility before HealthKit,
        subscriptions, analytics, or coaching can start. On iOS 26 or later,
        it can use Apple&apos;s privacy-preserving Declared Age Range service; if
        that service is unavailable or declined, an adult can confirm manually.
        RunToMax does not retain Apple&apos;s range or its source. The gate keeps
        only the eligibility result, policy version, and confirmation time—not
        a date of birth—and mirrors that result to the paired Apple Watch.
      </p>
      <p>
        The optional birth year in the runner profile is separate on-device
        physiology data used for heart-rate and calorie calculations. If you
        selected the wrong age-gate answer, use <strong>Review my age choice</strong>
        on the locked screen. People under 18 cannot use this release.
      </p>
      <p>
        If you&apos;re reporting a bug, it helps to include your iPhone and
        Apple Watch models, your iOS and watchOS versions, the RunToMax version
        (Settings → About), and what you were doing when it happened.
      </p>

      {/* Strava section PARKED until the Strava API app is approved and the
          feature flag ships ON in production (see the app repo's Strava
          unlock checklist). Documenting a disconnect flow for a feature the
          store build doesn't have reads as inaccurate metadata to App Review
          — restore this block the day Strava goes live.
      <h2>Disconnecting Strava</h2>
      <p>
        In the app: <strong>Settings → Strava → Disconnect</strong>. This
        deletes the stored authorization tokens from your device and stops any
        further uploads.
      </p>
      <p>
        You can also revoke RunToMax&apos;s access directly from Strava at
        strava.com/settings/apps. Activities already uploaded to Strava stay
        there until you delete them on Strava.
      </p>
      */}

      <h2>Free use and the Pro trial</h2>
      <p>
        Recording Outdoor and Treadmill runs on Apple Watch, basic summaries,
        history, Apple Health and export are free. Coaching and other Pro
        features require a subscription. An Apple free trial may be available
        if you are eligible. Apple shows the offer, price and renewal terms
        before you confirm; subscriptions renew automatically unless cancelled.
        Version 1.3.5 also offers three included coached runs to eligible runners,
        separately from the Apple trial and without starting a subscription. If your Watch asks you to update RunToMax,
        install the latest Watch app.
      </p>

      <h2>Managing your subscription</h2>
      <p>
        RunToMax has one Pro subscription, offered monthly or annually. Pro
        includes ongoing coaching, plans, routes, deeper analysis, custom Watch
        screens and cloud coaching; there is no separate AI Coaching
        subscription. It is billed by Apple, not by RunToMax. If it ends, free
        recording continues and your saved runs and exports stay. To
        change or cancel, open the iOS <strong>Settings</strong> app, tap your
        name, then <strong>Subscriptions</strong>. Refunds are handled by Apple
        at{" "}
        <a
          href="https://reportaproblem.apple.com"
          target="_blank"
          rel="noreferrer"
        >
          reportaproblem.apple.com
        </a>
        .
      </p>

      <h2>Your data</h2>
      <p>
        No account is required for basic use. Your workouts, routes and heart rate
        are stored in Apple Health and local app storage. In version 1.3.5,
        optional Sign in with Apple account sync stores an encrypted selected
        training archive with Cloudflare, including workout heart rate but
        excluding raw GPS routes. You can turn sync off or delete the sync
        account in Settings → Account &amp; sync. Uninstalling the app alone
        does not delete that archive.
        Optional cloud coaching sends a minimized, consented summary through a
        RunToMax proxy as explained in the Privacy Policy. Deleting the app
        removes RunToMax&apos;s local settings; to remove the workouts
        themselves, delete them in the Health app.
      </p>
      <p>
        Full details are in the{" "}
        <a href="/privacy/">Privacy Policy</a>, and the{" "}
        <a href="/terms/">Terms of Service</a> cover subscriptions and use of
        the app.
      </p>
    </LegalLayout>
  );
}

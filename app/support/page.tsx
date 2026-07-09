import type { Metadata } from "next";
import LegalLayout from "../_components/LegalLayout";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/app/_lib/contact";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with RunToMax: contact the developer, disconnect Strava, manage your subscription, and find the privacy policy.",
  alternates: { canonical: "/support/" },
  robots: { index: true, follow: true },
};

export default function SupportPage() {
  return (
    <LegalLayout
      title="Support"
      effectiveDate="July 9, 2026"
      intro={
        <p>
          RunToMax is built by one person. Email{" "}
          <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a> with a bug,
          a question, or a feature request and you&apos;ll get a reply from the
          developer, usually within a couple of days.
        </p>
      }
    >
      <h2>Contact</h2>
      <p>
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
      </p>
      <p>
        If you&apos;re reporting a bug, it helps to include your iPhone and
        Apple Watch models, your iOS and watchOS versions, the RunToMax version
        (Settings → About), and what you were doing when it happened.
      </p>

      <h2>Disconnecting Strava</h2>
      <p>
        In the app: <strong>Settings → Strava → Disconnect</strong>. This
        deletes the stored authorization tokens from your device and stops any
        further uploads.
      </p>
      <p>
        You can also revoke RunToMax&apos;s access directly from Strava at{" "}
        <a
          href="https://www.strava.com/settings/apps"
          target="_blank"
          rel="noreferrer"
        >
          strava.com/settings/apps
        </a>
        . Activities already uploaded to Strava stay there until you delete
        them on Strava.
      </p>

      <h2>Managing your subscription</h2>
      <p>
        Pro and AI Coaching subscriptions are billed by Apple, not by RunToMax.
        To change or cancel, open the iOS <strong>Settings</strong> app, tap
        your name, then <strong>Subscriptions</strong>. Refunds are handled by
        Apple at{" "}
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
        RunToMax has no account and no server. Your workouts, routes, and heart
        rate live in Apple Health on your device. Deleting the app removes
        RunToMax&apos;s own settings and tokens; to remove the workouts
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

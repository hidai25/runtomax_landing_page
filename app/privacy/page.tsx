import type { Metadata } from "next";
import LegalLayout from "../_components/LegalLayout";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/app/_lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How RunToMax handles your data: HealthKit, location, Strava, Google Gemini, WeatherKit, subscriptions, and analytics.",
  alternates: { canonical: "/privacy/" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate="May 5, 2026"
      intro={
        <p>
          RunToMax is a running app for iPhone and Apple Watch. We do not run
          our own servers, we do not sell data, and we do not show ads. Your
          health and location data stays in Apple Health on your device. The
          only things that ever leave your phone are the optional integrations
          you turn on yourself, and anonymous product analytics that you can
          disable in Settings.
        </p>
      }
    >
      <h2>Summary</h2>
      <ul>
        <li>
          No RunToMax account. No email login. No password.
        </li>
        <li>
          Workouts, GPS routes, and heart rate are stored in Apple HealthKit
          on your device.
        </li>
        <li>
          Optional Strava sync uploads your activities to Strava if you connect
          it.
        </li>
        <li>
          Optional AI Coaching (Pro) sends anonymized run statistics to Google
          Gemini.
        </li>
        <li>
          Subscriptions are processed by Apple. We never see your payment
          information.
        </li>
        <li>
          Anonymous product analytics (PostHog, EU cloud) and crash reports
          help us improve the app. You can opt out in Settings.
        </li>
        <li>
          No advertising, no third-party trackers, no IDFA, no push
          notifications.
        </li>
      </ul>

      <h2>Who we are</h2>
      <p>
        &quot;RunToMax,&quot; &quot;we,&quot; &quot;us,&quot; and
        &quot;our&quot; refer to Hidai Bar-Mor, an individual sole developer
        based in Israel, who develops and operates the RunToMax iPhone and
        Apple Watch application. Contact:{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Data we process</h2>

      <h3>Health and fitness data (HealthKit)</h3>
      <p>
        With your permission, RunToMax reads the following from Apple
        HealthKit: workouts, workout routes (GPS), heart rate, active energy,
        distance, steps, running speed, body mass, resting heart rate, stride
        length, vertical oscillation, ground contact time, heart rate
        variability (SDNN), sleep, VO₂ Max, and running power. We write workout
        summaries (run, heart rate, distance, running-form metrics) back into
        Health.
      </p>
      <p>
        HealthKit data is encrypted on your device and is never uploaded to a
        RunToMax server, because we do not operate one. You can revoke
        HealthKit access at any time in iOS Settings → Privacy &amp; Security
        → Health.
      </p>

      <h3>Location (CoreLocation)</h3>
      <p>
        During outdoor runs, RunToMax records precise GPS coordinates,
        elevation (via the barometer and GPS), and the resulting route
        polyline. Location is recorded only while you are using the app or
        actively recording a workout. We do not track location in the
        background outside of an active workout. Routes are stored in HealthKit
        as part of the workout.
      </p>

      <h3>Profile data you enter</h3>
      <p>
        Your first name, avatar photo, max heart rate, resting heart rate, body
        mass, race goals, shoe inventory, heart-rate zone settings, and unit
        preferences are stored locally on your device in an iOS App Group
        (shared between the iPhone app, the Watch app, and widgets). This data
        is never transmitted to us.
      </p>

      <h3>Account and authentication</h3>
      <p>
        RunToMax does not provide an account system. There is no Sign in with
        Apple, no email login, and no RunToMax password.
      </p>

      <h3>Strava (optional)</h3>
      <p>
        If you choose to connect Strava, RunToMax authenticates with Strava
        using OAuth (Apple&apos;s ASWebAuthenticationSession). Tokens are
        stored in your iOS Keychain. Once connected, RunToMax can:
      </p>
      <ul>
        <li>
          Send to Strava: a GPX file of your run, distance, duration, start
          time, name, description, and indoor flag, plus segment-effort
          queries.
        </li>
        <li>
          Receive from Strava: your starred segments, segment details, athlete
          name, and personal records.
        </li>
      </ul>
      <p>
        You can disconnect Strava at any time in RunToMax Settings, or revoke
        RunToMax from{" "}
        <a
          href="https://www.strava.com/settings/apps"
          target="_blank"
          rel="noreferrer"
        >
          Strava&apos;s My Apps page
        </a>
        . Strava&apos;s handling of your data is governed by their{" "}
        <a
          href="https://www.strava.com/legal/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
        .
      </p>

      <h3>AI Coaching — Google Gemini (optional, Pro feature)</h3>
      <p>
        If you enable AI Coaching, RunToMax sends an aggregated, anonymized
        summary of your run to the Google Gemini API
        (<code>generativelanguage.googleapis.com</code>) so the model can
        generate a coaching note. The summary may include: pace, average and
        maximum heart rate, cadence, elevation gain, stride length, vertical
        oscillation, ground contact time, time-in-zone, splits, training
        readiness/CTL/TSB, summaries of similar past runs, and weather
        (temperature and humidity) at the start of the run.
      </p>
      <p>
        We do <strong>not</strong> send your name, email, raw GPS coordinates,
        individual heart-rate samples, or any account identifier. RunToMax does
        not retain Gemini prompts, because RunToMax has no server. Google
        processes the request under their{" "}
        <a
          href="https://ai.google.dev/gemini-api/terms"
          target="_blank"
          rel="noreferrer"
        >
          Gemini API Additional Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
        . You can disable AI Coaching at any time in Settings.
      </p>

      <h3>Weather (Apple WeatherKit)</h3>
      <p>
        RunToMax requests temperature, humidity, and wind at the starting
        coordinate of your run from Apple WeatherKit. This is used to compute
        your training readiness score and, if AI Coaching is enabled, included
        in the prompt sent to Gemini. Apple&apos;s use of this query is
        governed by Apple&apos;s{" "}
        <a
          href="https://www.apple.com/legal/privacy/data/en/weather/"
          target="_blank"
          rel="noreferrer"
        >
          WeatherKit privacy notice
        </a>
        .
      </p>

      <h3>Subscriptions and in-app purchases</h3>
      <p>
        RunToMax offers Pro (monthly, annual, lifetime) and AI Coaching
        (monthly, annual) subscriptions through Apple StoreKit. Apple processes
        your payment, manages your subscription, and shares only a subscription
        status with the app. We never receive your credit card, billing
        address, or Apple ID.
      </p>
      <p>
        If our build includes RevenueCat (a subscription-management library),
        RevenueCat receives an anonymous app user ID, your purchase receipt,
        and your entitlement status to validate subscriptions across devices.
        RevenueCat&apos;s practices are governed by their{" "}
        <a
          href="https://www.revenuecat.com/privacy/"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
        .
      </p>

      <h3>Bluetooth heart-rate strap (optional)</h3>
      <p>
        RunToMax can connect to a Bluetooth Low Energy heart-rate monitor
        (standard GATT 0x180D service) for higher-accuracy heart rate. The
        strap&apos;s name and peripheral UUID are stored locally for
        auto-reconnect. Heart-rate samples are written to HealthKit. Nothing
        from the strap is transmitted off your device.
      </p>

      <h3>Apple Watch ↔ iPhone bridge</h3>
      <p>
        RunToMax uses WatchConnectivity and a shared App Group to move workout
        data (UUID, times, distance, heart rate, cadence, elevation, splits,
        post-run findings) from the Watch app to the iPhone app, and then into
        HealthKit. This communication is on-device only.
      </p>

      <h3>Widgets</h3>
      <p>
        Quick Start, Weekly Stats, and Last Run widgets read from your local
        HealthKit and App Group. Widgets do not make network requests.
      </p>

      <h3>Product analytics and crash reporting</h3>
      <p>
        RunToMax uses{" "}
        <a href="https://posthog.com" target="_blank" rel="noreferrer">
          PostHog
        </a>{" "}
        as its product analytics provider, hosted on PostHog&apos;s EU cloud
        (<code>eu.i.posthog.com</code>) so your analytics data is processed
        within the European Union. PostHog helps us understand how the app is
        used so we can improve it. PostHog receives:
      </p>
      <ul>
        <li>
          Anonymous events describing what happens in the app (for example:
          &quot;started_run,&quot; &quot;opened_coaching,&quot;
          &quot;connected_strava,&quot; &quot;subscribed_pro&quot;).
        </li>
        <li>
          A randomly generated install identifier (not your IDFA, not your
          Apple ID).
        </li>
        <li>
          Device model, operating system version, app version, language, and
          time zone.
        </li>
        <li>
          Approximate location (city or country level) derived by PostHog from
          your IP address.
        </li>
        <li>
          Session start/end and session duration.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> send your name, email, raw GPS coordinates,
        run routes, individual heart-rate samples, or other HealthKit data to
        PostHog. Event properties are limited to feature-usage signals; we
        deliberately do not include health or performance metrics in event
        properties. Autocapture (which would record every tap automatically)
        is disabled, and session replay is off by default.
      </p>
      <p>
        PostHog&apos;s handling of this data is governed by their{" "}
        <a
          href="https://posthog.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="https://posthog.com/dpa" target="_blank" rel="noreferrer">
          Data Processing Addendum
        </a>
        .
      </p>
      <p>
        We may also collect crash reports and stability diagnostics (a stack
        trace, device model, and OS version — no personal content) to fix
        bugs.
      </p>
      <p>
        You can opt out of analytics in RunToMax Settings → Privacy →
        Analytics. Opting out stops further events from being sent from your
        device.
      </p>

      <h2>What we do not collect</h2>
      <ul>
        <li>No advertising, no IDFA, no third-party advertising trackers.</li>
        <li>
          No Firebase Analytics, Crashlytics, Sentry, Amplitude, or
          TelemetryDeck (unless explicitly disclosed above).
        </li>
        <li>No push notifications. APNs is not enabled.</li>
        <li>No CloudKit or iCloud sync of RunToMax data today.</li>
        <li>No camera, microphone, contacts, or calendar access.</li>
        <li>
          No Photos library access beyond letting you pick a single avatar
          image via the system PhotosPicker (we do not browse or scan your
          library).
        </li>
      </ul>

      <h2>Third-party services we may share data with</h2>
      <ul>
        <li>
          <strong>Apple</strong> — HealthKit, WeatherKit, StoreKit,
          WatchConnectivity (
          <a
            href="https://www.apple.com/legal/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            privacy
          </a>
          ).
        </li>
        <li>
          <strong>Strava</strong> — only if you connect it (
          <a
            href="https://www.strava.com/legal/privacy"
            target="_blank"
            rel="noreferrer"
          >
            privacy
          </a>
          ).
        </li>
        <li>
          <strong>Google</strong> — Gemini API, only if you enable AI Coaching
          (
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            privacy
          </a>
          ).
        </li>
        <li>
          <strong>RevenueCat</strong> — subscription validation, only if
          enabled in the shipped build (
          <a
            href="https://www.revenuecat.com/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            privacy
          </a>
          ).
        </li>
        <li>
          <strong>PostHog (EU cloud)</strong> — anonymous product analytics,
          opt-out available in Settings (
          <a
            href="https://posthog.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            privacy
          </a>
          ).
        </li>
      </ul>

      <h2>Data retention and deletion</h2>
      <p>
        Because RunToMax does not store your data on a server, deletion is
        controlled entirely by you:
      </p>
      <ul>
        <li>
          Deleting the RunToMax app removes all RunToMax-specific data
          (settings, tokens, cached state).
        </li>
        <li>
          Workouts, routes, and heart-rate samples remain in Apple Health
          unless you delete them in the Health app.
        </li>
        <li>
          To remove activities you uploaded to Strava, delete them on Strava
          and revoke RunToMax in your{" "}
          <a
            href="https://www.strava.com/settings/apps"
            target="_blank"
            rel="noreferrer"
          >
            Strava settings
          </a>
          .
        </li>
        <li>
          To delete analytics data tied to your install ID, contact us at{" "}
          <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a> and we
          will request deletion from PostHog.
        </li>
      </ul>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct,
        delete, or restrict the processing of your personal data, including
        under the EU/UK GDPR, the California Consumer Privacy Act (CCPA/CPRA),
        and similar laws. Because RunToMax does not maintain user accounts or
        a server, most of your data already lives on your device under your
        control. For analytics or third-party data, contact us at{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a> and we will
        respond within a reasonable time.
      </p>

      <h2>Children</h2>
      <p>
        RunToMax is not directed to children under 13, and we do not knowingly
        collect personal information from children under 13. If you believe a
        child has provided personal information to us, contact{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a> and we will
        delete it.
      </p>

      <h2>International transfers</h2>
      <p>
        Apple, Google, Strava, RevenueCat, and PostHog may process data
        outside your country. PostHog is hosted on its EU cloud for RunToMax.
        Each provider maintains its own safeguards for international
        transfers under their respective privacy policies linked above.
      </p>

      <h2>Security</h2>
      <p>
        Health data and location data are stored by Apple HealthKit, which is
        encrypted on-device. OAuth tokens are stored in the iOS Keychain.
        Network requests use HTTPS. No system is perfectly secure; if we
        become aware of a security incident that affects you, we will notify
        you as required by law.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy. The &quot;Effective&quot; date at
        the top reflects the latest version. Material changes will be
        announced in the app or by email if you&apos;ve given us one (for
        example, by joining the waitlist).
      </p>

      <h2>Contact</h2>
      <p>
        Questions, requests, or concerns:{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}

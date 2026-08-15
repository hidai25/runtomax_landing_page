import type { Metadata } from "next";
import LegalLayout from "../_components/LegalLayout";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/app/_lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How RunToMax handles HealthKit, location, optional cloud coaching, WeatherKit, subscriptions, consent-based analytics, and waitlist data.",
  alternates: { canonical: "/privacy/" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate="August 3, 2026"
      intro={
        <p>
          RunToMax is a running app for iPhone and Apple Watch. It does not
          require a RunToMax account, show ads, or sell personal data. Your
          workout history, routes, and health information are stored through
          Apple Health on your devices. Limited data leaves your device only
          for the features described below, with your permission where
          required.
        </p>
      }
    >
      <h2>Summary</h2>
      <ul>
        <li>
          RunToMax 1.0 is for adults aged 18 and older. Its age gate stores
          only the eligibility result, policy version, and confirmation time.
        </li>
        <li>No RunToMax account, email login, or password.</li>
        <li>
          Workouts, GPS routes, heart rate, and health history are stored in
          Apple Health and local app storage.
        </li>
        <li>
          Pro is one Apple subscription, offered monthly or annually. It
          includes both Cockpit and optional cloud coaching.
        </li>
        <li>
          Cloud coaching is off until you explicitly opt in. It sends a
          minimized summary through a RunToMax proxy to Google Gemini;
          the app does not contact Gemini directly in production.
        </li>
        <li>
          Optional product and coaching analytics are off until you opt in.
          RunToMax uses PostHog US Cloud with IP geolocation disabled and does
          not send exact workout or health values.
        </li>
        <li>
          The launch version has no public Strava integration, RevenueCat,
          Lifetime purchase, advertising, IDFA, or website analytics.
        </li>
      </ul>

      <h2>Who we are</h2>
      <p>
        &quot;RunToMax,&quot; &quot;we,&quot; &quot;us,&quot; and
        &quot;our&quot; refer to Hidai Bar-Mor, an individual sole developer
        who develops and operates the RunToMax iPhone and Apple Watch
        application. Contact:{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Data the app processes</h2>

      <h3>Health and fitness data (Apple HealthKit)</h3>
      <p>
        With your permission, RunToMax reads data needed for its training and
        recovery features, including workouts, workout routes, heart rate,
        active energy, distance, steps, running speed, body mass, resting heart
        rate, stride length, vertical oscillation, ground contact time, heart
        rate variability, sleep, VO₂ max, and running power. RunToMax writes
        workouts and related samples that it records back to Apple Health.
      </p>
      <p>
        RunToMax does not use HealthKit data for advertising or sell it to data
        brokers. You can review or revoke Health access in iOS Settings →
        Privacy &amp; Security → Health.
      </p>

      <h3>Location and routes (Core Location)</h3>
      <p>
        During an outdoor workout, RunToMax processes precise GPS coordinates,
        elevation, speed, and the resulting route. Location is used only while
        you are using the app or actively recording a workout. It is not used
        to track you outside an active workout. Completed routes are stored in
        Apple Health as part of the workout.
      </p>

      <h3>Profile and training settings</h3>
      <p>
        Details such as your first name, avatar, birth year, biological sex,
        body mass, heart-rate settings, race goals, plan answers, shoes, and
        unit preferences are stored locally in an Apple App Group shared by
        the iPhone app, Watch app, and widgets. RunToMax does not operate an
        account database containing this profile.
      </p>
      <p>
        A profile birth year is optional physiology data for heart-rate-zone
        and calorie calculations. It is separate from the adult-eligibility
        check. The eligibility check does not ask for or retain a date of
        birth; it records only whether you confirmed you are 18 or older, the
        policy version, and the confirmation time.
      </p>

      <h3>Cloud coaching (optional, included with Pro)</h3>
      <p>
        Cockpit and cloud coaching are included in the same Pro subscription;
        cloud coaching is not a separate subscription. A Pro entitlement alone
        does not send data. You must also explicitly enable cloud coaching. If
        you do not enable it—or if the secured service is unavailable—the app
        uses its deterministic on-device coaching instead.
      </p>
      <p>
        When enabled, RunToMax prepares a minimized coaching context from
        finalized, validated facts. It may include pace, heart-rate summaries,
        cadence, elevation gain, running-form averages, time in heart-rate
        zones, splits, training load and readiness, sleep and recovery
        summaries, recent comparable-run summaries, plan context, and weather.
        The language model is asked to explain those supplied facts; it is not
        the source of record for distance, pace, splits, recovery, or plan
        calculations.
      </p>
      <p>
        The app sends that context over HTTPS to a RunToMax coaching proxy,
        which checks that the request is well-formed and forwards it to a
        billing-enabled Google Gemini service. The production app does not
        contain a Gemini API secret and does not call Gemini directly, so the
        key cannot be extracted from the app. The proxy does not log or store
        the prompt or the response; it records status codes and timings only,
        and it does not keep coaching content in any RunToMax database.
      </p>
      <p>
        We do <strong>not</strong> include your name, email address, raw GPS
        coordinates, route polyline, contacts, photos, or individual
        heart-rate samples in the coaching request. Google may process the
        request and limited technical or abuse-monitoring logs under its{" "}
        <a
          href="https://ai.google.dev/gemini-api/terms"
          target="_blank"
          rel="noreferrer"
        >
          Gemini API Additional Terms
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
        . RunToMax uses a paid Gemini service so Google states that prompts and
        responses are not used to improve its products. Google states that it
        retains prompts, their context, and responses for 55 days for abuse
        detection, security, and required legal disclosures. If content is
        flagged, authorized Google employees may review it.
      </p>
      <p>
        Google&apos;s current Gemini API terms require users of API clients to
        be at least 18. RunToMax 1.0 is therefore an adult-only product, not
        merely an app with an adult-only coaching toggle. You can withdraw
        cloud-coaching consent at any time in Settings → Privacy → AI coaching;
        future cloud requests stop immediately.
      </p>

      <h3>Weather and map services (Apple)</h3>
      <p>
        RunToMax may send the coordinate or map region needed to Apple Maps or
        WeatherKit to render a map, obtain elevation context, or request
        temperature, humidity, and wind for heat-aware guidance. It does not
        send your training history or RunToMax identity with that query. See
        Apple&apos;s{" "}
        <a
          href="https://www.apple.com/legal/privacy/data/en/weather/"
          target="_blank"
          rel="noreferrer"
        >
          Weather privacy notice
        </a>
        .
      </p>

      <h3>Subscriptions</h3>
      <p>
        RunToMax offers Pro as a monthly or annual auto-renewing subscription
        through Apple StoreKit. Pro includes Cockpit and cloud coaching. Apple
        processes payment and provides the app with purchase and entitlement
        status. RunToMax never receives your full card number, billing address,
        or Apple ID. The launch build does not use RevenueCat and does not offer
        a Lifetime purchase.
      </p>

      <h3>Bluetooth heart-rate monitors</h3>
      <p>
        If you pair a compatible Bluetooth heart-rate monitor, its name and
        peripheral identifier are stored locally for reconnection. Samples are
        used during the workout and may be written to Apple Health. They are
        not sent to RunToMax.
      </p>

      <h3>Apple Watch, iPhone, and widgets</h3>
      <p>
        WatchConnectivity and the shared App Group transfer workout data and
        settings between your Apple devices. Widgets read local Apple Health
        and App Group data. These features do not send your training history to
        a RunToMax account server.
      </p>
      <p>
        App-local workout-detail archives, derived fingerprints, generated
        coaching caches, imported-run files, RPE ratings, plan execution
        feedback, and manually entered sleep use iOS data protection and are
        excluded from device backups. After reinstalling or restoring a
        device, reconstructable data may be rebuilt from Apple Health or
        recovered from the Watch where available. Imported runs that were not
        written to Apple Health may need to be imported again. Apple Health
        backup and synchronization are controlled separately by Apple and your
        device settings.
      </p>

      <h3>Consent-based product analytics</h3>
      <p>
        RunToMax uses{" "}
        <a href="https://posthog.com" target="_blank" rel="noreferrer">
          PostHog
        </a>{" "}
        US Cloud only after you explicitly opt in. Analytics may include a
        random installation identifier, app, build and device information,
        categorical feature events, and categorical or broad-bucket fitness
        and coaching events. Examples include workout type, broad completion
        ranges, training-plan feedback, and whether you confirmed or corrected
        an interpretation. RunToMax configures PostHog not to use the request
        IP for geolocation. Autocapture is off, and session replay is disabled
        in production.
      </p>
      <p>
        We do not send your name, email, exact pace, distance, heart-rate or
        sleep values, location, route, workout identifier or workout time, or
        coaching text to PostHog. You can turn analytics off at any time in
        Settings → Privacy → Optional analytics.
        See PostHog&apos;s{" "}
        <a href="https://posthog.com/privacy" target="_blank" rel="noreferrer">
          Privacy Policy
        </a>
        .
      </p>

      <h2>Website and waitlist</h2>
      <p>
        The RunToMax website does not use Google Analytics, advertising
        trackers, or non-essential analytics cookies. If you join the waitlist,
        the email address you submit is processed by{" "}
        <a href="https://web3forms.com" target="_blank" rel="noreferrer">
          Web3Forms
        </a>{" "}
        to deliver the signup to RunToMax. We use it only for TestFlight,
        launch, and closely related RunToMax updates. You can ask us to remove
        it at any time by emailing{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>. See Web3Forms&apos;{" "}
        <a
          href="https://web3forms.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
        .
      </p>

      <h2>What RunToMax does not use at launch</h2>
      <ul>
        <li>No advertising, IDFA, or third-party advertising trackers.</li>
        <li>No public Strava integration in the launch build.</li>
        <li>No RevenueCat subscription processing.</li>
        <li>No Lifetime purchase or separate AI Coaching subscription.</li>
        <li>No Google Analytics on the website.</li>
        <li>No RunToMax email/password account or cloud training-history sync.</li>
        <li>No contacts or calendar access.</li>
      </ul>

      <h2>Service providers</h2>
      <ul>
        <li>
          <strong>Apple</strong> — HealthKit, Core Location, Maps, WeatherKit,
          StoreKit, WatchConnectivity, and App Store services ({" "}
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
          <strong>Google</strong> — paid Gemini processing, only after an
          eligible Pro user explicitly enables cloud coaching ({" "}
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
          <strong>PostHog US Cloud</strong> — minimized product analytics, only
          after opt-in ({" "}
          <a href="https://posthog.com/privacy" target="_blank" rel="noreferrer">
            privacy
          </a>
          ).
        </li>
        <li>
          <strong>Web3Forms</strong> — website waitlist form delivery, only if
          you submit your email ({" "}
          <a
            href="https://web3forms.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            privacy
          </a>
          ).
        </li>
      </ul>

      <h2>Retention and deletion</h2>
      <ul>
        <li>
          Deleting RunToMax removes its local settings and cached app data.
          Workouts in Apple Health remain until you delete them in the Health
          app.
        </li>
        <li>
          The coaching proxy does not maintain a RunToMax training-history
          account or intentionally persist prompt and response content. Google
          may keep limited paid-service logs as described above.
        </li>
        <li>
          Turning analytics off stops future PostHog events. To request deletion
          of analytics associated with your random install identifier, contact
          us.
        </li>
        <li>
          Waitlist email addresses are kept until you unsubscribe, request
          deletion, or they are no longer needed for the launch communications
          described above.
        </li>
      </ul>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct,
        delete, restrict, or object to processing of personal data. Most
        training data is already under your control on your device. For
        analytics, waitlist, or cloud-coaching questions, email{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Age eligibility</h2>
      <p>
        RunToMax 1.0 is intended only for adults aged 18 and older. We do not
        knowingly provide the app to or process personal information from
        anyone under 18, and parental consent does not make an under-18 person
        eligible for this release. The iPhone app fails closed until an adult
        eligibility result is established. On iOS 26 or later, you may use
        Apple&apos;s Declared Age Range service, which shares a coarse range rather
        than a birth date. RunToMax immediately reduces the response to an
        eligibility result and does not retain the range or its declaration
        source. If Apple&apos;s service is unavailable or declined, the app offers
        an explicit adult confirmation. The Apple Watch app requires the
        phone&apos;s current eligibility result before a workout can start, and
        complications hide cached run statistics until that result is current.
      </p>
      <p>
        If we learn that an under-18 person has used RunToMax or provided data,
        we will disable access and take appropriate steps to delete data under
        our control. Contact <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a> for an
        age-eligibility or deletion concern.
      </p>

      <h2>International processing</h2>
      <p>
        Apple, Google, PostHog, and Web3Forms may process data outside your
        country, including in the United States. Their safeguards and transfer
        practices are described in the policies linked above. RunToMax
        minimizes what is sent and requires opt-in for cloud coaching and
        product analytics.
      </p>

      <h2>Security</h2>
      <p>
        Apple Health protects health and route data on your devices. Network
        requests use HTTPS. Cloud coaching uses a server-side credential rather
        than embedding a Gemini secret in the app. The proxy validates request
        shape, applies a strict body-size ceiling, and uses a capped credential.
        No system is perfectly secure; if we
        learn of an incident that requires notice, we will notify affected users
        as required by law.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy as the product changes. The effective
        date above identifies the current version. Material changes will be
        announced in the app or by email when we have an appropriate address.
      </p>

      <h2>Contact</h2>
      <p>
        Questions, requests, or concerns:{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}

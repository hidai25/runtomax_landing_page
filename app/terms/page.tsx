import type { Metadata } from "next";
import LegalLayout from "../_components/LegalLayout";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/app/_lib/contact";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the RunToMax app and any subscriptions purchased through it.",
  alternates: { canonical: "/terms/" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      effectiveDate="August 3, 2026"
      intro={
        <p>
          These Terms govern your use of the RunToMax iPhone and Apple Watch
          app and any subscriptions you buy through it. Please read them. If
          you don&apos;t agree, don&apos;t use the app.
        </p>
      }
    >
      <h2>1. Who these Terms are between</h2>
      <p>
        These Terms are an agreement between you and Hidai Bar-Mor, an
        individual sole developer who operates RunToMax (&quot;RunToMax,&quot;
        &quot;we,&quot; &quot;us&quot;). By installing or using the RunToMax
        app you agree to these Terms and to our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        <strong>You must be at least 18 years old to use RunToMax.</strong> This
        requirement applies to the entire iPhone app, Apple Watch app,
        training plans, subscriptions, and cloud or on-device coaching. The
        launch version is not offered to children or teenagers, and a parent
        or guardian cannot consent to its use by someone under 18.
      </p>
      <p>
        Before any HealthKit authorization, subscription, analytics, training,
        or coaching service starts, the app checks the 18+ boundary. On iOS 26
        or later, you may use Apple&apos;s privacy-preserving Declared Age Range
        service; if it is unavailable or you decline it, you may explicitly
        confirm that you are an adult. RunToMax immediately reduces any Apple
        response to an eligibility result and does not retain the range or its
        source. It keeps only that result, the age-policy version, and the
        confirmation time—not your date of birth. An optional birth year used
        locally for physiology calculations is separate from this record.
      </p>

      <h2>3. The app</h2>
      <p>
        RunToMax is a running app that records workouts on Apple Watch and
        iPhone, computes training metrics, generates adaptive plans, and
        offers Apple WeatherKit context and optional Google Gemini cloud
        coaching. Purchases use Apple StoreKit. The launch version does not
        provide a public Strava integration or use RevenueCat. Your training
        history is stored through Apple HealthKit and local app storage. A
        RunToMax proxy, which holds the Gemini API key server-side so the app
        never carries it, processes minimized cloud-coaching requests
        transiently; it is not a RunToMax account or cloud training-history
        service. The Privacy Policy describes what that proxy does and does not
        currently verify.
      </p>

      <h2>4. License</h2>
      <p>
        Subject to these Terms, we grant you a limited, personal,
        non-exclusive, non-transferable, revocable license to install and use
        RunToMax on Apple devices that you own or control, for your own
        non-commercial use. All rights not expressly granted are reserved.
      </p>

      <h2>5. Subscriptions and purchases</h2>
      <p>
        RunToMax offers one Pro subscription through Apple&apos;s App Store
        using StoreKit, with monthly and annual billing options. Pro includes
        both Cockpit and cloud coaching; cloud coaching is not sold as a
        separate subscription. The launch version does not offer a Lifetime
        purchase. Pricing, billing cycles, and any introductory terms are
        shown in the app before purchase and on your Apple ID subscription
        page.
      </p>
      <p>
        Apple processes all payments. Your purchase is also subject to{" "}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/"
          target="_blank"
          rel="noreferrer"
        >
          Apple&apos;s Media Services Terms
        </a>
        . Subscriptions auto-renew at the price and interval disclosed at
        purchase, until you cancel. Cancel any time in iOS Settings →{" "}
        <em>your name</em> → Subscriptions. Refunds are issued by Apple under
        their refund policy; we cannot issue refunds directly.
      </p>

      <h2>6. Your account, your data</h2>
      <p>
        RunToMax does not require an account. The data you generate (workouts,
        routes, profile, settings) lives on your device. Sensitive app-local
        workout archives, derived caches, effort/plan feedback, and manually
        entered sleep are excluded from device backups;
        after reinstall or restore they may be rebuilt from Apple Health or the
        Watch where possible, while imported runs not stored in Apple Health
        may need to be imported again. You are responsible for maintaining
        device security and for configuring Apple Health backup or sync if you
        wish to preserve Health data. If you explicitly
        enable cloud coaching, the minimized data described in the{" "}
        <a href="/privacy">Privacy Policy</a> is processed to provide that
        feature.
      </p>

      <h2>7. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Reverse engineer, decompile, or attempt to extract source code from
          the app, except where applicable law expressly permits it.
        </li>
        <li>
          Use the app to violate any law, infringe anyone&apos;s rights, or
          interfere with other users or third-party services.
        </li>
        <li>
          Attempt to bypass subscription checks, app verification, rate
          limits, or other safeguards protecting cloud coaching.
        </li>
        <li>
          Resell, rent, or sublicense the app or your subscription.
        </li>
      </ul>

      <h2>8. Health and safety disclaimer</h2>
      <p>
        <strong>
          RunToMax is not a medical device and does not provide medical
          advice, diagnosis, or treatment.
        </strong>{" "}
        Training plans, AI Coaching notes, heart-rate zones, training-load
        and recovery scores, race predictions, and any other guidance from
        the app are for informational and motivational purposes only.
      </p>
      <p>
        Consult a qualified healthcare professional before starting,
        changing, or stopping any exercise program, especially if you have a
        medical condition, are pregnant, or are recovering from injury. If
        you experience pain, dizziness, shortness of breath, or any symptom
        that concerns you, stop and seek medical attention. You are
        responsible for your own safety while running, including obeying
        traffic laws and being aware of your surroundings.
      </p>
      <p>
        AI-generated coaching content is produced by a language model and may
        be inaccurate, incomplete, or inappropriate for your situation. Do
        not rely on it as a substitute for professional advice.
      </p>

      <h2>9. Third-party services</h2>
      <p>
        RunToMax uses services operated by Apple and, depending on your
        choices, Google Gemini and PostHog. Those services have their own terms
        and privacy policies. RunToMax is not responsible for the availability,
        accuracy, or content of third-party services. If you enable cloud
        coaching, you agree to{" "}
        <a
          href="https://ai.google.dev/gemini-api/terms"
          target="_blank"
          rel="noreferrer"
        >
          Google&apos;s Gemini API Additional Terms
        </a>
        .
      </p>

      <h2>10. Intellectual property</h2>
      <p>
        The RunToMax app, including its code, design, icons, copy, and
        algorithms, is owned by us and is protected by intellectual-property
        laws. The RunToMax name and logo are our trademarks. You may not use
        them without our prior written permission.
      </p>
      <p>
        You retain ownership of the workout data you generate. By using
        cloud coaching, you grant us the limited right to transmit the
        minimized data described in our{" "}
        <a href="/privacy">Privacy Policy</a> to those services on your
        behalf, solely so the integration can function.
      </p>

      <h2>11. Beta and pre-release builds</h2>
      <p>
        TestFlight and other pre-release builds are provided for evaluation
        only, may contain bugs, and may be modified, suspended, or
        discontinued at any time without notice. Pre-release builds are
        provided &quot;as is&quot; with no warranty.
      </p>

      <h2>12. Disclaimer of warranties</h2>
      <p>
        The app is provided <strong>&quot;as is&quot;</strong> and{" "}
        <strong>&quot;as available.&quot;</strong> To the maximum extent
        permitted by law, we disclaim all warranties, whether express,
        implied, or statutory, including warranties of merchantability,
        fitness for a particular purpose, non-infringement, accuracy,
        reliability, and uninterrupted operation. We do not warrant that GPS,
        heart rate, or any computed metric will be accurate.
      </p>

      <h2>13. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, RunToMax and its developer
        will not be liable for any indirect, incidental, special,
        consequential, exemplary, or punitive damages, or for any loss of
        profits, revenue, data, goodwill, or training, arising out of or
        related to your use of the app, even if we have been advised of the
        possibility of such damages. Our total aggregate liability for any
        claim arising out of or related to the app or these Terms will not
        exceed the greater of (a) the amount you paid us through the App
        Store for RunToMax in the twelve months before the claim, or (b) USD
        $50.
      </p>

      <h2>14. Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold us harmless from any claim,
        liability, or expense (including reasonable attorneys&apos; fees)
        arising from your misuse of the app, your violation of these Terms,
        or your violation of any law or third-party right.
      </p>

      <h2>15. Termination</h2>
      <p>
        You may stop using the app and delete it at any time. We may suspend
        or terminate your access to the app or to optional features
        (including AI Coaching) if you breach these Terms or if continued
        provision becomes legally or commercially impractical. Sections that
        by their nature should survive termination (including disclaimers,
        limitation of liability, indemnification, and dispute resolution)
        will survive.
      </p>

      <h2>16. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. The &quot;Effective&quot;
        date at the top reflects the latest version. If a change is material,
        we&apos;ll give reasonable notice in the app or by email. Continued
        use of the app after a change means you accept the updated Terms.
      </p>

      <h2>17. Apple-specific terms</h2>
      <p>
        These Terms are between you and us, not Apple, and Apple is not
        responsible for the app or its content. Apple has no obligation to
        provide maintenance or support for the app. To the maximum extent
        permitted by law, Apple has no warranty obligation with respect to
        the app, and any claims, losses, liabilities, damages, costs, or
        expenses attributable to any failure to conform to a warranty will
        be our responsibility, not Apple&apos;s. Apple is not responsible for
        addressing claims by you or any third party relating to the app,
        including product-liability claims, consumer-protection claims, or
        intellectual-property claims. Apple and its subsidiaries are
        third-party beneficiaries of these Terms and may enforce them
        against you.
      </p>

      <h2>18. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of the State of Israel, excluding
        its conflict-of-laws rules and excluding the UN Convention on
        Contracts for the International Sale of Goods. The competent courts
        of Tel Aviv–Jaffa, Israel, will have exclusive jurisdiction over any
        dispute arising out of or related to these Terms or the app.
      </p>
      <p>
        Nothing in these Terms limits any non-waivable rights you may have as
        a consumer under the mandatory laws of your country of residence
        (including, where applicable, EU and UK consumer-protection laws and
        U.S. state consumer-protection laws). Where local law requires that a
        dispute be heard locally or under local consumer-protection rules,
        those rules apply.
      </p>

      <h2>19. Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}

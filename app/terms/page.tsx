import type { Metadata } from "next";
import LegalLayout from "../_components/LegalLayout";

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
      effectiveDate="May 5, 2026"
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
        individual sole developer based in Israel, who operates RunToMax
        (&quot;RunToMax,&quot; &quot;we,&quot; &quot;us&quot;). By installing
        or using the RunToMax app you agree to these Terms and to our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years old to use RunToMax. If you are under
        the age of majority where you live, you must have a parent or legal
        guardian agree to these Terms on your behalf.
      </p>

      <h2>3. The app</h2>
      <p>
        RunToMax is a running app that records workouts on Apple Watch and
        iPhone, computes training metrics, generates adaptive plans, and
        offers optional integrations with third-party services (Strava,
        Google Gemini for AI coaching, Apple WeatherKit, and Apple
        StoreKit/RevenueCat for subscriptions). The app stores your training
        data on your device through Apple HealthKit. We do not run a server
        that stores your training data.
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
        RunToMax offers paid subscriptions (such as Pro and AI Coaching) and
        non-recurring purchases (such as a lifetime Pro license) through
        Apple&apos;s App Store using StoreKit. Pricing, billing cycles, and
        free-trial terms are shown in the app at the point of purchase and
        are also visible on your Apple ID&apos;s subscription page.
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
        routes, profile, settings) lives on your device. You are responsible
        for maintaining device security, for backing up your iCloud Health
        data through Apple if you wish to preserve it, and for what you choose
        to share with optional third-party integrations like Strava.
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
          Misrepresent activity data (for example, by spoofing GPS or
          fabricating workouts) when uploading to Strava through RunToMax.
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
        RunToMax integrates with services operated by Apple, Strava, Google,
        and (where enabled) RevenueCat and a product analytics provider.
        Those services have their own terms and privacy policies. RunToMax is
        not responsible for the availability, accuracy, or content of those
        third-party services. If you connect Strava, you agree to{" "}
        <a
          href="https://www.strava.com/legal/terms"
          target="_blank"
          rel="noreferrer"
        >
          Strava&apos;s Terms
        </a>
        . If you enable AI Coaching, you agree to{" "}
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
        optional integrations (such as Strava upload or AI Coaching) you
        grant us the limited right to transmit the data described in our{" "}
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
        <a href="mailto:hello@runtomax.com">hello@runtomax.com</a>.
      </p>
    </LegalLayout>
  );
}

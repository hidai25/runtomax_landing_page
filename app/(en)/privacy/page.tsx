import type { Metadata } from "next";
import LegalLayout from "@/app/_components/LegalLayout";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/app/_lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How RunToMax handles HealthKit, location, optional cloud coaching and account sync, WeatherKit, the 3D flyover's map and terrain tiles, free use and subscriptions, consent-based analytics, and website data.",
  alternates: { canonical: "/privacy/" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate="October 8, 2026"
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
        <li>
          No account is required. Optional Sign in with Apple account sync is
          planned for version 1.3 and is described below; no email login or
          password is required.
        </li>
        <li>
          Workouts, GPS routes, heart rate, and health history are stored in
          Apple Health and local app storage. When optional account sync is
          offered and enabled, a selected training archive is also stored by
          RunToMax using Cloudflare, without raw GPS routes.
        </li>
        <li>
          Basic recording is free and needs no purchase. Pro is one Apple
          subscription, offered monthly or annually, for ongoing coaching,
          including optional cloud coaching; three coached runs can be tried
          once without a subscription.
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
        the iPhone app, Watch app, and widgets. When optional account sync is
        offered and enabled, selected settings and health-profile values are
        included in its archive as described below; your profile first name
        and avatar are excluded.
      </p>
      <p>
        A profile birth year is optional physiology data for heart-rate-zone
        and calorie calculations. It is separate from the adult-eligibility
        check. The eligibility check does not ask for or retain a date of
        birth; it records only whether you confirmed you are 18 or older, the
        policy version, and the confirmation time.
      </p>

      <h3 id="training-sync">Account sync (optional, planned for version 1.3)</h3>
      <p>
        Account sync is being tested in controlled development builds and is
        planned for version 1.3; it is not yet available to everyone in the
        App Store version. The following describes the feature when it is
        offered. You can use RunToMax without a sync account. A French version
        of this disclosure is <a href="#synchronisation">available below</a>.
      </p>
      <p>
        Choosing Continue with Apple beside the sync explanation gives your
        consent to save the training data described here with RunToMax for
        recovery after reinstalling or changing phones. This includes your
        explicit consent to sync health data. Uploads then run automatically
        when connectivity and iOS scheduling allow; you do not approve each
        upload. Health access, optional analytics, and AI coaching have separate
        permissions. Enabling sync does not enable either analytics or AI coaching,
        and recovery does not restore those permissions on a new phone.
      </p>
      <p>
        The archive includes workout details and summaries, workout heart-rate
        measurements, pace, cadence, elevation, splits and intervals, training
        plans and progress, effort ratings, selected settings, and short workout
        stories and saved coaching decisions, including accepted plan changes.
        The health profile includes saved weight, birth year, biological sex,
        maximum, resting and threshold heart-rate settings, threshold pace, and
        manual VO₂ max. Saved training-intake answers about breaks, discomfort
        or returning from injury, training days and goals, units, supported
        Watch preferences, shoes, and workout or plan labels are also included.
      </p>
      <p>
        Sync excludes raw GPS coordinates and routes, the profile first name,
        avatar and Contacts data, sensor diagnostic logs, Apple Weather readings,
        separate archives of daily HRV, resting-heart-rate and sleep readings,
        and detailed reasons behind historical coaching decisions. Saved
        resting-heart-rate and other physiological profile settings remain
        included. This is not a copy of your complete Apple Health database.
        Recovery restores the latest completed sync; an unfinished upload or
        data lost before sync was enabled may not be recoverable.
      </p>
      <p>
        Sign in with Apple supplies the identifier used to reconnect to your
        account. We do not request your name or email from Apple. A protected
        account identifier derived from that Apple identifier, account and
        consent records, encrypted Apple credentials, session records and
        short-lived request-limit counters support authentication and security.
        The account identifier is still linked to you; hashing it does not make
        your training anonymous. Sign in with the same Apple account to recover
        your saved history.
      </p>
      <p>
        Cloudflare processes and stores sync data on our behalf. The service
        uses HTTPS and encrypts training objects, the archive index and Apple
        refresh credentials before storage. The RunToMax service holds the keys
        and can decrypt this data for authenticated recovery; this is not
        end-to-end encryption. Training objects and the account database use
        Cloudflare storage configured for the European Union. Cloudflare
        Workers and associated security processing can operate globally, so
        EU storage does not mean that all processing occurs in the EU. See
        Cloudflare&apos;s <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">Privacy Policy</a>
        {" "}and <a href="https://www.cloudflare.com/cloudflare-customer-dpa/" target="_blank" rel="noreferrer">Data Processing Addendum</a>,
        including its international-transfer safeguards. We use synced data
        for training-history recovery and operating and securing sync, not
        advertising, tracking, product analytics, or training AI models. This
        sync service does not send the archive to Google or PostHog.
      </p>
      <p>
        Turn off Automatic sync in Settings → Account &amp; sync to withdraw
        consent to new uploads. Your last saved history stays in the account
        until you delete it. Delete sync account removes the server history
        while keeping training on this phone. Delete My Data also removes local
        app data, with a separate choice for RunToMax workouts in Apple Health.
        Neither action cancels an App Store subscription. Uninstalling the app
        alone does not delete a sync account.
      </p>
      <p>
        When the service accepts an account-deletion request, it blocks normal
        account access and further uploads before cleanup. If cleanup or Apple
        credential revocation fails, deletion remains pending and is retried;
        the app shows that status. After successful cleanup, minimal account
        deletion records are retained to prevent late uploads from recreating
        data. Their removal is targeted for 90 days after completion, subject
        to a successful final cleanup check. Pending cleanup records and
        credentials needed for revocation remain until those retries succeed;
        90 days is not a maximum for unresolved failures. Completed deletion
        records contain no workout archive. During normal sync, training
        objects more than seven days old that are no longer referenced by the
        current archive are eligible for cleanup.
      </p>
      <p>
        Cloudflare&apos;s database recovery history can retain earlier database
        records for up to 30 days, depending on the Cloudflare plan, after they
        are removed from the live database.
        Those recovery records are separate from the live service and do not
        make deleted training objects available through the app. This database
        window is not a promise about physical erasure of every provider-managed
        storage copy. For access, correction, a copy of your sync data or deletion
        help, contact <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
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

      <h3>3D flyover ground modes (Apple Maps, AWS, Esri)</h3>
      <p>
        The 3D flyover replay of a run is available to every user from
        version 1.3.2. Its ground modes are off by default: nothing is fetched
        until you choose one in the Flyover view, and fetched tiles are cached
        on your device. <strong>Terrain</strong> downloads elevation tiles
        from the public Terrain Tiles dataset hosted by Amazon Web Services;
        AWS receives the tile coordinates covering your route — a coarse
        indication of where you ran — and no identity or training data.{" "}
        <strong>Realistic</strong> draws Apple Maps satellite imagery around
        your route inside the app only; it is not included in exported videos,
        and Apple receives the map region needed to render it, as described
        above. In versions before 1.3.2 the satellite ground mode requested
        imagery tiles from Esri World Imagery instead, with the same
        tile-coordinate request going to Esri.
      </p>

      <h3>Subscriptions and the coached-run offer</h3>
      <p>
        Basic recording needs no purchase. RunToMax offers Pro as a monthly or
        annual auto-renewing subscription through Apple StoreKit; Pro includes
        ongoing coaching and cloud coaching. To offer the three free coached
        runs once per eligible user, the app keeps a minimal local record of
        activation, used-run count and completion in protected storage and the
        device Keychain, mirrored to the paired Apple Watch. That record
        contains no health values or run identifiers, is separate from your
        workout history, and is not restored by deleting runs or reinstalling.
        The app also reads your StoreKit purchase history on the device to
        check eligibility; it is not sent to RunToMax. Apple processes payment
        and provides the app with purchase and entitlement status. RunToMax never receives your full card number, billing address,
        or Apple ID through StoreKit. Optional Sign in with Apple account sync
        uses a separate account identifier as explained above. The launch build
        does not use RevenueCat and does not offer
        a Lifetime purchase.
      </p>

      <h3>Bluetooth heart-rate monitors</h3>
      <p>
        If you pair a compatible Bluetooth heart-rate monitor, its name and
        peripheral identifier are stored locally for reconnection. Samples are
        used during the workout and may be written to Apple Health. Recorded
        workout heart-rate measurements are included if you enable optional
        account sync; the monitor name and peripheral identifier are not.
      </p>

      <h3>Apple Watch, iPhone, and widgets</h3>
      <p>
        WatchConnectivity and the shared App Group transfer workout data and
        settings between your Apple devices. Widgets read local Apple Health
        and App Group data. These features do not send your training history to
        a RunToMax account server.
      </p>
      <p>
        Workout-detail archives, the per-run records the Apple Watch sends to
        your iPhone, use iOS data protection and are included in your own
        iCloud or computer device backup, so restoring that backup can preserve
        each run&apos;s type and analysis. iCloud backups are encrypted.
        Computer backup encryption is optional; we recommend enabling it.
        Your backups are controlled by your device and backup settings and are
        not themselves sent to a RunToMax server. Optional account sync is a
        separate service for the selected training archive described above.
        Deleting your data in RunToMax removes these
        archives from the device; device backups made earlier keep them until
        you delete or replace those backups. Derived fingerprints, generated coaching caches,
        imported-run files, RPE ratings, plan execution feedback, and manually
        entered sleep also use iOS data protection and are excluded from
        device backups. After reinstalling or restoring a device, that data
        may be rebuilt from Apple Health or recovered from the Watch where
        available. Imported runs that were not written to Apple Health may
        need to be imported again. Apple Health backup and synchronization are
        controlled separately by Apple and your device settings.
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

      <h2>Website</h2>
      <p>
        The RunToMax website is a static site. It does not use Google
        Analytics, advertising trackers, non-essential analytics cookies, or
        signup forms. The only way to send us information from the website is
        to email <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>, and we use
        what you send only to reply to you. Links to the App Store are handled
        by Apple under Apple&apos;s privacy policy.
      </p>

      <h2>What RunToMax does not use at launch</h2>
      <ul>
        <li>No advertising, IDFA, or third-party advertising trackers.</li>
        <li>No public Strava integration in the launch build.</li>
        <li>No RevenueCat subscription processing.</li>
        <li>No Lifetime purchase or separate AI Coaching subscription.</li>
        <li>No Google Analytics on the website.</li>
        <li>
          No RunToMax email/password account. Optional training-history sync
          with Sign in with Apple is planned for version 1.3; it is currently
          limited to controlled development testing.
        </li>
        <li>No contacts or calendar access.</li>
      </ul>

      <h2>Service providers</h2>
      <ul>
        <li>
          <strong>Apple</strong> — HealthKit, Core Location, Maps (including the
          flyover&apos;s satellite imagery), WeatherKit,
          StoreKit, WatchConnectivity, Sign in with Apple for optional account
          sync, and App Store services ({" "}
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
          <strong>Amazon Web Services</strong> — the public Terrain Tiles
          dataset behind the flyover&apos;s Terrain mode, only after you choose
          it ({" "}
          <a href="https://aws.amazon.com/privacy/" target="_blank" rel="noreferrer">
            privacy
          </a>
          ).
        </li>
        <li>
          <strong>Esri</strong> — World Imagery for the satellite ground mode
          in versions before 1.3.2, only after you chose it ({" "}
          <a href="https://www.esri.com/en-us/privacy/overview" target="_blank" rel="noreferrer">
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
      </ul>

      <p>
        <strong>Cloudflare</strong> also provides processing and EU-configured
        storage for optional account sync, with global service and security
        processing as explained in the <a href="#training-sync">sync disclosure</a>.
      </p>

      <h2>Retention and deletion</h2>
      <ul>
        <li>
          Deleting RunToMax removes its local settings and cached app data.
          Workouts in Apple Health remain until you delete them in the Health
          app. Uninstalling the app does not delete an optional sync account;
          use Delete sync account or contact us. Sync retention and pending
          deletion are detailed <a href="#training-sync">above</a>.
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
          Emails you send to us are kept only as long as needed to answer
          them and handle any follow-up; ask and we delete the thread.
        </li>
      </ul>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct,
        delete, restrict, or object to processing of personal data. Most
        training data is already under your control on your device. For
        analytics, cloud-coaching or optional account-sync questions, or to
        request a copy of data held by RunToMax, email{" "}
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
        Apple, Google, PostHog, and Cloudflare may process data outside your
        country, including in the United States. Their safeguards and transfer
        practices are described in the policies linked above. RunToMax
        minimizes what is sent and requires separate opt-in for cloud coaching,
        product analytics, and account sync. The EU storage configuration for
        sync does not restrict all Cloudflare processing to the EU; its transfer
        safeguards are linked in the sync disclosure.
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

      <section lang="fr" aria-labelledby="synchronisation">
        <h2 id="synchronisation">Synchronisation du compte — français</h2>
        <p>
          Cette information complète la politique ci-dessus pour la
          synchronisation facultative prévue dans la version 1.3. Elle est
          actuellement testée dans des versions de développement contrôlées et
          n’est pas encore disponible pour tous dans la version App Store.
          Vous pouvez utiliser RunToMax sans compte de synchronisation.
          Le responsable est Hidai Bar-Mor, développeur indépendant de RunToMax.
          Contact : <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
        </p>
        <p>
          En choisissant Continuer avec Apple à côté de l’explication, vous
          consentez à l’enregistrement des données décrites ici par RunToMax
          pour les retrouver après une réinstallation ou un changement de
          téléphone, y compris au transfert de vos données de santé. Les envois
          se font ensuite automatiquement lorsque la connexion et iOS le
          permettent, sans accord demandé à chaque envoi. Les autorisations
          Santé, d’analyse d’utilisation et de coaching par IA sont distinctes.
          La synchronisation n’active ni l’analyse ni le coaching par IA, et
          la restauration ne rétablit pas ces autorisations sur un nouveau téléphone.
        </p>
        <p>
          L’archive comprend les détails et résumés des séances, leurs mesures
          de fréquence cardiaque, l’allure, la cadence, le dénivelé, les temps
          de passage et intervalles, les plans et leur progression, vos
          évaluations d’effort, certains réglages, ainsi que les récits brefs
          de séances et les décisions de coaching enregistrées, dont les
          changements de plan acceptés. Le profil de santé comprend le poids,
          l’année de naissance, le sexe biologique, les réglages de fréquence
          cardiaque maximale, au repos et au seuil, l’allure au seuil et le
          VO₂ max saisi manuellement. Les réponses enregistrées concernant les
          pauses, les gênes ou la reprise après blessure, les jours et objectifs
          d’entraînement, les unités, les préférences Watch prises en charge,
          les chaussures et les noms de séances ou de plans sont aussi inclus.
        </p>
        <p>
          Sont exclus les coordonnées et tracés GPS bruts, le prénom du profil,
          l’avatar et les données Contacts, les journaux de diagnostic des
          capteurs, les données Apple Weather, les archives distinctes des
          mesures quotidiennes de VFC, de fréquence cardiaque au repos et de
          sommeil, ainsi que les raisons détaillées des anciennes décisions de
          coaching. Les réglages enregistrés de fréquence cardiaque au repos
          et les autres réglages physiologiques restent inclus. Ce n’est pas
          une copie complète d’Apple Santé. La restauration récupère la dernière
          synchronisation terminée ; un envoi inachevé ou des données perdues
          avant l’activation peuvent ne pas être récupérables.
        </p>
        <p>
          Se connecter avec Apple fournit l’identifiant permettant de retrouver
          votre compte. Nous ne demandons ni votre nom ni votre adresse e-mail
          à Apple. Un identifiant de compte protégé dérivé de cet identifiant
          Apple, les informations de compte et de consentement, des justificatifs
          Apple chiffrés, les sessions et des compteurs de requêtes de courte
          durée servent à l’authentification et à la sécurité. L’identifiant
          reste lié à vous : son hachage ne rend pas vos données anonymes.
          Reconnectez-vous avec le même compte Apple pour retrouver l’historique.
        </p>
        <p>
          Cloudflare traite et stocke ces données pour notre compte. Les
          transferts utilisent HTTPS. Le service chiffre les objets
          d’entraînement, l’index de l’archive et les jetons de renouvellement
          Apple avant stockage. RunToMax détient les clés et peut déchiffrer
          ces données pour une restauration authentifiée : ce n’est pas un
          chiffrement de bout en bout. Les objets d’entraînement et la base
          des comptes utilisent un stockage Cloudflare configuré pour l’Union
          européenne. Les Workers Cloudflare et les traitements de sécurité
          associés peuvent opérer dans le monde entier ; le stockage dans l’UE
          ne signifie donc pas que tous les traitements y ont lieu. Voir la
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer"> politique de confidentialité de Cloudflare</a>
          {" "}et son <a href="https://www.cloudflare.com/cloudflare-customer-dpa/" target="_blank" rel="noreferrer">accord de traitement des données</a>,
          notamment les garanties concernant les transferts internationaux.
          Les données servent à restaurer l’historique et à faire fonctionner
          et sécuriser la synchronisation, pas à la publicité, au suivi, à
          l’analyse d’utilisation ou à l’entraînement de modèles d’IA. Le
          service de synchronisation n’envoie pas l’archive à Google ou PostHog.
        </p>
        <p>
          Désactivez Synchronisation automatique dans Réglages → Compte et
          synchronisation pour retirer votre consentement aux nouveaux envois.
          L’historique déjà sauvegardé reste dans le compte jusqu’à sa
          suppression. Supprimer le compte de synchronisation efface l’historique
          du serveur et conserve l’entraînement sur ce téléphone. Supprimer mes
          données efface aussi les données locales de l’app, avec un choix
          distinct pour les séances RunToMax dans Apple Santé. Aucune de ces
          actions ne résilie un abonnement App Store. Désinstaller l’app ne
          supprime pas le compte de synchronisation.
        </p>
        <p>
          Dès que le service accepte une demande de suppression du compte, il
          bloque l’accès normal et les nouveaux envois avant le nettoyage. Si
          le nettoyage ou la révocation des justificatifs Apple échoue, la
          suppression reste en attente et fait l’objet de nouvelles tentatives ;
          l’app indique cet état. Après un nettoyage réussi, des informations
          minimales de suppression sont conservées pour empêcher les envois
          tardifs de recréer les données. Leur suppression est prévue 90 jours
          après la fin du nettoyage, sous réserve d’une dernière vérification
          réussie. Les informations de nettoyage en attente et les justificatifs
          nécessaires à la révocation restent conservés jusqu’au succès des
          nouvelles tentatives ; 90 jours n’est pas un maximum en cas d’échec
          non résolu. Les informations de suppression terminée ne contiennent
          pas d’archive de séances. En fonctionnement normal, les objets de
          plus de sept jours qui ne sont plus référencés par l’archive courante
          peuvent être supprimés.
        </p>
        <p>
          L’historique de restauration de la base Cloudflare peut conserver
          d’anciennes données de la base jusqu’à 30 jours, selon l’offre Cloudflare,
          après leur suppression de la base active. Ces copies sont distinctes du service actif et ne
          rendent pas les objets d’entraînement supprimés accessibles dans
          l’app. Ce délai ne garantit pas l’effacement physique de toutes les
          copies de stockage gérées par l’hébergeur. Pour accéder à vos données,
          les corriger, en obtenir une copie ou demander de l’aide pour les
          supprimer, contactez <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
        </p>
      </section>

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

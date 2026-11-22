import type { Metadata } from "next";

export const SITE_URL = "https://runtomax.com";
export const APP_STORE_URL = "https://apps.apple.com/app/runtomax/id6767669260";
export const FR_APP_STORE_URL = "https://apps.apple.com/fr/app/runtomax-coach-course-%C3%A0-pied/id6767669260";
export const FR_GARMIN_GUIDE_STORE_URL = FR_APP_STORE_URL + "?pt=126426469&ct=fr-guide-garmin&mt=8";
export const OG_IMAGE = `${SITE_URL}/og-runtomax.png`;

/** EN path -> FR path. Every page that exists in both languages is listed here;
 *  the sitemap and the per-page hreflang alternates are derived from it. */
export const LOCALE_PAIRS: Record<string, string> = {
  "/": "/fr/",
  "/features/apple-watch/": "/fr/fonctionnalites/apple-watch/",
  "/features/garmin/": "/fr/fonctionnalites/garmin/",
  "/features/coaching-from-apple-health/": "/fr/fonctionnalites/coaching-apple-sante/",
  "/features/race-plans/": "/fr/fonctionnalites/plans-de-course/",
  "/faq/": "/fr/faq/",
  "/accuracy/": "/fr/precision/",
};

export function frPath(enPath: string): string | undefined {
  return LOCALE_PAIRS[enPath];
}

export function enPath(fr: string): string | undefined {
  return Object.keys(LOCALE_PAIRS).find((en) => LOCALE_PAIRS[en] === fr);
}

/** `alternates` for a page: canonical + hreflang pair + x-default (English). */
export function alternatesFor(enPagePath: string, lang: "en" | "fr") {
  const fr = LOCALE_PAIRS[enPagePath];
  const canonical = lang === "en" ? enPagePath : fr ?? enPagePath;
  const languages: Record<string, string> = { en: enPagePath, "x-default": enPagePath };
  if (fr) languages.fr = fr;
  return { canonical, languages };
}

export function siteJsonLd(lang: "en" | "fr", contactEmail: string) {
  const description =
    lang === "en"
      ? "RunToMax is a running coach for Apple Watch, iPhone and Garmin watches. It builds a plan from the runs you already have, gives a plain-language verdict after every run and proposes changes you approve. Garmin runs import for free; the first week of every plan is free. For runners aged 18 and older."
      : "RunToMax est un coach de course à pied pour Apple Watch, iPhone et montres Garmin. Il construit un plan à partir de vos sorties, donne un verdict clair après chaque sortie et propose des ajustements que vous validez. L’import des sorties Garmin est gratuit, comme la première semaine de chaque plan. Pour les coureurs de 18 ans et plus.";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: "RunToMax",
        url: SITE_URL,
        founder: { "@type": "Person", name: "Hidai Bar-Mor" },
        email: contactEmail,
        description,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "RunToMax",
        publisher: { "@id": `${SITE_URL}/#org` },
        inLanguage: lang,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: "RunToMax",
        alternateName: lang === "en" ? "RunToMax: Running Coach & Plan" : "RunToMax : Coach course à pied",
        operatingSystem: "iOS 17 or later, watchOS 10 or later; works with Garmin Connect",
        applicationCategory: "HealthApplication",
        applicationSubCategory: "Running",
        description,
        inLanguage: ["en", "fr"],
        contentRating: "18+",
        audience: { "@type": "PeopleAudience", suggestedMinAge: 18 },
        url: SITE_URL,
        softwareVersion: "1.4",
        sameAs: [APP_STORE_URL],
        downloadUrl: APP_STORE_URL,
        installUrl: APP_STORE_URL,
        screenshot: [`${SITE_URL}/watch-ultra4-metrics-${lang}.webp`, `${SITE_URL}/iphone17-home-${lang}.webp`],
        featureList: [
          "Apple Watch run recording with custom screens",
          "iPhone run recording without a watch (iOS 26 or later)",
          "Free import of new Garmin runs through Garmin Connect",
          "Send planned workouts to Garmin Connect (Pro)",
          "Structured intervals with haptic cues, no phone needed",
          "Coaching from existing Apple Health running history",
          "Threshold pace estimate from the last 90 days",
          "Post-run verdict and run-type classification",
          "Race-date training plans with approved adaptations",
          "Readiness from HRV, sleep and training load",
          "Heat-adjusted pace targets",
          "FIT export",
        ],
        offers: lang === "fr" ? [
          { "@type": "Offer", name: "Téléchargement gratuit", price: "0", priceCurrency: "EUR", url: FR_APP_STORE_URL },
          { "@type": "Offer", name: "Pro mensuel", price: "6.99", priceCurrency: "EUR", url: FR_APP_STORE_URL },
          { "@type": "Offer", name: "Pro annuel", price: "29.99", priceCurrency: "EUR", url: FR_APP_STORE_URL },
        ] : [
          { "@type": "Offer", name: "Free download and basic recording", price: "0", priceCurrency: "USD", url: APP_STORE_URL },
          {
            "@type": "Offer",
            name: "RunToMax Pro — annual",
            price: "29.99",
            priceCurrency: "USD",
            description: "14-day trial if eligible, then $29.99 per year; automatically renews unless cancelled. Billed by Apple.",
            url: APP_STORE_URL,
          },
          {
            "@type": "Offer",
            name: "RunToMax Pro — monthly",
            price: "5.99",
            priceCurrency: "USD",
            description: "7-day trial if eligible, then $5.99 per month; automatically renews unless cancelled. Billed by Apple.",
            url: APP_STORE_URL,
          },
        ],
        author: { "@id": `${SITE_URL}/#org` },
      },
    ],
  };
}

/** Each page owns its social preview as well as its canonical URL. */
export function pageMetadata(path: string, metadata: Metadata): Metadata {
  const title = typeof metadata.title === "string" ? metadata.title : "RunToMax";
  const description = metadata.description ?? "";
  return {
    ...metadata,
    openGraph: {
      type: "website", siteName: "RunToMax", url: `${SITE_URL}${path}`,
      title, description, locale: path.startsWith("/fr/") ? "fr_FR" : "en_US",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "RunToMax running app" }],
      ...metadata.openGraph,
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE], ...metadata.twitter },
  };
}

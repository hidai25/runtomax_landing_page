export const SITE_URL = "https://runtomax.com";
export const APP_STORE_URL = "https://apps.apple.com/app/runtomax/id6767669260";
export const OG_IMAGE = `${SITE_URL}/og-runtomax.png`;

/** EN path -> FR path. Every page that exists in both languages is listed here;
 *  the sitemap and the per-page hreflang alternates are derived from it. */
export const LOCALE_PAIRS: Record<string, string> = {
  "/": "/fr/",
  "/features/apple-watch/": "/fr/fonctionnalites/apple-watch/",
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
      ? "RunToMax records runs on Apple Watch and coaches from the runs already in Apple Health: a plain-language verdict after every run, threshold and training paces from your last 90 days, and race-date plans that propose changes you approve. For runners aged 18 and older."
      : "RunToMax enregistre vos sorties sur Apple Watch et vous coache à partir des courses déjà présentes dans Apple Santé : un verdict clair après chaque sortie, des allures de seuil et d’entraînement calculées sur vos 90 derniers jours, et des plans calés sur la date de votre course. Pour les coureurs de 18 ans et plus.";
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
        operatingSystem: "iOS 17 or later, watchOS 10 or later",
        applicationCategory: "HealthApplication",
        applicationSubCategory: "Running",
        description,
        inLanguage: ["en", "fr"],
        contentRating: "18+",
        audience: { "@type": "PeopleAudience", suggestedMinAge: 18 },
        url: SITE_URL,
        downloadUrl: APP_STORE_URL,
        installUrl: APP_STORE_URL,
        screenshot: [`${SITE_URL}/watch-grid.png`, `${SITE_URL}/iphone-today.png`],
        featureList: [
          "Apple Watch run recording with custom screens",
          "Structured intervals with haptic cues, no phone needed",
          "Coaching from existing Apple Health running history",
          "Threshold pace estimate from the last 90 days",
          "Post-run verdict and run-type classification",
          "Race-date training plans with approved adaptations",
          "Readiness from HRV, sleep and training load",
          "Heat-adjusted pace targets",
          "FIT and GPX export",
        ],
        offers: [
          {
            "@type": "Offer",
            name: "RunToMax Pro — annual",
            price: "29.99",
            priceCurrency: "USD",
            description: "14-day free trial, then $29.99 per year, billed by Apple.",
            url: APP_STORE_URL,
          },
          {
            "@type": "Offer",
            name: "RunToMax Pro — monthly",
            price: "5.99",
            priceCurrency: "USD",
            description: "7-day free trial, then $5.99 per month, billed by Apple.",
            url: APP_STORE_URL,
          },
        ],
        author: { "@id": `${SITE_URL}/#org` },
      },
    ],
  };
}

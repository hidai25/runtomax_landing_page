import { OG_IMAGE, SITE_URL } from "./site";

export const guides = {
  shoeMileage: {
    path: "/guides/track-running-shoe-mileage/",
    title: "How to track running shoe mileage with an Apple Watch",
    description: "Switching from Garmin or rotating two pairs? Carry over each shoe’s starting mileage, choose a pair on Apple Watch and fix a run logged against the wrong shoes.",
    release: "1.4.3", devices: "iPhone and Apple Watch",
    published: "2026-11-28", updated: "2026-11-28",
  },
  audioCues: {
    path: "/guides/apple-watch-running-voice-cues/",
    title: "How do I hear my pace every kilometre or mile during Apple Watch intervals?",
    description: "Get spoken splits across work and recovery in RunToMax, test your headphones before you run and check Voice Feedback in Apple’s Workout app.",
    release: "1.4.3", devices: "iPhone and Apple Watch",
    published: "2026-11-27", updated: "2026-11-27",
  },
  garminTreadmill: {
    path: "/guides/garmin-treadmill-calibrate-and-save/",
    title: "Garmin treadmill distance wrong? Why “Calibrate & Save” is missing",
    description: "Find the distance your Garmin must record, when to enter the belt reading and how to fix a saved treadmill run. See what happens to your lap paces.",
    release: "1.4.3", devices: "compatible Garmin watches and Garmin Connect",
    published: "2026-11-26", updated: "2026-11-26",
  },
  heartRateZones: {
    path: "/guides/apple-watch-heart-rate-zones/",
    title: "How to see heart rate zones on Apple Watch during and after a run",
    description: "Find your live heart rate zone in Apple’s Workout app, add the missing view, and see minutes per zone after your run in Fitness on iPhone.",
    release: "1.4.2", devices: "iPhone and Apple Watch",
    published: "2026-11-25", updated: "2026-11-25",
  },
  vo2Accuracy: {
    path: "/guides/apple-watch-vo2-max-accuracy/",
    title: "How accurate is Apple Watch VO₂ max?",
    description: "Why your Apple Watch VO₂ max can drop while your running improves, how it compares with lab testing, and which run data to check before changing your training.",
    release: "1.4.1", devices: "iPhone and Apple Watch",
    published: "2026-11-23", updated: "2026-11-23",
  },
  frVo2Accuracy: {
    path: "/fr/guides/fiabilite-vo2-max-apple-watch/",
    title: "La VO₂ max de l’Apple Watch est-elle fiable ?",
    description: "Votre VO₂ max baisse alors que vous courez plus vite ? Découvrez la précision de l’Apple Watch et les données à comparer avant de modifier votre entraînement.",
    release: "1.4.1", devices: "iPhone et Apple Watch",
    published: "2026-11-23", updated: "2026-11-23",
  },
  garminIntervalsEn: {
    path: "/guides/send-interval-workout-garmin-connect/",
    title: "How to send an interval workout to Garmin Connect from your iPhone",
    description: "Send a RunToMax session to your Garmin Connect calendar and check the repeats on your watch before you run. Sending requires RunToMax Pro.",
    release: "1.4", devices: "iPhone and Garmin Connect",
    published: "2026-11-21", updated: "2026-11-21",
  },
  frWithoutPhone: {
    path: "/fr/guides/courir-apple-watch-sans-iphone/",
    title: "Peut-on courir avec son Apple Watch sans iPhone ?",
    description: "Pas besoin de forfait cellulaire pour enregistrer une sortie. Ce qu’il faut préparer dans RunToMax, ce qui fonctionne sur la montre et ce qui demande une connexion.",
    release: "1.4", devices: "iPhone et Apple Watch",
    published: "2026-11-21", updated: "2026-11-21",
  },
  frTreadmill: {
    path: "/fr/guides/distance-tapis-apple-watch/",
    title: "Apple Watch et tapis de course : les distances ne correspondent pas ?",
    description: "Quelle distance retenir entre le tapis et la montre, comment corriger une sortie enregistrée avec RunToMax et reporter la distance du tapis dans Apple Santé.",
    release: "1.4", devices: "iPhone et Apple Watch",
    published: "2026-11-21", updated: "2026-11-22",
  },
  frIntervals: {
    path: "/fr/guides/fractionne-apple-watch/",
    title: "Créer une séance de fractionné pour son Apple Watch",
    description: "Composez votre séance de fractionné dans RunToMax sur l’iPhone, envoyez-la à votre Apple Watch et suivez les répétitions au poignet.",
    release: "1.4", devices: "iPhone et Apple Watch",
    published: "2026-11-21", updated: "2026-11-21",
  },
  missingRunMap: {
    path: "/guides/apple-watch-run-map-missing/",
    title: "Apple Watch saved my run. Where is the route map?",
    description: "Find out what to check when Apple Watch saves your distance but the route map is missing in Fitness or RunToMax, even after a phone-free outdoor run.",
    release: "1.4",
    published: "2026-11-21", updated: "2026-11-21",
  },
  runningCadence: {
    path: "/guides/apple-watch-running-cadence/",
    title: "How to see running cadence on Apple Watch",
    description: "Find running cadence in Apple’s Workout app or add it to your RunToMax screen. Understand steps per minute, free field choices and the difference from pace.",
    release: "1.4",
    published: "2026-11-20", updated: "2026-11-20",
  },
  garminFractionne: {
    path: "/fr/guides/fractionne-garmin-connect-iphone/",
    title: "Comment envoyer une séance de fractionné vers Garmin Connect depuis son iPhone ?",
    description: "Retrouvez votre séance RunToMax dans le calendrier Garmin Connect et vérifiez les répétitions sur votre montre avant de courir. L’envoi nécessite Pro.",
    devices: "iPhone et Garmin Connect",
    published: "2026-11-19", updated: "2026-11-19",
  },
  waterLock: {
    path: "/guides/apple-watch-water-lock-running/",
    title: "How to lock your Apple Watch screen on a rainy run",
    description: "Stop rain or a wet sleeve from tapping your Apple Watch. Turn on Water Lock during a run, then unlock the screen to pause or save in RunToMax.",
    published: "2026-11-19", updated: "2026-11-19",
  },
  strydPower: {
    path: "/guides/stryd-power-apple-watch/",
    title: "Run by watts with Stryd and RunToMax on Apple Watch",
    description: "Pair your Stryd pod with RunToMax, set a power target in watts or a percentage of your threshold, and follow the guidance on Apple Watch. Requires RunToMax Pro.",
    published: "2026-11-10", updated: "2026-11-10",
  },
  ultraActionButton: {
    path: "/guides/apple-watch-ultra-action-button/",
    title: "Sweaty screen? Use the Apple Watch Ultra Action button",
    description: "Sweaty fingers making screen taps difficult? Set up the Apple Watch Ultra Action button in RunToMax to pause, resume, mark laps and start a run.",
    published: "2026-11-06", updated: "2026-11-06",
  },
  runningPace: {
    path: "/guides/apple-watch-running-pace/",
    title: "Apple Watch pace jumping? Choose the right pace field",
    description: "Understand Pace, Lap Pace, Smoothed Pace and Avg Pace, then choose the running fields you want in RunToMax on Apple Watch.",
    published: "2026-11-04", updated: "2026-11-04",
  },
  withoutPhone: {
    path: "/guides/run-apple-watch-without-iphone/",
    title: "Can you run with Apple Watch without your iPhone?",
    description: "You do not need cellular to record a run. Here is what to prepare in RunToMax, what works on the Watch, and what still needs a connection.",
    release: "1.4",
    published: "2026-11-03", updated: "2026-11-21",
  },
  intervals: {
    path: "/guides/interval-workouts-apple-watch/",
    title: "Create an interval workout in RunToMax",
    description: "Build running intervals in RunToMax on your iPhone and send your session to your Apple Watch.",
    release: "1.4",
    published: "2026-10-31", updated: "2026-11-21",
  },
  treadmill: {
    path: "/guides/apple-watch-treadmill-distance/",
    title: "Apple Watch and treadmill distance don’t match?",
    description: "Apple Watch and treadmill showing different distance or pace? Why they don't match, which to trust, and how to calibrate the watch for indoor runs.",
    release: "1.4",
    published: "2026-11-02", updated: "2026-11-22",
  },
} as const;
export type Guide = (typeof guides)[keyof typeof guides];
export const publishedGuides = Object.values(guides).filter(guide => guide.published);

/** A guide and its translation: English path -> French path. The pages'
 *  hreflang alternates and the sitemap are derived from it. */
export const GUIDE_PAIRS: Record<string, string> = {
  [guides.vo2Accuracy.path]: guides.frVo2Accuracy.path,
  "/guides/send-interval-workout-garmin-connect/": "/fr/guides/fractionne-garmin-connect-iphone/",
  "/guides/run-apple-watch-without-iphone/": "/fr/guides/courir-apple-watch-sans-iphone/",
  "/guides/apple-watch-treadmill-distance/": "/fr/guides/distance-tapis-apple-watch/",
  "/guides/interval-workouts-apple-watch/": "/fr/guides/fractionne-apple-watch/",
};

/** `alternates` for a guide: its own canonical, plus the hreflang pair when
 *  it has a translation. */
export function guideAlternates(path: string) {
  const en = path in GUIDE_PAIRS ? path : Object.keys(GUIDE_PAIRS).find(key => GUIDE_PAIRS[key] === path);
  if (!en) return { canonical: path };
  return { canonical: path, languages: { en, fr: GUIDE_PAIRS[en], "x-default": en } };
}

export function guideJsonLd(guide: Guide) {
  const url = `${SITE_URL}${guide.path}`;
  const fr = guide.path.startsWith("/fr/");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting", "@id": `${url}#article`, url,
        headline: guide.title, description: guide.description, inLanguage: guide.path.startsWith("/fr/") ? "fr" : "en",
        datePublished: guide.published ?? undefined, dateModified: guide.updated,
        author: { "@type": "Organization", "@id": `${SITE_URL}/#org`, name: "RunToMax", url: SITE_URL },
        publisher: { "@id": `${SITE_URL}/#org` },
        mainEntityOfPage: url, image: OG_IMAGE,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "RunToMax", item: `${SITE_URL}${fr ? "/fr/" : "/"}` },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}${fr ? "/fr/guides/" : "/guides/"}` },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
        ],
      },
    ],
  };
}

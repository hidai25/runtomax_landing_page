import { OG_IMAGE, SITE_URL } from "./site";

export const guides = {
  heartRateStrap: {
    path: "/guides/apple-watch-heart-rate-chest-strap/",
    title: "Use a heart-rate chest strap with Apple Watch",
    description: "Pair a Bluetooth heart-rate strap in RunToMax, check for live readings, and understand what this changes during your run and in Apple Health.",
    published: null, updated: "2026-11-05",
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
    published: "2026-11-03", updated: "2026-11-03",
  },
  intervals: {
    path: "/guides/interval-workouts-apple-watch/",
    title: "Create an interval workout in RunToMax",
    description: "Build running intervals in RunToMax on your iPhone and send your session to your Apple Watch.",
    published: "2026-10-31", updated: "2026-11-02",
  },
  treadmill: {
    path: "/guides/apple-watch-treadmill-distance/",
    title: "Apple Watch and treadmill distance don’t match?",
    description: "Understand why treadmill and Apple Watch distances differ, and learn how to correct a treadmill run in RunToMax.",
    published: "2026-11-02", updated: "2026-11-02",
  },
} as const;
export type Guide = (typeof guides)[keyof typeof guides];
export function guideJsonLd(guide: Guide) {
  const url = `${SITE_URL}${guide.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting", "@id": `${url}#article`, url,
        headline: guide.title, description: guide.description, inLanguage: "en",
        datePublished: guide.published ?? undefined, dateModified: guide.updated,
        author: { "@type": "Organization", "@id": `${SITE_URL}/#org`, name: "RunToMax", url: SITE_URL },
        publisher: { "@id": `${SITE_URL}/#org` },
        mainEntityOfPage: url, image: OG_IMAGE,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "RunToMax", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides/` },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
        ],
      },
    ],
  };
}

import type { MetadataRoute } from "next";
import { guides } from "@/app/_lib/guides";
import { LOCALE_PAIRS, SITE_URL } from "@/app/_lib/site";

export const dynamic = "force-static";

// Dates reflect substantive page revisions, not the time of deployment.
const CONTENT_DATES: Record<string, string> = {
  "/": "2026-11-02", "/fr/": "2026-10-31",
  "/features/apple-watch/": "2026-11-02", "/fr/fonctionnalites/apple-watch/": "2026-09-22",
  "/features/coaching-from-apple-health/": "2026-11-02", "/fr/fonctionnalites/coaching-apple-sante/": "2026-11-02",
  "/features/race-plans/": "2026-09-22", "/fr/fonctionnalites/plans-de-course/": "2026-09-22",
  "/faq/": "2026-11-02", "/fr/faq/": "2026-11-02",
  "/accuracy/": "2026-11-02", "/fr/precision/": "2026-11-02",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const bilingual: MetadataRoute.Sitemap = Object.entries(LOCALE_PAIRS).flatMap(([en, fr]) => {
    const languages = { en: `${SITE_URL}${en}`, fr: `${SITE_URL}${fr}`, "x-default": `${SITE_URL}${en}` };
    const priority = en === "/" ? 1.0 : en === "/faq/" ? 0.8 : 0.7;
    return [
      { url: `${SITE_URL}${en}`, lastModified: new Date(CONTENT_DATES[en]), changeFrequency: "weekly", priority, alternates: { languages } },
      { url: `${SITE_URL}${fr}`, lastModified: new Date(CONTENT_DATES[fr]), changeFrequency: "weekly", priority: priority - 0.1, alternates: { languages } },
    ];
  });
  const legal: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/support/`, lastModified: new Date("2026-11-02"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacy/`, lastModified: new Date("2026-11-02"), changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/terms/`, lastModified: new Date("2026-10-31"), changeFrequency: "yearly", priority: 0.4 },
  ];
  const articles: MetadataRoute.Sitemap = Object.values(guides).map(guide => ({
    url: `${SITE_URL}${guide.path}`, lastModified: new Date(guide.updated), changeFrequency: "monthly", priority: 0.6,
  }));
  const latestGuideUpdate = Object.values(guides).map(guide => guide.updated).sort().at(-1)!;
  return [...bilingual, ...legal, ...articles, {
    url: `${SITE_URL}/guides/`, lastModified: new Date(latestGuideUpdate), changeFrequency: "weekly", priority: 0.7,
  }];
}

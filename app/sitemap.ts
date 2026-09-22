import type { MetadataRoute } from "next";
import { LOCALE_PAIRS, SITE_URL } from "@/app/_lib/site";

export const dynamic = "force-static";

// A fixed date per deploy is more honest than `new Date()` on every build:
// bump it when page content changes, not when the CSS does.
const CONTENT_UPDATED = new Date("2026-09-22");

export default function sitemap(): MetadataRoute.Sitemap {
  const bilingual: MetadataRoute.Sitemap = Object.entries(LOCALE_PAIRS).flatMap(([en, fr]) => {
    const languages = { en: `${SITE_URL}${en}`, fr: `${SITE_URL}${fr}`, "x-default": `${SITE_URL}${en}` };
    const priority = en === "/" ? 1.0 : en === "/faq/" ? 0.8 : 0.7;
    return [
      { url: `${SITE_URL}${en}`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority, alternates: { languages } },
      { url: `${SITE_URL}${fr}`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: priority - 0.1, alternates: { languages } },
    ];
  });
  const legal: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/support/`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacy/`, lastModified: new Date("2026-07-22"), changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/terms/`, lastModified: new Date("2026-07-22"), changeFrequency: "yearly", priority: 0.4 },
  ];
  return [...bilingual, ...legal];
}

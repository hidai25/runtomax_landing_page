import Link from "next/link";
import PageShell from "@/app/_components/PageShell";
import { guides } from "@/app/_lib/guides";
import { SITE_URL, pageMetadata } from "@/app/_lib/site";

const description = "Des guides pratiques pour courir avec RunToMax : fractionné sur Apple Watch ou Garmin, sortie sans iPhone, distance sur tapis de course.";

export const metadata = pageMetadata("/fr/guides/", {
  title: "Guides de course à pied pour Apple Watch et Garmin",
  description,
  alternates: { canonical: "/fr/guides/", languages: { en: "/guides/", fr: "/fr/guides/", "x-default": "/guides/" } },
});

const listed = [
  [guides.garminFractionne, "Garmin Connect"],
  [guides.frIntervals, "Apple Watch · Fractionné"],
  [guides.frWithoutPhone, "Apple Watch · Sans téléphone"],
  [guides.frTreadmill, "Apple Watch · Tapis de course"],
] as const;

const collection = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: `${SITE_URL}/fr/guides/`,
  name: "Guides de course à pied pour Apple Watch et Garmin",
  description,
  inLanguage: "fr",
  hasPart: listed.map(([guide]) => ({ "@type": "BlogPosting", headline: guide.title, url: `${SITE_URL}${guide.path}` })),
};

export default function FrenchGuides() {
  return (
    <PageShell lang="fr" eyebrow="Guides" title="Guides pratiques" alternate="/guides/" updated="2026-11-21"
      intro={<p>Des réponses courtes aux questions qui reviennent avant et après une sortie : préparer un fractionné, courir sans téléphone, réconcilier la montre et le tapis. Chaque guide indique ce qui est gratuit et ce qui demande Pro.</p>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection).replace(/</g, "\\u003c") }} />
      <ul>
        {listed.map(([guide, category]) => (
          <li key={guide.path}>
            <Link href={guide.path}><strong>{guide.title}</strong></Link>
            <br />
            <span className="text-sm text-zinc-500">{category}</span> — {guide.description}
          </li>
        ))}
      </ul>
      <p>D’autres guides existent en anglais sur la page <Link href="/guides/" hrefLang="en">Guides</Link>.</p>
    </PageShell>
  );
}

import { guideJsonLd, type Guide } from "@/app/_lib/guides";

const dateLabel = (date: string, locale = "en-US") => new Date(`${date}T12:00:00Z`).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
export default function GuideDetails({ guide }: { guide: Guide }) {
  const fr = guide.path.startsWith("/fr/");
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd(guide)).replace(/</g, "\\u003c") }} />
    <div className="mt-6 space-y-1 text-sm leading-relaxed text-zinc-400">
      <p>{fr ? "Par" : "By"} <a href="/support/" className="underline underline-offset-4">RunToMax</a>
        {guide.published ? <> · {fr ? "Publié le" : "Published"} <time dateTime={guide.published}>{dateLabel(guide.published, fr ? "fr-FR" : "en-US")}</time>
          {guide.updated !== guide.published && <> · {fr ? "Mis à jour le" : "Updated"} <time dateTime={guide.updated}>{dateLabel(guide.updated, fr ? "fr-FR" : "en-US")}</time></>}</>
          : <> · Draft — awaiting publication</>}</p>
      <p>{fr ? `RunToMax ${"release" in guide ? guide.release : "1.4"} · ${"devices" in guide ? guide.devices : "iPhone et Apple Watch"}`
        : `For RunToMax ${"release" in guide ? guide.release : "1.3.5"} · ${"devices" in guide ? guide.devices : "iPhone and Apple Watch"}`}</p>
    </div>
  </>;
}

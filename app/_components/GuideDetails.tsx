import { guideJsonLd, type Guide } from "@/app/_lib/guides";

const dateLabel = (date: string) => new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
export default function GuideDetails({ guide }: { guide: Guide }) {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd(guide)).replace(/</g, "\\u003c") }} />
    <div className="mt-6 space-y-1 text-sm leading-relaxed text-zinc-400">
      <p>By <a href="/support/" className="underline underline-offset-4">RunToMax</a>
        {guide.published ? <> · Published <time dateTime={guide.published}>{dateLabel(guide.published)}</time>
          {guide.updated !== guide.published && <> · Updated <time dateTime={guide.updated}>{dateLabel(guide.updated)}</time></>}</>
          : <> · Draft — awaiting publication</>}</p>
      <p>For RunToMax 1.3.5 · iPhone and Apple Watch</p>
    </div>
  </>;
}

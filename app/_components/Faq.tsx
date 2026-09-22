import type { ReactNode } from "react";

export type FaqItem = { q: string; a: string; body?: ReactNode };

/** Renders the questions as real headings and emits a FAQPage JSON-LD block built
 *  from the plain-text answers, so what search engines read is what the page says. */
export default function Faq({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {items.map(({ q, a, body }) => (
        <section key={q}>
          <h2>{q}</h2>
          {body ?? <p>{a}</p>}
        </section>
      ))}
    </>
  );
}

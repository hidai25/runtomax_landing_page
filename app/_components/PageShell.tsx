import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/app/_lib/contact";
import { APP_STORE_URL } from "@/app/_lib/site";

type Lang = "en" | "fr";

type PageShellProps = {
  lang: Lang;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  /** The same page in the other language, for the switch link. */
  alternate?: string;
  /** Machine-readable date the page content was last checked against the app. */
  updated: string;
  children: ReactNode;
};

const STRINGS = {
  en: {
    home: "/",
    get: "Get the app",
    switch: "Français",
    updated: "Checked against the app on",
    features: "Features",
    faq: "FAQ",
    accuracy: "Accuracy",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
    cta: "Download on the App Store",
    ctaSub: "14-day free trial on the annual plan · iPhone + Apple Watch · 18+",
    links: [
      ["/features/apple-watch/", "Apple Watch tracking"],
      ["/features/coaching-from-apple-health/", "Coaching from Apple Health"],
      ["/features/race-plans/", "Race plans"],
      ["/faq/", "FAQ"],
      ["/accuracy/", "Accuracy"],
    ],
  },
  fr: {
    home: "/fr/",
    get: "Télécharger",
    switch: "English",
    updated: "Vérifié dans l’app le",
    features: "Fonctionnalités",
    faq: "FAQ",
    accuracy: "Précision",
    support: "Support",
    privacy: "Confidentialité",
    terms: "Conditions",
    cta: "Télécharger sur l’App Store",
    ctaSub: "14 jours d’essai gratuit sur l’abonnement annuel · iPhone + Apple Watch · 18 ans et plus",
    links: [
      ["/fr/fonctionnalites/apple-watch/", "Suivi sur Apple Watch"],
      ["/fr/fonctionnalites/coaching-apple-sante/", "Coaching depuis Apple Santé"],
      ["/fr/fonctionnalites/plans-de-course/", "Plans de course"],
      ["/fr/faq/", "FAQ"],
      ["/fr/precision/", "Précision"],
    ],
  },
} as const;

export default function PageShell({ lang, eyebrow, title, intro, alternate, updated, children }: PageShellProps) {
  const t = STRINGS[lang];
  const updatedLabel = new Date(updated).toLocaleDateString(lang === "en" ? "en-US" : "fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <main className="font-sans bg-black text-white min-h-screen">
      <nav className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <Link href={t.home} className="font-bebas text-2xl tracking-wide select-none">
            <span className="text-white">RunTo</span>
            <span className="text-[#1FE26C]">Max</span>
          </Link>
          <div className="flex items-center gap-5 text-sm font-medium">
            {alternate ? (
              <Link href={alternate} hrefLang={lang === "en" ? "fr" : "en"} className="text-zinc-400 hover:text-white transition-colors">
                {t.switch}
              </Link>
            ) : null}
            <a href={APP_STORE_URL} className="hover:text-[#1FE26C] transition-colors duration-200">
              {t.get}
            </a>
          </div>
        </div>
      </nav>

      <article className="pt-32 pb-16 px-6 max-w-3xl mx-auto">
        <p className="text-[#1FE26C] font-mono text-xs uppercase tracking-widest mb-6 font-semibold">{eyebrow}</p>
        <h1 className="font-bebas text-5xl md:text-7xl tracking-tight leading-[0.9] mb-10 uppercase">{title}</h1>
        {intro ? (
          <div className="text-zinc-300 text-lg leading-relaxed mb-12 border-l-2 border-zinc-800 pl-6">{intro}</div>
        ) : null}
        <div className="legal-prose text-zinc-400 text-base leading-relaxed">{children}</div>
        <p className="mt-14 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-600">
          {t.updated} <time dateTime={updated}>{updatedLabel}</time>
        </p>
      </article>

      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900 to-[#0d1510] p-8 text-center">
          <a
            href={APP_STORE_URL}
            className="inline-block rounded-full bg-[#1FE26C] px-7 py-3 text-sm font-bold text-black hover:bg-[#4BEA8A] transition-colors"
          >
            {t.cta}
          </a>
          <p className="mt-4 text-xs text-zinc-500">{t.ctaSub}</p>
        </div>
      </section>

      <footer className="py-8 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6">
          <nav aria-label={t.features} className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500 font-medium">
            {t.links.map(([href, label]) => (
              <Link key={href} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href={t.home} className="font-bebas text-xl tracking-wide text-zinc-600 hover:text-zinc-300 select-none transition-colors">
              <span className="text-white">RunTo</span>
              <span className="text-[#1FE26C]">Max</span>
            </Link>
            <div className="flex gap-6 text-sm text-zinc-500 font-medium">
              <Link href="/support/" className="hover:text-white transition-colors">{t.support}</Link>
              <Link href="/privacy/" className="hover:text-white transition-colors">{t.privacy}</Link>
              <Link href="/terms/" className="hover:text-white transition-colors">{t.terms}</Link>
              <a href={CONTACT_MAILTO} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
            </div>
            <div className="text-zinc-700 text-xs font-mono tracking-widest uppercase">© 2026 RunToMax</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

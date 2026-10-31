"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const KEY = "rtm-website-analytics-choice-v1";
const MEASUREMENT_ID = "G-NSJ1B47X6S";
type Choice = "accepted" | "rejected" | null;
type Language = "en" | "fr";

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

const copy = {
  en: { title: "Website analytics", body: "May we use Google Analytics to understand how people use this website?", accept: "Accept analytics", reject: "Reject analytics", settings: "Analytics settings", privacy: "Privacy policy", saved: "Your choice is saved on this device.", error: "Your browser could not save your choice. Please clear this site's data in your browser settings." },
  fr: { title: "Analyse du site", body: "Pouvons-nous utiliser Google Analytics pour comprendre l’utilisation de ce site ?", accept: "Accepter l’analyse", reject: "Refuser l’analyse", settings: "Paramètres d’analyse", privacy: "Politique de confidentialité", saved: "Votre choix est enregistré sur cet appareil.", error: "Votre navigateur n’a pas pu enregistrer votre choix. Veuillez effacer les données de ce site dans les réglages du navigateur." },
};

function readChoice(): Choice {
  try {
    const value = localStorage.getItem(KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch { return null; }
}

function cleanReferrer(): string {
  try {
    const ref = new URL(document.referrer);
    return ref.origin;
  } catch { return ""; }
}

export default function AnalyticsConsent({ lang }: { lang: Language }) {
  const t = copy[lang];
  const pathname = usePathname();
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => { setChoice(readChoice()); setReady(true); }, []);

  useEffect(() => {
    if (!ready || choice !== "accepted") return;
    (window as unknown as Record<string, unknown>)[`ga-disable-${MEASUREMENT_ID}`] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || ((...args: unknown[]) => { window.dataLayer!.push(args); });
    const gtag = window.gtag;
    if (!document.getElementById("rtm-ga-script")) {
      gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
      gtag("js", new Date());
      gtag("config", MEASUREMENT_ID, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
      const script = document.createElement("script");
      script.id = "rtm-ga-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
      document.head.appendChild(script);
    }
    gtag("event", "page_view", { page_location: window.location.origin + (pathname || "/"), page_referrer: cleanReferrer(), page_title: document.title });
  }, [choice, pathname, ready]);

  function choose(value: Exclude<Choice, null>) {
    if (value === "rejected") {
      (window as unknown as Record<string, unknown>)[`ga-disable-${MEASUREMENT_ID}`] = true;
      document.cookie.split(";").forEach((item) => {
        const name = item.trim().split("=")[0];
        if (!/^_ga(?:_|$)/.test(name)) return;
        const expired = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
        document.cookie = expired;
        document.cookie = `${expired}; domain=.runtomax.com`;
      });
    }
    try {
      localStorage.setItem(KEY, value);
      if (localStorage.getItem(KEY) !== value) throw new Error("Preference not saved");
    } catch {
      // Fail closed for the current page. Tell the visitor if the browser
      // cannot persist the new choice.
      if (value === "rejected") {
        (window as unknown as Record<string, unknown>)[`ga-disable-${MEASUREMENT_ID}`] = true;
        try {
          localStorage.removeItem(KEY);
          if (localStorage.getItem(KEY) === null) {
            window.location.reload();
            return;
          }
        } catch { /* Show the browser-data clearing instructions below. */ }
        setChoice("rejected");
      }
      setError(true);
      return;
    }
    if (value === "rejected" && choice === "accepted") {
      window.location.reload();
      return;
    }
    setChoice(value);
    setError(false);
    setOpen(false);
  }

  if (!ready) return null;
  return <>
    <button type="button" onClick={() => setOpen(true)} className="fixed bottom-2 left-2 z-[100] rounded-full bg-zinc-900 px-3 py-2 text-xs text-white border border-zinc-600">{t.settings}</button>
    {(choice === null || open) && <section role="region" aria-label={t.title} className="fixed bottom-14 left-3 right-3 z-[101] mx-auto max-w-xl rounded-2xl border border-zinc-600 bg-zinc-900 p-5 text-white shadow-xl">
      <h2 className="font-semibold text-lg">{t.title}</h2>
      <p className="mt-2 text-sm text-zinc-200">{t.body} <a href="/privacy/" className="underline">{t.privacy}</a></p>
      {!error && <p className="mt-2 text-xs text-zinc-400">{t.saved}</p>}
      {error && <p role="alert" className="mt-2 text-sm text-amber-300">{t.error}</p>}
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose("accepted")} className="rounded-full border border-white px-4 py-2 text-sm font-semibold">{t.accept}</button>
        <button type="button" onClick={() => choose("rejected")} className="rounded-full border border-white px-4 py-2 text-sm font-semibold">{t.reject}</button>
      </div>
    </section>}
  </>;
}

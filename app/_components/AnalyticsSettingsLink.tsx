"use client";

export default function AnalyticsSettingsLink({ lang }: { lang: "en" | "fr" }) {
  return (
    <div className="border-t border-zinc-900 px-6 py-4 text-center">
      <button type="button" onClick={() => window.dispatchEvent(new Event("rtm-open-analytics-settings"))} className="text-xs text-zinc-400 underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
        {lang === "fr" ? "Paramètres d’analyse" : "Analytics settings"}
      </button>
    </div>
  );
}

import { pageMetadata } from "@/app/_lib/site";
import { guides as guideDefinitions } from "@/app/_lib/guides";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { APP_STORE_URL } from "@/app/_lib/site";

export const metadata: Metadata = pageMetadata("/guides/", {
  title: "Running Guides for Apple Watch",
  description: "Practical running guides for getting more from RunToMax and your Apple Watch.",
  alternates: { canonical: "/guides/" },
});

const guides = [
  ...(guideDefinitions.runningPauses.published ? [{
    href: guideDefinitions.runningPauses.path,
    category: "Apple Watch · Run timing",
    title: guideDefinitions.runningPauses.title,
    description: "Set up auto-pause in RunToMax and understand what traffic-light stops do to your average pace.",
    date: guideDefinitions.runningPauses.published,
    dateLabel: new Date(`${guideDefinitions.runningPauses.published}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }),
  }] : []),
  {
    href: "/guides/apple-watch-ultra-action-button/",
    category: "Apple Watch Ultra · Controls",
    title: "Sweaty screen? Use the Apple Watch Ultra Action button",
    description: "Set up physical controls for pause, resume and laps when sweaty fingers make screen taps frustrating.",
    date: "2026-11-06",
    dateLabel: "November 6, 2026",
  },
  {
    href: "/guides/apple-watch-running-pace/",
    category: "Apple Watch · Pace",
    title: "Apple Watch pace jumping? Choose the right pace field",
    description: "What each pace number means and how to choose your fields in RunToMax.",
    date: "2026-11-04",
    dateLabel: "November 4, 2026",
  },
  {
    href: "/guides/run-apple-watch-without-iphone/",
    category: "Apple Watch · Getting started",
    title: "Can you run with Apple Watch without your iPhone?",
    description: "What works without cellular, what to sync first, and when to bring your phone.",
    date: "2026-11-03",
    dateLabel: "November 3, 2026",
  },
  {
    href: "/guides/apple-watch-treadmill-distance/",
    category: "Apple Watch · Treadmill",
    title: "Apple Watch and treadmill distance don’t match?",
    description: "Understand the difference and correct a treadmill run in RunToMax.",
    date: "2026-11-02",
    dateLabel: "November 2, 2026",
  },
  {
    href: "/guides/interval-workouts-apple-watch/",
    category: "Apple Watch · Workouts",
    title: "Create an interval workout in RunToMax",
    description: "Build intervals on your iPhone and send your session to your Apple Watch.",
    date: "2026-10-31",
    dateLabel: "October 31, 2026",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/[0.08]">
        <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-6" aria-label="Primary">
          <Link href="/" className="font-bebas text-2xl tracking-wide" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link>
          <a href={APP_STORE_URL} className="text-sm font-semibold text-white transition-colors hover:text-[#1FE26C]">Get the app</a>
        </nav>
      </header>
      <section className="relative overflow-hidden border-b border-white/[0.08] px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-[#1FE26C]/[0.09] blur-[100px]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1FE26C]">RunToMax guides</p>
          <h1 className="mt-6 max-w-3xl font-bebas text-6xl uppercase leading-[0.92] sm:text-8xl">Make every run<br /><span className="text-[#1FE26C]">make sense.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400">Practical help for your running, your Apple Watch and getting more from RunToMax.</p>
          <a href="#latest" className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#1FE26C]">Explore the guides <ArrowDownRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </section>
      <section id="latest" className="mx-auto max-w-6xl px-6 py-20 sm:py-24" aria-labelledby="latest-heading">
        <div className="flex items-end justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#1FE26C]">For your next run</p><h2 id="latest-heading" className="mt-3 font-bebas text-4xl uppercase">Latest guides</h2></div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.href} className="group relative flex flex-col rounded-3xl border border-white/[0.09] bg-zinc-950 p-7 transition-colors hover:border-[#1FE26C]/40">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1FE26C]">{guide.category}</p>
              <h3 className="mt-6 text-2xl font-bold leading-tight tracking-tight"><Link href={guide.href} className="after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1FE26C]">{guide.title}</Link></h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">{guide.description}</p>
              <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5 text-xs text-zinc-500">{guide.date ? <time dateTime={guide.date}>{guide.dateLabel}</time> : <span>{guide.dateLabel}</span>}<span className="flex items-center gap-2 font-semibold text-zinc-300 group-hover:text-[#1FE26C]">Read guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></span></div>
            </article>
          ))}
        </div>
      </section>
      <footer className="border-t border-white/[0.08] px-6 py-8 text-sm text-zinc-500"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5"><Link href="/" className="font-bebas text-xl text-white">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><div className="flex flex-wrap gap-6"><Link href="/support/" className="hover:text-white">Support</Link><Link href="/privacy/" className="hover:text-white">Privacy</Link><Link href="/terms/" className="hover:text-white">Terms</Link></div></div></footer>
    </main>
  );
}

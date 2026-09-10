"use client";

import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";
import {
  Activity,
  ArrowDown,
  Brain,
  Check,
  CheckCircle2,
  Gauge,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Watch,
} from "lucide-react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/app/_lib/contact";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const APP_STORE_URL = "https://apps.apple.com/app/runtomax/id6767669260";

/**
 * Apple's official "Download on the App Store" badge, used exactly as supplied
 * by Apple's badge service (App Store Marketing Guidelines): never recoloured,
 * never restyled, minimum 40 px tall online, clear space of a quarter of the
 * badge height on every side. `heightClass` sets the badge height; the wrapper
 * provides the clear space.
 */
function AppStoreBadge({ heightClass = "h-12", className = "" }: { heightClass?: string; className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`inline-flex shrink-0 items-center rounded-lg p-1.5 transition-all hover:scale-[1.03] hover:drop-shadow-[0_0_22px_rgba(31,226,108,.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1FE26C] ${className}`}
      aria-label="Download RunToMax on the App Store"
    >
      <img src={`${BASE}/app-store-badge.svg`} alt="Download on the App Store" className={`${heightClass} w-auto`} />
    </a>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const journey = [
  {
    step: "Before",
    title: "Know what today should feel like.",
    body: "Readiness, recent training and your plan become one calm answer: go as planned, ease it, move it or rest.",
    proof: "Every recommendation shows why—and nothing changes silently.",
    icon: Brain,
  },
  {
    step: "During",
    title: "Execute without guesswork.",
    body: "Clear targets, reliable lap pace, structured intervals and haptics keep the workout on your wrist and your attention on the run.",
    proof: "Outdoor, treadmill, track and route guidance work without carrying your phone.",
    icon: Watch,
  },
  {
    step: "After",
    title: "Understand what changed next.",
    body: "RunToMax waits for finalized data, then connects the workout you intended with the work you actually completed.",
    proof: "A short insight first; deeper evidence when you want it.",
    icon: TrendingUp,
  },
];

const outcomeReceipts = [
  {
    label: "EFFICIENCY",
    value: "8 s/km faster",
    detail: "at the same easy-run heart rate this month",
    color: "text-[#4BEA8A]",
  },
  {
    label: "EXECUTION",
    value: "6 of 6 reps",
    detail: "inside your target band",
    color: "text-[#72B7FF]",
  },
  {
    label: "CONSISTENCY",
    value: "Next hard day eased",
    detail: "after recovery and load signals disagreed",
    color: "text-[#C29BFF]",
  },
];

const phoneShots = [
  {
    src: "iphone-training-impact.jpg",
    tag: "Training impact",
    title: "See what the work actually did.",
    desc: "Aerobic and anaerobic stimulus, recovery and effort are grounded in the finalized run—not an early estimate.",
  },
  {
    src: "iphone-workout-structure.jpg",
    tag: "Workout structure",
    title: "See every rep and recovery.",
    desc: "Structured sessions are judged from the work you completed, so warm-up and cool-down do not hide the workout that mattered.",
  },
  {
    src: "iphone-metric-explainer.jpg",
    tag: "Metric explanations",
    title: "Every important number explains itself.",
    desc: "What it is, why it changed, what to do next and which data supports it—available when you want the evidence.",
  },
];

const watchShots = [
  { src: "watch-start.png", tag: "Start", desc: "Session, surface and sensors" },
  { src: "watch-ready.png", tag: "Ready", desc: "Sensors and battery checked" },
  { src: "watch-gauge.png", tag: "Target", desc: "Pace against the session" },
  { src: "watch-lap.png", tag: "Lap", desc: "An instant lap receipt" },
  { src: "watch-splits.png", tag: "Splits", desc: "Lap, HR and progress" },
  { src: "watch-zonebar.png", tag: "Zones", desc: "Intensity at a glance" },
  { src: "watch-grid.png", tag: "Your fields", desc: "The numbers you choose" },
  { src: "watch-select.png", tag: "Layouts", desc: "A view for every workout" },
];

export default function RunToMaxLanding() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-black font-sans text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-black/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6" aria-label="Primary">
          <a href="#top" className="font-bebas text-2xl tracking-wide" aria-label="RunToMax home">
            <span className="text-white">RunTo</span><span className="text-[#1FE26C]">Max</span>
          </a>
          <div className="flex items-center gap-5">
            <a href="#how-it-works" className="hidden text-sm text-zinc-400 transition-colors hover:text-white sm:block">
              How it works
            </a>
            <a href="#product" className="hidden text-sm text-zinc-400 transition-colors hover:text-white md:block">
              See the app
            </a>
            <AppStoreBadge heightClass="h-10" />
          </div>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-20 pt-28 lg:grid-cols-[1.06fr_.94fr] lg:pb-24 lg:pt-36">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-[#1FE26C]/[0.08] blur-[140px]" />
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 text-center lg:text-left">
          <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#1FE26C]">
            Now on the App Store · iPhone + Apple Watch
          </p>
          <h1 className="max-w-5xl font-bebas text-[3.75rem] uppercase leading-[0.88] tracking-[-0.025em] sm:text-7xl lg:text-[5.8rem]">
            Run stronger. Stay consistent. Know when to push—<span className="text-[#1FE26C]">and when to recover.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 lg:mx-0 lg:text-xl">
            RunToMax turns your Apple Watch data into clear daily coaching, reliable workout execution and proof of what changed—without guesswork or silent plan changes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row lg:justify-start">
            <AppStoreBadge heightClass="h-14" />
            <a href="#how-it-works" className="group flex items-center gap-2 px-5 py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              See the coaching loop <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-zinc-500 lg:justify-start">
            <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#1FE26C]" /> Free trial, then RunToMax Pro</span>
            <span className="flex items-center gap-2"><Watch className="h-4 w-4 text-[#1FE26C]" /> Runs on your wrist, phone-free</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#1FE26C]" /> No account · your data stays in Apple Health</span>
          </div>
          <p className="mt-5 text-xs text-zinc-600">Requires iOS 17 and watchOS 10 or later · Designed for runners aged 18 and older.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative z-10 mx-auto w-full max-w-xl"
        >
          <div className="rounded-[2rem] border border-white/10 bg-[#111512]/95 p-5 shadow-[0_35px_100px_-35px_rgba(31,226,108,.32)] sm:p-7">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1FE26C]">Coach&apos;s read · Tomorrow</p>
                <p className="mt-1 text-sm text-zinc-500">Threshold session</p>
              </div>
              <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-xs font-semibold text-amber-200">Recovery mixed</span>
            </div>
            <div className="py-7">
              <p className="text-3xl font-bold tracking-tight sm:text-4xl">Keep the session. Reduce it 15%.</p>
              <p className="mt-3 max-w-lg leading-relaxed text-zinc-400">Your fitness can support the work, but short sleep and a harder-than-planned run make the full dose unnecessary.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["HRV", "12% below baseline"],
                ["SLEEP", "5h 31m"],
                ["LOAD", "Above usual"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/[0.07] bg-black/35 p-4">
                  <p className="font-mono text-[9px] tracking-[0.18em] text-zinc-600">{label}</p>
                  <p className="mt-2 text-sm font-semibold text-zinc-200">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-[#1FE26C] px-4 py-3 text-center text-sm font-bold text-black">Apply reduced session</div>
              <div className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-zinc-300">Keep the original</div>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-zinc-600"><CheckCircle2 className="h-3.5 w-3.5 text-[#1FE26C]" /> You decide. RunToMax records why.</p>
          </div>
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-3 hidden w-36 overflow-hidden rounded-[2rem] border-[6px] border-zinc-800 bg-black shadow-2xl sm:block lg:-left-16"
          >
            <img src={`${BASE}/watch-gauge.png`} alt="RunToMax target pace screen on Apple Watch" className="h-auto w-full" />
          </motion.div>
        </motion.div>
      </section>

      <section className="border-y border-white/[0.06] bg-zinc-950/70 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1FE26C]">Your progress, made visible</p>
            <h2 className="mt-4 font-bebas text-5xl uppercase leading-none sm:text-6xl">Not more data. Better evidence that your training is working.</h2>
            <p className="mt-5 text-zinc-500">Examples of the personalized receipts RunToMax can surface from finalized workout data.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {outcomeReceipts.map((receipt) => (
              <motion.article key={receipt.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl border border-white/[0.08] bg-black p-7">
                <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-zinc-600">{receipt.label}</p>
                <p className={`mt-5 text-2xl font-bold tracking-tight ${receipt.color}`}>{receipt.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{receipt.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1FE26C]">One continuous coaching loop</p>
          <h2 className="mt-4 font-bebas text-5xl uppercase leading-none sm:text-7xl">A clear answer before, a calm watch during, a useful lesson after.</h2>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {journey.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.step} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="group rounded-3xl border border-white/[0.08] bg-zinc-950 p-7 transition-colors hover:border-[#1FE26C]/35 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1FE26C]">{item.step}</span>
                  <span className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 text-zinc-500 transition-colors group-hover:text-[#1FE26C]"><Icon className="h-5 w-5" /></span>
                </div>
                <h3 className="mt-12 text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-zinc-400">{item.body}</p>
                <p className="mt-7 border-t border-white/[0.07] pt-5 text-sm leading-relaxed text-zinc-500">{item.proof}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-[#0c0f0d] py-28 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1FE26C]">The coach that proves it</p>
            <h2 className="mt-4 font-bebas text-5xl uppercase leading-none sm:text-7xl">Rarely certain. Never vague.</h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">RunToMax does not ask AI to calculate your training facts. Validated data and deterministic models establish the facts; coaching connects them and explains what they mean.</p>
            <ul className="mt-8 space-y-4 text-sm text-zinc-400">
              {[
                "No analysis before Health and Watch data are finalized.",
                "Every adaptation is bounded, explained and reversible.",
                "Confidence is shown when the evidence is incomplete.",
                "No meaningful insight? The coach says less—not more.",
              ].map((line) => <li key={line} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1FE26C]" />{line}</li>)}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-[#1FE26C]/20 bg-black p-6 shadow-[0_0_70px_rgba(31,226,108,.08)] sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["WHAT CHANGED", "Your final three repetitions held pace while heart rate drift stayed controlled."],
                ["WHY IT MATTERS", "That supports improved durability—not merely a faster average."],
                ["WHAT NOW", "Keep next week’s volume steady and add one repetition only if recovery remains normal."],
                ["DATA & CONFIDENCE", "Finalized Watch + Health data · High confidence"],
              ].map(([label, copy], index) => (
                <div key={label} className={`rounded-2xl border p-5 ${index === 3 ? "border-[#1FE26C]/20 bg-[#1FE26C]/[0.06]" : "border-white/[0.07] bg-white/[0.025]"}`}>
                  <p className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[#1FE26C]">{label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-[70%] -translate-x-1/2 rounded-full bg-[#1FE26C]/[0.05] blur-[120px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1FE26C]">The proof lives in the product</p>
          <h2 className="mt-4 font-bebas text-5xl uppercase leading-none sm:text-7xl">Your run becomes an answer—not another dashboard.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">RunToMax reveals the outcome first, then lets you inspect the workout and understand every important metric without leaving the run.</p>
        </div>

        <div className="relative mt-16 flex snap-x snap-mandatory gap-7 overflow-x-auto pb-8 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {phoneShots.map((shot, index) => (
            <motion.article
              key={shot.src}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="w-[78vw] max-w-[320px] shrink-0 snap-center lg:w-auto lg:max-w-none"
            >
              <div className="mx-auto max-w-[290px] overflow-hidden rounded-[2.8rem] border-[8px] border-zinc-800 bg-black shadow-[0_28px_80px_-28px_rgba(31,226,108,.28)]">
                <img
                  src={`${BASE}/${shot.src}`}
                  alt={`RunToMax iPhone ${shot.tag.toLowerCase()} screen`}
                  className="h-auto w-full"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className="mx-auto mt-7 max-w-[310px] text-center">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1FE26C]">{shot.tag}</p>
                <h3 className="mt-3 text-xl font-bold tracking-tight">{shot.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{shot.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1FE26C]">Useful from the first run</p>
          <h2 className="mt-4 font-bebas text-5xl uppercase leading-none sm:text-7xl">Your coach, whether you follow a plan or simply run.</h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-zinc-950 p-8 sm:p-10">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#72B7FF]/10 blur-3xl" />
            <Route className="h-7 w-7 text-[#72B7FF]" />
            <p className="mt-8 font-mono text-[10px] font-semibold tracking-[0.18em] text-[#72B7FF]">RUN YOUR OWN WAY</p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight">Every run still teaches you something.</h3>
            <p className="mt-4 leading-relaxed text-zinc-400">Record freely and get route memories, comparable efforts, recovery guidance, threshold evidence, achievements and a concise explanation of what mattered.</p>
          </article>
          <article className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-zinc-950 p-8 sm:p-10">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#C29BFF]/10 blur-3xl" />
            <Target className="h-7 w-7 text-[#C29BFF]" />
            <p className="mt-8 font-mono text-[10px] font-semibold tracking-[0.18em] text-[#C29BFF]">TRAIN TOWARD A GOAL</p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight">A plan that remembers the runner inside it.</h3>
            <p className="mt-4 leading-relaxed text-zinc-400">Race goals, consistency, getting faster and carefully constrained returns all start from recent training—not an optimistic template. Every session explains why it belongs.</p>
          </article>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-zinc-950/60 py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1FE26C]">Own the Watch experience</p>
              <h2 className="mt-4 font-bebas text-5xl uppercase leading-none sm:text-7xl">The workout stays clear when the effort gets hard.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">Purpose-built layouts, structured workouts, lap haptics, route guidance, external sensors and phone-free recording—designed for a glance, not a scroll.</p>
          </div>
          <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
            {watchShots.map((shot) => (
              <figure key={shot.src} className="w-48 shrink-0 snap-center sm:w-auto">
                <div className="overflow-hidden rounded-[2.25rem] border-[7px] border-zinc-800 bg-black shadow-[0_0_32px_rgba(31,226,108,.12)]">
                  <img src={`${BASE}/${shot.src}`} alt={`RunToMax Apple Watch ${shot.tag.toLowerCase()} screen — ${shot.desc}`} className="h-auto w-full" />
                </div>
                <figcaption className="mt-4 text-center">
                  <span className="block text-sm font-bold">{shot.tag}</span>
                  <span className="mt-1 block text-xs text-zinc-500">{shot.desc}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Gauge, tag: "TRAINING", title: "Progress that fits your life", copy: "Adaptive running plans, runner-specific strength and conservative progression grounded in what you have actually completed." },
            { icon: Activity, tag: "UNDERSTANDING", title: "Metrics with an answer", copy: "Threshold, load, VO₂ max and training status explain what changed, why it matters and what to do next." },
            { icon: Sparkles, tag: "MEMORY", title: "Your history becomes the coach", copy: "Comparable routes, prior performance and strength progression make guidance more personal with every completed session." },
            { icon: ShieldCheck, tag: "TRUST", title: "Honest by design", copy: "Clear provenance, confidence-aware language, opt-in cloud coaching and exports that keep your run history portable." },
          ].map(({ icon: Icon, tag, title, copy }) => (
            <article key={tag} className="rounded-2xl border border-white/[0.08] bg-zinc-950 p-7">
              <Icon className="h-5 w-5 text-[#1FE26C]" />
              <p className="mt-8 font-mono text-[9px] font-semibold tracking-[0.18em] text-zinc-600">{tag}</p>
              <h3 className="mt-3 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28 sm:pb-36">
        <div className="rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-zinc-900 to-[#0d1510] p-9 text-center sm:p-14">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1FE26C]">Built by a runner who wanted the whole loop to make sense</p>
          <blockquote className="mx-auto mt-7 max-w-3xl text-xl font-medium leading-relaxed text-zinc-200 sm:text-2xl">
            “A running watch can record almost everything. The missing part was a coach that waits for the truth, explains the decision and remembers what happened next.”
          </blockquote>
          <p className="mt-5 text-sm text-zinc-500">— Hidai, founder of RunToMax</p>
        </div>
      </section>

      <section id="download" className="relative overflow-hidden border-t border-white/[0.06] px-6 py-32 sm:py-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,226,108,.14),transparent_62%)]" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1FE26C]">Available now</p>
          <h2 className="mt-4 font-bebas text-6xl uppercase leading-[.9] sm:text-8xl">Stop guessing. Start training with proof.</h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-zinc-400">RunToMax is live on the App Store. Start the free trial on your iPhone, pair your Apple Watch and go for a run—the coach reads the first one.</p>

          <div className="mt-10 flex justify-center">
            <AppStoreBadge heightClass="h-16 sm:h-[4.5rem]" />
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              ["FREE TRIAL", "14 days on the annual plan, 7 days on monthly"],
              ["THEN PRO", "$29.99 a year or $5.99 a month, billed by Apple"],
              ["CANCEL ANYTIME", "One tap in your Apple ID subscriptions"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-white/[0.07] bg-black/40 p-4 text-left">
                <p className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[#1FE26C]">{label}</p>
                <p className="mt-2 text-sm text-zinc-300">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-zinc-600">US App Store pricing · iPhone + Apple Watch · Adults 18+</p>
        </motion.div>
      </section>

      <footer className="border-t border-white/[0.06] py-9">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="font-bebas text-xl tracking-wide">
            <span className="text-white">RunTo</span><span className="text-[#1FE26C]">Max</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-500">
            <Link href="/support" className="transition-colors hover:text-white">Support</Link>
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
            <a href={CONTACT_MAILTO} className="transition-colors hover:text-white">{CONTACT_EMAIL}</a>
          </div>
          <AppStoreBadge heightClass="h-10" />
        </div>
        <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center gap-2 px-6 text-center md:flex-row md:justify-between md:text-left">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-700">© 2026 RunToMax · All splits sacred.</p>
          <p className="max-w-2xl text-[10px] leading-relaxed text-zinc-700">Apple, the Apple logo, Apple Watch and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc.</p>
        </div>
      </footer>
    </main>
  );
}

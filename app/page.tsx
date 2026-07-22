"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Check, ArrowDown } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/app/_lib/contact";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function RunToMaxLanding() {
  const [email, setEmail] = useState("");
  const [botcheck, setBotcheck] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    if (botcheck) return;

    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "97579151-442d-42f8-bdae-ab84b93a8dfe",
          subject: "New RunToMax waitlist signup",
          from_name: "RunToMax Landing Page",
          email,
          botcheck,
        }),
      });
      const data = await res.json();
      if (!data.success) {
        setStatus("idle");
        return;
      }
    } catch {
      setStatus("idle");
      return;
    }

    setStatus("success");
  };

  return (
    <main className="font-sans bg-black text-white min-h-screen">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Primary">
          <a href="/" className="font-bebas text-2xl tracking-wide select-none" aria-label="RunToMax home">
            runto<span className="text-[#1FE26C]">max</span>
          </a>
          <a
            href="#waitlist"
            className="text-sm font-medium hover:text-[#1FE26C] transition-colors duration-200"
          >
            Join the waitlist
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8 min-h-screen">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex-1 w-full text-center lg:text-left z-10"
        >
          <p className="text-[#1FE26C] font-mono text-xs uppercase tracking-widest mb-6 font-semibold">
            For runners who measure things · Apple Watch · 2026
          </p>
          <h1 className="font-bebas text-6xl md:text-8xl tracking-tight leading-[0.85] mb-8 uppercase">
            Turn your Apple Watch <br className="hidden md:block" />
            into a real running watch.
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
            Everything a dedicated running watch should do — pace and distance
            you can trust, watch faces you customize, structured intervals,
            lane-exact track mode — plus a coach that builds your plan and
            explains every run. The recorder and the coach, finally in one app.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <a
              href="#waitlist"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#1FE26C] hover:shadow-[0_0_20px_rgba(31,226,108,0.4)] transition-all duration-300 w-full sm:w-auto text-center"
            >
              Join the waitlist
            </a>
            <a
              href="#how-it-works"
              className="group text-zinc-400 hover:text-white font-medium text-sm transition-colors duration-200 flex items-center gap-2"
            >
              How it works{" "}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <div className="hidden lg:flex flex-1 w-full relative h-[700px] items-center justify-center lg:justify-end">
          {/* Watch Mockup */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: [0, -15, 0], opacity: 1 }}
            transition={{
              y: { repeat: Infinity, duration: 8, ease: "easeInOut" },
              opacity: { duration: 1, delay: 0.2 },
            }}
            className="absolute bottom-4 sm:bottom-10 lg:-left-10 left-2 sm:left-4 w-32 sm:w-44 md:w-56 border-[6px] sm:border-[8px] border-zinc-800 rounded-[1.75rem] sm:rounded-[2.5rem] shadow-[0_0_40px_rgba(31,226,108,0.15)] bg-black overflow-hidden z-20"
          >
            <img
              src={`${BASE}/watch-select.png`}
              alt="RunToMax workout selection screen on Apple Watch — outdoor, treadmill, intervals"
              className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </motion.div>

          {/* iPhone Mockup */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{
              y: { repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 },
              opacity: { duration: 1, delay: 0.1 },
            }}
            className="absolute top-2 sm:top-0 right-2 sm:right-4 lg:right-10 w-48 sm:w-64 md:w-80 border-[8px] sm:border-[12px] border-zinc-900 rounded-[2.25rem] sm:rounded-[3.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] bg-black overflow-hidden z-10"
          >
            <img
              src={`${BASE}/iphone-today.png`}
              alt="RunToMax iPhone Today dashboard — daily readiness read, AI coaching guidance, and recovery status"
              className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        </div>
      </section>

      {/* Pitch — three lines */}
      <section
        id="how-it-works"
        className="py-24 md:py-32 bg-zinc-950 border-t border-zinc-900"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          <motion.div variants={fadeUp}>
            <div className="h-1 w-12 bg-[#1FE26C] mb-6 rounded-full shadow-[0_0_15px_rgba(31,226,108,0.5)]" />
            <h3 className="text-xl font-bold mb-3">A coach in your pocket.</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Adaptive 5K, 10K, half, and marathon plans built around your
              training load.{" "}
              <span className="text-zinc-300 italic">
                Easy days stay easy. Quality days are earned. Your plan adjusts
                when life gets in the way.
              </span>
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="h-1 w-12 bg-[#1FE26C] mb-6 rounded-full shadow-[0_0_15px_rgba(31,226,108,0.5)]" />
            <h3 className="text-xl font-bold mb-3">Race-watch metrics.</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              VO₂ max, CTL · ATL · Form, lactate-threshold HR zones, daily
              readiness, pre-run pace forecast.{" "}
              <span className="text-zinc-300 italic">
                The numbers serious runners actually plan around — now on
                Apple Watch.
              </span>
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="h-1 w-12 bg-[#1FE26C] mb-6 rounded-full shadow-[0_0_15px_rgba(31,226,108,0.5)]" />
            <h3 className="text-xl font-bold mb-3">
              Watch faces built for the workout.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Two purpose-built run modes — outdoor and treadmill — with
              track and structured-interval overlays.{" "}
              <span className="text-zinc-300 italic">
                Race-watch-style data fields, lap-by-lap counted reps, OLED
                contrast that reads at a sprint.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Watch Face Showcase */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center md:text-left mb-16 max-w-3xl"
        >
          <h2 className="font-bebas text-5xl md:text-7xl uppercase tracking-tight mb-4">
            The watch face <br />
            serious runners deserve.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl">
            Distance and pace you can trust, race-watch-grade data fields you
            arrange yourself, and lane-exact track mode. Hand-tuned for the
            workout you&apos;re actually doing — not a generic one.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-sm lg:w-1/2 flex justify-center"
          >
            <div className="w-64 md:w-80 border-[8px] border-zinc-800 rounded-[2.5rem] bg-black overflow-hidden relative shadow-[0_0_40px_rgba(31,226,108,0.15)]">
              <img
                src={`${BASE}/watch-zonebar.png`}
                alt="RunToMax run screen on Apple Watch with live HR-zone bar, lap pace, and big data fields"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {[
              {
                color: "bg-white",
                title: "Structured workouts on the wrist.",
                desc: "Start from a preset library with a rep stepper, or build your own — pyramids, ladders, and multi-block sessions. The watch counts every rep down, holds your target pace, and buzzes the next block — like a dedicated running watch, without buying a second one.",
              },
              {
                color:
                  "bg-[#1FE26C] shadow-[0_0_10px_rgba(31,226,108,0.8)]",
                title: "HR-zone discipline, visualized.",
                desc: "A rainbow zone bar bulges where you are right now. No squinting. No labels. You catch an easy run creeping too hard the moment it happens — and pull it back before the workout falls apart.",
              },
              {
                color:
                  "bg-[#1FE26C] shadow-[0_0_10px_rgba(31,226,108,0.8)]",
                title: "Lane-exact track mode.",
                desc: "Pick a lane on a 400 m oval — distance accumulates by the lane's geometry, not GPS noise. Lane 1 is 400.0 m. Lane 5 is 430.5 m. Lane 8 is 453.7 m. IAAF-correct, every lap.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors duration-300"
              >
                <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${item.color}`} />{" "}
                  {item.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real screens gallery */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center md:text-left mb-16 max-w-3xl"
          >
            <p className="text-[#1FE26C] font-mono text-xs uppercase tracking-widest mb-4 font-semibold">
              Real screens · captured mid-run
            </p>
            <h2 className="font-bebas text-5xl md:text-7xl uppercase tracking-tight mb-4">
              Six screens. <br className="hidden md:block" />
              One run.
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl">
              Not renders. Real frames on Apple Watch Ultra — the pre-run
              sensor check, the start, and four live layouts you flick between
              mid-effort with the Digital Crown. 13+ ship in the app.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="flex gap-5 md:gap-6 overflow-x-auto lg:overflow-visible lg:flex-wrap lg:justify-center snap-x snap-mandatory pb-4 -mx-6 px-6 lg:mx-0 lg:px-0"
          >
            {[
              {
                src: "watch-ready.png",
                tag: "Ready",
                desc: "GPS · HR · battery, pre-run check",
                glow: "rgba(31,226,108,0.18)",
              },
              {
                src: "watch-start.png",
                tag: "Go",
                desc: "One tap to start an outdoor run",
                glow: "rgba(31,226,108,0.18)",
              },
              {
                src: "watch-splits.png",
                tag: "Splits",
                desc: "Lap · HR · up/down · % done",
                glow: "rgba(31,226,108,0.18)",
              },
              {
                src: "watch-gauge.png",
                tag: "Pace ring",
                desc: "Lap pace against target",
                glow: "rgba(31,226,108,0.18)",
              },
              {
                src: "watch-grid.png",
                tag: "Data grid",
                desc: "Pace · time · distance · HR",
                glow: "rgba(31,226,108,0.18)",
              },
              {
                src: "watch-lap.png",
                tag: "Big lap",
                desc: "One number, thumb on LAP",
                glow: "rgba(31,226,108,0.18)",
              },
            ].map((shot) => (
              <motion.figure
                key={shot.src}
                variants={fadeUp}
                className="snap-center shrink-0 w-40 sm:w-44 flex flex-col items-center"
              >
                <div
                  className="w-full border-[7px] border-zinc-800 rounded-[2rem] bg-black overflow-hidden"
                  style={{ boxShadow: `0 0 32px ${shot.glow}` }}
                >
                  <img
                    src={`${BASE}/${shot.src}`}
                    alt={`RunToMax Apple Watch run screen — ${shot.desc}`}
                    className="w-full h-auto"
                  />
                </div>
                <figcaption className="mt-4 text-center">
                  <span className="block text-white font-bold text-sm">
                    {shot.tag}
                  </span>
                  <span className="block text-zinc-500 text-xs mt-1">
                    {shot.desc}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Audit Story */}
      <section className="py-32 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-bebas text-5xl md:text-7xl uppercase tracking-tight mb-16 text-center md:text-left"
          >
            Every run, coached.
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="p-8 md:p-10 rounded-3xl bg-black border border-zinc-800 shadow-[0_0_40px_rgba(31,226,108,0.15)] relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#1FE26C] to-[#1FE26C]" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-sm bg-[#1FE26C] animate-pulse" />
                  <span className="text-xs font-mono tracking-widest uppercase text-zinc-500">
                    Coach Notes · Tuesday Tempo
                  </span>
                </div>
                <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                  &ldquo;Solid tempo. You held 4:35/km for 8K with HR drift
                  under 4% — a clean aerobic effort.{" "}
                  <strong className="text-white font-medium">
                    Bumping next week&apos;s tempo to 9K at the same pace.
                  </strong>{" "}
                  Readiness is 78 this morning, so Thursday&apos;s intervals
                  stay on. Your fitness (CTL) is up 4% this block and Form has
                  flipped from –12 to +6 — you&apos;re race-ready.&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-zinc-800 pt-6">
                  <span className="text-xs font-mono tracking-wide text-zinc-500">
                    ADAPTIVE PLAN · WEEK 6 OF 12
                  </span>
                  <span className="text-xs font-mono tracking-wide text-[#1FE26C] bg-[#1FE26C]/10 px-2 py-1 rounded">
                    ON TRACK
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-sm lg:w-1/2 flex justify-center"
            >
              <div className="w-64 md:w-80 border-[12px] border-zinc-900 rounded-[3.5rem] bg-black overflow-hidden relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
                <img
                  src={`${BASE}/iphone-today.png`}
                  alt="RunToMax daily coaching read on iPhone — readiness verdict and session guidance"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
          >
            {[
              { icon: "📈", title: "Fitness & Form", sub: "CTL · ATL · Form (Banister)" },
              { icon: "❤️", title: "HR Zones", sub: "Lactate-threshold based" },
              { icon: "🫁", title: "VO₂ Max", sub: "Cardiac + Daniels, fused" },
              { icon: "🛌", title: "Readiness", sub: "HRV · Sleep · RHR · Load" },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="text-center md:text-left"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h5 className="text-white font-bold text-sm mb-1">
                  {item.title}
                </h5>
                <p className="text-zinc-500 text-xs uppercase tracking-wide">
                  {item.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Data Layer */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center md:text-left mb-16 max-w-3xl"
        >
          <p className="text-[#1FE26C] font-mono text-xs uppercase tracking-widest mb-4 font-semibold">
            Under the hood
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl uppercase tracking-tight mb-4">
            The data layer most <br className="hidden md:block" />
            running apps skip.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl">
            Race-watch training science, with the math out in the open. No
            black boxes. No proprietary &ldquo;effort&rdquo; scores.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              accent: "#1FE26C",
              tag: "Daily",
              title: "Readiness, scored.",
              desc: "Each morning, a 0–100 readiness score from overnight HRV (40%), sleep (25%), resting HR (20%), and yesterday's load (15%). The weights are published. You can see why the number moved.",
            },
            {
              accent: "#1FE26C",
              tag: "Long-arc",
              title: "Building fitness, or digging a hole?",
              desc: "42-day chronic load, 7-day acute load, Form = CTL – ATL. The same Banister/PMC curves coaches charge a subscription for — built in, no add-on, no extra account.",
            },
            {
              accent: "#1FE26C",
              tag: "Personal",
              title: "Lactate-threshold HR zones.",
              desc: "Zones derived from your real LTHR — re-estimated weekly from how your heart actually responded to your last block. Not 220-minus-age. Not a generic %HRmax.",
            },
            {
              accent: "#1FE26C",
              tag: "Track-style",
              title: "Personal segments.",
              desc: "Draw a segment on the map. Every past and future run gets auto-matched and ranked. Your own leaderboard, no Strava account required.",
            },
            {
              accent: "#1FE26C",
              tag: "Records",
              title: "Best efforts at every distance.",
              desc: "Sliding window across all your runs to find your fastest 1 mi, 5K, 10K, half, and marathon — even if you weren't racing that day.",
            },
            {
              accent: "#1FE26C",
              tag: "Hills",
              title: "Your true effort on every hill.",
              desc: "Minetti polynomial. See your true effort on rolling terrain — finally compare a hilly tempo to a flat one without lying to yourself.",
            },
            {
              accent: "#1FE26C",
              tag: "Recovery",
              title: "Recovery Time, in hours.",
              desc: "After every run, an estimate of how long until you're ready for the next hard session — scaled by duration, intensity, and how recovered you walked in. The race-watch number that tells you when to push and when to wait.",
            },
            {
              accent: "#1FE26C",
              tag: "Per-run",
              title: "What each run actually trained.",
              desc: "Two scores, each 0–5, on every run. Did this build your aerobic base, sharpen your top end, or just bank junk miles? You see what the session actually trained — not just that you moved.",
            },
            {
              accent: "#1FE26C",
              tag: "Calories",
              title: "Calories that track effort.",
              desc: "Most apps multiply distance by a constant — an easy 10K and a brutal one read identical. We use an HR-based model (Keytel 2005), so the number rises with how hard your heart actually worked.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[#1FE26C]/50 via-zinc-800 to-transparent" />
              <p className="font-mono text-[10px] uppercase tracking-widest mb-4 text-zinc-500">
                {item.tag}
              </p>
              <h4 className="text-white font-bold text-lg mb-3">{item.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Live on the wrist */}
      <section className="py-32 px-6 max-w-7xl mx-auto bg-zinc-950 border-y border-zinc-900 -mx-6">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center md:text-left mb-16 max-w-3xl"
          >
            <p className="text-[#1FE26C] font-mono text-xs uppercase tracking-widest mb-4 font-semibold">
              Live, on the wrist
            </p>
            <h2 className="font-bebas text-5xl md:text-7xl uppercase tracking-tight mb-4">
              Race-watch reflexes. <br className="hidden md:block" />
              AI that knows your week.
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl">
              The training data is only as good as the signal. Here&apos;s the
              part the spec sheet usually skips.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                accent: "#1FE26C",
                tag: "Live pace",
                title: "GPS pipeline that earns the data.",
                desc: "Doppler-derived speed from the very first fix — live pace is honest before you've covered 50 m. An anti-jitter accumulator throws out spike-fixes the moment they happen, so a 4:30 tempo never blinks 3:20. We can't make Apple's GPS chip better. We can stop the software from wasting it.",
              },
              {
                accent: "#1FE26C",
                tag: "Always-on",
                title: "Live Activity + Dynamic Island.",
                desc: "Pace, HR, distance, cadence, and zone pinned to your lock screen and the Dynamic Island the entire run. No swipe. No raise-to-wake. The data is there the second you glance.",
              },
              {
                accent: "#1FE26C",
                tag: "Cloud coaching",
                title: "A coach that explains, not invents.",
                desc: "Pre-run brief grounded in today's readiness. Post-run audit that connects finalized facts. Daily context and ask-anything Q&A. Included with Pro, explicitly opt-in, and sent through a secured proxy to Gemini 2.5 Flash — never a generic plan.",
              },
              {
                accent: "#1FE26C",
                tag: "Indoor",
                title: "Treadmill calibration that holds up.",
                desc: "Your outdoor stride length is learned and carried indoors. Cadence × calibrated stride keeps pace and distance honest on the belt — no manual adjust knob, no &ldquo;estimated&rdquo; asterisks.",
              },
              {
                accent: "#1FE26C",
                tag: "Plan it",
                title: "Routes generated around you.",
                desc: "Ask for a 5 km loop from where you stand. The app draws three real walk-routed loops at 0° / 120° / 240° bearings — actual streets, not a circle on a map. Falls back gracefully when the network of paths gets thin.",
              },
              {
                accent: "#1FE26C",
                tag: "Watch face",
                title: "Complications that earn their spot.",
                desc: "QuickStart launches a run from any face in one tap. WeeklyStats keeps your mileage ring visible all week. LastRun shows your last pace and HR at a glance. Built like running-watch UI — not afterthought widgets.",
              },
              {
                accent: "#1FE26C",
                tag: "Portable",
                title: "Your run data travels with you.",
                desc: "Export completed activities as FIT or GPX when you want them. Apple Health remains the source of truth, and RunToMax does not lock your run history inside a proprietary account.",
              },
              {
                accent: "#1FE26C",
                tag: "Sensors",
                title: "External HR straps, paired.",
                desc: "Don't trust wrist optical at threshold? Pair a Bluetooth chest strap or arm band straight to the watch. The zone bar and every HR metric read from the strap the moment it connects — the pre-run check confirms the source before you start.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="p-8 rounded-2xl bg-black border border-zinc-800 hover:border-zinc-600 transition-colors duration-300 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 h-1 w-16 rounded-r-full"
                  style={{ backgroundColor: item.accent, boxShadow: `0 0 14px ${item.accent}66` }}
                />
                <p
                  className="font-mono text-[10px] uppercase tracking-widest mb-4"
                  style={{ color: item.accent }}
                >
                  {item.tag}
                </p>
                <h4 className="text-white font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Honest Part */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="p-12 md:p-16 rounded-[2rem] bg-zinc-900/40 border border-zinc-800 text-center backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/20 to-transparent pointer-events-none" />
          <h2 className="font-bebas text-4xl md:text-6xl uppercase tracking-tight mb-6 relative z-10">
            Built for runners. <br />By runners.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed relative z-10">
            If you do tempo runs, intervals, long runs, and chase a finish-line
            time — RunToMax was built for you. Not for casual joggers. Not for
            step-counters. For the runner who already knows what Zone 2 means
            and just wants the watch to keep up.
          </p>
        </motion.div>
      </section>

      {/* Tech Strip */}
      <section className="py-12 border-y border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-mono text-zinc-600 uppercase tracking-widest text-center">
          <span className="hover:text-zinc-300 transition-colors">
            HealthKit <span className="text-zinc-800 ml-2">RW</span>
          </span>
          <span className="hover:text-zinc-300 transition-colors">
            WeatherKit <span className="text-zinc-800 ml-2">Hourly</span>
          </span>
          <span className="hover:text-zinc-300 transition-colors">
            FIT &amp; GPX Export
          </span>
          <span className="text-[#1FE26C]/60 hover:text-[#1FE26C] transition-colors">
            Gemini 2.5 Flash
          </span>
        </div>
      </section>

      {/* Waitlist */}
      <section
        id="waitlist"
        className="py-40 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,226,108,0.08)_0%,rgba(31,226,108,0.06)_25%,rgba(31,226,108,0.04)_50%,transparent_80%)]" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-xl mx-auto text-center relative z-10"
        >
          <h2 className="font-bebas text-5xl md:text-7xl uppercase tracking-tight mb-6 [text-shadow:0_0_20px_rgba(31,226,108,0.4)]">
            Train like a runner.
            <br /> On the watch you already own.
          </h2>
          <p className="text-zinc-400 text-base mb-10 leading-relaxed">
            We&apos;re shipping in 2026. Waitlist members get early TestFlight
            builds, a founder offer on Pro, and a
            hand-numbered first-1000 badge in the app.
          </p>

          <div className="min-h-[60px] flex justify-center items-center">
            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleJoin}
                  className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto"
                >
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    value={botcheck}
                    onChange={(e) => setBotcheck(e.target.value)}
                    style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                    aria-hidden="true"
                  />
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#1FE26C] focus:ring-1 focus:ring-[#1FE26C] transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#1FE26C] hover:shadow-[0_0_15px_rgba(31,226,108,0.4)] transition-all duration-300 whitespace-nowrap disabled:opacity-50 min-w-[140px]"
                  >
                    {status === "loading" ? "Joining..." : "Join Waitlist"}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  aria-live="polite"
                  className="text-[#1FE26C] font-medium flex items-center justify-center gap-2 bg-[#1FE26C]/10 py-3 px-6 rounded-lg border border-[#1FE26C]/20"
                >
                  <Check className="w-5 h-5" /> You&apos;re on the list. Check
                  your inbox.
                </motion.div>
              )}
            </AnimatePresence>
          </div>


          <div className="flex justify-center gap-4 mt-8 text-xs text-zinc-600 font-mono tracking-wider uppercase">
            <span>No spam.</span>
            <span className="text-zinc-800">|</span>
            <span>1-click unsubscribe.</span>
            <span className="text-zinc-800">|</span>
            <span>We don&apos;t sell data.</span>
          </div>
        </motion.div>
      </section>

      {/* Founder Note */}
      <section className="py-24 px-6 border-t border-zinc-900">
        <div className="max-w-md mx-auto">
          <p className="text-[#1FE26C] font-mono text-xs uppercase tracking-widest mb-6 font-semibold pl-6">
            Built by runners. For runners who train.
          </p>
          <p className="text-zinc-400 italic text-sm leading-loose border-l-2 border-zinc-800 pl-6">
            &ldquo;I run a 1:30 half and a 40-flat 10K. I&apos;ve owned a
            drawer of running watches over the years. The watches were
            great. The apps that came with them were not. RunToMax is the
            running platform I always wanted on the watch I actually wear
            — race-watch-grade training, clean and simple, with a coach
            that builds a plan around your week, not a generic one.&rdquo;
          </p>
          <p className="text-zinc-500 text-sm mt-4 pl-6 font-medium">
            — Hidai, founder
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-bebas text-xl tracking-wide text-zinc-600 select-none">
            runto<span className="text-zinc-400">max</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500 font-medium">
            <Link href="/support" className="hover:text-white transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <a
              href={CONTACT_MAILTO}
              className="hover:text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="text-zinc-700 text-xs font-mono tracking-widest uppercase">
            © 2026 RunToMax. All splits sacred.
          </div>
        </div>
      </footer>
    </main>
  );
}

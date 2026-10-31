import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create interval workouts in RunToMax for Apple Watch",
  description: "Build running intervals in RunToMax on your iPhone and send your session to your Apple Watch.",
  alternates: { canonical: "/guides/interval-workouts-apple-watch/" },
};

const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export default function IntervalGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl justify-between"><Link href="/" className="font-bebas text-2xl">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Apple Watch</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">Create an interval workout in RunToMax</h1>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <p>Build your session on your iPhone, then send it to RunToMax on your Apple Watch. Choose a workout from the library or create your own.</p>
        <h2>Choose a workout</h2>
        <ol><li>Open RunToMax on your iPhone and go to <strong>Plan → Workouts</strong>.</li><li>Under <strong>Running</strong>, choose a workout and open its details.</li><li>Tap <strong>Send to watch</strong>. Open RunToMax on your Apple Watch to receive it.</li></ol>
        <h2>Build your own intervals</h2>
        <p>Creating and editing workouts requires Pro access or an eligible trial. Check the app for current terms.</p>
        <ol><li>In <strong>Plan → Workouts</strong>, tap <strong>+</strong>, then <strong>Build new</strong>.</li><li>Name your workout and choose outdoor or treadmill.</li><li>Set a warmup if you want one. Open <strong>Block 1</strong> to set repeats, the time or distance for each effort, and recovery.</li><li>Add another block if needed, set a cooldown, then tap <strong>Save</strong>.</li><li>Find your workout under <strong>My Workouts</strong> and tap <strong>Send to Watch</strong>. Open RunToMax on your Watch to receive it, then start the session when you’re ready.</li></ol>
        <p>For example, if your plan calls for four two-minute efforts, set <strong>Repeats</strong> to four and <strong>Work</strong> to two minutes. Use the recovery prescribed by your plan or coach.</p>
        <h2>If the workout hasn’t arrived</h2><p>Check that your iPhone and Apple Watch are paired and open RunToMax on the Watch. A queued message means the workout is waiting to be delivered; it does not mean your run has started. Screen labels may vary by app version.</p>
        <p><a href="/features/apple-watch/">Explore RunToMax on Apple Watch</a> · <a href="/support/">Get help</a></p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Get RunToMax</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

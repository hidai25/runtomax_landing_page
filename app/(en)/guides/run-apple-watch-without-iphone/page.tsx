import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.withoutPhone;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";
const apple = "https://support.apple.com/en-ca/guide/watch/-apd0443fb403/watchos";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: "Run with Apple Watch without your iPhone",
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
});

export default function RunWithoutPhoneGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Apple Watch</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">Can you run with Apple Watch without your iPhone?</h1>
      <GuideDetails guide={guide} />
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>Yes. You do not need a cellular plan to record a run.</strong> The Apple Watches supported by RunToMax have their own GPS. Set up the app first, then record from your wrist while your iPhone stays at home.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <h2>GPS recording and staying connected are different</h2>
        <p>The Watch can track an outdoor workout and heart rate without the phone or Wi-Fi. Calling, messaging and streaming have different connection requirements. A cellular Watch with an active plan can keep you connected away from your phone where service is available. See <a href={apple}>Apple’s guide to using the Watch without its paired iPhone</a>.</p>
        <p>Apple’s built-in Workout app also records runs without the phone. RunToMax is an option if you want its running screens, workout builder and coaching; it is not a requirement for leaving the phone behind.</p>
        <h2>Before your first RunToMax run without the phone</h2>
        <ol className="list-decimal space-y-4 pl-5">
          <li><strong>Set up both apps.</strong> Open RunToMax on your iPhone and Watch, complete setup, and allow the Health and location permissions needed for recording.</li>
          <li><strong>Send the session before leaving.</strong> For a structured workout, use <strong>Watch → Workouts</strong> on iPhone and <strong>Send to Watch</strong> (or <strong>Send workout &amp; route</strong>). Open RunToMax on the Watch and check that the intended session has arrived. <Link href="/guides/interval-workouts-apple-watch/">Follow the interval setup guide</Link> if needed.</li>
          <li><strong>Check the Watch itself.</strong> Confirm the workout and battery before you put the phone away. If you want music, download it to the Watch in your music app and check playback through your headphones first.</li>
          <li><strong>Start on your wrist.</strong> For an ordinary run, choose <strong>Outdoor</strong> in RunToMax on the Watch. For a sent session, open that workout and follow the Watch’s start flow.</li>
        </ol>
        <p>Basic Outdoor and Treadmill recording is free. Structured guidance and additional screen layouts are Pro features; the app shows the access available to your account.</p>
        <h2>What happens when you get home?</h2>
        <p>End and save the workout on the Watch. Bring it near your iPhone and open RunToMax to review the run when syncing completes. Recording on the wrist does not require the phone to stay reachable throughout the run.</p>
        <p>A fresh coaching decision is different from a workout already on the Watch. In RunToMax 1.3.5, refreshing Today’s call needs the iPhone to be reachable. Check the day’s guidance before leaving; do not assume a disconnected Watch has the latest adjustment.</p>
        <h2>When would you still carry the phone?</h2>
        <p>Bring it if you want its camera, prefer its music setup, or rely on phone-based contact or location sharing. Runners describe <a href="https://www.reddit.com/r/AppleWatch/comments/1v98ipf/jogging_with_or_without_phone_if_you_have_gps/">both choices in this discussion</a>; that is individual preference, not evidence that one setup suits everyone.</p>
        <p>GPS recording alone does not mean you can make a call or share your location live. Check the connection and safety features available on your particular Watch before relying on them.</p>
        <p className="text-sm text-zinc-400">RunToMax instructions checked against the App Store 1.3.5 release source on November 3, 2026. This is not a new device test.</p>
        <p><Link href="/features/apple-watch/">Explore RunToMax on Apple Watch</Link> · <Link href="/support/">Setup help</Link></p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Get RunToMax</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

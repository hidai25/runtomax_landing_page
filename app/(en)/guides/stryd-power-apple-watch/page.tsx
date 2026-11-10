import GuideDetails from "@/app/_components/GuideDetails";
import { guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.strydPower;
const download = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";

export const metadata: Metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  authors: [{ name: "RunToMax", url: "https://runtomax.com/" }],
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
  alternates: { canonical: guide.path },
});

export default function StrydPowerGuide() {
  return <main className="min-h-screen bg-black text-white">
    <nav aria-label="Primary" className="border-b border-white/10 px-6 py-5"><div className="mx-auto flex max-w-3xl items-center justify-between gap-4"><Link href="/" className="font-bebas text-2xl" aria-label="RunToMax home">RUNTO<span className="text-[#1FE26C]">MAX</span></Link><a href={download} className="shrink-0 text-sm">Get the app</a></div></nav>
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/guides/" className="mb-8 inline-block text-sm font-medium text-zinc-400 hover:text-white">← All guides</Link>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1FE26C]">RunToMax guide · Running power</p>
      <h1 className="font-bebas text-5xl uppercase leading-none md:text-7xl">{guide.title}</h1>
      <GuideDetails guide={guide} />
      <div className="mt-8 rounded-2xl border border-[#1FE26C]/25 bg-[#1FE26C]/[0.07] p-6">
        <p className="text-lg leading-relaxed"><strong>Have a workout written in watts?</strong> RunToMax Pro can use power from your Stryd pod to guide a run or an interval session on Apple Watch. Set your range, put power on your running screen, and keep pace visible alongside it.</p>
      </div>
      <div className="legal-prose mt-10 text-base leading-relaxed text-zinc-300">
        <p>You’ll need a Stryd pod, an Apple Watch with RunToMax, its paired iPhone and <strong>RunToMax Pro</strong>. The pod is separate hardware. These are RunToMax instructions, not instructions for Stryd’s own app.</p>
        <h2>1. Connect the pod on your Watch</h2>
        <p>Open RunToMax on Apple Watch, then <strong>Settings → Sensors → Stryd Foot Pod</strong>. Choose <strong>Scan for Stryd</strong> if scanning has not started, then select your pod. Move your foot to wake it and check for live watts before relying on power guidance.</p>
        <p>The separate <strong>Record with Stryd</strong> switch controls using the pod for saved distance. You do not need to enable it just to use power targets.</p>
        <h2>2. Enter your target range</h2>
        <p>On iPhone, open <strong>Watch → Watch Screens</strong>. Select the run type, such as Outdoor, then scroll to <strong>Target power</strong>. Turn it on, choose <strong>W</strong>, and set <strong>From</strong> and <strong>To</strong> to your own workout’s watt range. Replace any initial values; they are not a personal recommendation.</p>
        <p>You can also edit the target on your Watch under <strong>Settings → Workout → Target Power</strong>. Check the selected run type and target before starting.</p>
        <h2>3. Put watts where you can see them</h2>
        <p>In the iPhone Watch Screens preview, tap a field and choose <strong>Stryd Power</strong> for the pod reading or <strong>Power vs target</strong> for the difference from your target. Open RunToMax on your Watch to sync and check the layout.</p>
        <p>Power guidance uses roughly five seconds of readings to smooth brief changes. Voice corrections and wrist taps are separate choices under <strong>Power guidance</strong> below the target on iPhone. Spoken cues must also be enabled; Quiet Mode suppresses corrections.</p>
        <h2>Using a percentage instead of watts</h2>
        <p><strong>% of threshold</strong> needs a threshold value you have confirmed in RunToMax. If your prescription is based on Stryd’s Critical Power, manually enter that current value in RunToMax’s <strong>Threshold power</strong> editor. On Watch, find it under <strong>Settings → Workout → YOUR NUMBERS</strong>.</p>
        <p>For arithmetic only: a confirmed 300 W threshold makes 80–85% equal to 240–255 W. This is not a suggested workout. Stryd explains <a href="https://help.stryd.com/en/articles/6879345-critical-power-definition">Critical Power</a> in its own documentation and cautions against substituting thresholds from other power systems.</p>
        <p>RunToMax’s threshold estimate is its own suggestion, not Stryd’s Auto-Calculated Critical Power. Entering a value here does not connect your Stryd account or keep that number automatically updated from Stryd.</p>
        <h2>For intervals, give each step its target</h2>
        <p>In RunToMax’s workout builder, a block has separate <strong>Work power</strong> and <strong>Recovery power</strong> controls. Use the ranges from your own session. The interval screen compares live power with that step’s target. Start with our <Link href="/guides/interval-workouts-apple-watch/">interval setup guide</Link> if you have not built a session before.</p>
        <h2>If the watts disappear</h2>
        <p>Check the pod connection and battery. Missing readings are not a reason to speed up. RunToMax’s power-target guidance uses the pod, not the Watch’s separate running-power estimate. For hardware troubleshooting, follow <a href="https://help.stryd.com/en/articles/8977365-stryd-hardware-common-questions">Stryd’s support guidance</a>; it advises against resetting a pod without specific instruction.</p>
        <h2>Prefer Stryd’s own workout experience?</h2>
        <p>Stryd’s <a href="https://help.stryd.com/en/articles/8970460-how-to-use-the-apple-watch-and-stryd">Apple Watch app</a> offers power targets and structured workouts too. Use the app that fits your workflow. For Stryd account syncing and subscription features, check Stryd’s documentation for the app you use.</p>
        <p className="text-sm text-zinc-400">Stryd is a trademark of Stryd, Inc. RunToMax is not affiliated with or endorsed by Stryd. Instructions reviewed against RunToMax 1.3.5 release source on November 10, 2026; no new physical-device test is claimed.</p>
      </div>
      <a href={download} className="mt-10 inline-block rounded-full bg-[#1FE26C] px-7 py-3 font-semibold text-black">Explore RunToMax Pro</a>
    </article>
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-400"><Link href="/privacy/">Privacy</Link><span className="mx-4">·</span><Link href="/support/">Support</Link></footer>
  </main>;
}

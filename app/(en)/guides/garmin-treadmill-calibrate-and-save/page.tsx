import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";
import Link from "next/link";

const guide = guides.garminTreadmill;
const store = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=website-guides&mt=8";
const forerunner = "https://www8.garmin.com/manuals/webhelp/GUID-0221611A-992D-495E-8DED-1DD448F7A066/EN-US/GUID-86541696-B60E-44BC-9A46-4349C86A1CD8.html";
const enduro = "https://www8.garmin.com/manuals/webhelp/GUID-BD965919-30AA-4EB5-95D7-A899658C50EB/EN-US/GUID-86541696-B60E-44BC-9A46-4349C86A1CD8.html";
const accessories = "https://www8.garmin.com/manuals/webhelp/GUID-0221611A-992D-495E-8DED-1DD448F7A066/EN-GB/GUID-60BF550F-9C03-4935-AC5C-14A5F59C3E85.html";

export const metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  alternates: guideAlternates(guide.path),
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
});

export default function GarminTreadmillGuide() {
  return (
    <PageShell lang="en" eyebrow="Guide · Garmin" title={guide.title} updated={guide.updated} storeUrl={store}
      intro={<p>The treadmill says 1.5 miles. Your Forerunner 965 says 1.4. When you stop, there’s no calibration prompt. The clue is on your wrist: the 965 needs to record 1.5 miles itself before you can enter the belt distance. Other models have different minimums.</p>}>
      <h2>What should I check before I save?</h2>
      <ol>
        <li><strong>Check the activity and distance.</strong> Start a Treadmill activity. The <a href={forerunner}>Forerunner 965 manual</a> gives a minimum of 2.4 km (1.5 mi). The <a href={enduro}>original Enduro manual</a> gives 1.5 km (1 mi). Look up “Calibrating the Treadmill Distance” in your model’s manual.</li>
        <li><strong>Note the belt total before the console clears.</strong> Stop the timer. On the 965, choose <strong>Save</strong> for the first eligible run. The watch then asks for the distance. On later runs, scroll to <strong>Calibrate &amp; Save</strong> to enter it again. Check whether the watch is asking for miles or kilometres.</li>
        <li><strong>Check which sensor supplied distance.</strong> A foot pod or a chest strap that measures pace and distance can change the options you see. The 965, for example, supports manual calibration with certain Garmin heart-rate accessories connected. If you use one, follow the <a href={accessories}>instructions for that watch and accessory</a>.</li>
      </ol>
      <h2>I already saved the run. Can I fix the distance?</h2>
      <p>Yes. For a treadmill run synced to Garmin Connect, open the activity, tap the three-dot menu, choose <strong>Edit Activity</strong>, update the distance and save. That corrects the total in your Connect log. To calibrate your watch for future runs, use the watch prompt on your next eligible treadmill run. <a href="https://support.garmin.com/en-US/?faq=aNGg6LTaoT4X7fyCnIuQW6">Garmin’s activity editing instructions</a>.</p>
      <h2>Why do my lap paces still look wrong?</h2>
      <p>Suppose the belt showed 5 km and the watch recorded 4.7 km during intervals. One belt total doesn’t tell you how much of the difference came from each fast rep or recovery. Garmin says treadmill calibration leaves previously recorded lap data as it was. Editing the total in Connect also leaves the exported activity file as originally recorded. <a href="https://support.garmin.com/en-US/?faq=bpO2rljrqH2yUG1wSG73s9">Garmin’s treadmill activity guide</a>.</p>
      <p>If you log new Garmin runs in RunToMax, calibrate on the watch before the activity syncs. See <Link href="/features/garmin/">how Garmin runs reach RunToMax</Link>. Recorded on Apple Watch instead? See <Link href={guides.treadmill.path}>how to correct Apple Watch treadmill distance</Link>.</p>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

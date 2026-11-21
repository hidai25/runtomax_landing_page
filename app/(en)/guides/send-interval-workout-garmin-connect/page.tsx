import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { pageMetadata } from "@/app/_lib/site";

const guide = guides.garminIntervalsEn;
const store = "https://apps.apple.com/app/apple-store/id6767669260?pt=126426469&ct=guide-garmin&mt=8";
export const metadata = pageMetadata(guide.path, {
  title: guide.title, description: guide.description,
  alternates: guideAlternates(guide.path),
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
});

export default function GarminIntervalsGuide() {
  return (
    <PageShell lang="en" eyebrow="Guide · Garmin Connect" title={guide.title} updated={guide.updated}
      alternate="/fr/guides/fractionne-garmin-connect-iphone/" storeUrl={store}
      intro={<p>If your session is ready in RunToMax, you can have it on a compatible Garmin without re-entering each repeat. You need RunToMax Pro to send it, the Garmin Connect account your watch uses, and a sync before you start.</p>}>
      <ol>
        <li><strong>Connect your account.</strong> On iPhone, open RunToMax settings, then Connections and Garmin Connect. Follow the sign-in steps and allow workouts to be sent.</li>
        <li><strong>Choose your intervals.</strong> Open your running session in the plan or the RunToMax library. Check the repeats, recoveries and target, then tap <strong>Send to Garmin</strong> and confirm. A library session is added to today in the calendar. Sending another library session for today replaces the earlier one.</li>
        <li><strong>Check the calendar.</strong> In Garmin Connect on iPhone, open the calendar on the session’s date. Check its name, then sync the watch. The confirmation in RunToMax means Garmin Connect received the session.</li>
        <li><strong>Check the watch before you leave.</strong> Open the Run activity and look for the session in the training calendar. Menus vary by model. Open its details and check, for example, that your six 400 m repeats and their recoveries are there before you start the timer.</li>
      </ol>
      <h2>The session is on the iPhone but not on the watch</h2>
      <p>Check the date, the Garmin account and the selected watch, then sync again in Garmin Connect. If the session is listed in your workouts, you can also open it and send it to the compatible device. <a href="https://support.garmin.com/en-US/?faq=Oyqt6jUjOF8L1Rnuc9Sms8">See Garmin’s instructions</a>.</p>
      <h2>Do I need a subscription?</h2>
      <p>Recording, importing your new Garmin runs and the first week of every plan are free. Sending from RunToMax requires Pro. A Pro trial, if you are eligible, becomes a paid subscription that renews automatically unless cancelled. If you would rather enter the session yourself, you can build it directly in Garmin Connect. <a href="/faq/#garmin-connect">Prices and common questions</a>.</p>
      <p><a href="/features/garmin/">RunToMax with a Garmin watch</a> · <a href="/guides/">All guides</a></p>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

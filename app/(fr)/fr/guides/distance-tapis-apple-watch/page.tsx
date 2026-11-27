import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { FR_APP_STORE_URL, pageMetadata } from "@/app/_lib/site";

const guide = guides.frTreadmill;
const store = FR_APP_STORE_URL + "?pt=126426469&ct=fr-guide-tapis&mt=8";
export const metadata = pageMetadata(guide.path, {
  title: guide.title, description: guide.description,
  alternates: guideAlternates(guide.path),
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
});

export default function DistanceTapisGuide() {
  return (
    <PageShell lang="fr" eyebrow="Guide · Apple Watch" title={guide.title} updated={guide.updated}
      alternate="/guides/apple-watch-treadmill-distance/" storeUrl={store}
      intro={<p>Le tapis affiche 5,0 km, la montre 4,7 km. Voici quelle distance retenir, comment corriger une sortie enregistrée avec RunToMax et comment reporter la distance du tapis dans Apple Santé.</p>}>
      <h2>Le tapis indique 5,0 km et mon Apple Watch 4,7 km. Laquelle retenir ?</h2>
      <p>Si vous voulez que votre carnet d’entraînement corresponde au tapis, retenez 5,0 km. Vérifiez d’abord que le tapis et la montre ont mesuré la même portion de la sortie. Si le tapis a compté un échauffement avant le lancement de la montre, les deux totaux ne couvrent pas la même distance.</p>
      <p>Même avec un départ et une arrivée identiques, les chiffres peuvent différer. Le tapis indique la distance parcourue par sa bande. En intérieur, la montre estime la vôtre à partir de vos mouvements et de la longueur de foulée qu’elle a apprise. L’écart seul ne dit pas laquelle des deux mesures est la plus proche. Pour les sorties que vous comparez d’une semaine à l’autre sur la même machine, choisissez une source et gardez-la.</p>
      <h2>Pourquoi l’allure de mon Apple Watch est-elle fausse sur le tapis ?</h2>
      <p>Parce que l’allure découle de la distance. La montre divise le temps par la distance qu’elle a estimée : une distance trop courte de 6 % donne une allure environ 6 % plus lente que celle du tapis. Corrigez la distance et l’allure suit : corriger une sortie RunToMax avec le total du tapis corrige aussi son allure et ses fractions.</p>
      <p>Sur tapis, l’allure en direct varie aussi davantage qu’en extérieur, car chaque estimation dépend du balancement de votre bras. Tenir les barres, porter un téléphone ou une gourde dans la main de la montre, ou changer de foulée sur une pente peuvent la décaler. La moyenne de la sortie est plus stable que n’importe quel instant.</p>
      <h2>Comment enregistrer la distance du tapis dans Apple Santé ?</h2>
      <p>Si vous avez enregistré la sortie avec RunToMax sur Apple Watch, vous pouvez reporter la mesure du tapis sur cet entraînement dans Apple Santé. Notez le total du tapis avant que son écran ne se remette à zéro.</p>
      <ol>
        <li>Ouvrez le résumé de la sortie terminée dans RunToMax sur la montre et cherchez la carte <strong>Calibrer</strong>. Elle apparaît pour les sorties sur tapis dont les pas ont été enregistrés.</li>
        <li>Vérifiez si la montre affiche des kilomètres ou des miles. Réglez la distance sur celle du tapis (5,00 si l’écran indiquait 5,0 km et que la montre est en kilomètres). Réglez la <strong>pente</strong> comme sur le tapis.</li>
        <li>Touchez <strong>Enregistrer</strong>. RunToMax met à jour la distance et l’allure de la sortie, et se sert de cette valeur pour affiner l’estimation de votre foulée lors des prochaines sorties sur tapis.</li>
      </ol>
      <p>RunToMax tente ensuite de reporter la correction dans Apple Santé. Une fois la synchronisation réussie, l’entraînement RunToMax dans Santé porte le total du tapis (5,0 km dans cet exemple). Vous pouvez le vérifier dans l’app Forme sur l’iPhone. Inutile d’enregistrer les 0,3 km manquants comme un entraînement à part.</p>
      <p>Si le résumé affiche <strong>Mise à jour d’Apple Santé…</strong>, la synchronisation est en cours. S’il signale un échec, ouvrez RunToMax sur la montre, vérifiez ses autorisations Santé et touchez <strong>Réessayer la synchronisation avec Apple Santé</strong>. Si l’ancienne distance persiste, <a href="/support/">écrivez au support RunToMax</a> en précisant les versions de l’app et de watchOS.</p>
      <p>Vous voulez retrouver la distance du tapis dans Santé après votre prochaine sortie ? <a id="app-store-treadmill-health" href={store}>Téléchargez RunToMax sur l’App Store</a> et enregistrez votre séance avec RunToMax sur l’Apple Watch.</p>
      <h2>Et si j’ai enregistré la sortie avec l’app Exercice d’Apple ?</h2>
      <p>RunToMax ne peut corriger que les sorties qu’il a enregistrées. Pour vos prochaines sorties avec l’app Exercice, vous pouvez aider la montre à apprendre votre foulée. Sur l’iPhone, vérifiez que <strong>Réglages → Confidentialité et sécurité → Service de localisation → Services système → Étalonnage déplacements</strong> est activé. Enregistrez ensuite une vingtaine de minutes à votre allure habituelle avec <strong>Course (plein air)</strong> ou <strong>Marche (plein air)</strong>, sur terrain plat et dégagé, avec une bonne réception GPS. Si vous vous entraînez à plusieurs allures, Apple conseille un étalonnage pour chacune. <a href="https://support.apple.com/fr-fr/105048">Les instructions d’étalonnage d’Apple</a></p>
      <h2>Et si j’ai couru sur tapis avec une Garmin ?</h2>
      <p>Gardez la distance enregistrée par votre Garmin. La correction décrite ici concerne les sorties enregistrées avec RunToMax sur Apple Watch. Avec RunToMax 1.4, vos nouvelles sorties Garmin arrivent dans votre carnet sur l’iPhone <a href="/fr/fonctionnalites/garmin/">via Garmin Connect</a>.</p>
      <p><a href="/fr/fonctionnalites/apple-watch/">RunToMax sur Apple Watch</a> · <a href="/fr/guides/fractionne-apple-watch/">Créer une séance de fractionné</a> · <a href="/fr/guides/">Tous les guides</a></p>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

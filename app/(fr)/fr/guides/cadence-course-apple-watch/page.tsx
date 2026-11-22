import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { FR_APP_STORE_URL, pageMetadata } from "@/app/_lib/site";

const guide = guides.frCadence;
const store = FR_APP_STORE_URL + "?pt=126426469&ct=fr-guide-cadence&mt=8";
export const metadata = pageMetadata(guide.path, {
  title: guide.title, description: guide.description,
  alternates: guideAlternates(guide.path),
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
});

export default function CadenceGuide() {
  return (
    <PageShell lang="fr" eyebrow="Guide · Cadence" title={guide.title} updated={guide.updated}
      alternate="/guides/apple-watch-running-cadence/" storeUrl={store}
      intro={<p><strong>La cadence se lit en pas par minute (ppm).</strong> Dans l’app Exercice d’Apple, elle figure dans la vue Mesures 2 d’une course en plein air. Dans RunToMax, elle fait déjà partie des cinq champs de l’écran de course gratuit.</p>}>
      <p>Un <a href="https://www.reddit.com/r/AppleWatchFitness/comments/1r3p9oy/cadence_on_apple_watch/">coureur équipé d’une Apple Watch Ultra</a> (en anglais) se demandait s’il lui fallait une autre app pour voir sa cadence en direct. Il l’a finalement trouvée dans l’app Exercice.</p>
      <h2>Où trouver la cadence dans l’app Exercice ?</h2>
      <p>Pour une séance « Course (plein air) », Apple affiche la cadence dans les vues <strong>Mesures 2</strong> et <strong>Puissance</strong>. Pendant la course, tournez la Digital Crown pour passer d’une vue à l’autre. Si vous ne voyez que l’allure et la distance, vérifiez quelles vues sont activées pour ce type d’exercice. Voir <a href="https://support.apple.com/fr-fr/guide/watch/apd1f24d4d35/watchos">les vues d’exercice et mesures de course</a>.</p>
      <h2>Afficher la cadence sur l’écran RunToMax</h2>
      <p>Si vous avez modifié l’écran par défaut ou si vous voulez placer la cadence ailleurs, choisissez son emplacement depuis l’iPhone.</p>
      <ol>
        <li>Dans RunToMax 1.4, ouvrez <strong>Vous → Apple Watch → Écrans de la montre</strong>.</li>
        <li>Choisissez le type de sortie que vous lancerez sur la montre, par exemple <strong>Extérieur</strong> ou <strong>Tapis</strong>. Chacun a ses propres champs.</li>
        <li>Touchez un champ dans l’aperçu de la montre, puis choisissez <strong>Technique de course → Cadence</strong>.</li>
        <li>Les changements sont enregistrés sur l’iPhone. Ouvrez RunToMax sur la montre jumelée et vérifiez le champ à votre prochaine sortie de ce type. Si l’ancien écran s’affiche encore, touchez <strong>Synchroniser</strong> dans l’éditeur de l’iPhone.</li>
      </ol>
      <h2>Que veut dire 170 ppm ?</h2>
      <p>À 170 ppm, vous faites environ 170 pas par minute, pied gauche et pied droit confondus. Le chiffre au poignet décrit votre rythme du moment. La moyenne affichée dans le résumé peut être différente si vous avez marché pendant l’échauffement ou changé d’allure. Garmin donne <a href="https://www8.garmin.com/manuals/webhelp/GUID-607F08F6-33FC-40BF-9727-84E54043D82D/FR-FR/GUID-73BCE454-042E-420D-96A4-9DBA46626CD4.html">sa définition des champs de cadence</a>.</p>
      <p>Pour voir comment votre cadence évolue avec la vitesse, placez-la à côté d’<a href="/fr/guides/allure-apple-watch/">un champ d’allure</a>. Si le champ reste vide pendant la course, écrivez au <a href="/support/">support RunToMax</a> (en anglais) en indiquant le modèle de montre, le type de sortie et la version de l’app.</p>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

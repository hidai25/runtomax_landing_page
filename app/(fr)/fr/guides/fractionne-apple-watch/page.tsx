import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { FR_APP_STORE_URL, pageMetadata } from "@/app/_lib/site";

const guide = guides.frIntervals;
const store = FR_APP_STORE_URL + "?pt=126426469&ct=fr-guide-fractionne&mt=8";
export const metadata = pageMetadata(guide.path, {
  title: guide.title, description: guide.description,
  alternates: guideAlternates(guide.path),
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
});

export default function FractionneAppleWatchGuide() {
  return (
    <PageShell lang="fr" eyebrow="Guide · Apple Watch" title={guide.title} updated={guide.updated}
      alternate="/guides/interval-workouts-apple-watch/" storeUrl={store}
      intro={<p>Composez votre séance sur l’iPhone, puis envoyez-la à RunToMax sur votre Apple Watch. Vous pouvez partir d’une séance de la bibliothèque ou créer la vôtre.</p>}>
      <h2>Choisir une séance</h2>
      <ol>
        <li>Ouvrez RunToMax sur l’iPhone, puis l’onglet <strong>Vous</strong> et <strong>Séances</strong>.</li>
        <li>Sous <strong>Course</strong>, choisissez une séance et ouvrez son détail.</li>
        <li>Touchez <strong>Envoyer à la montre</strong>. Ouvrez RunToMax sur l’Apple Watch pour la recevoir.</li>
      </ol>
      <h2>Composer son propre fractionné</h2>
      <p>Créer et modifier des séances nécessite Pro, ou un essai si vous y avez droit. Les conditions en vigueur sont indiquées dans l’app.</p>
      <ol>
        <li>Dans <strong>Séances</strong>, touchez <strong>+</strong>, puis <strong>Créer un nouveau</strong>.</li>
        <li>Nommez la séance et choisissez extérieur ou tapis.</li>
        <li>Ajoutez un échauffement si besoin. Ouvrez <strong>Bloc 1</strong> pour régler le nombre de répétitions, la durée ou la distance de chaque effort, et la récupération.</li>
        <li>Ajoutez un autre bloc au besoin, réglez le retour au calme, puis touchez <strong>Enregistrer</strong>.</li>
        <li>Retrouvez votre séance sous <strong>Mes séances</strong> et touchez <strong>Envoyer à la montre</strong>. Ouvrez RunToMax sur la montre pour la recevoir, puis lancez la séance quand vous êtes prêt.</li>
      </ol>
      <p>Par exemple, si votre plan prévoit quatre efforts de deux minutes, réglez <strong>Répétitions</strong> sur 4 et <strong>Effort</strong> sur deux minutes. Pour la récupération, suivez ce que prévoit votre plan ou votre coach.</p>
      <h2>Pendant la séance</h2>
      <p>Échauffement, répétitions, récupérations et retour au calme s’enchaînent au poignet. La montre vibre à chaque transition et affiche la cible de l’étape en cours : inutile de fixer l’écran pour savoir qu’une répétition commence.</p>
      <h2>Si la séance n’est pas arrivée</h2>
      <p>Vérifiez que l’iPhone et l’Apple Watch sont jumelés, puis ouvrez RunToMax sur la montre. La mention <strong>En attente</strong> signifie que la séance n’a pas encore été transmise. Elle ne signifie pas que votre course a commencé. Les libellés peuvent varier selon la version de l’app.</p>
      <h2>Vous courez avec une Garmin ?</h2>
      <p>Avec Pro, vous pouvez aussi envoyer la même séance vers le calendrier Garmin Connect. Le guide <a href="/fr/guides/fractionne-garmin-connect-iphone/">Envoyer une séance de fractionné vers Garmin Connect</a> décrit les étapes.</p>
      <p><a href="/fr/fonctionnalites/apple-watch/">RunToMax sur Apple Watch</a> · <a href="/fr/guides/">Tous les guides</a> · <a href="/support/">Aide</a> (en anglais)</p>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

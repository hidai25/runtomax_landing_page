import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { FR_APP_STORE_URL, pageMetadata } from "@/app/_lib/site";

const guide = guides.frPace;
const store = FR_APP_STORE_URL + "?pt=126426469&ct=fr-guide-allure&mt=8";
export const metadata = pageMetadata(guide.path, {
  title: guide.title, description: guide.description,
  alternates: guideAlternates(guide.path),
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
});

export default function AllureGuide() {
  return (
    <PageShell lang="fr" eyebrow="Guide · Allure" title={guide.title} updated={guide.updated}
      alternate="/guides/apple-watch-running-pace/" storeUrl={store}
      intro={<p><strong>Vérifiez d’abord quelle allure vous lisez.</strong> L’allure instantanée, celle du tour et la moyenne de la sortie ne répondent pas à la même question. Sur une portion régulière, essayez l’allure tour ou l’allure lissée dans RunToMax. Aucune des deux ne corrige une distance mal mesurée.</p>}>
      <h2>Pourquoi les chiffres ne concordent pas</h2>
      <p>Une mesure sur quelques secondes réagit vite, une moyenne sur la durée bouge lentement. Vos changements de rythme entrent en jeu, la distance enregistrée aussi. Une moyenne plausible à l’arrivée ne prouve pas que chaque valeur affichée en direct était juste.</p>
      <p>Un coureur décrit précisément cette frustration : <a href="https://www.reddit.com/r/AppleWatchFitness/comments/1rol02b/pace_all_over_the_place/">une allure qui saute dans tous les sens, mais une moyenne finale crédible</a> (en anglais). C’est un témoignage, pas un diagnostic de sa montre ni la preuve que tous les modèles se comportent ainsi.</p>
      <h2>Un champ pour chaque question</h2>
      <ul>
        <li><strong>Allure</strong> (vos dernières secondes) : pour voir un changement de vitesse. Elle bouge forcément plus qu’une moyenne.</li>
        <li><strong>Allure tour</strong> (le tour en cours) : pour tenir l’allure sur une portion régulière. Elle repart de zéro à chaque tour ; vérifiez vos réglages de tours avant de vous en servir comme moyenne d’une répétition.</li>
        <li><strong>Allure lissée</strong> (environ la dernière minute) : pour un chiffre récent plus stable. Elle met plus de temps à refléter une accélération ou un ralentissement, et il lui faut assez de données pour s’afficher.</li>
        <li><strong>Allure moy.</strong> (toute la sortie) : pour la vue d’ensemble. L’échauffement pèse encore dessus ; elle ne dit pas l’allure de la répétition en cours.</li>
      </ul>
      <h2>Le réglage dans RunToMax</h2>
      <ol>
        <li>Sur l’iPhone, ouvrez <strong>Vous → Apple Watch → Écrans de la montre</strong>.</li>
        <li>Choisissez le type de sortie à modifier, par exemple <strong>Extérieur</strong>. Chaque type a ses propres écrans.</li>
        <li>Touchez un champ dans l’aperçu de la montre, puis choisissez <strong>Allure tour</strong> ou <strong>Allure lissée</strong>. Gardez la distance et le temps à côté pour vous repérer.</li>
        <li>Les changements s’enregistrent tout seuls. Ouvrez RunToMax sur la montre pour synchroniser, et vérifiez l’écran avant de partir.</li>
      </ol>
      <p>Ces champs d’allure sont disponibles sur l’écran gratuit à cinq champs. Les écrans et dispositions supplémentaires nécessitent Pro.</p>
      <h2>Sur les répétitions courtes, attention au lissage</h2>
      <p>Au début d’une répétition courte, une moyenne sur une minute inclut encore une partie de la récupération. Et un tour automatique au kilomètre peut tomber au milieu d’une répétition. Regardez où commencent et finissent vos tours avant de juger une répétition à l’allure tour. Voir <a href="/fr/guides/fractionne-apple-watch/">comment créer une séance de fractionné</a>.</p>
      <h2>Inutile de tout surveiller</h2>
      <p>Commencez par un seul champ d’allure plutôt que quatre chiffres qui se contredisent. Dans <a href="https://www.reddit.com/r/AppleWatchFitness/comments/1xf4jvf/do_you_actually_look_at_your_watch_during_runs_or/">cette discussion</a> (en anglais), certains regardent leur montre de temps en temps, d’autres préfèrent les annonces vocales. Il n’y a pas d’écran idéal pour tout le monde.</p>
      <p>L’app Exercice d’Apple permet aussi de <a href="https://support.apple.com/fr-fr/guide/watch/apd73a43493f/watchos">personnaliser les mesures affichées</a> : pas besoin de RunToMax uniquement pour changer les données à l’écran.</p>
      <p>Si c’est la distance enregistrée qui semble fausse, changer l’affichage ne réglera rien. Consultez les <a href="https://support.apple.com/fr-fr/105048">conseils d’étalonnage d’Apple</a> ou notre guide sur <a href="/fr/guides/distance-tapis-apple-watch/">les écarts de distance sur tapis</a>. L’étalonnage ne garantit pas une allure juste en toutes circonstances.</p>
      <p><a href="/fr/fonctionnalites/apple-watch/">RunToMax sur Apple Watch</a> · <a href="/fr/guides/">Tous les guides</a></p>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

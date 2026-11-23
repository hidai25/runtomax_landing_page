import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { FR_APP_STORE_URL, pageMetadata } from "@/app/_lib/site";

const guide = guides.frMissingMap;
const store = FR_APP_STORE_URL + "?pt=126426469&ct=fr-guide-carte&mt=8";
export const metadata = pageMetadata(guide.path, {
  title: guide.title, description: guide.description,
  alternates: guideAlternates(guide.path),
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
});

export default function CarteParcoursAbsenteGuide() {
  return (
    <PageShell lang="fr" eyebrow="Guide · Carte du parcours" title={guide.title} updated={guide.updated}
      alternate="/guides/apple-watch-run-map-missing/" storeUrl={store}
      intro={<p><strong>Commencez par ouvrir la même séance dans l’app Forme de l’iPhone.</strong> Si la carte y apparaît, le parcours a bien été enregistré : reste à vérifier que RunToMax a le droit de le lire. Si elle n’y est pas non plus, c’est du côté de l’app qui a enregistré la sortie qu’il faut chercher.</p>}>
      <p>Un <a href="https://www.reddit.com/r/AppleWatchFitness/comments/1u7br2j/why_no_apple_watch_maproute_data/">coureur équipé d’une Series 7</a> (en anglais) retrouvait sa carte quand il courait avec son iPhone. Sur une sortie sans téléphone, elle manquait encore des heures plus tard, alors que le service de localisation semblait activé. Pourtant, une Apple Watch sans forfait cellulaire utilise bien son propre GPS en extérieur. Voir <a href="https://support.apple.com/fr-fr/guide/watch/apd0443fb403/watchos">l’aide Apple sur l’utilisation de la montre sans l’iPhone</a>.</p>
      <h2>La carte est dans Forme, mais pas dans RunToMax</h2>
      <ol>
        <li>Sur l’iPhone, ouvrez <strong>Santé</strong>, touchez votre photo de profil, puis, sous <strong>Confidentialité</strong>, touchez <strong>Apps</strong>.</li>
        <li>Choisissez <strong>RunToMax</strong> et vérifiez que l’app peut lire à la fois les <strong>Entraînements</strong> et les <strong>Itinéraires d’entraînement</strong>. Sans le second, la séance garde sa distance et sa durée, mais pas son tracé.</li>
        <li>Laissez la montre et l’iPhone se reconnecter, puis revenez dans <strong>Sorties</strong> et rouvrez la séance.</li>
      </ol>
      <p>Apple explique comment <a href="https://support.apple.com/fr-fr/108779">vérifier l’accès de chaque app à Santé</a>. Une carte vide ne suffit pas à savoir quelle autorisation vous avez donnée.</p>
      <h2>La carte manque aussi dans Forme</h2>
      <p>Vérifiez d’abord le type de séance lancé. Une course sur tapis peut avoir une distance et des temps de passage sans aucun tracé GPS. Si vous avez enregistré la sortie avec une autre app, ouvrez-la dans celle-ci : si la carte y figure, le parcours existe. Reste à savoir s’il a été partagé avec Santé.</p>
      <p>Avant votre prochaine sortie, ouvrez sur la montre <strong>Réglages → Confidentialité et sécurité → Service de localisation</strong> et vérifiez l’accès de l’app qui enregistre, Exercice ou RunToMax. Faites ensuite une courte sortie en extérieur, enregistrez-la et regardez si la carte apparaît une fois les appareils reconnectés. Apple détaille <a href="https://support.apple.com/fr-fr/guide/personal-safety/ips9bf20ad2f/web">les réglages du service de localisation</a>.</p>
      <h2>Peut-on récupérer le parcours d’hier ?</h2>
      <p>Si l’app d’enregistrement a gardé le tracé, une synchronisation ou un accès rétabli peut suffire à le faire apparaître. Si aucun point GPS n’a été enregistré, la distance et l’allure ne permettent pas de reconstituer les rues empruntées. Gardez la séance d’origine le temps de vérifier.</p>
      <p>Si une autre sortie en extérieur s’affiche elle aussi sans carte, <a href="/support/">écrivez au support RunToMax</a> (en anglais) en précisant le modèle de montre, l’app utilisée et si le parcours apparaît dans Forme.</p>
      <p><a href="/fr/guides/courir-apple-watch-sans-iphone/">Courir sans iPhone : ce qu’il faut vérifier avant de partir</a> · <a href="/fr/guides/">Tous les guides</a></p>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

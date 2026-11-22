import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { FR_APP_STORE_URL, pageMetadata } from "@/app/_lib/site";

const guide = guides.frWaterLock;
const store = FR_APP_STORE_URL + "?pt=126426469&ct=fr-guide-mode-eau&mt=8";
export const metadata = pageMetadata(guide.path, {
  title: guide.title, description: guide.description,
  alternates: guideAlternates(guide.path),
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
});

export default function ModeEauGuide() {
  return (
    <PageShell lang="fr" eyebrow="Guide · Apple Watch" title={guide.title} updated={guide.updated}
      alternate="/guides/apple-watch-water-lock-running/" storeUrl={store}
      intro={<p>Si votre manche mouillée frôle sans cesse la montre, lancez votre sortie puis activez le <strong>mode Eau</strong>. L’écran ne réagit alors plus au toucher, et la sortie continue de s’enregistrer. L’écran reste lisible : choisissez la vue qui vous intéresse avant de verrouiller.</p>}>
      <h2>Garder votre écran d’allure sous les yeux</h2>
      <ol>
        <li>Lancez l’enregistrement dans votre app de course habituelle et affichez l’écran que vous voulez voir, par exemple l’allure du tour et la distance.</li>
        <li>Sous watchOS 10 ou plus récent, appuyez sur le <strong>bouton latéral</strong> pour ouvrir le centre de contrôle, puis touchez la <strong>goutte d’eau</strong> pour activer le mode Eau.</li>
        <li>Si le centre de contrôle est encore ouvert, appuyez de nouveau sur le bouton latéral pour le fermer. Gardez l’écran verrouillé tant que votre manche est mouillée.</li>
      </ol>
      <p>Cela marche aussi bien avec l’app Exercice d’Apple qu’avec RunToMax. Apple montre l’icône et le geste de déverrouillage dans <a href="https://support.apple.com/fr-fr/108352">son aide sur le mode Eau</a>.</p>
      <h2>Verrouiller depuis les commandes de RunToMax</h2>
      <p>Pendant l’enregistrement, balayez vers la gauche depuis vos mesures et touchez la goutte d’eau (<strong>LOCK</strong>), en bas à droite des commandes par défaut. Si vous avez réorganisé ces boutons ou si vous préférez garder vos temps de passage à l’écran, passez plutôt par le centre de contrôle depuis l’écran de votre choix.</p>
      <h2>Déverrouiller pour faire une pause ou terminer</h2>
      <p>Maintenez la <strong>Digital Crown</strong> enfoncée jusqu’à ce que la montre affiche <strong>Déverrouillé</strong>. Vous entendrez des sons pendant qu’elle évacue l’eau du haut-parleur. Le déverrouillage ne termine pas la séance. Dans RunToMax, revenez aux commandes et touchez <strong>PAUSE</strong> pour souffler. À l’arrivée, touchez <strong>END</strong>, puis <strong>ENREGISTRER</strong>.</p>
      <p>Vous courez avec une Ultra et préférez un bouton physique pour les tours ? Voir <a href="/fr/guides/bouton-action-apple-watch-ultra/">comment régler le bouton Action pour la course</a>.</p>
      <p><a href="/fr/fonctionnalites/apple-watch/">RunToMax sur Apple Watch</a> · <a href="/fr/guides/">Tous les guides</a></p>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

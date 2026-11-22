import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { FR_APP_STORE_URL, pageMetadata } from "@/app/_lib/site";

const guide = guides.frActionButton;
const store = FR_APP_STORE_URL + "?pt=126426469&ct=fr-guide-bouton-action&mt=8";
export const metadata = pageMetadata(guide.path, {
  title: guide.title, description: guide.description,
  alternates: guideAlternates(guide.path),
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
});

export default function BoutonActionGuide() {
  return (
    <PageShell lang="fr" eyebrow="Guide · Apple Watch Ultra" title={guide.title} updated={guide.updated}
      alternate="/guides/apple-watch-ultra-action-button/" storeUrl={store}
      intro={<p><strong>Doigts en sueur, écran qui ne répond plus ?</strong> Réglez RunToMax pour qu’un appui sur le bouton Action de l’Ultra mette votre sortie en pause, et qu’un second la reprenne. Les boutons permettent aussi de marquer des tours.</p>}>
      <p>Faites ces réglages avant de partir. Ils concernent l’<strong>Apple Watch Ultra sous watchOS 11 ou plus récent</strong>, avec RunToMax installé sur la montre. Ces commandes fonctionnent avec l’enregistrement gratuit en extérieur.</p>
      <h2>Pause et reprise en un appui</h2>
      <ol>
        <li>Sur l’Ultra, ouvrez l’app <strong>Réglages</strong> d’Apple, touchez <strong>Bouton Action</strong>, puis <strong>Action</strong>, et choisissez <strong>Exercice</strong>.</li>
        <li>Choisissez <strong>RunToMax</strong> comme app, puis son option <strong>Course en extérieur</strong> comme séance à lancer.</li>
        <li>Ouvrez <strong>RunToMax sur la montre</strong>, touchez la roue dentée, puis allez dans <strong>Boutons → Raccourcis</strong>.</li>
        <li>Sous <strong>Disposition</strong>, choisissez <strong>RunToMax</strong>.</li>
      </ol>
      <p>Le réglage d’Apple décide quelle app reçoit l’appui ; la disposition de RunToMax décide ce que fait cet appui pendant la sortie. Il faut les deux.</p>
      <h2>Sur quoi appuyer pendant la sortie</h2>
      <ul>
        <li><strong>Bouton Action :</strong> un appui met en pause, un second reprend la sortie.</li>
        <li><strong>Bouton Action et bouton latéral ensemble :</strong> marquent un tour sans interrompre l’enregistrement. Le bouton latéral est le bouton plat à côté de la Digital Crown.</li>
      </ul>
      <p>Faites des appuis brefs : un appui prolongé sur le bouton Action peut déclencher une autre fonction du système. Regardez la confirmation de pause ou de reprise à l’écran pour savoir où en est votre sortie.</p>
      <p>Une pause laisse la séance ouverte. À l’arrivée, terminez avec la commande de fin de RunToMax et allez jusqu’à l’enregistrement.</p>
      <h2>Vous préférez marquer les tours en un appui ?</h2>
      <p>Dans <strong>Boutons → Raccourcis</strong>, choisissez <strong>Style Exercice système</strong>. Les rôles s’inversent : le <strong>bouton Action</strong> marque un tour, et <strong>Action + bouton latéral</strong> met en pause ou reprend.</p>
      <p>Prenez la disposition dont vous vous souviendrez une fois fatigué. Vous pouvez aussi régler chaque commande à la main : revérifiez vos réglages si un appui ne fait pas ce que vous attendiez.</p>
      <h2>Lancer la sortie au bouton</h2>
      <p>Sur le même écran Raccourcis, ouvrez <strong>Mode de départ</strong> et choisissez <strong>Départ précis</strong>. Avec le réglage « Course en extérieur » ci-dessus, un premier appui depuis l’écran d’accueil ouvre la préparation et lance la recherche GPS ; l’appui suivant démarre l’enregistrement. Si la préparation est déjà ouverte, un seul appui démarre la sortie.</p>
      <h2>Essayez avant la vraie séance</h2>
      <p>Sur une courte sortie d’essai, testez le départ, la pause, la reprise et les tours. Faites-le avant d’en avoir besoin en pleine répétition ou à l’arrivée d’une course. La configuration et l’enregistrement passent toujours par l’écran : le but est de moins toucher l’écran en courant.</p>
      <p>Si le bouton ouvre une autre app, revérifiez le réglage Bouton Action d’Apple. L’app Exercice gère aussi les boutons physiques ; Apple décrit son fonctionnement dans <a href="https://support.apple.com/fr-fr/guide/watch/apda005904ef/watchos">son guide du bouton Action</a>. Les deux dispositions de RunToMax vous laissent choisir si un appui sert d’abord à la pause ou aux tours.</p>
      <p><a href="/fr/guides/allure-apple-watch/">Choisir vos champs d’allure</a> · <a href="/fr/fonctionnalites/apple-watch/">RunToMax sur Apple Watch</a> · <a href="/fr/guides/">Tous les guides</a></p>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

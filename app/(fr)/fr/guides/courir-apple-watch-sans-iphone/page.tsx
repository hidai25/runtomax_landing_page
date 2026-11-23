import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { FR_APP_STORE_URL, pageMetadata } from "@/app/_lib/site";

const guide = guides.frWithoutPhone;
const store = FR_APP_STORE_URL + "?pt=126426469&ct=fr-guide-sans-iphone&mt=8";
export const metadata = pageMetadata(guide.path, {
  title: guide.title, description: guide.description,
  alternates: guideAlternates(guide.path),
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
});

export default function CourirSansIphoneGuide() {
  return (
    <PageShell lang="fr" eyebrow="Guide · Apple Watch" title={guide.title} updated={guide.updated}
      alternate="/guides/run-apple-watch-without-iphone/" storeUrl={store}
      intro={<p><strong>Oui, et sans forfait cellulaire.</strong> Les Apple Watch compatibles avec RunToMax ont leur propre GPS. Configurez l’app une fois, puis enregistrez depuis votre poignet : l’iPhone peut rester à la maison.</p>}>
      <h2>Enregistrer au GPS et rester joignable sont deux choses différentes</h2>
      <p>La montre enregistre votre sortie en extérieur et votre fréquence cardiaque sans téléphone ni Wi-Fi. Les appels, les messages et le streaming, eux, dépendent d’une connexion. Une Apple Watch cellulaire avec un forfait actif vous garde joignable loin de l’iPhone, là où le réseau passe. Apple détaille ces cas dans <a href="https://support.apple.com/fr-fr/guide/watch/apd0443fb403/watchos">son guide sur l’utilisation de la montre sans l’iPhone jumelé</a>.</p>
      <p>L’app Exercice d’Apple enregistre elle aussi une course sans téléphone. Choisissez RunToMax si vous voulez ses écrans de course, ses séances structurées et son coaching, mais il n’est pas indispensable pour laisser l’iPhone chez vous.</p>
      <h2>Avant votre première sortie RunToMax sans téléphone</h2>
      <ol>
        <li><strong>Configurez les deux apps.</strong> Ouvrez RunToMax sur l’iPhone puis sur la montre, terminez la configuration et accordez les autorisations Santé et localisation nécessaires à l’enregistrement.</li>
        <li><strong>Envoyez la séance avant de partir.</strong> Pour une séance structurée, ouvrez sur l’iPhone l’onglet <strong>Vous</strong>, puis <strong>Séances</strong>, et touchez <strong>Envoyer à la montre</strong> (ou <strong>Envoyer la séance et le parcours</strong>). Ouvrez RunToMax sur la montre et vérifiez que la bonne séance est arrivée. Le guide <a href="/fr/guides/fractionne-apple-watch/">Créer une séance de fractionné</a> reprend chaque étape.</li>
        <li><strong>Vérifiez la montre elle-même.</strong> Contrôlez la séance et la batterie avant de ranger le téléphone. Si vous courez en musique, téléchargez vos titres sur la montre depuis votre app de musique et testez la lecture dans vos écouteurs.</li>
        <li><strong>Lancez depuis le poignet.</strong> Pour une sortie ordinaire, choisissez <strong>Extérieur</strong> dans RunToMax sur la montre. Pour une séance envoyée, ouvrez-la et suivez les étapes de départ affichées.</li>
      </ol>
      <p>L’enregistrement de base, en extérieur comme sur tapis, est gratuit. Le guidage des séances structurées et les écrans supplémentaires font partie de Pro. L’app indique ce à quoi votre compte donne accès.</p>
      <h2>Et au retour ?</h2>
      <p>Terminez et enregistrez la sortie sur la montre. Rapprochez-la de l’iPhone et ouvrez RunToMax : la course apparaît une fois la synchronisation terminée. Le téléphone n’a pas besoin d’être à portée pendant que vous courez.</p>
      <p>Le conseil du jour, lui, n’est pas une séance déjà chargée sur la montre : il se met à jour quand l’iPhone est joignable. Consultez-le avant de partir : une montre déconnectée n’a pas forcément le dernier ajustement.</p>
      <h2>Quand garder le téléphone sur soi ?</h2>
      <p>Emportez-le si vous voulez prendre des photos, si votre musique s’y trouve, ou si vous comptez sur lui pour appeler ou partager votre position. C’est une affaire de préférence : aucune des deux habitudes ne convient à tout le monde.</p>
      <p>Enregistrer au GPS ne veut pas dire pouvoir appeler ou partager sa position en direct. Vérifiez les fonctions de connexion et de sécurité de votre modèle avant de compter dessus.</p>
      <p><a href="/fr/fonctionnalites/apple-watch/">RunToMax sur Apple Watch</a> · <a href="/fr/guides/">Tous les guides</a> · <a href="/support/">Aide à la configuration</a> (en anglais)</p>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

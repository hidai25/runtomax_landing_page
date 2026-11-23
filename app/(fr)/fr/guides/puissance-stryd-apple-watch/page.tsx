import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { FR_APP_STORE_URL, pageMetadata } from "@/app/_lib/site";

const guide = guides.frStryd;
const store = FR_APP_STORE_URL + "?pt=126426469&ct=fr-guide-stryd&mt=8";
export const metadata = pageMetadata(guide.path, {
  title: guide.title, description: guide.description,
  alternates: guideAlternates(guide.path),
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
});

export default function PuissanceStrydGuide() {
  return (
    <PageShell lang="fr" eyebrow="Guide · Stryd" title={guide.title} updated={guide.updated}
      alternate="/guides/stryd-power-apple-watch/" storeUrl={store}
      intro={<p><strong>Votre séance est programmée en watts ?</strong> Avec RunToMax Pro, la puissance de votre capteur Stryd guide une sortie ou une séance de fractionné sur Apple Watch. Réglez votre fourchette, affichez la puissance à l’écran et gardez l’allure à côté.</p>}>
      <p>Il vous faut un capteur Stryd, une Apple Watch avec RunToMax, l’iPhone jumelé et <strong>RunToMax Pro</strong>. Le capteur est vendu à part. Ces instructions concernent RunToMax, pas l’app de Stryd.</p>
      <h2>1. Connecter le capteur sur la montre</h2>
      <p>Dans RunToMax sur l’Apple Watch, ouvrez <strong>Réglages → Capteurs → Capteur Stryd</strong>. Touchez <strong>Rechercher un Stryd</strong> si la recherche n’a pas démarré, puis choisissez votre capteur. Bougez le pied pour le réveiller et vérifiez que des watts s’affichent avant de vous fier au guidage.</p>
      <p>L’interrupteur <strong>Enregistrer avec Stryd</strong>, lui, sert à utiliser le capteur pour la distance enregistrée. Inutile de l’activer pour courir à la puissance.</p>
      <h2>2. Saisir votre fourchette cible</h2>
      <p>Sur l’iPhone, ouvrez <strong>Vous → Apple Watch → Écrans de la montre</strong>. Choisissez le type de sortie, par exemple Extérieur, puis descendez jusqu’à <strong>Puissance cible</strong>. Activez-la, choisissez <strong>W</strong> et réglez <strong>De</strong> et <strong>À</strong> sur la fourchette de votre séance. Remplacez les valeurs proposées au départ : ce ne sont pas des recommandations personnalisées.</p>
      <p>Vous pouvez aussi modifier la cible sur la montre, dans <strong>Réglages → Entraînement → Puissance cible</strong>. Vérifiez le type de sortie et la cible avant de partir.</p>
      <h2>3. Afficher les watts</h2>
      <p>Dans l’aperçu des écrans sur l’iPhone, touchez un champ et choisissez <strong>Puissance Stryd</strong> pour la mesure du capteur, ou <strong>Écart à la puissance cible</strong> pour l’écart avec votre cible. Ouvrez RunToMax sur la montre pour synchroniser et vérifier l’écran.</p>
      <p>Le guidage lisse les variations brèves sur environ cinq secondes. Les corrections vocales et les vibrations se règlent séparément, dans <strong>Guidage en puissance</strong>, juste sous la cible sur l’iPhone. Les annonces vocales doivent aussi être activées ; le mode silencieux coupe les corrections.</p>
      <h2>Travailler en pourcentage plutôt qu’en watts</h2>
      <p>L’option <strong>% du seuil</strong> demande une valeur de seuil que vous avez confirmée dans RunToMax. Si votre séance est calculée sur la Critical Power de Stryd, saisissez sa valeur actuelle à la main dans l’éditeur <strong>Puissance au seuil</strong> de RunToMax. Sur la montre, ce réglage se trouve dans <strong>Réglages → Entraînement → VOS REPÈRES</strong>.</p>
      <p>Simple exemple de calcul : avec un seuil confirmé à 300 W, 80 à 85 % correspondent à 240 à 255 W. Ce n’est pas une séance conseillée. Stryd explique la <a href="https://help.stryd.com/en/articles/6879345-critical-power-definition">Critical Power</a> (en anglais) dans sa propre documentation et déconseille de reprendre des seuils issus d’autres systèmes de mesure de puissance.</p>
      <p>Le seuil estimé par RunToMax est une estimation propre à RunToMax, pas la Critical Power calculée automatiquement par Stryd. Saisir une valeur ici ne relie pas votre compte Stryd et ne la met pas à jour depuis Stryd.</p>
      <h2>En fractionné, une cible par étape</h2>
      <p>Dans l’éditeur de séances de RunToMax, chaque bloc a ses réglages <strong>Puissance des efforts</strong> et <strong>Puissance de récupération</strong>. Reprenez les fourchettes de votre séance. Pendant le fractionné, l’écran compare la puissance en direct à la cible de l’étape en cours. Si vous n’avez jamais créé de séance, commencez par <a href="/fr/guides/fractionne-apple-watch/">notre guide du fractionné</a>.</p>
      <h2>Si les watts disparaissent</h2>
      <p>Vérifiez la connexion et la pile du capteur. Des mesures manquantes ne sont pas une raison d’accélérer. Le guidage de RunToMax utilise le capteur, pas l’estimation de puissance de course propre à la montre. Pour le matériel, suivez <a href="https://help.stryd.com/en/articles/8977365-stryd-hardware-common-questions">l’aide de Stryd</a> (en anglais), qui déconseille de réinitialiser un capteur sans consigne précise.</p>
      <h2>Vous préférez l’app de Stryd ?</h2>
      <p>L’<a href="https://help.stryd.com/en/articles/8970460-how-to-use-the-apple-watch-and-stryd">app Apple Watch de Stryd</a> (en anglais) propose elle aussi des cibles de puissance et des séances structurées. Prenez celle qui vous convient. Pour la synchronisation avec un compte Stryd et ses fonctions payantes, consultez la documentation de l’app que vous utilisez.</p>
      <p className="text-sm text-zinc-500">Stryd est une marque de Stryd, Inc. RunToMax n’est ni affilié à Stryd ni approuvé par Stryd.</p>
      <p><a href="/fr/fonctionnalites/apple-watch/">RunToMax sur Apple Watch</a> · <a href="/fr/guides/">Tous les guides</a></p>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

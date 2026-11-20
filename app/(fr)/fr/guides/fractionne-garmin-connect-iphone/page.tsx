import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guides } from "@/app/_lib/guides";
import { FR_GARMIN_GUIDE_STORE_URL, pageMetadata } from "@/app/_lib/site";

const guide = guides.garminFractionne;
export const metadata = pageMetadata(guide.path, {
  title: guide.title, description: guide.description,
  alternates: { canonical: guide.path }, openGraph: { type: "article" },
});

export default function GarminGuide() {
  return (
    <PageShell lang="fr" eyebrow="Guide · Garmin Connect" title={guide.title} updated={guide.updated}
      storeUrl={FR_GARMIN_GUIDE_STORE_URL}
      intro={<p>Si votre séance est déjà prête dans RunToMax, vous pouvez la retrouver sur une Garmin compatible sans ressaisir chaque répétition. Il vous faut RunToMax Pro pour l’envoi, le compte Garmin Connect associé à votre montre et une synchronisation avant le départ.</p>}>
      <ol>
        <li><strong>Associez votre compte.</strong> Sur l’iPhone, ouvrez les réglages de RunToMax, puis Connexions et Garmin Connect. Suivez les étapes de connexion et autorisez l’envoi des entraînements.</li>
        <li><strong>Choisissez votre fractionné.</strong> Ouvrez votre séance de course dans le plan ou la bibliothèque RunToMax. Vérifiez les répétitions, les récupérations et la cible, puis touchez « Envoyer vers Garmin » et confirmez. Une séance de la bibliothèque est ajoutée au calendrier du jour. En envoyer une autre depuis la bibliothèque pour aujourd’hui remplace la précédente.</li>
        <li><strong>Vérifiez le calendrier.</strong> Dans Garmin Connect sur l’iPhone, ouvrez le calendrier à la date de la séance. Vérifiez son nom, puis synchronisez la montre. La confirmation dans RunToMax indique que Garmin Connect a reçu la séance.</li>
        <li><strong>Vérifiez sur la montre avant de partir.</strong> Ouvrez l’activité Course et cherchez la séance dans le calendrier d’entraînement. Les menus varient selon le modèle. Ouvrez le détail et vérifiez, par exemple, que vos six répétitions de 400 m et leurs récupérations sont bien là avant de lancer le chrono.</li>
      </ol>
      <h2>La séance apparaît sur l’iPhone mais pas sur la montre</h2>
      <p>Vérifiez la date, le compte Garmin et la montre sélectionnée, puis relancez la synchronisation dans Garmin Connect. Si la séance figure dans vos entraînements, vous pouvez aussi l’ouvrir et choisir l’envoi vers l’appareil compatible. <a href="https://support.garmin.com/fr-FR/?faq=Oyqt6jUjOF8L1Rnuc9Sms8">Voir la procédure Garmin</a>.</p>
      <h2>Faut-il un abonnement ?</h2>
      <p>L’enregistrement, l’import de vos nouvelles sorties Garmin et la première semaine de chaque plan sont gratuits. L’envoi depuis RunToMax nécessite Pro. L’essai Pro, si vous y êtes éligible, devient un abonnement payant à renouvellement automatique sauf résiliation. Si vous préférez saisir votre séance vous-même, vous pouvez la créer directement dans Garmin Connect. <a href="/fr/faq/#garmin-connect">Tarifs et questions fréquentes</a>.</p>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

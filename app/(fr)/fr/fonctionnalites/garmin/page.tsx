import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";
import { alternatesFor, pageMetadata } from "@/app/_lib/site";

export const metadata: Metadata = pageMetadata("/fr/fonctionnalites/garmin/", {
  title: "RunToMax avec une montre Garmin",
  description:
    "Gardez votre Garmin : RunToMax importe gratuitement vos nouvelles sorties depuis Garmin Connect et, avec Pro, envoie vos séances au calendrier de la montre.",
  alternates: alternatesFor("/features/garmin/", "fr"),
});

export default function GarminFeaturePageFr() {
  return (
    <PageShell
      lang="fr"
      eyebrow="Fonctionnalité · Garmin Connect"
      title="RunToMax avec une montre Garmin"
      alternate="/features/garmin/"
      updated="2026-11-21"
      intro={
        <p>
          Vous n’avez pas à changer de montre. Vous courez avec votre Garmin, comme d’habitude : vos nouvelles sorties arrivent dans RunToMax
          sur l’iPhone, et vos séances partent vers le calendrier Garmin Connect.
        </p>
      }
    >
      <h2>Ce qu’il faut</h2>
      <ul>
        <li>Un iPhone sous <strong>iOS 17 ou plus récent</strong> avec <strong>RunToMax 1.4</strong>.</li>
        <li>Un compte <strong>Garmin Connect</strong> et une montre Garmin compatible, synchronisée avec ce compte.</li>
        <li>Aucune Apple Watch n’est nécessaire.</li>
      </ul>

      <h2>Importer vos sorties, gratuitement</h2>
      <p>
        Associez votre compte dans les réglages de RunToMax, sous <strong>Connexions</strong> puis <strong>Garmin Connect</strong>, et activez
        <strong> Importer les sorties Garmin</strong>. Après chaque synchronisation de la montre avec Garmin Connect, la nouvelle sortie
        apparaît dans RunToMax. Vous pouvez aussi toucher <strong>Rechercher de nouvelles sorties</strong>.
      </p>
      <ul>
        <li>La sortie arrive avec ce que la montre a enregistré : distance, durée, parcours, tours, fréquence cardiaque, cadence et puissance de course.</li>
        <li>Si vous courez avec un capteur Stryd relié à la montre, sa puissance et ses mesures de foulée suivent quand Garmin fournit le fichier de l’activité.</li>
        <li>Seules les <strong>nouvelles</strong> sorties sont importées. Votre historique Garmin ne l’est pas.</li>
        <li>L’import est gratuit et ne déclenche aucun abonnement.</li>
      </ul>

      <h2>Envoyer vos séances à la montre, avec Pro</h2>
      <p>
        Ouvrez une séance de course dans votre plan ou dans la bibliothèque, vérifiez les répétitions, les récupérations et la cible, puis touchez
        <strong> Envoyer vers Garmin</strong>. La séance rejoint le calendrier Garmin Connect. Synchronisez la montre : vous la retrouvez dans son
        calendrier d’entraînement, sans avoir à ressaisir chaque répétition.
      </p>
      <p>
        L’envoi de séances fait partie de RunToMax Pro. Le guide{" "}
        <a href="/fr/guides/fractionne-garmin-connect-iphone/">Envoyer une séance de fractionné vers Garmin Connect</a> décrit chaque étape,
        y compris ce qu’il faut vérifier sur la montre avant de partir.
      </p>

      <h2>Ce que RunToMax fait de vos sorties</h2>
      <ul>
        <li>Elles alimentent votre carnet, vos graphiques et vos tours, sans doublon avec Apple Santé ou Strava.</li>
        <li>Elles sont rapprochées des séances de votre plan, qui avance avec vous.</li>
        <li>La charge d’entraînement, l’estimation de récupération et les ajustements du plan sont calculés sur votre iPhone.</li>
      </ul>

      <h2>La récupération, en option</h2>
      <p>
        Un second réglage, <strong>Importer les données santé Garmin</strong>, est désactivé par défaut. Si vous l’activez, RunToMax ne conserve
        que trois valeurs par nuit : votre temps de sommeil, votre fréquence cardiaque au repos et votre VFC moyenne de la nuit. Elles alimentent
        votre récupération du matin quand Apple Santé n’a rien pour cette nuit-là.
      </p>

      <h2>Vos données</h2>
      <ul>
        <li>Nous ne vendons pas vos données Garmin.</li>
        <li>Elles ne sont jamais envoyées à une IA dans le cloud, à la publicité ni à l’analyse d’audience.</li>
        <li>Vous pouvez désactiver l’import ou déconnecter le compte à tout moment dans les réglages.</li>
      </ul>
      <p>
        Le détail figure dans la <a href="https://garmin.runtomax.com/privacy/garmin-import/">notice sur l’import Garmin</a> (en anglais).
      </p>

      <h2>Gratuit ou Pro ?</h2>
      <ul>
        <li><strong>Gratuit :</strong> l’import de vos nouvelles sorties, votre historique dans l’app, et la première semaine de chaque plan.</li>
        <li><strong>Pro :</strong> l’envoi des séances vers Garmin Connect, la suite du plan après sa première semaine et le coaching.</li>
      </ul>
      <p>
        Les tarifs et les conditions de l’essai sont dans la <a href="/fr/faq/#garmin-connect">FAQ</a>.
      </p>
      <p className="text-sm text-zinc-500">Garmin et Garmin Connect sont des marques de Garmin Ltd. ou de ses filiales. RunToMax n’est pas affilié à Garmin.</p>
    </PageShell>
  );
}

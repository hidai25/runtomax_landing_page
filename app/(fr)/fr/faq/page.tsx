import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Faq, { type FaqItem } from "@/app/_components/Faq";
import PageShell from "@/app/_components/PageShell";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = pageMetadata("/fr/faq/", {
  title: "FAQ — faut-il une Apple Watch, et les autres questions avant d’acheter",
  description:
    "Des réponses nettes avant de télécharger RunToMax : Apple Watch obligatoire, courir sans téléphone, ce qui est gratuit, l’essai Pro, ce que comprend Pro, Garmin, Strava, langues et âge.",
  alternates: alternatesFor("/faq/", "fr"),
});

const items: FaqItem[] = [
  {
    q: "Faut-il une Apple Watch ?",
    a: "Vous pouvez enregistrer une sortie avec une Apple Watch ou avec l’iPhone seul (iOS 26 ou ultérieur pour l’enregistrement sur iPhone). Avec une Garmin compatible, enregistrez sur la montre puis importez gratuitement votre sortie via Garmin Connect.",
  },
  {
    q: "Peut-on courir sans téléphone ?",
    a: "Oui. GPS, fréquence cardiaque et mouvement viennent de la montre. Séances structurées, vibrations, tours et écrans personnalisés fonctionnent avec l’iPhone resté à la maison. La course se synchronise avec l’iPhone quand les deux sont à nouveau à portée.",
  },
  {
    q: "Peut-on l’utiliser sans plan d’entraînement ?",
    a: "Oui. Les plans sont facultatifs. Vous pouvez enregistrer sans plan ; Pro propose des analyses et du coaching supplémentaires à partir de vos sorties.",
  },
  {
    q: "Qu’est-ce qui fonctionne sans le coaching cloud ?",
    a: "L’enregistrement de base reste gratuit. Pro comprend du coaching et des analyses sur l’appareil même si le coaching cloud est désactivé ; le coaching cloud facultatif ajoute des notes rédigées. Les fonctions Pro nécessitent un abonnement ou un essai éligible.",
  },
  {
    q: "RunToMax est-il gratuit ?",
    a: "Oui. Enregistrer vos sorties, importer vos nouvelles courses depuis Garmin Connect et suivre la première semaine de chaque plan sont gratuits. La semaine offerte ne déclenche aucun abonnement. Envoyer une séance vers Garmin Connect nécessite RunToMax Pro.",
  },
  {
    q: "Puis-je essayer RunToMax Pro ?",
    a: "Si vous êtes éligible, Apple vous propose un essai gratuit. Avant de confirmer, vous voyez sa durée, le tarif et la date de renouvellement. À la fin de l’essai, Apple facture la formule choisie, puis la renouvelle automatiquement sauf résiliation. Pour annuler sur iPhone, ouvrez Réglages, touchez votre nom, puis Abonnements et RunToMax.",
  },
  {
    q: "Que comprend RunToMax Pro ?",
    a: "Pro permet notamment de poursuivre le plan après sa première semaine, de recevoir un conseil selon votre récupération et d’envoyer vos séances de fractionné au calendrier Garmin Connect. Sur l’App Store français, Pro coûte 6,99 € par mois ou 29,99 € par an. Le tarif applicable est celui qu’Apple affiche avant la confirmation.",
  },
  {
    id: "garmin-connect",
    q: "Puis-je utiliser RunToMax avec ma montre Garmin ?",
    a: "Oui. Sur iPhone, ouvrez Garmin Connect dans les réglages de RunToMax, utilisez « Se connecter avec Apple », puis autorisez la connexion à Garmin. Activez l’import des courses pour retrouver gratuitement vos nouvelles sorties après synchronisation. Dans l’autre sens, avec Pro, vous pouvez envoyer une séance au calendrier Garmin Connect, puis synchroniser une montre compatible.",
  },
  {
    q: "Et avec une montre COROS, Polar ou Suunto ?",
    a: "Si votre montre partage ses sorties avec Apple Santé, RunToMax peut en lire la distance, la durée et la fréquence cardiaque lorsqu’elle est disponible.",
  },
  {
    q: "Est-ce synchronisé avec Strava ?",
    a: "La synchronisation directe avec Strava ne fait pas partie de la version publique 1.4. La synchronisation Strava est réservée aux testeurs des versions TestFlight compatibles. Chaque course est écrite dans Apple Santé, et les courses peuvent être exportées en fichiers FIT en attendant.",
  },
  {
    q: "Quelles langues sont prises en charge ?",
    a: "Le français et l’anglais, sur l’iPhone comme sur la montre.",
  },
  {
    q: "Pourquoi 18 ans et plus ?",
    a: "RunToMax donne des conseils d’entraînement, et nous avons choisi de le réserver aux adultes. Le premier écran confirme que vous avez 18 ans ou plus ; sous iOS 26, il peut utiliser le service Tranche d’âge déclarée d’Apple. L’application ne garde que la réponse oui/non, jamais une date de naissance.",
  },
  {
    q: "Où sont stockées mes données ?",
    a: "Les courses, tracés et mesures de fréquence cardiaque sont stockés dans Apple Santé et sur l’appareil ; aucun compte n’est requis pour l’enregistrement local. La connexion Garmin demande « Se connecter avec Apple ». La sauvegarde dans le cloud reste facultative. Si vous l’activez, Cloudflare stocke une archive chiffrée de l’entraînement, avec la fréquence cardiaque des séances et les tracés des sorties importées depuis Garmin Connect, mais sans autres tracés GPS bruts, pour la restauration. Le coaching cloud et l’analyse d’utilisation ont des consentements distincts. La politique de confidentialité détaille les données, les contrôles et la conservation, avec une explication de la synchronisation en français. Pas de publicité, pas de vente de données.",
  },
  {
    q: "Quelle est la précision de la distance ?",
    a: "Dans le petit échantillon décrit sur notre page précision, les distances différaient d’environ 1 % d’une Garmin à l’autre poignet sur les sorties régulières, et de 1 à 3 % avec de nombreux arrêts. Ces observations ne garantissent pas le résultat de votre sortie ; aucune des deux montres n’est une référence absolue. La méthode et les chiffres sont sur la page précision.",
  },
];

export default function FaqPageFr() {
  return (
    <PageShell
      lang="fr"
      eyebrow="Avant de télécharger"
      title="Les questions que les coureurs posent en premier"
      alternate="/faq/"
      updated="2026-11-19"
      intro={<p>Ces réponses concernent RunToMax 1.4 sur iPhone, Apple Watch et montres Garmin compatibles. S’il manque la vôtre, écrivez au développeur depuis la page support.</p>}
    >
      <Faq items={items} />
      <p><a href="/fr/guides/fractionne-garmin-connect-iphone/">Envoyer une séance de fractionné sur sa Garmin depuis un iPhone</a></p>
      <h2>Encore un doute ?</h2>
      <p>
        L’enregistrement est gratuit : jumelez la montre et faites une sortie. Pour le coaching, découvrez Pro et vérifiez votre éligibilité à l’essai dans l’app. Le support est à un e-mail sur la <a href="/support/">page support</a> (en anglais).
      </p>
    </PageShell>
  );
}

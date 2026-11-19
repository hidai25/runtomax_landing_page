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
    a: "L’Apple Watch permet d’enregistrer directement avec RunToMax (watchOS 10 ou plus récent). Avec une Garmin compatible, vous pouvez enregistrer sur votre montre et importer vos sorties sur iPhone via Garmin Connect dans RunToMax 1.4.",
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
    a: "L’enregistrement, oui. Les sorties en extérieur et sur tapis sur l’Apple Watch, avec un écran de données et cinq champs au choix, la ceinture cardio, un résumé de base, votre historique, Apple Santé et l’export FIT/GPX restent gratuits, sans compte et sans limite de durée. À partir de la version 1.3.2, le survol 3D de votre parcours est gratuit lui aussi. Le coaching est la partie payante, et vous pouvez l’essayer d’abord : voir les deux réponses suivantes.",
  },
  {
    q: "Puis-je essayer RunToMax Pro ?",
    a: "Les coureurs éligibles peuvent commencer un essai gratuit de Pro par Apple. Apple indique l’éligibilité, la durée de l’essai, le prix et les conditions de renouvellement avant confirmation. L’abonnement se renouvelle automatiquement sauf résiliation ; gérez-le dans les abonnements de votre compte Apple. L’enregistrement reste gratuit sans Pro. La version 1.3.5 propose aussi trois sorties coachées incluses aux coureurs éligibles ; consultez les conditions dans l’app. Cette offre distincte ne déclenche pas d’abonnement.",
  },
  {
    q: "Que comprend RunToMax Pro ?",
    a: "Le coaching continu : le conseil du jour et la forme du jour chaque matin, des plans calés sur une date de course qui s’adaptent, les séances structurées et la bibliothèque de séances, la planification de parcours, l’analyse approfondie et les tendances, les écrans de montre personnalisables, la prise en charge de Stryd et, en option, les notes du coaching cloud. Deux formules facturées par Apple au tarif de votre pays : annuelle ou mensuelle, avec un essai gratuit pour les coureurs éligibles (14 jours pour l’annuel ou 7 jours pour le mensuel ; 29,99 $ par an ou 5,99 $ par mois aux États-Unis). L’abonnement se renouvelle automatiquement sauf résiliation. Si vous arrêtez l’abonnement, l’enregistrement reste gratuit et vos courses, exports et bilans déjà obtenus restent accessibles. Résiliation à tout moment dans les abonnements de votre identifiant Apple.",
  },
  {
    id: "garmin-connect",
    q: "Puis-je utiliser RunToMax avec ma montre Garmin ?",
    a: "Oui. Dans RunToMax 1.4 sur iPhone, identifiez-vous dans RunToMax, puis associez votre compte Garmin Connect. Choisissez une séance de course à envoyer à votre montre Garmin compatible. Pour retrouver vos sorties dans RunToMax, activez aussi l’importation des sorties Garmin. Les nouvelles sorties arrivent après la synchronisation de la montre avec Garmin Connect et peuvent inclure le tracé, les tours et la fréquence cardiaque si la montre les a enregistrés. Avec la version 1.3.5, RunToMax peut lire la distance, la durée et la fréquence cardiaque disponible des sorties partagées avec Apple Santé.",
  },
  {
    q: "Et avec une montre COROS, Polar ou Suunto ?",
    a: "Si votre montre partage ses sorties avec Apple Santé, RunToMax peut en lire la distance, la durée et la fréquence cardiaque lorsqu’elle est disponible.",
  },
  {
    q: "Est-ce synchronisé avec Strava ?",
    a: "Pas dans la version App Store 1.3.5. La synchronisation Strava est réservée aux testeurs des versions TestFlight compatibles. Chaque course est écrite dans Apple Santé, et les courses peuvent être exportées en fichiers FIT en attendant.",
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
    a: "Les courses, tracés et mesures de fréquence cardiaque sont stockés dans Apple Santé et sur l’appareil ; aucun compte n’est requis. Dans la version 1.3.5, la synchronisation avec Se connecter avec Apple est facultative. Si vous l’activez, Cloudflare stocke une archive chiffrée de l’entraînement, avec la fréquence cardiaque des séances mais sans tracés GPS bruts, pour la restauration. Le coaching cloud et l’analyse d’utilisation ont des consentements distincts. La politique de confidentialité détaille les données, les contrôles et la conservation, avec une explication de la synchronisation en français. Pas de publicité, pas de vente de données.",
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
      intro={<p>Ces réponses couvrent la version 1.3.5 et l’intégration de Garmin Connect dans la version 1.4. S’il manque la vôtre, écrivez au développeur depuis la page support.</p>}
    >
      <Faq items={items} />
      <h2>Encore un doute ?</h2>
      <p>
        L’enregistrement est gratuit : jumelez la montre et faites une sortie. Pour le coaching, découvrez Pro et vérifiez votre éligibilité à l’essai dans l’app. Le support est à un e-mail sur la <a href="/support/">page support</a> (en anglais).
      </p>
    </PageShell>
  );
}

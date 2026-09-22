import type { Metadata } from "next";
import Faq, { type FaqItem } from "@/app/_components/Faq";
import PageShell from "@/app/_components/PageShell";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "FAQ — faut-il une Apple Watch, et les autres questions avant d’acheter",
  description:
    "Des réponses nettes avant de télécharger RunToMax : Apple Watch obligatoire, courir sans téléphone, utiliser sans plan, ce qui marche sans coaching cloud, ce que comprend l’abonnement, Garmin, Strava, langues et âge.",
  alternates: alternatesFor("/faq/", "fr"),
};

const items: FaqItem[] = [
  {
    q: "Faut-il une Apple Watch ?",
    a: "Oui, pour enregistrer. RunToMax enregistre sur l’Apple Watch (watchOS 10 ou plus récent : Series 4 et suivantes, SE, Ultra) et analyse sur l’iPhone (iOS 17 ou plus récent). Les courses enregistrées par d’autres appareils peuvent être lues depuis Apple Santé, mais avec des données de base seulement.",
  },
  {
    q: "Peut-on courir sans téléphone ?",
    a: "Oui. GPS, fréquence cardiaque et mouvement viennent de la montre. Séances structurées, vibrations, tours et écrans personnalisés fonctionnent avec l’iPhone resté à la maison. La course se synchronise avec l’iPhone quand les deux sont à nouveau à portée.",
  },
  {
    q: "Peut-on l’utiliser sans plan d’entraînement ?",
    a: "Oui. Sans plan, chaque sortie est quand même classée, reçoit un verdict clair, met à jour vos allures de seuil et d’entraînement et alimente la forme du jour. Les plans sont optionnels et calés sur une date de course quand vous en voulez un.",
  },
  {
    q: "Qu’est-ce qui fonctionne sans le coaching cloud ?",
    a: "Tout, sauf les notes rédigées plus longues du coach. L’enregistrement, le profil de départ tiré d’Apple Santé, les allures de seuil et d’entraînement, le classement des sorties, le verdict, la construction des plans, leurs notes, les propositions d’ajustement, la forme du jour et les cibles corrigées de la chaleur sont tous calculés sur votre iPhone. Le coaching cloud est en option et ne produit que les notes rédigées.",
  },
  {
    q: "Que comprend l’abonnement ?",
    a: "Un seul abonnement, RunToMax Pro, débloque toute l’application : enregistrement sur la montre, analyse, plans et coaching cloud. Deux formules facturées par Apple au tarif de votre pays : annuelle avec 14 jours d’essai gratuit, ou mensuelle avec 7 jours d’essai (29,99 $ par an ou 5,99 $ par mois aux États-Unis). Il n’y a pas de version gratuite : après l’essai, l’application se verrouille jusqu’à l’abonnement, et chaque course enregistrée reste dans Apple Santé. Résiliation à tout moment dans les abonnements de votre identifiant Apple.",
  },
  {
    q: "Je cours avec une Garmin (ou Coros, Polar, Suunto). RunToMax me sert-il ?",
    a: "En partie. Si votre montre se synchronise avec Apple Santé, RunToMax peut lire ces courses, mais elles ne portent que distance, durée et fréquence cardiaque — ni tracé, ni tours, ni passages — et l’analyse est donc limitée. L’enregistrement et l’analyse complète demandent l’Apple Watch. Une synchronisation directe pour les autres montres est prévue, pas disponible aujourd’hui.",
  },
  {
    q: "Est-ce synchronisé avec Strava ?",
    a: "Pas encore dans la version de l’App Store. La synchronisation Strava est construite et en test auprès d’un nombre limité de coureurs pendant que Strava examine l’intégration. Chaque course est écrite dans Apple Santé, et les courses peuvent être exportées en fichiers FIT en attendant.",
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
    a: "Sur votre appareil. Courses, tracés et fréquence cardiaque vivent dans Apple Santé ; RunToMax n’a pas de compte et ne garde aucune copie cloud de votre historique. Le coaching cloud optionnel envoie un résumé minimal via un relais RunToMax, et rien d’autre. Pas de publicité, pas de vente de données.",
  },
  {
    q: "Quelle est la précision de la distance ?",
    a: "Sur une sortie régulière, à environ 1 % près d’une Garmin portée à l’autre poignet. Sur les sorties avec beaucoup d’arrêts et de reprises, l’écart monte à 1–3 %, surtout à cause de la façon dont les deux montres gèrent les pauses. La méthode et les chiffres sont sur la page précision.",
  },
];

export default function FaqPageFr() {
  return (
    <PageShell
      lang="fr"
      eyebrow="Avant de télécharger"
      title="Les questions que les coureurs posent en premier"
      alternate="/faq/"
      updated="2026-09-22"
      intro={<p>Des réponses courtes, vérifiées dans la version actuelle de l’App Store. S’il manque la vôtre, écrivez au développeur depuis la page support.</p>}
    >
      <Faq items={items} />
      <h2>Encore un doute ?</h2>
      <p>
        L’essai dure 14 jours sur l’abonnement annuel. Jumelez la montre, faites une sortie, lisez le verdict : c’est le moyen le plus rapide de
        savoir si RunToMax est fait pour vous. Le support est à un e-mail sur la <a href="/support/">page support</a> (en anglais).
      </p>
    </PageShell>
  );
}

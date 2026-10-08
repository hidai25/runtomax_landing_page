import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/app/_components/PageShell";
import Shot from "@/app/_components/Shot";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "RunToMax — Coach course à pied pour Apple Watch",
  description:
    "RunToMax enregistre vos sorties sur Apple Watch et vous coache à partir des courses déjà présentes dans Apple Santé : verdict après chaque sortie, allures de seuil, plans calés sur la date de votre course. En français.",
  alternates: alternatesFor("/", "fr"),
};

const features = [
  ["/fr/fonctionnalites/apple-watch/", "Suivi sur Apple Watch", "Écrans à composer, séances structurées avec vibrations, sans téléphone."],
  ["/fr/fonctionnalites/coaching-apple-sante/", "Coaching depuis Apple Santé", "Vos courses passées comptent dès le premier jour. Un verdict après chaque sortie."],
  ["/fr/fonctionnalites/plans-de-course/", "Plans calés sur votre course", "Du 5 km au marathon. Le plan propose, vous décidez."],
  ["/fr/faq/", "FAQ avant d’acheter", "Faut-il une Apple Watch ? Sans téléphone ? Qu’est-ce qui est gratuit ? Que comprend Pro ?"],
  ["/fr/precision/", "Précision mesurée", "Comment nous testons la distance face à une Garmin, avec les chiffres et les limites."],
] as const;

export default function FrenchHome() {
  return (
    <PageShell
      lang="fr"
      eyebrow="Coach course à pied pour Apple Watch"
      title="Enregistre sur Apple Watch. Lit toutes vos sorties dans Apple Santé."
      alternate="/"
      updated="2026-10-05"
      intro={
        <p>
          RunToMax est un traqueur de course pensé pour la montre et un coach qui lit ce qui s’est vraiment passé sur la sortie — pas
          seulement ce qui était prévu. Il sait quand vous pousser et quand vous freiner, et il explique pourquoi.
        </p>
      }
    >
      <h2>Ce que fait RunToMax</h2>
      <ul>
        <li><strong>Sur la montre :</strong> des écrans que vous composez, des séances structurées (échauffement, répétitions, récupérations) avec une vibration à chaque transition, et aucune obligation d’emporter l’iPhone.</li>
        <li><strong>Sur l’iPhone :</strong> au premier lancement, avec votre accord, il lit les courses déjà présentes dans Apple Santé et en tire un profil de départ, dont une allure de seuil estimée sur vos 90 derniers jours.</li>
        <li><strong>Après chaque sortie :</strong> un verdict en français clair — ce que la course dit, et quoi faire ensuite. Chaque jour de plan reçoit une note face à ce qui était demandé.</li>
        <li><strong>Des plans calés sur une date de course</strong>, du 5 km au marathon, qui proposent des ajustements selon votre réponse à l’entraînement. Rien ne change en silence : vous approuvez.</li>
      </ul>
      <Shot src="watch-grid.png" alt="Écran de course Apple Watch avec une grille de métriques choisies" caption="Une grille de champs personnalisée sur la montre." watch />

      <h2>En détail</h2>
      <ul>
        {features.map(([href, title, desc]) => (
          <li key={href}>
            <Link href={href}><strong>{title}</strong></Link> — {desc}
          </li>
        ))}
      </ul>

      <h2>Ce qu’il faut</h2>
      <ul>
        <li>Un iPhone sous iOS 17 ou plus récent et une Apple Watch sous watchOS 10 ou plus récent (Series 4 et suivantes, SE, Ultra).</li>
        <li>L’enregistrement se fait sur l’Apple Watch. Les montres Garmin et autres passent par Apple Santé, avec des données de base seulement.</li>
        <li>Réservé aux coureurs de 18 ans et plus. Application disponible en français et en anglais.</li>
      </ul>

      <h2>Prix</h2>
      <ul>
        <li><strong>Gratuit, sans limite de durée :</strong> l’enregistrement des sorties en extérieur et sur tapis sur l’Apple Watch, avec un écran de données et cinq champs au choix, la ceinture cardio, un résumé de base, votre historique, Apple Santé et l’export. Sans compte.</li>
        <li><strong>Trois sorties coachées :</strong> quand vous le souhaitez, activez le coaching une fois. Vos trois prochaines sorties enregistrées (au moins 1 km et 5 minutes actives) incluent la forme du jour, le conseil du jour, une proposition de première semaine et une séance guidée avec son parcours. Aucun délai, aucun abonnement ne démarre.</li>
        <li><strong>RunToMax Pro :</strong> le coaching continu, les plans, les séances structurées, les parcours, l’analyse approfondie, les écrans personnalisés et le coaching cloud. Abonnement annuel avec 14 jours d’essai, ou mensuel avec 7 jours d’essai, facturé par Apple au tarif de votre pays. Résiliable à tout moment.</li>
      </ul>
      <p>Pas de publicité, aucune vente de données. Vos courses restent dans Apple Santé quoi qu’il arrive.</p>
    </PageShell>
  );
}

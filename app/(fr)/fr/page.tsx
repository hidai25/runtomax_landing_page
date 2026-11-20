import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/app/_components/PageShell";
import HomeDevices from "@/app/_components/HomeDevices";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = pageMetadata("/fr/", {
  title: "RunToMax — Coach course à pied pour Apple Watch",
  description:
    "Enregistrez vos sorties sur Apple Watch et préparez vos séances sur iPhone. RunToMax 1.4 ajoute l’envoi de séances et l’importation de sorties via Garmin Connect.",
  alternates: alternatesFor("/", "fr"),
});

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
      updated="2026-11-19"
      intro={
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <HomeDevices lang="fr" />
          <p className="sm:col-start-1 sm:row-start-1">
            Enregistrez vos sorties sur Apple Watch et préparez votre prochaine séance sur iPhone. Vous courez avec une Garmin ? Avec RunToMax 1.4, <Link href="/fr/faq/#garmin-connect" className="text-white underline underline-offset-4">connectez votre compte Garmin</Link> pour envoyer des séances à votre montre et importer vos nouvelles sorties.
          </p>
        </div>
      }
    >
      <h2>Ce que fait RunToMax</h2>
      <ul>
        <li><strong>Sur la montre :</strong> des écrans que vous composez, des séances structurées (échauffement, répétitions, récupérations) avec une vibration à chaque transition, et aucune obligation d’emporter l’iPhone.</li>
        <li><strong>Sur l’iPhone :</strong> au premier lancement, avec votre accord, il lit les courses déjà présentes dans Apple Santé et en tire un profil de départ, dont une allure de seuil estimée sur vos 90 derniers jours.</li>
        <li><strong>Après chaque sortie :</strong> un verdict en français clair — ce que la course dit, et quoi faire ensuite. Chaque jour de plan reçoit une note face à ce qui était demandé.</li>
        <li><strong>Des plans calés sur une date de course</strong>, du 5 km au marathon, qui proposent des ajustements selon votre réponse à l’entraînement. Rien ne change en silence : vous approuvez.</li>
      </ul>

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
        <li>Un iPhone sous iOS 17 ou plus récent. Pour enregistrer avec RunToMax sur Apple Watch, il faut watchOS 10 ou plus récent (Series 4 et suivantes, SE, Ultra).</li>
        <li>Avec RunToMax 1.3.5, les sorties Garmin synchronisées avec Apple Santé fournissent la distance, la durée et la fréquence cardiaque lorsqu’elle est disponible.</li>
        <li>Réservé aux coureurs de 18 ans et plus. Application disponible en français et en anglais.</li>
      </ul>

      <h2>Prix</h2>
      <ul>
        <li><strong>Gratuit, sans limite de durée :</strong> l’enregistrement des sorties en extérieur et sur tapis sur l’Apple Watch, avec un écran de données et cinq champs au choix, la ceinture cardio, un résumé de base, votre historique, Apple Santé et l’export. Sans compte.</li>
        <li><strong>Essai Pro :</strong> les coureurs éligibles peuvent commencer un essai gratuit par Apple. Apple indique les conditions et le prix de renouvellement avant confirmation. L’abonnement se renouvelle automatiquement sauf résiliation.</li>
        <li><strong>RunToMax Pro :</strong> le coaching continu, les plans, les séances structurées, les parcours, l’analyse approfondie, les écrans personnalisés et le coaching cloud. Abonnement annuel ou mensuel facturé par Apple au tarif de votre pays, avec un essai gratuit pour les personnes éligibles. Résiliable à tout moment.</li>
      </ul>
      <p>Pas de publicité, aucune vente de données. Vous choisissez les données à partager avec Garmin Connect.</p>
    </PageShell>
  );
}

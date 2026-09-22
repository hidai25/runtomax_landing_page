import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";
import Shot from "@/app/_components/Shot";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Un coaching bâti sur vos courses déjà dans Apple Santé",
  description:
    "RunToMax lit les courses déjà présentes dans Apple Santé, estime une allure de seuil sur vos 90 derniers jours et donne un verdict clair à chaque sortie. Ce qui est calculé sur l’appareil, et ce qu’ajoute le coaching cloud optionnel.",
  alternates: alternatesFor("/features/coaching-from-apple-health/", "fr"),
};

export default function CoachingFeaturePageFr() {
  return (
    <PageShell
      lang="fr"
      eyebrow="Fonctionnalité · Coaching"
      title="Un coaching bâti sur les courses que vous avez déjà"
      alternate="/features/coaching-from-apple-health/"
      updated="2026-09-22"
      intro={
        <p>
          Au premier lancement, avec votre accord, RunToMax lit les courses déjà présentes dans Apple Santé et en tire un profil de départ.
          Votre historique compte dès le premier jour ; le coach ne part pas de zéro.
        </p>
      }
    >
      <h2>Le profil de départ</h2>
      <p>
        À partir de vos sorties récentes, RunToMax estime une <strong>allure de seuil</strong> — l’allure que vous pouvez tenir environ une
        heure — sur vos 90 derniers jours de course. Les allures d’entraînement (endurance, marathon, seuil, fractionné) découlent de cet
        ancrage. Quand il n’y a pas assez de courses récentes pour une estimation fiable, l’application le dit au lieu d’inventer un chiffre, et
        l’estimation s’affine à mesure que vous enregistrez avec la montre.
      </p>
      <Shot src="iphone-today.png" alt="Écran Aujourd’hui de RunToMax sur iPhone avec la consigne du jour" caption="Aujourd’hui : une réponse avant la sortie." />

      <h2>Un verdict après chaque sortie</h2>
      <p>
        RunToMax attend que la course soit finalisée dans Apple Santé, puis identifie de quel type de sortie il s’agit — endurance, sortie longue,
        tempo, fractionné, course — et rédige un verdict court : ce que la sortie vous apprend, et quoi faire ensuite. Les constats tiennent
        compte du type de séance et de votre fréquence cardiaque : un retour au calme ne passe pas pour une défaillance, une journée chaude ne
        passe pas pour une perte de forme.
      </p>
      <Shot src="iphone-training-impact.jpg" alt="Écran d’impact d’entraînement montrant les stimulus aérobie et anaérobie d’une course" caption="L’impact d’entraînement, calculé sur la course finalisée." />

      <h2>Chaque jour de plan reçoit une note</h2>
      <p>
        Quand vous suivez un plan, chaque séance est notée face à ce qui était demandé : allure, durée, structure. Cette note est l’unité de
        comparaison sur tout le plan, pour que « comment s’est passée cette semaine » ait un chiffre derrière, et que le chiffre ait une explication.
      </p>
      <Shot src="iphone-metric-explainer.jpg" alt="Écran d’explication d’une métrique : ce que c’est, pourquoi ça a changé, quoi faire" caption="Chaque chiffre important s’explique." />

      <h2>Forme du jour et chaleur</h2>
      <ul>
        <li><strong>La forme du jour</strong> combine la variabilité de la fréquence cardiaque, le sommeil et la charge d’entraînement récente lues dans Apple Santé en une seule lecture.</li>
        <li><strong>Cibles ajustées à la chaleur :</strong> les allures cibles sont corrigées selon la température et l’humidité à votre position, via Apple Météo. Une cible fixée en avril n’est pas imposée en juillet.</li>
      </ul>

      <h2>Ce qui tourne sur l’appareil, et ce qui n’y tourne pas</h2>
      <p>
        Tout ce qui précède — profil, allures de seuil et d’entraînement, classement des sorties, verdict, notes de plan, forme du jour, correction
        de chaleur — est calculé <strong>sur votre iPhone</strong>, sans compte et sans serveur RunToMax.
      </p>
      <p>
        La seule fonction cloud, optionnelle, est celle des <strong>notes rédigées du coach</strong> : des explications plus longues produites par un
        modèle de langage via un relais RunToMax. Elle est désactivée tant que vous ne l’activez pas, elle reçoit un résumé minimal plutôt que vos
        données brutes, et la désactiver ne retire rien d’autre. Sans coaching cloud, l’application est complète ; les notes sont simplement plus courtes.
      </p>

      <h2>Où vivent vos données</h2>
      <p>
        Vos courses, tracés et fréquences cardiaques vivent dans Apple Santé, sur votre appareil. RunToMax ne garde aucune copie cloud de votre
        historique et n’a pas de compte avec e-mail et mot de passe. Les courses peuvent être exportées en fichiers FIT. Les détails sont dans la{" "}
        <a href="/privacy/">politique de confidentialité</a> (en anglais).
      </p>
    </PageShell>
  );
}

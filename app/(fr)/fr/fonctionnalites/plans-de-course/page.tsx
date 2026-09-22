import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";
import Shot from "@/app/_components/Shot";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Des plans d’entraînement calés sur la date de votre course",
  description:
    "RunToMax construit des plans du 5 km au marathon calés sur votre date de course, envoie chaque séance sur votre Apple Watch et propose des ajustements selon votre réponse — c’est vous qui approuvez. Ou courez sans plan.",
  alternates: alternatesFor("/features/race-plans/", "fr"),
};

export default function RacePlansFeaturePageFr() {
  return (
    <PageShell
      lang="fr"
      eyebrow="Fonctionnalité · Plans"
      title="Des plans construits autour de votre date de course"
      alternate="/features/race-plans/"
      updated="2026-09-22"
      intro={
        <p>
          Choisissez une course et une date : RunToMax compose les semaines qui vous en séparent. Chaque séance se court sur la montre, chaque
          séance terminée est notée, et quand votre corps dit que le plan en demande trop ou pas assez, le plan propose un changement et vous décidez.
        </p>
      }
    >
      <h2>Comment un plan est construit</h2>
      <ul>
        <li><strong>L’ancrage :</strong> la distance (5 km, 10 km, semi-marathon, marathon) et la date. Le calendrier se déroule à rebours depuis le jour J.</li>
        <li><strong>Le niveau :</strong> quatre niveaux fixent la structure hebdomadaire ; le point de départ vient de votre historique Apple Santé, pas d’un questionnaire.</li>
        <li><strong>Les allures :</strong> chaque cible découle de votre allure de seuil, donc les cibles bougent quand votre forme bouge.</li>
        <li><strong>La variété :</strong> les séances de qualité tournent entre plusieurs familles de séances, pour qu’un bloc de 16 semaines ne soit pas seize fois le même mardi.</li>
      </ul>
      <Shot src="iphone-workout-structure.jpg" alt="Écran de structure de séance montrant chaque répétition et récupération" caption="Une séance de qualité : les étapes, les cibles, la note du coach." />

      <h2>Une adaptation que vous approuvez</h2>
      <p>
        RunToMax lit votre réponse à l’entraînement — les notes de vos dernières séances dures, le ressenti des sorties faciles, la charge, la
        forme du jour — et quand les signaux contredisent le plan, il <strong>propose</strong> un changement : alléger une séance, la déplacer, la
        remplacer. Rien ne change en silence. Vous gardez la séance, acceptez la proposition ou la déplacez vous-même, et le plan note ce qui s’est passé et pourquoi.
      </p>

      <h2>Au poignet</h2>
      <p>
        La séance du jour est envoyée à l’Apple Watch comme un entraînement structuré : échauffement, répétitions, récupérations, retour au calme,
        avec la fourchette cible de chaque étape et une vibration à chaque transition. Le fonctionnement est détaillé sur la page{" "}
        <a href="/fr/fonctionnalites/apple-watch/">Apple Watch</a>.
      </p>

      <h2>Sans plan, c’est aussi un plan</h2>
      <p>
        Vous pouvez utiliser RunToMax sans aucun plan. Chaque sortie est quand même classée et reçoit son verdict, vos allures de seuil et
        d’entraînement continuent de se mettre à jour, et la forme du jour se lit chaque matin. Les plans sont là quand une course l’est ; le coach est là dans tous les cas.
      </p>

      <h2>Apporter une séance d’ailleurs</h2>
      <p>
        Une séance écrite par un autre coach ou une autre application peut être collée en texte sur l’iPhone. RunToMax la découpe en étapes sur
        l’appareil et l’envoie à la montre comme l’une des siennes.
      </p>
    </PageShell>
  );
}

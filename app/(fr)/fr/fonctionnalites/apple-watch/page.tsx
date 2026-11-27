import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";
import Shot from "@/app/_components/Shot";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = pageMetadata("/fr/fonctionnalites/apple-watch/", {
  title: "Suivi de course sur Apple Watch",
  description:
    "Comment RunToMax enregistre vos sorties sur Apple Watch : écrans personnalisés, fractionné structuré avec vibrations, enregistrement sans téléphone, et la configuration requise (iOS 17, watchOS 10).",
  alternates: alternatesFor("/features/apple-watch/", "fr"),
});

export default function AppleWatchFeaturePageFr() {
  return (
    <PageShell
      lang="fr"
      eyebrow="Fonctionnalité · Apple Watch"
      title="Le suivi de course sur Apple Watch"
      alternate="/features/apple-watch/"
      updated="2026-11-19"
      intro={
        <p>
          RunToMax enregistre sur la montre, pas sur le téléphone. Les écrans sont à vous, les séances structurées se déroulent au poignet avec
          une vibration à chaque transition, et l’iPhone peut rester à la maison.
        </p>
      }
    >
      <h2>Ce qu’il faut</h2>
      <ul>
        <li>Une Apple Watch sous <strong>watchOS 10 ou plus récent</strong> — Series 4 et suivantes, toutes les Apple Watch SE, toutes les Apple Watch Ultra.</li>
        <li>Un iPhone sous <strong>iOS 17 ou plus récent</strong>, pour la configuration, l’analyse et les plans.</li>
        <li>Ni forfait cellulaire ni téléphone pendant la sortie : GPS, fréquence cardiaque et mouvement viennent de la montre.</li>
        <li>Vous pouvez enregistrer vos sorties sur Apple Watch ou directement sur un iPhone sous iOS 26 ou version ultérieure.</li>
      </ul>

      <h2>Des écrans que vous composez</h2>
      <p>
        Chaque écran de course est une grille de champs que vous choisissez : allure, allure du tour, fréquence cardiaque, zone, distance, temps
        écoulé, cadence, puissance si vous courez avec un capteur, et plus encore. Des préréglages couvrent les sorties faciles, le fractionné et
        la course ; vous pouvez enregistrer les vôtres. Un écran « grille d’allure » affiche côte à côte la cible de la séance et votre allure
        actuelle, pour répondre d’un coup d’œil à la seule question qui compte en pleine répétition.
      </p>

      <div className="grid items-start gap-x-8 sm:grid-cols-2">
        <Shot src="watch-ultra4-metrics-fr.webp" alt="Cinq mesures sur Apple Watch Ultra 4, dont l’allure moyenne, la cadence et la fréquence cardiaque" caption="Temps écoulé, allure moyenne, distance, cadence et fréquence cardiaque. Exemple de sortie." watch />
        <Shot src="watch-ultra4-buttons-fr.webp" alt="Éditeur de commandes RunToMax sur Apple Watch Ultra 4 avec quatre boutons à l’écran" caption="Les quatre commandes à l’écran et les actions attribuées aux boutons physiques." watch />
      </div>

      <h2>Des séances structurées au poignet</h2>
      <p>
        Échauffement, répétitions, récupérations et retour au calme s’enchaînent comme des étapes. La montre vibre à chaque transition et affiche
        la fourchette cible de l’étape en cours : pas besoin de lire l’écran pour savoir qu’une répétition a commencé. Les séances viennent de votre
        plan RunToMax, d’une séance collée en texte sur l’iPhone, ou des préréglages de la montre.
      </p>

      <h2>Tours et temps de passage, en direct</h2>
      <p>
        Chaque kilomètre affiche son reçu dès qu’il se termine, et l’écran des temps de passage garde l’historique de la sortie sous les yeux.
        L’allure du tour a une seule source sur la montre : le chiffre que vous voyez en courant est celui du résumé après la course.
      </p>

      <Shot src="watch-ultra4-race-fr.webp" alt="Temps de passage sur Apple Watch Ultra 4 avec allure du tour et estimation du chrono final" caption="L’allure du tour et le chrono final estimé sur un exemple de course." watch />

      <h2>Ce que la montre enregistre</h2>
      <ul>
        <li>Distance et tracé depuis le GPS de la montre, avec le moteur de distance d’Apple. La comparaison avec une Garmin est documentée sur la <a href="/fr/precision/">page précision</a>.</li>
        <li>Fréquence cardiaque par le capteur optique de la montre, cadence par ses capteurs de mouvement, altitude par le baromètre.</li>
        <li>En option, puissance et distance d’un capteur Stryd, une fois jumelé.</li>
        <li>Chaque course est écrite dans Apple Santé comme un entraînement normal. Rien n’est enfermé dans RunToMax.</li>
      </ul>

      <h2>Après la sortie</h2>
      <p>
        La montre transmet la course terminée à l’iPhone, où RunToMax la classe, rédige un verdict en français clair et la note face à ce que
        demandait le plan. Cette partie est décrite sur la page <a href="/fr/fonctionnalites/coaching-apple-sante/">coaching depuis Apple Santé</a>.
      </p>
    </PageShell>
  );
}

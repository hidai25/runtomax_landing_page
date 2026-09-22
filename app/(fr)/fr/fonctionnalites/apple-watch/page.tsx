import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";
import Shot from "@/app/_components/Shot";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Suivi de course sur Apple Watch",
  description:
    "Comment RunToMax enregistre vos sorties sur Apple Watch : écrans personnalisés, fractionné structuré avec vibrations, enregistrement sans téléphone, et la configuration requise (iOS 17, watchOS 10).",
  alternates: alternatesFor("/features/apple-watch/", "fr"),
};

export default function AppleWatchFeaturePageFr() {
  return (
    <PageShell
      lang="fr"
      eyebrow="Fonctionnalité · Apple Watch"
      title="Le suivi de course sur Apple Watch"
      alternate="/features/apple-watch/"
      updated="2026-09-22"
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
        <li>L’enregistrement nécessite l’Apple Watch. Les courses enregistrées par d’autres montres peuvent être lues depuis Apple Santé, mais avec des données de base seulement (voir la <a href="/fr/faq/">FAQ</a>).</li>
      </ul>

      <h2>Des écrans que vous composez</h2>
      <p>
        Chaque écran de course est une grille de champs que vous choisissez : allure, allure du tour, fréquence cardiaque, zone, distance, temps
        écoulé, cadence, puissance si vous courez avec un capteur, et plus encore. Des préréglages couvrent les sorties faciles, le fractionné et
        la course ; vous pouvez enregistrer les vôtres. Un écran « grille d’allure » affiche côte à côte la cible de la séance et votre allure
        actuelle, pour répondre d’un coup d’œil à la seule question qui compte en pleine répétition.
      </p>
      <Shot src="watch-grid.png" alt="Écran de course Apple Watch avec une grille de métriques choisies" caption="Une grille de champs personnalisée sur la montre." watch />
      <Shot src="watch-select.png" alt="Sélecteur de disposition Apple Watch avec des préréglages par type de séance" caption="Une disposition par type de séance." watch />

      <h2>Des séances structurées au poignet</h2>
      <p>
        Échauffement, répétitions, récupérations et retour au calme s’enchaînent comme des étapes. La montre vibre à chaque transition et affiche
        la fourchette cible de l’étape en cours : pas besoin de lire l’écran pour savoir qu’une répétition a commencé. Les séances viennent de votre
        plan RunToMax, d’une séance collée en texte sur l’iPhone, ou des préréglages de la montre.
      </p>
      <Shot src="watch-gauge.png" alt="Apple Watch affichant l’allure actuelle face à la cible de la séance" caption="L’allure face à la cible de l’étape." watch />

      <h2>Tours et temps de passage, en direct</h2>
      <p>
        Chaque kilomètre affiche son reçu dès qu’il se termine, et l’écran des temps de passage garde l’historique de la sortie sous les yeux.
        L’allure du tour a une seule source sur la montre : le chiffre que vous voyez en courant est celui du résumé après la course.
      </p>
      <Shot src="watch-splits.png" alt="Écran des temps de passage Apple Watch avec temps au tour, fréquence cardiaque et progression" caption="Les passages avec fréquence cardiaque et progression." watch />

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

import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Comment nous testons la précision du suivi — résultats et limites",
  description:
    "Comment RunToMax vérifie distance, passages, cadence et altitude sur Apple Watch face à une Garmin portée à l’autre poignet : la méthode, les chiffres des sorties appariées, et là où c’est encore faux.",
  alternates: alternatesFor("/accuracy/", "fr"),
};

export default function AccuracyPageFr() {
  return (
    <PageShell
      lang="fr"
      eyebrow="Preuves"
      title="Quelle précision, et comment nous le savons"
      alternate="/accuracy/"
      updated="2026-09-22"
      intro={
        <p>
          Chaque affirmation de cette page vient de sorties appariées : une Apple Watch avec RunToMax à un poignet, une Garmin Forerunner à
          l’autre, même coureur, même parcours, même instant. Nous publions l’écart, pas l’adjectif.
        </p>
      }
    >
      <h2>Méthode</h2>
      <ul>
        <li><strong>Des sorties appariées.</strong> Depuis mai 2026, plus de 35 sorties de deux coureurs ont été enregistrées sur les deux montres. Chaque fichier FIT Garmin et chaque export RunToMax sont conservés et comparés : distance totale, passages au kilomètre, fréquence cardiaque, cadence et altitude.</li>
        <li><strong>Un corpus noté.</strong> Dix-sept de ces sorties forment un jeu de test fixe avec un critère écrit de réussite : distance totale à 1 % près de la référence, et passages au kilomètre dont l’erreur ne dérive pas avec la vitesse. Toute modification du code de distance est rejouée sur les dix-sept avant de sortir.</li>
        <li><strong>Une référence honnête.</strong> Une Garmin n’est pas la vérité absolue. Sur les sorties hachées, sa distance affichée peut dépasser celle qu’implique son propre enregistrement de vitesse ; dans ces cas nous jugeons face à l’intégrale de la Garmin, pas à son chiffre affiché.</li>
      </ul>

      <h2>Distance — ce qui est livré aujourd’hui</h2>
      <p>
        RunToMax utilise le moteur de distance d’Apple — la distance que la montre écrit dans Apple Santé — alimenté par le GPS et les capteurs
        de mouvement de la montre. Résultats face à la Garmin :
      </p>
      <ul>
        <li><strong>Sorties régulières :</strong> à environ 1 % près. Exemples du jeu apparié : −0,93 % sur 9,9 km, −0,95 % sur 9,0 km, et +0,006 % sur 7 km — l’accord le plus serré enregistré.</li>
        <li><strong>Fractionné et sorties hachées :</strong> 1 à 3 % de moins que la Garmin. Une séance de 4 × 800 m a lu 142 m de moins sur 8,5 km (−1,7 %) ; une sortie avec une pause de marche de 95 secondes a lu −2,8 %, dont l’essentiel vient des deux montres qui comptent différemment le temps à l’arrêt.</li>
      </ul>

      <h2>Distance — ce qui est en test</h2>
      <p>
        Un filtre GPS qui somme les déplacements sur une trace lissée tourne en arrière-plan sur chaque sortie et est noté face au corpus. Sur les
        sorties appariées les plus récentes, ses totaux sont à ±0,3 % de la Garmin, y compris sur des sorties comptant 25 à 33 arrêts. Il
        <strong> n’est pas livré</strong> : sur les kilomètres denses en arrêts, les passages dépassent encore parfois la borne de 8 secondes, et deux
        des trois sorties de la seconde coureuse ont montré une dérive liée à la vitesse. Il sortira quand le critère sera atteint, pas avant.
      </p>

      <h2>Passages</h2>
      <p>
        Sur les sorties propres, les passages au kilomètre concordent avec la Garmin à environ 5 secondes près. Quand ils diffèrent, c’est en
        général sur le kilomètre qui contient plusieurs arrêts : chaque pause et reprise introduit environ 1,5 seconde de désaccord d’horloge entre
        les deux montres, et un kilomètre avec quatre arrêts peut différer de 8 à 10 secondes. L’allure du tour affichée en direct sur la montre est
        le même chiffre que celui du résumé après la course.
      </p>

      <h2>Cadence, fréquence cardiaque, altitude</h2>
      <ul>
        <li><strong>La cadence</strong> issue des capteurs de mouvement de la montre concorde avec la Garmin : médiane de 180 contre 181 pas par minute sur une sortie de 1 700 échantillons.</li>
        <li><strong>La fréquence cardiaque</strong> est celle du capteur optique de la montre. Deux capteurs au poignet divergent d’une sortie à l’autre, dans les deux sens ; nous n’affirmons pas que l’un a raison.</li>
        <li><strong>L’altitude</strong> vient du baromètre avec correction de dérive par le GPS. Considérez les totaux comme précis à environ 9 mètres par sortie.</li>
      </ul>

      <h2>Limites connues</h2>
      <ul>
        <li>Deux montres ne concordent jamais exactement. Comptez ±1 % sur toute sortie isolée, quel que soit l’appareil.</li>
        <li>Les séances hachées sont là où vit l’erreur restante — la gestion des pauses, pas la qualité du GPS.</li>
        <li>Immeubles hauts, tunnels et couvert forestier dense dégradent le GPS de la montre comme n’importe quel GPS.</li>
        <li>Sur tapis, la distance est l’estimation de foulée d’Apple, sauf si un capteur la fournit.</li>
        <li>Le temps de contact au sol mesuré au poignet n’est pas assez fiable pour coacher ; RunToMax ne s’en sert pas pour les conseils de foulée.</li>
      </ul>
      <p>
        Si vous enregistrez des sorties appariées et voyez autre chose, envoyez les fichiers — le corpus grandit une sortie à la fois. Le contact est
        sur la <a href="/support/">page support</a> (en anglais).
      </p>
    </PageShell>
  );
}

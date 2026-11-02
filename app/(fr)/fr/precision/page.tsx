import { pageMetadata } from "@/app/_lib/site";
import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";
import { alternatesFor } from "@/app/_lib/site";

export const metadata: Metadata = pageMetadata("/fr/precision/", {
  title: "Comment nous testons la précision du suivi — résultats et limites",
  description:
    "Comment RunToMax vérifie distance, passages, cadence et altitude sur Apple Watch face à une Garmin portée à l’autre poignet : la méthode, les chiffres des sorties appariées, et là où c’est encore faux.",
  alternates: alternatesFor("/accuracy/", "fr"),
});

export default function AccuracyPageFr() {
  return (
    <PageShell
      lang="fr"
      eyebrow="Preuves"
      title="Quelle précision, et comment nous le savons"
      alternate="/accuracy/"
      updated="2026-11-02"
      intro={
        <p>
          Voici des observations historiques sur un petit échantillon de sorties appariées, rapportées le 22 septembre 2026 : une Apple Watch avec RunToMax
          à un poignet et une Garmin Forerunner à l’autre. Ce n’est ni une nouvelle validation de la version 1.3.5, ni une garantie pour chaque coureur.
        </p>
      }
    >
      <h2>Méthode</h2>
      <ul>
        <li><strong>Des sorties appariées.</strong> Depuis mai 2026, plus de 35 sorties de deux coureurs ont été enregistrées sur les deux montres. Chaque fichier FIT Garmin et chaque export RunToMax sont conservés et comparés : distance totale, passages au kilomètre, fréquence cardiaque, cadence et altitude.</li>
        <li><strong>Un corpus noté.</strong> Dix-sept de ces sorties forment un jeu de test fixe avec un critère écrit de réussite : distance totale à 1 % près de la référence, et passages au kilomètre dont l’erreur ne dérive pas avec la vitesse. Ce jeu de test historique ne démontre pas la précision sur tous les modèles de montre, tous les coureurs ou les versions ultérieures.</li>
        <li><strong>Une référence honnête.</strong> Une Garmin n’est pas la vérité absolue. Sur les sorties hachées, sa distance affichée peut dépasser celle qu’implique son propre enregistrement de vitesse ; dans ces cas nous jugeons face à l’intégrale de la Garmin, pas à son chiffre affiché.</li>
      </ul>

      <h2>Distance — comparaisons observées</h2>
      <p>
        L’échantillon rapporté utilisait le moteur de distance d’Apple, alimenté par le GPS et les capteurs
        de mouvement de la montre. Résultats face à la Garmin dans cet échantillon :
      </p>
      <ul>
        <li><strong>Sorties régulières :</strong> à environ 1 % près. Exemples du jeu apparié : −0,93 % sur 9,9 km, −0,95 % sur 9,0 km, et +0,006 % sur 7 km — l’accord le plus serré enregistré.</li>
        <li><strong>Fractionné et sorties hachées :</strong> 1 à 3 % de moins que la Garmin. Une séance de 4 × 800 m a lu 142 m de moins sur 8,5 km (−1,7 %) ; une sortie avec une pause de marche de 95 secondes a lu −2,8 %, dont l’essentiel vient des deux montres qui comptent différemment le temps à l’arrêt.</li>
      </ul>

      <h2>Passages</h2>
      <p>
        Dans cet échantillon, sur les sorties régulières, les passages au kilomètre concordaient avec la Garmin à environ 5 secondes près. Quand ils diffèrent, c’est en
        général sur le kilomètre qui contient plusieurs arrêts : chaque pause et reprise introduit environ 1,5 seconde de désaccord d’horloge entre
        les deux montres, et un kilomètre avec quatre arrêts peut différer de 8 à 10 secondes. L’allure du tour affichée en direct sur la montre est
        le même chiffre que celui du résumé après la course.
      </p>

      <h2>Cadence, fréquence cardiaque, altitude</h2>
      <ul>
        <li><strong>La cadence</strong> issue des capteurs de mouvement de la montre concorde avec la Garmin : médiane de 180 contre 181 pas par minute sur une sortie de 1 700 échantillons.</li>
        <li><strong>La fréquence cardiaque</strong> est celle du capteur optique de la montre. Deux capteurs au poignet divergent d’une sortie à l’autre, dans les deux sens ; nous n’affirmons pas que l’un a raison.</li>
        <li><strong>L’altitude</strong> vient du baromètre avec correction de dérive par le GPS. Le rapport antérieur décrivait des écarts d’environ 9 mètres par sortie ; il s’agit d’une observation sur cet échantillon, pas d’une marge d’erreur garantie.</li>
      </ul>

      <h2>Limites connues</h2>
      <ul>
        <li>L’accord entre deux montres ne prouve pas la distance réelle. Les erreurs peuvent dépasser celles observées ici.</li>
        <li>La gestion des pauses a contribué aux écarts des séances hachées ; la qualité du GPS et les conditions peuvent également affecter les résultats.</li>
        <li>Immeubles hauts, tunnels et couvert forestier dense dégradent le GPS de la montre comme n’importe quel GPS.</li>
        <li>Sur tapis, la distance est estimée à partir du mouvement ou d’un capteur compatible. Une calibration avec la distance du tapis ne prouve pas que celui-ci est exact.</li>
        <li>Le temps de contact au sol mesuré au poignet n’est pas assez fiable pour coacher ; RunToMax ne s’en sert pas pour les conseils de foulée.</li>
      </ul>
      <p>
        Si vous enregistrez des sorties appariées et voyez autre chose, envoyez les fichiers — le corpus grandit une sortie à la fois. Le contact est
        sur la <a href="/support/">page support</a> (en anglais).
      </p>
    </PageShell>
  );
}

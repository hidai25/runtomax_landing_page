import Image from "next/image";
import Link from "next/link";
import GuideDetails from "@/app/_components/GuideDetails";
import PageShell from "@/app/_components/PageShell";
import { guideAlternates, guides } from "@/app/_lib/guides";
import { FR_APP_STORE_URL, pageMetadata } from "@/app/_lib/site";

const guide = guides.frVo2Accuracy;

export const metadata = pageMetadata(guide.path, {
  title: guide.title,
  description: guide.description,
  alternates: guideAlternates(guide.path),
  openGraph: { type: "article", publishedTime: guide.published, modifiedTime: guide.updated },
});

export default function GuideFiabiliteVO2Max() {
  return (
    <PageShell lang="fr" eyebrow="Guide · Santé cardiovasculaire" title={guide.title} updated={guide.updated}
      alternate={guides.vo2Accuracy.path} storeUrl={FR_APP_STORE_URL + "?pt=126426469&ct=fr-guide-vo2&mt=8"}
      intro={<p>Votre VO₂ max a perdu un point sur l’Apple Watch alors que votre dernière sortie vous a semblé plus facile ? Cette baisse, à elle seule, ne justifie pas de revoir votre entraînement. Dans <a href="https://pubmed.ncbi.nlm.nih.gov/42094313/">une étude de Rory Lambe et de ses collègues sur l’Apple Watch Series 10</a>, l’écart moyen entre la montre et le laboratoire était d’environ 6,8 mL/kg/min. Cette moyenne ne permet pas de connaître l’écart pour votre propre mesure.</p>}>
      <h2>Quelle précision par rapport à un test en laboratoire ?</h2>
      <p>La VO₂ max correspond à la quantité maximale d’oxygène que votre corps peut utiliser en une minute lors d’un effort intense, rapportée à votre poids. En laboratoire, on la mesure en analysant les gaz respiratoires. L’Apple Watch l’estime à partir de votre fréquence cardiaque et de vos mouvements pendant une course, une marche ou une randonnée en plein air. Votre profil Santé, notamment votre âge et votre poids, entre aussi dans le calcul. <a href="https://support.apple.com/fr-fr/108790">Comment Apple estime la santé cardiovasculaire</a>.</p>
      <p>L’étude a recruté 40 adultes en bonne santé. La comparaison finale portait sur 35 personnes jeunes, pour la plupart en très bonne condition physique. L’écart absolu moyen était de 6,79 mL/kg/min. Autrement dit, une surestimation et une sous-estimation comptaient toutes les deux dans la moyenne. L’étude portait uniquement sur l’estimation d’Apple.</p>
      <p>Pour retrouver vos valeurs sur l’iPhone, ouvrez <strong>Santé → Parcourir → Cœur → Santé cardiovasculaire</strong>. Affichez le mois et regardez les dates des mesures. Une séance sur tapis peut vous faire progresser sans produire de nouvelle estimation dans Santé.</p>
      <h2>Je cours plus vite. Pourquoi ma VO₂ max baisse-t-elle ?</h2>
      <p>Reprenez une boucle plate que vous connaissez bien. Le mois dernier, vous y couriez à 6 min/km avec une fréquence cardiaque moyenne de 145 bpm. Ce mois-ci, vous tenez 5 min 45 s/km à 145 bpm. Si la météo, les arrêts et l’effort étaient comparables, vous avez un signe concret de progrès sur ce parcours. Comparer un chrono en compétition à celui d’un footing tranquille vous apprendrait bien moins.</p>
      <p>Regardez si cette tendance se confirme sur plusieurs sorties comparables. Si seule la valeur de la montre a baissé, gardez votre prochain footing à l’allure facile prévue. S’il manque des mesures, vérifiez quelles séances en extérieur vous avez enregistrées pendant cette période.</p>
      <h2>Comment RunToMax calcule-t-il sa propre estimation ?</h2>
      <p>Dans RunToMax Pro, ouvrez <strong>Tendances → VO₂ max</strong>. Si vous lisez <strong>« Estimation à partir de vos données de course »</strong> sous le titre, touchez le bouton d’information. Vous verrez quelles données RunToMax a utilisées et le degré de confiance qu’il accorde au résultat.</p>
      <figure className="my-8">
        <Image src="/guides/vo2-estimation-donnees.png" alt="RunToMax indique une confiance moyenne et affiche les trois données utilisées : fréquence cardiaque maximale, fréquence au repos et chrono sur 5 km." width={864} height={1098} className="mx-auto h-auto w-full max-w-sm rounded-2xl" />
        <figcaption className="mx-auto mt-3 max-w-sm text-sm leading-relaxed">RunToMax 1.4.1 en français sur simulateur iPhone. Les fréquences cardiaques et le chrono sur 5 km sont des données d’exemple.</figcaption>
      </figure>
      <p>Dans cet exemple, le coureur a saisi une fréquence cardiaque maximale de <strong>184 bpm</strong>. Santé fournit une fréquence au repos de <strong>50 bpm</strong> et l’historique contient un <strong>5 km en 24 minutes</strong>. Le calcul fondé sur la fréquence cardiaque et celui fondé sur le chrono donnent des résultats différents. RunToMax signale cet écart. Le premier réflexe est de vérifier d’où viennent les 184 bpm, surtout si cette valeur a été saisie de mémoire.</p>
      <p>Vous pourrez voir d’autres données sur votre écran. Lorsque des sorties en extérieur s’y prêtent, RunToMax peut aussi estimer votre forme à partir de la relation entre votre allure et votre fréquence cardiaque. Le bouton d’information indique la méthode utilisée dans votre cas.</p>
      <p><Link href="/fr/guides/">Tous les guides de course à pied</Link></p>
      <GuideDetails guide={guide} />
    </PageShell>
  );
}

import dimensions from "@/app/_lib/image-dimensions.json";

export default function HomeDevices({ lang }: { lang: "en" | "fr" }) {
  const phone = `iphone17-home-${lang}.webp` as const;
  const watch = `watch-ultra4-metrics-${lang}.webp` as const;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const french = lang === "fr";
  return (
    <figure className="mx-auto w-full text-center">
      <div className="flex items-end justify-center gap-2 sm:gap-4">
        <img
          src={`${base}/${phone}`}
          {...dimensions[phone]}
          alt={french ? "Accueil de RunToMax sur iPhone 17" : "RunToMax Home on iPhone 17"}
          fetchPriority="high"
          className="h-auto w-auto max-h-[40svh] max-w-[60%] object-contain lg:max-h-[480px]"
        />
        <img
          src={`${base}/${watch}`}
          {...dimensions[watch]}
          alt={french
            ? "Écran de course RunToMax à cinq mesures sur Apple Watch Ultra 4 avec bracelet Ocean gris translucide"
            : "RunToMax Centered 5 running metrics on Apple Watch Ultra 4 with a translucent gray Ocean Band"}
          className="h-auto w-auto max-h-[23svh] max-w-[33%] object-contain lg:max-h-[275px]"
        />
      </div>
      <figcaption className="mt-3 text-xs text-zinc-500">
        {french ? "Données d’exemple" : "Example data"}
      </figcaption>
    </figure>
  );
}

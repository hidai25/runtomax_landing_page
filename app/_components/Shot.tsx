/* eslint-disable @next/next/no-img-element */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Shot({ src, alt, caption, watch = false }: { src: string; alt: string; caption: string; watch?: boolean }) {
  return (
    <figure className={`my-8 ${watch ? "max-w-[220px]" : "max-w-[300px]"}`}>
      <img
        src={`${BASE}/${src}`}
        alt={alt}
        loading="lazy"
        className={`w-full border border-white/[0.08] bg-zinc-950 ${watch ? "rounded-[2.2rem]" : "rounded-[1.6rem]"}`}
      />
      <figcaption className="mt-3 text-xs text-zinc-500">{caption}</figcaption>
    </figure>
  );
}

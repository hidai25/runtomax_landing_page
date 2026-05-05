import Link from "next/link";
import type { ReactNode } from "react";

type LegalLayoutProps = {
  title: string;
  effectiveDate: string;
  intro?: ReactNode;
  children: ReactNode;
};

export default function LegalLayout({
  title,
  effectiveDate,
  intro,
  children,
}: LegalLayoutProps) {
  return (
    <main className="font-sans bg-black text-white min-h-screen">
      <nav className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-bebas text-2xl tracking-wide select-none"
          >
            runto<span className="text-[#1FE26C]">max</span>
          </Link>
          <Link
            href="/#waitlist"
            className="text-sm font-medium hover:text-[#1FE26C] transition-colors duration-200"
          >
            Join the waitlist
          </Link>
        </div>
      </nav>

      <article className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <p className="text-[#1FE26C] font-mono text-xs uppercase tracking-widest mb-6 font-semibold">
          Effective {effectiveDate}
        </p>
        <h1 className="font-bebas text-5xl md:text-7xl tracking-tight leading-[0.9] mb-10 uppercase">
          {title}
        </h1>
        {intro ? (
          <div className="text-zinc-300 text-lg leading-relaxed mb-12 border-l-2 border-zinc-800 pl-6">
            {intro}
          </div>
        ) : null}
        <div className="legal-prose text-zinc-400 text-base leading-relaxed">
          {children}
        </div>
      </article>

      <footer className="py-8 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="font-bebas text-xl tracking-wide text-zinc-600 hover:text-zinc-300 select-none transition-colors"
          >
            runto<span className="text-zinc-400">max</span>
          </Link>
          <div className="flex gap-6 text-sm text-zinc-500 font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <a
              href="mailto:hello@runtomax.com"
              className="hover:text-white transition-colors"
            >
              hello@runtomax.com
            </a>
          </div>
          <div className="text-zinc-700 text-xs font-mono tracking-widest uppercase">
            © 2026 RunToMax
          </div>
        </div>
      </footer>
    </main>
  );
}

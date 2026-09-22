import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "../globals.css";
import { CONTACT_EMAIL } from "@/app/_lib/contact";
import { OG_IMAGE, SITE_URL, siteJsonLd } from "@/app/_lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RunToMax — Coach course à pied pour Apple Watch",
    template: "%s | RunToMax",
  },
  description:
    "RunToMax enregistre vos sorties sur Apple Watch et vous coache à partir des courses déjà présentes dans Apple Santé. Verdict après chaque sortie, allures de seuil, plans calés sur votre course. Disponible sur l’App Store.",
  applicationName: "RunToMax",
  authors: [{ name: "Hidai Bar-Mor" }],
  creator: "Hidai Bar-Mor",
  publisher: "RunToMax",
  category: "fitness",
  openGraph: {
    type: "website",
    url: `${SITE_URL}/fr/`,
    siteName: "RunToMax",
    title: "RunToMax — Coach course à pied pour Apple Watch",
    description:
      "Enregistre sur Apple Watch. Lit toutes vos sorties dans Apple Santé. Un coach qui explique chaque course et sait quand freiner.",
    locale: "fr_FR",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "RunToMax — coach course à pied pour Apple Watch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RunToMax — Coach course à pied pour Apple Watch",
    description: "Enregistre sur Apple Watch. Lit toutes vos sorties dans Apple Santé.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const jsonLd = siteJsonLd("fr", CONTACT_EMAIL);

export default function FrenchRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${bebas.variable}`}>
      <body className="antialiased bg-black text-white selection:bg-[#1FE26C] selection:text-black overflow-x-hidden">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}

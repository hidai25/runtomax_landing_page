import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "../globals.css";
import { CONTACT_EMAIL } from "@/app/_lib/contact";
import { siteJsonLd } from "@/app/_lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const SITE_URL = "https://runtomax.com";
const OG_IMAGE = `${SITE_URL}/og-runtomax.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RunToMax — Know when to push and when to recover",
    template: "%s | RunToMax",
  },
  description:
    "RunToMax turns Apple Watch data into clear daily coaching, reliable workout execution and evidence-backed guidance that helps runners train consistently. Now on the App Store.",
  applicationName: "RunToMax",
  authors: [{ name: "Hidai Bar-Mor" }],
  creator: "Hidai Bar-Mor",
  publisher: "RunToMax",
  keywords: [
    "Apple Watch running app",
    "running coach app",
    "adaptive training plan",
    "marathon training plan",
    "half marathon training plan",
    "VO2 max Apple Watch",
    "training load",
    "HR zones",
    "structured workouts Apple Watch",
    "track mode running app",
    "iPhone running app",
    "race-watch-grade running app",
  ],
  category: "fitness",
  alternates: { canonical: "/", languages: { en: "/", fr: "/fr/", "x-default": "/" } },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "RunToMax",
    title: "RunToMax — Know when to push and when to recover",
    description:
      "Clear daily coaching, reliable Apple Watch workouts and evidence-backed guidance that helps you run stronger and stay consistent.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Run stronger and stay consistent with RunToMax",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RunToMax — Know when to push and when to recover",
    description:
      "Clear daily coaching, reliable Apple Watch workouts and evidence-backed guidance that helps you run stronger and stay consistent.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = siteJsonLd("en", CONTACT_EMAIL);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="antialiased bg-black text-white selection:bg-[#1FE26C] selection:text-black overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

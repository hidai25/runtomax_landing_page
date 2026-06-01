import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./_components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const SITE_URL = "https://runtomax.com";
const OG_IMAGE = `${SITE_URL}/iphone-today.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "RunToMax — Apple Watch running coach with race-watch-grade metrics",
    template: "%s | RunToMax",
  },
  description:
    "RunToMax turns your Apple Watch into a real running watch. Adaptive 5K–marathon training plans, VO₂ max, training load, HR zones, structured intervals, lane-exact track mode, and a coach that explains every run. Ships 2026.",
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "RunToMax",
    title:
      "RunToMax — Apple Watch running coach with race-watch-grade metrics",
    description:
      "Turn your Apple Watch into a real running watch. Adaptive plans, VO₂ max, HR zones, structured intervals, lane-exact track mode. Ships 2026.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "RunToMax running app on iPhone with race-watch-grade metrics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "RunToMax — Apple Watch running coach with race-watch-grade metrics",
    description:
      "Turn your Apple Watch into a real running watch. Adaptive plans, VO₂ max, HR zones, structured intervals, lane-exact track mode. Ships 2026.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "RunToMax",
      url: SITE_URL,
      logo: `${SITE_URL}/iphone-today.png`,
      founder: { "@type": "Person", name: "Hidai Bar-Mor" },
      email: "hello@runtomax.com",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "RunToMax",
      publisher: { "@id": `${SITE_URL}/#org` },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "RunToMax",
      operatingSystem: "iOS, watchOS",
      applicationCategory: "HealthApplication",
      applicationSubCategory: "Running",
      description:
        "RunToMax is an Apple Watch and iPhone running app with race-watch-grade metrics, adaptive training plans, structured intervals, HR-zone discipline, lane-exact track mode, and a coach that audits every run.",
      url: SITE_URL,
      author: { "@id": `${SITE_URL}/#org` },
      releaseNotes: "Ships 2026. Join the waitlist for early TestFlight access.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <GoogleAnalytics />
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

import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "RunToMax | The running coach that audits your run",
  description:
    "RunToMax watches the splits, the heart-rate drift, the weather, the terrain — and tells you exactly why your run went the way it did.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="antialiased bg-black text-white selection:bg-[#1FE26C] selection:text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

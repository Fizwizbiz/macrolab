import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MacroLab - Où la Technique et la Macro Fusionnent",
  description: "Analyse de marché experte, idées d'investissement et de trading swing, approche éducative - Naviguez sur les marchés mondiaux en toute confiance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}

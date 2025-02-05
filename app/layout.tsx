import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Carlos Eduardo - Desenvolvedor Frontend",
  description: "Carlos Silva, desenvolvedor Front-end. Explore meu portfólio.",
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}

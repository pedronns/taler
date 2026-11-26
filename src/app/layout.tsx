import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taler — Stories, tailored to you.",
  description:
    "Transforme seus livros em experiências de áudio únicas. Histórias interpretadas, narradores e personagens com vozes próprias.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

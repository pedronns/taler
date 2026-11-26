import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taler — histórias feitas para você.",
  description:
    "Conheça o conceito Taler: livros transformados em experiências de áudio personalizadas, com vozes e interpretação próprias.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

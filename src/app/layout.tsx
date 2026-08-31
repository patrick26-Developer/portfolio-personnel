import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import { site } from "@/data/site";
import { LanguageProvider } from "@/i18n/language-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata rendue côté serveur : toujours en français (langue par défaut du site),
// le contenu de la page bascule ensuite côté client via le sélecteur de langue.
export const metadata: Metadata = {
  title: `${site.shortName} — ${site.role.fr}`,
  description: site.bio.fr,
  openGraph: {
    title: `${site.shortName} — ${site.role.fr}`,
    description: site.bio.fr,
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

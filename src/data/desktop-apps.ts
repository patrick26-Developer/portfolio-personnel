import type { Localized } from "@/i18n/types";

export type DesktopAppStatus = "development" | "published";

export interface DesktopApp {
  slug: string;
  name: string;
  tagline: Localized;
  description: Localized;
  tech: string[];
  /** Plateformes ciblées, ex: ["Windows", "macOS"]. */
  platforms?: string[];
  status: DesktopAppStatus;
  icon?: string;
  screens?: string[];
  repoUrl?: string;
}

export const desktopApps: DesktopApp[] = [
  {
    slug: "devdesk",
    name: "DevDesk",
    tagline: {
      fr: "Boîte à outils développeur tout-en-un, 100% locale",
      en: "All-in-one developer toolbox, 100% local",
    },
    description: {
      fr: "Boîte à outils développeur desktop tout-en-un, construite avec Electron, React et TypeScript. Regroupe 13 outils utilisés quotidiennement — formatage JSON, encodage Base64, génération d'UUID, test de regex, décodage JWT, génération de hash, prévisualisation Markdown, génération de QR codes, client HTTP (API Tester), et plus — dans une seule application native. Tous les traitements s'exécutent localement (100% local), à l'exception de l'outil de test d'API qui envoie des requêtes HTTP vers les URLs explicitement saisies par l'utilisateur. Sert aussi de référence pour une architecture Electron structurée : séparation stricte entre processus principal et rendu, communication IPC sécurisée via contextBridge, persistance locale des préférences, thème clair/sombre et interface bilingue Français/Anglais.",
      en: "An all-in-one developer desktop toolbox built with Electron, React, and TypeScript. Bundles 13 tools used daily by developers — JSON formatting, Base64 encoding, UUID generation, regex testing, JWT decoding, hash generation, Markdown preview, QR code generation, an HTTP client (API Tester), and more — into a single native app. Every operation runs locally (100% local), except the API testing tool, which sends HTTP requests to the URLs the user explicitly enters. It also serves as a reference for a well-structured Electron architecture: strict separation between the main and renderer processes, secure IPC communication via contextBridge, local persistence of user preferences, light/dark theming, and a bilingual French/English interface.",
    },
    tech: [
      "Electron",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Electron Forge",
    ],
    platforms: ["Windows", "macOS", "Linux"],
    status: "development",
    icon: "/gallery/desktop/DevDesk/devdesk-icon.png",
    repoUrl: "https://github.com/patrick26-Developer/devdesk",
    screens: [
      "/gallery/desktop/DevDesk/1.png",
      "/gallery/desktop/DevDesk/1_1.png",
      "/gallery/desktop/DevDesk/5.png",
      "/gallery/desktop/DevDesk/6.png",
      "/gallery/desktop/DevDesk/7.png",
      "/gallery/desktop/DevDesk/4.png",
    ],
  },
];

import type { Localized } from "@/i18n/types";

export type MobileAppStatus = "development" | "published";

export interface MobileApp {
  slug: string;
  name: string;
  tagline: Localized;
  description: Localized;
  tech: string[];
  /** Statut réel : pas encore publiée sur les stores => "development". */
  status: MobileAppStatus;
  logo?: string;
  screens?: string[];
  repoUrl?: string;
}

export const mobileApps: MobileApp[] = [
  {
    slug: "causerie-mobile",
    name: "Causerie",
    tagline: {
      fr: "Messagerie mobile en temps réel",
      en: "Real-time mobile messaging",
    },
    description: {
      fr: "Application mobile de chat en temps réel : messagerie 1-to-1, groupes et communautés, présence en ligne, et thèmes de couleur personnalisables (clair/sombre + accents bleu, rose, vert). Pilotée par le dashboard Causerie Admin. Actuellement en développement, pas encore publiée sur le Play Store ou l'App Store.",
      en: "Real-time mobile chat app: 1-to-1 messaging, groups and communities, online presence, and customizable color themes (light/dark + blue, pink, green accents). Driven by the Causerie Admin dashboard. Currently in development, not yet published on the Play Store or App Store.",
    },
    tech: ["React Native", "TypeScript", "Temps réel"],
    status: "development",
    logo: "/gallery/app-mobile/Causerie/true-logo.png",
    repoUrl: "https://github.com/patrick26-Developer/app-chat-messagerie",
    screens: [
      "/gallery/app-mobile/Causerie/Screenshot_20260731-134451.png",
      "/gallery/app-mobile/Causerie/Screenshot_20260731-134639.png",
      "/gallery/app-mobile/Causerie/Screenshot_20260731-134733.png",
      "/gallery/app-mobile/Causerie/Screenshot_20260731-134901.png",
    ],
  },
];

export interface MobileApp {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  /** Statut réel : pas encore publiée sur les stores => "En développement". */
  status: "En développement" | "Publiée";
  logo?: string;
  screens?: string[];
  repoUrl?: string;
}

export const mobileApps: MobileApp[] = [
  {
    slug: "causerie-mobile",
    name: "Causerie",
    tagline: "Messagerie mobile en temps réel",
    description:
      "Application mobile de chat en temps réel : messagerie 1-to-1, groupes et communautés, présence en ligne, et thèmes de couleur personnalisables (clair/sombre + accents bleu, rose, vert). Pilotée par le dashboard Causerie Admin. Actuellement en développement, pas encore publiée sur le Play Store ou l'App Store.",
    tech: ["React Native", "TypeScript", "Temps réel"],
    status: "En développement",
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

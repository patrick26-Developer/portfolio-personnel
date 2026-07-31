export interface FeaturedProject {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  category: string;
  status: "En production" | "Démo";
  year?: string;
  liveUrl: string;
  repoUrl?: string;
  achievements?: string[];
  /** Image de couverture réelle, ex: /gallery/app-web/<slug>/cover.png. undefined => placeholder stylé. */
  cover?: string;
  /** Captures additionnelles pour le carrousel du modal projet. */
  screens?: string[];
  /** Logo d'app mobile associé, si le projet a un volet mobile. */
  mobileLogo?: string;
  /** Captures de l'application mobile associée, si applicable. */
  mobileScreens?: string[];
}

export interface GithubProject {
  name: string;
  repo: string;
  description: string;
  tech: string[];
}

export interface DataVizProject {
  name: string;
  repo: string;
  description: string;
  tech: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "banki",
    title: "BANKI — Banque Digitale du Congo",
    tagline: "Première banque 100% digitale du Congo-Brazzaville",
    description:
      "Application de banque digitale mobile-first : ouverture de compte en ~5 minutes, IBAN instantané, cartes Visa internationales, transferts en temps réel 24/7, support multi-devises (XAF, USD, EUR), intégration mobile money (Airtel Money, MTN MoMo, Orange Money) et sécurité biométrique, dans le respect de la réglementation COBAC.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Mobile Money API"],
    category: "Fintech",
    status: "En production",
    liveUrl: "https://banki-five.vercel.app/",
    cover: "/gallery/app-web/Banki/Banki-web.jpeg",
    screens: ["/gallery/app-web/Banki/Banki-web.jpeg"],
  },
  {
    slug: "travelhub",
    title: "TravelHub — Réservation de Bus",
    tagline:
      "Projet de fin d'études : rechercher, comparer et réserver un trajet en ligne",
    description:
      "Plateforme moderne de réservation de billets de bus au Congo permettant aux voyageurs de rechercher, comparer et réserver leurs trajets en ligne auprès de différentes compagnies partenaires : recherche/filtrage par destination, date et nombre de voyageurs, réservation avec confirmation instantanée, avis clients, et interface responsive optimisée mobile.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Zustand",
    ],
    category: "Mobilité",
    status: "En production",
    year: "2025",
    liveUrl: "https://travelhub-platform.vercel.app/",
    repoUrl: "https://github.com/patrick26-Developer/travelhub-platform",
    cover: "/gallery/app-web/travel-bus/Travel-bus.png",
    screens: ["/gallery/app-web/travel-bus/Travel-bus.png"],
    achievements: [
      "Migration complète d'une application Django (Python) vers une architecture Next.js Full-Stack",
      "Architecture moderne : séparation frontend/backend avec API RESTful",
      "36 destinations disponibles, 9 compagnies partenaires, 6 trajets actifs",
      "Déploiement en production avec gestion des environnements",
    ],
  },
  {
    slug: "sis",
    title: "S.I.S. — Salon International de la Santé",
    tagline: "Plateforme institutionnelle internationale de santé durable",
    description:
      "Conception et développement d'une plateforme web institutionnelle internationale dédiée à la prévention des maladies non transmissibles (MNT) et à la promotion de la santé durable. La plateforme centralise les programmes de santé, les partenariats, les ressources institutionnelles et les différentes éditions du Salon International de la Santé.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "i18n"],
    category: "Santé",
    status: "En production",
    year: "2025",
    liveUrl: "https://sis-ashen.vercel.app/public",
    cover: "/gallery/app-web/SIS/Home.png",
    screens: ["/gallery/app-web/SIS/Home.png"],
    achievements: [
      "Site bilingue Français / Anglais (i18n)",
      "Conception complète de l'architecture frontend",
      "Structure évolutive pensée pour accueillir plusieurs éditions du salon",
      "Alignement avec les Objectifs de Développement Durable (ODD) de l'ONU",
    ],
  },
  {
    slug: "causerie",
    title: "Causerie Admin — Dashboard de Messagerie",
    tagline: "Back-office de l'écosystème de messagerie « Causerie »",
    description:
      "Dashboard d'administration pour l'écosystème de messagerie instantanée « Causerie » : gestion des utilisateurs, statistiques d'usage en temps réel, notifications webhook configurables et authentification par code email sans mot de passe. Pilote la version mobile de l'application (voir section Applications Mobiles).",
    tech: ["Next.js", "TypeScript", "Webhooks"],
    category: "SaaS / Admin",
    status: "En production",
    liveUrl: "https://dashboard-admin-app-causerie-nine.vercel.app/",
    repoUrl: "https://github.com/patrick26-Developer/app-chat-messagerie-admin",
    cover: "/gallery/app-web/causerie/dashboard-accueil-dark.png",
    screens: [
      "/gallery/app-web/causerie/dashboard-accueil-dark.png",
      "/gallery/app-web/causerie/auth-dark.png",
      "/gallery/app-web/causerie/Notif.png",
    ],
    achievements: [
      "Authentification passwordless par code email",
      "Statistiques d'usage et gestion des utilisateurs en temps réel",
      "Notifications webhook configurables côté admin",
    ],
  },
];

export const githubHighlights: GithubProject[] = [
  {
    name: "Mboka Marketplace",
    repo: "mboka-marketplace-cg",
    description:
      "Marketplace e-commerce congolais dédié à l'électronique et au gaming.",
    tech: ["TypeScript", "Next.js"],
  },
  {
    name: "Toyebana",
    repo: "Toyebana",
    description: "Messagerie instantanée temps réel en React Native.",
    tech: ["React Native", "TypeScript"],
  },
  {
    name: "Budget Tracker",
    repo: "budget-tracker-mobile",
    description: "Application mobile de suivi des dépenses personnelles.",
    tech: ["React Native", "TypeScript"],
  },
  {
    name: "Akieni RH Dashboard",
    repo: "Akieni-RH-Dashboard",
    description:
      "Dashboard Python de suivi de la performance et de l'engagement des apprenants.",
    tech: ["Python"],
  },
];

export const dataVizProjects: DataVizProject[] = [
  {
    name: "Bar Chart — PIB des États-Unis",
    repo: "bar-chart-visualization",
    description:
      "Visualisation D3.js du PIB américain sur plusieurs décennies.",
    tech: ["D3.js", "JavaScript"],
  },
  {
    name: "Heatmap — Températures mondiales",
    repo: "heatmap-project",
    description:
      "Carte de chaleur interactive des températures mondiales (1753-2015).",
    tech: ["D3.js", "JavaScript"],
  },
  {
    name: "Choropleth — Éducation aux USA",
    repo: "choropleth-map",
    description: "Carte choroplèthe américaine par comté avec D3.js.",
    tech: ["D3.js", "JavaScript"],
  },
  {
    name: "Treemap Diagram",
    repo: "treemap-diagram",
    description:
      "Diagramme en arborescence pour la visualisation de données hiérarchiques.",
    tech: ["D3.js", "JavaScript"],
  },
  {
    name: "Scatterplot — Performances cyclistes",
    repo: "Scatterplot-Graph",
    description:
      "Nuage de points interactif sur les performances de cyclistes professionnels.",
    tech: ["D3.js", "JavaScript"],
  },
];

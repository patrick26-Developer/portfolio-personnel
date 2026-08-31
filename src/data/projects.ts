import type { Localized } from "@/i18n/types";

export type ProjectStatus = "production" | "demo";
export type ProjectCategory = "fintech" | "mobility" | "health" | "saasAdmin";

export interface FeaturedProject {
  slug: string;
  title: Localized;
  tagline: Localized;
  description: Localized;
  tech: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  year?: string;
  liveUrl: string;
  repoUrl?: string;
  achievements?: Localized[];
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
  name: Localized;
  repo: string;
  description: Localized;
  tech: string[];
}

export interface DataVizProject {
  name: Localized;
  repo: string;
  description: Localized;
  tech: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "banki",
    title: {
      fr: "BANKI — Banque Digitale du Congo",
      en: "BANKI — Congo's Digital Bank",
    },
    tagline: {
      fr: "Première banque 100% digitale du Congo-Brazzaville",
      en: "The first 100% digital bank in Congo-Brazzaville",
    },
    description: {
      fr: "Application de banque digitale mobile-first : ouverture de compte en ~5 minutes, IBAN instantané, cartes Visa internationales, transferts en temps réel 24/7, support multi-devises (XAF, USD, EUR), intégration mobile money (Airtel Money, MTN MoMo, Orange Money) et sécurité biométrique, dans le respect de la réglementation COBAC.",
      en: "Mobile-first digital banking app: account opening in ~5 minutes, instant IBAN, international Visa cards, real-time 24/7 transfers, multi-currency support (XAF, USD, EUR), mobile money integration (Airtel Money, MTN MoMo, Orange Money), and biometric security, compliant with COBAC regulations.",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Mobile Money API"],
    category: "fintech",
    status: "production",
    liveUrl: "https://banki-five.vercel.app/",
    cover: "/gallery/app-web/Banki/Banki-web.jpeg",
    screens: ["/gallery/app-web/Banki/Banki-web.jpeg"],
  },
  {
    slug: "travelhub",
    title: {
      fr: "TravelHub — Réservation de Bus",
      en: "TravelHub — Bus Booking",
    },
    tagline: {
      fr: "Projet de fin d'études : rechercher, comparer et réserver un trajet en ligne",
      en: "Capstone project: search, compare, and book a trip online",
    },
    description: {
      fr: "Plateforme moderne de réservation de billets de bus au Congo permettant aux voyageurs de rechercher, comparer et réserver leurs trajets en ligne auprès de différentes compagnies partenaires : recherche/filtrage par destination, date et nombre de voyageurs, réservation avec confirmation instantanée, avis clients, et interface responsive optimisée mobile.",
      en: "A modern bus ticket booking platform in Congo, letting travelers search, compare, and book trips online with partner companies: search/filtering by destination, date and number of travelers, booking with instant confirmation, customer reviews, and a mobile-optimized responsive interface.",
    },
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Zustand",
    ],
    category: "mobility",
    status: "production",
    year: "2025",
    liveUrl: "https://travelhub-platform.vercel.app/",
    repoUrl: "https://github.com/patrick26-Developer/travelhub-platform",
    cover: "/gallery/app-web/travel-bus/Travel-bus.png",
    screens: ["/gallery/app-web/travel-bus/Travel-bus.png"],
    achievements: [
      {
        fr: "Migration complète d'une application Django (Python) vers une architecture Next.js Full-Stack",
        en: "Full migration of a Django (Python) application to a Next.js full-stack architecture",
      },
      {
        fr: "Architecture moderne : séparation frontend/backend avec API RESTful",
        en: "Modern architecture: frontend/backend separation with a RESTful API",
      },
      {
        fr: "36 destinations disponibles, 9 compagnies partenaires, 6 trajets actifs",
        en: "36 available destinations, 9 partner companies, 6 active routes",
      },
      {
        fr: "Déploiement en production avec gestion des environnements",
        en: "Production deployment with environment management",
      },
    ],
  },
  {
    slug: "sis",
    title: {
      fr: "S.I.S. — Salon International de la Santé",
      en: "S.I.S. — International Health Fair",
    },
    tagline: {
      fr: "Plateforme institutionnelle internationale de santé durable",
      en: "International institutional platform for sustainable health",
    },
    description: {
      fr: "Conception et développement d'une plateforme web institutionnelle internationale dédiée à la prévention des maladies non transmissibles (MNT) et à la promotion de la santé durable. La plateforme centralise les programmes de santé, les partenariats, les ressources institutionnelles et les différentes éditions du Salon International de la Santé.",
      en: "Design and development of an international institutional web platform dedicated to the prevention of non-communicable diseases (NCDs) and the promotion of sustainable health. The platform centralizes health programs, partnerships, institutional resources, and the different editions of the International Health Fair.",
    },
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "i18n"],
    category: "health",
    status: "production",
    year: "2025",
    liveUrl: "https://sis-ashen.vercel.app/public",
    cover: "/gallery/app-web/SIS/Home.png",
    screens: ["/gallery/app-web/SIS/Home.png"],
    achievements: [
      {
        fr: "Site bilingue Français / Anglais (i18n)",
        en: "Bilingual French / English site (i18n)",
      },
      {
        fr: "Conception complète de l'architecture frontend",
        en: "Full design of the frontend architecture",
      },
      {
        fr: "Structure évolutive pensée pour accueillir plusieurs éditions du salon",
        en: "Scalable structure designed to host multiple editions of the fair",
      },
      {
        fr: "Alignement avec les Objectifs de Développement Durable (ODD) de l'ONU",
        en: "Aligned with the United Nations Sustainable Development Goals (SDGs)",
      },
    ],
  },
  {
    slug: "causerie",
    title: {
      fr: "Causerie Admin — Dashboard de Messagerie",
      en: "Causerie Admin — Messaging Dashboard",
    },
    tagline: {
      fr: "Back-office de l'écosystème de messagerie « Causerie »",
      en: "Back-office for the « Causerie » messaging ecosystem",
    },
    description: {
      fr: "Dashboard d'administration pour l'écosystème de messagerie instantanée « Causerie » : gestion des utilisateurs, statistiques d'usage en temps réel, notifications webhook configurables et authentification par code email sans mot de passe. Pilote la version mobile de l'application (voir section Applications Mobiles).",
      en: "Admin dashboard for the « Causerie » instant messaging ecosystem: user management, real-time usage statistics, configurable webhook notifications, and passwordless email-code authentication. Drives the mobile version of the app (see the Mobile Applications section).",
    },
    tech: ["Next.js", "TypeScript", "Webhooks"],
    category: "saasAdmin",
    status: "production",
    liveUrl: "https://dashboard-admin-app-causerie-nine.vercel.app/",
    repoUrl: "https://github.com/patrick26-Developer/app-chat-messagerie-admin",
    cover: "/gallery/app-web/causerie/dashboard-accueil-dark.png",
    screens: [
      "/gallery/app-web/causerie/dashboard-accueil-dark.png",
      "/gallery/app-web/causerie/auth-dark.png",
      "/gallery/app-web/causerie/Notif.png",
    ],
    achievements: [
      {
        fr: "Authentification passwordless par code email",
        en: "Passwordless authentication via email code",
      },
      {
        fr: "Statistiques d'usage et gestion des utilisateurs en temps réel",
        en: "Real-time usage statistics and user management",
      },
      {
        fr: "Notifications webhook configurables côté admin",
        en: "Configurable webhook notifications on the admin side",
      },
    ],
  },
];

export const githubHighlights: GithubProject[] = [
  {
    name: { fr: "Mboka Marketplace", en: "Mboka Marketplace" },
    repo: "mboka-marketplace-cg",
    description: {
      fr: "Marketplace e-commerce congolais dédié à l'électronique et au gaming.",
      en: "Congolese e-commerce marketplace dedicated to electronics and gaming.",
    },
    tech: ["TypeScript", "Next.js"],
  },
  {
    name: { fr: "Toyebana", en: "Toyebana" },
    repo: "Toyebana",
    description: {
      fr: "Messagerie instantanée temps réel en React Native.",
      en: "Real-time instant messaging built with React Native.",
    },
    tech: ["React Native", "TypeScript"],
  },
  {
    name: { fr: "Budget Tracker", en: "Budget Tracker" },
    repo: "budget-tracker-mobile",
    description: {
      fr: "Application mobile de suivi des dépenses personnelles.",
      en: "Mobile app for tracking personal expenses.",
    },
    tech: ["React Native", "TypeScript"],
  },
  {
    name: { fr: "Akieni RH Dashboard", en: "Akieni HR Dashboard" },
    repo: "Akieni-RH-Dashboard",
    description: {
      fr: "Dashboard Python de suivi de la performance et de l'engagement des apprenants.",
      en: "Python dashboard for tracking learner performance and engagement.",
    },
    tech: ["Python"],
  },
];

export const dataVizProjects: DataVizProject[] = [
  {
    name: { fr: "Bar Chart — PIB des États-Unis", en: "Bar Chart — US GDP" },
    repo: "bar-chart-visualization",
    description: {
      fr: "Visualisation D3.js du PIB américain sur plusieurs décennies.",
      en: "D3.js visualization of US GDP across several decades.",
    },
    tech: ["D3.js", "JavaScript"],
  },
  {
    name: {
      fr: "Heatmap — Températures mondiales",
      en: "Heatmap — Global temperatures",
    },
    repo: "heatmap-project",
    description: {
      fr: "Carte de chaleur interactive des températures mondiales (1753-2015).",
      en: "Interactive heat map of global temperatures (1753-2015).",
    },
    tech: ["D3.js", "JavaScript"],
  },
  {
    name: {
      fr: "Choropleth — Éducation aux USA",
      en: "Choropleth — US Education",
    },
    repo: "choropleth-map",
    description: {
      fr: "Carte choroplèthe américaine par comté avec D3.js.",
      en: "US choropleth map by county built with D3.js.",
    },
    tech: ["D3.js", "JavaScript"],
  },
  {
    name: { fr: "Treemap Diagram", en: "Treemap Diagram" },
    repo: "treemap-diagram",
    description: {
      fr: "Diagramme en arborescence pour la visualisation de données hiérarchiques.",
      en: "Tree diagram for visualizing hierarchical data.",
    },
    tech: ["D3.js", "JavaScript"],
  },
  {
    name: {
      fr: "Scatterplot — Performances cyclistes",
      en: "Scatterplot — Cycling performance",
    },
    repo: "Scatterplot-Graph",
    description: {
      fr: "Nuage de points interactif sur les performances de cyclistes professionnels.",
      en: "Interactive scatter plot on professional cyclists' performance.",
    },
    tech: ["D3.js", "JavaScript"],
  },
];

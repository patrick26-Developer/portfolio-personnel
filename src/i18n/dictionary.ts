import { useLanguage } from "./language-provider";
import type { Lang } from "./types";

const dictionary = {
  fr: {
    nav: {
      accueil: "Accueil",
      projets: "Projets",
      mobile: "Mobile",
      desktop: "Desktop",
      "data-science": "Data Science",
      competences: "Compétences",
      certifications: "Certifications",
      contact: "Contact",
      downloadCv: "Télécharger le CV",
      openMenu: "Ouvrir le menu",
    },
    hero: {
      badge: "Disponible pour de nouvelles opportunités",
      ctaContact: "Discutons de votre projet",
      downloadCv: "Télécharger le CV",
    },
    projects: {
      eyebrow: "Projets",
      title: "Applications en production",
      description:
        "Des produits réels, déployés et utilisés — pas des maquettes.",
      viewSite: "Voir le site",
      details: "Détails",
      code: "Code",
      previewWeb: "Aperçu web",
      previewMobile: "Aperçu application mobile",
    },
    projectStatus: {
      production: "En production",
      demo: "Démo",
    },
    categories: {
      fintech: "Fintech",
      mobility: "Mobilité",
      health: "Santé",
      saasAdmin: "SaaS / Admin",
    },
    mobile: {
      eyebrow: "Mobile",
      title: "Applications Mobiles",
      description:
        "Applications React Native en cours de développement — pas encore publiées sur le Play Store ou l'App Store.",
      details: "Détails",
      code: "Code",
      viewSourceCode: "Voir le code source",
      notOnStoresSuffix: "pas encore sur les stores",
    },
    mobileStatus: {
      development: "En développement",
      published: "Publiée",
    },
    desktop: {
      eyebrow: "Desktop",
      title: "Applications Desktop",
      description:
        "Logiciels bureautiques développés pour Windows / macOS / Linux.",
      emptyTitle: "Bientôt disponible",
      emptyDescription:
        "Les captures d'écran des projets desktop arrivent prochainement — cette section sera mise à jour dès qu'elles seront prêtes.",
      details: "Détails",
      code: "Code",
      viewSourceCode: "Voir le code source",
    },
    desktopStatus: {
      development: "En développement",
      published: "Publiée",
    },
    github: {
      eyebrow: "GitHub",
      title: "Autres projets notables",
      description: "Une sélection de dépôts personnels, web comme mobile.",
      viewAll: "Voir tout sur GitHub",
    },
    dataScience: {
      eyebrow: "Data Science",
      title: "Analyse & visualisation de données",
      description:
        "Projets Python / D3.js réalisés dans le cadre de mes certifications freeCodeCamp.",
    },
    skillCategories: {
      frontend: "Frontend",
      backend: "Backend",
      languages: "Langages",
      databases: "Bases de données",
      dataScience: "Data Science",
      aiTools: "Gestion & Outils IA",
      tools: "Outils",
    },
    skills: {
      eyebrow: "Compétences",
      title: "Stack technique",
      description: "Un socle full-stack complété par la data science.",
      qualities: "Qualités",
    },
    certifications: {
      eyebrow: "Certifications",
      title: "Formations validées",
      description: "Certifications reconnues et parcours académique.",
      verify: "Vérifier",
      certified: "Certifié",
      academicEducation: "Formation académique",
      verifyDiploma: "Vérifier le diplôme",
    },
    contact: {
      eyebrow: "Contact",
      title: "Travaillons ensemble",
      description:
        "Disponible pour des opportunités en développement full-stack et data science.",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      copy: "Copier",
      copied: "Copié",
      readyToCollaborate: "Prêt à collaborer ?",
      readyDescription:
        "Échangeons sur votre projet ou votre besoin en recrutement.",
      emailMe: "M'écrire un email",
    },
    footer: {
      rightsReserved: "Tous droits réservés.",
    },
    common: {
      capturePending: "Capture à venir",
      toggleTheme: "Changer de thème",
      toggleLanguage: "Changer de langue",
    },
  },
  en: {
    nav: {
      accueil: "Home",
      projets: "Projects",
      mobile: "Mobile",
      desktop: "Desktop",
      "data-science": "Data Science",
      competences: "Skills",
      certifications: "Certifications",
      contact: "Contact",
      downloadCv: "Download CV",
      openMenu: "Open menu",
    },
    hero: {
      badge: "Available for new opportunities",
      ctaContact: "Let's talk about your project",
      downloadCv: "Download CV",
    },
    projects: {
      eyebrow: "Projects",
      title: "Applications in production",
      description: "Real products, deployed and used — not mockups.",
      viewSite: "View site",
      details: "Details",
      code: "Code",
      previewWeb: "Web preview",
      previewMobile: "Mobile app preview",
    },
    projectStatus: {
      production: "In production",
      demo: "Demo",
    },
    categories: {
      fintech: "Fintech",
      mobility: "Mobility",
      health: "Health",
      saasAdmin: "SaaS / Admin",
    },
    mobile: {
      eyebrow: "Mobile",
      title: "Mobile Applications",
      description:
        "React Native applications currently in development — not yet published on the Play Store or App Store.",
      details: "Details",
      code: "Code",
      viewSourceCode: "View source code",
      notOnStoresSuffix: "not yet on the app stores",
    },
    mobileStatus: {
      development: "In development",
      published: "Published",
    },
    desktop: {
      eyebrow: "Desktop",
      title: "Desktop Applications",
      description: "Desktop software built for Windows / macOS / Linux.",
      emptyTitle: "Coming soon",
      emptyDescription:
        "Screenshots of the desktop projects are on their way — this section will be updated as soon as they're ready.",
      details: "Details",
      code: "Code",
      viewSourceCode: "View source code",
    },
    desktopStatus: {
      development: "In development",
      published: "Published",
    },
    github: {
      eyebrow: "GitHub",
      title: "Other notable projects",
      description: "A selection of personal repos, both web and mobile.",
      viewAll: "View all on GitHub",
    },
    dataScience: {
      eyebrow: "Data Science",
      title: "Data analysis & visualization",
      description:
        "Python / D3.js projects built as part of my freeCodeCamp certifications.",
    },
    skillCategories: {
      frontend: "Frontend",
      backend: "Backend",
      languages: "Languages",
      databases: "Databases",
      dataScience: "Data Science",
      aiTools: "Management & AI Tools",
      tools: "Tools",
    },
    skills: {
      eyebrow: "Skills",
      title: "Tech stack",
      description: "A full-stack foundation complemented by data science.",
      qualities: "Qualities",
    },
    certifications: {
      eyebrow: "Certifications",
      title: "Validated training",
      description: "Recognized certifications and academic background.",
      verify: "Verify",
      certified: "Certified",
      academicEducation: "Academic background",
      verifyDiploma: "Verify diploma",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      description:
        "Available for opportunities in full-stack development and data science.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      copy: "Copy",
      copied: "Copied",
      readyToCollaborate: "Ready to collaborate?",
      readyDescription: "Let's talk about your project or hiring needs.",
      emailMe: "Email me",
    },
    footer: {
      rightsReserved: "All rights reserved.",
    },
    common: {
      capturePending: "Screenshot coming soon",
      toggleTheme: "Toggle theme",
      toggleLanguage: "Switch language",
    },
  },
} as const;

// Élargit les types littéraux ("Accueil") en `string` : fr et en partagent la même
// forme structurelle mais pas les mêmes valeurs, donc `typeof dictionary["fr"]` seul
// ne pouvait pas accueillir `dictionary["en"]`.
type Widen<T> = T extends string ? string : { [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<(typeof dictionary)["fr"]>;

export function getDictionary(lang: Lang): Dictionary {
  return dictionary[lang];
}

/** Hook pratique : renvoie le dictionnaire de la langue active. */
export function useT(): Dictionary {
  const { lang } = useLanguage();
  return dictionary[lang];
}

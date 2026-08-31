import type { Localized } from "@/i18n/types";

interface EducationEntry {
  degree: Localized;
  school: string;
  period: string;
  verifyUrl?: string;
}

const education: EducationEntry[] = [
  {
    degree: {
      fr: "Licence en Développement Informatique",
      en: "Bachelor's Degree in Computer Science Development",
    },
    school: "Institut International Polytechnique Commerce et Juridique",
    period: "2023 – 2024",
    verifyUrl:
      "https://2i-security.com/verification/verify/e4f25932-6b41-42b4-8e0e-ecb1e87d605b",
  },
  {
    degree: {
      fr: "Baccalauréat Scientifique (série C)",
      en: "Scientific Baccalaureate (Series C)",
    },
    school: "École privée ALCAR, Pointe-Noire",
    period: "2019 – 2020",
  },
];

/** Identifiants stables des sections de nav — le libellé vient du dictionnaire i18n (t.nav[id]). */
const navItems = [
  { id: "accueil" },
  { id: "projets" },
  { id: "mobile" },
  { id: "desktop" },
  { id: "data-science" },
  { id: "competences" },
  { id: "certifications" },
  { id: "contact" },
] as const;

export const site = {
  name: "Patrick de Grâce Makosso Bayonne",
  shortName: "Patrick de Grâce",
  role: {
    fr: "Développeur Full-Stack & Data Scientist",
    en: "Full-Stack Developer & Data Scientist",
  } satisfies Localized,
  tagline: {
    fr: "Je conçois et livre des applications web et mobiles en production, et je transforme des données brutes en analyses exploitables.",
    en: "I design and ship production web and mobile applications, and turn raw data into actionable insights.",
  } satisfies Localized,
  bio: {
    fr: "Jeune professionnel congolais titulaire d'une Licence en Développement Informatique, avec une expertise technique en développement web et mobile, en gestion de bases de données et en analyse de données. Rigoureux, organisé et orienté résultats.",
    en: "Young Congolese professional holding a Bachelor's Degree in Computer Science Development, with technical expertise in web and mobile development, database management, and data analysis. Rigorous, organized, and results-driven.",
  } satisfies Localized,
  location: "Brazzaville, Congo-Brazzaville",
  email: "mb.patrickdegrace@gmail.com",
  emailSecondary: "makossobayonnepatrickdegrace@outlook.com",
  phone: "+242 05 052 91 68",
  phoneHref: "tel:+242050529168",
  phoneSecondary: "+242 06 897 04 25",
  phoneSecondaryHref: "tel:+242068970425",
  cvUrl: "/cv-patrick-de-grace.pdf",
  cvFilename: "CV_Patrick_de_Grace_FullStack_DataScientist.pdf",
  avatar: "/photo-du-portefolio.png",
  logo: "/logo-mark.png",
  socials: {
    github: "https://github.com/patrick26-Developer",
    linkedin:
      "https://www.linkedin.com/in/patrick-de-gr%C3%A2ce-makosso-bayonne-351a1232a/",
  },
  education,
  stats: [
    {
      label: {
        fr: "Applications en production",
        en: "Applications in production",
      } satisfies Localized,
      value: "4",
    },
    {
      label: {
        fr: "Projets Data Science",
        en: "Data Science projects",
      } satisfies Localized,
      value: "5",
    },
    {
      label: {
        fr: "Certifications Python",
        en: "Python certifications",
      } satisfies Localized,
      value: "3",
    },
    {
      label: {
        fr: "Licence Développement Informatique",
        en: "Computer Science degree",
      } satisfies Localized,
      value: "2024",
    },
  ],
  navItems,
} as const;

import type { Localized } from "@/i18n/types";

export type SkillCategoryKey =
  | "frontend"
  | "backend"
  | "languages"
  | "databases"
  | "dataScience"
  | "aiTools"
  | "tools";

export interface SkillGroup {
  category: SkillCategoryKey;
  /** Noms de technos (identiques FR/EN) ou libellés descriptifs à traduire. */
  items: (string | Localized)[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "frontend",
    items: ["Next.js", "React", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "backend",
    items: ["NestJS", "Django", "Node.js", "REST APIs"],
  },
  {
    category: "languages",
    items: ["JavaScript / TypeScript", "Python", "Java", "C / C++", "C#"],
  },
  { category: "databases", items: ["PostgreSQL", "MySQL", "Oracle"] },
  {
    category: "dataScience",
    items: [
      { fr: "Analyse de données", en: "Data analysis" },
      { fr: "Visualisation", en: "Visualization" },
      { fr: "Modélisation prédictive", en: "Predictive modeling" },
      "Pandas",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "aiTools",
    items: [
      "Claude",
      "ChatGPT",
      "Gemini",
      {
        fr: "Gestion de projet & reporting",
        en: "Project management & reporting",
      },
      "Trello",
      "Word / Excel / PowerPoint / Canva",
    ],
  },
  {
    category: "tools",
    items: ["Git / GitHub / GitLab", "Docker", "Vercel", "Jupyter"],
  },
];

/** Qualités professionnelles issues du CV — soft skills. */
export const softSkills: Localized[] = [
  { fr: "Rigueur", en: "Rigor" },
  { fr: "Esprit d'analyse", en: "Analytical mindset" },
  { fr: "Sens du service", en: "Customer focus" },
  { fr: "Communication", en: "Communication" },
  { fr: "Travail en équipe", en: "Teamwork" },
  { fr: "Gestion des priorités", en: "Priority management" },
  { fr: "Résolution de problèmes", en: "Problem solving" },
  { fr: "Veille technologique", en: "Technology watch" },
];

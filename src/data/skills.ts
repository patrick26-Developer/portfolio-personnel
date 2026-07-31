export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "React Native", "TypeScript", "Tailwind CSS"],
  },
  { category: "Backend", items: ["NestJS", "Django", "Node.js", "REST APIs"] },
  {
    category: "Langages",
    items: ["JavaScript / TypeScript", "Python", "Java", "C / C++", "C#"],
  },
  { category: "Bases de données", items: ["PostgreSQL", "MySQL", "Oracle"] },
  {
    category: "Data Science",
    items: [
      "Analyse de données",
      "Visualisation",
      "Modélisation prédictive",
      "Pandas",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "Gestion & Outils IA",
    items: [
      "Claude",
      "ChatGPT",
      "Gemini",
      "Gestion de projet & reporting",
      "Trello",
      "Word / Excel / PowerPoint / Canva",
    ],
  },
  {
    category: "Outils",
    items: ["Git / GitHub / GitLab", "Docker", "Vercel", "Jupyter"],
  },
];

/** Qualités professionnelles issues du CV — soft skills. */
export const softSkills: string[] = [
  "Rigueur",
  "Esprit d'analyse",
  "Sens du service",
  "Communication",
  "Travail en équipe",
  "Gestion des priorités",
  "Résolution de problèmes",
  "Veille technologique",
];

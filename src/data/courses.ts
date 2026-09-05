import type { Localized } from "@/i18n/types";

export type CourseStatus = "available" | "upcoming";

export interface Course {
  slug: string;
  /** Langage principal, ex: "Python", "TypeScript". */
  language: string;
  /** Framework mis en avant, ex: "FastAPI". */
  framework?: string;
  title: Localized;
  tagline: Localized;
  description: Localized;
  tech: string[];
  highlights?: Localized[];
  status: CourseStatus;
  modulesCount?: number;
  cover?: string;
  siteUrl?: string;
  repoUrl?: string;
}

export const courses: Course[] = [
  {
    slug: "fastapi",
    language: "Python",
    framework: "FastAPI",
    title: {
      fr: "Maîtriser FastAPI — Formation Backend Python",
      en: "Mastering FastAPI — Python Backend Course",
    },
    tagline: {
      fr: "13 modules progressifs, du HTTP basique à la production (Docker, CI/CD)",
      en: "13 progressive modules, from basic HTTP to production (Docker, CI/CD)",
    },
    description: {
      fr: "Cursus gratuit et complet pour concevoir, développer, tester et déployer des API FastAPI de niveau professionnel. Chaque module combine théorie, exercices avec critères d'acceptation et solution de référence commentée. Un projet fil rouge, Taskman (gestionnaire de tâches), évolue module après module — de simples routes en mémoire jusqu'à une architecture en couches avec PostgreSQL, authentification OAuth2/JWT, tests automatisés, Docker et CI/CD.",
      en: "A free, complete curriculum for designing, building, testing, and deploying production-grade FastAPI APIs. Each module combines core theory, exercises with acceptance criteria, and a fully commented reference solution. A thread-project, Taskman (a task manager), evolves module after module — from simple in-memory routes to a layered architecture with PostgreSQL, OAuth2/JWT authentication, automated tests, Docker, and CI/CD.",
    },
    tech: [
      "Python",
      "FastAPI",
      "Pydantic v2",
      "PostgreSQL",
      "SQLAlchemy 2.0",
      "Docker",
      "GitHub Actions",
      "pytest",
    ],
    highlights: [
      {
        fr: "13 modules : théorie + exercices + solutions commentées",
        en: "13 modules: theory + exercises + fully commented solutions",
      },
      {
        fr: "Projet fil rouge « Taskman » : gestionnaire de tâches évolutif",
        en: "Thread project « Taskman »: a task manager that keeps evolving",
      },
      {
        fr: "4 mini-projets checkpoints + un projet e-commerce complet (Shopfast)",
        en: "4 checkpoint mini-projects + a full e-commerce reference project (Shopfast)",
      },
      {
        fr: "Culture qualité : Ruff, mypy strict, pytest, CI/CD GitHub Actions, Docker multi-stage",
        en: "Quality-first culture: Ruff, strict mypy, pytest, GitHub Actions CI/CD, multi-stage Docker",
      },
    ],
    status: "available",
    modulesCount: 13,
    cover: "/gallery/Formations/fastAPI/fastAPI.png",
    siteUrl: "https://fastapi-formation-vitrine.onrender.com/",
    repoUrl: "https://github.com/patrick26-Developer/Backend-Python",
  },
  {
    slug: "typescript",
    language: "TypeScript",
    title: {
      fr: "Formation TypeScript",
      en: "TypeScript Course",
    },
    tagline: {
      fr: "Prochaine formation gratuite — en préparation",
      en: "Next free course — in preparation",
    },
    description: {
      fr: "Après FastAPI côté Python, la prochaine formation portera sur TypeScript : typage statique, bonnes pratiques et intégration avec les frameworks modernes du frontend et du backend. Le plan de cours et le site de la formation seront publiés ici dès qu'ils seront prêts.",
      en: "After FastAPI on the Python side, the next course will cover TypeScript: static typing, best practices, and integration with modern frontend and backend frameworks. The syllabus and course site will be published here as soon as they're ready.",
    },
    tech: ["TypeScript"],
    status: "upcoming",
  },
];

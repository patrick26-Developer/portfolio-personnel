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
  /** Volume du cursus, ex: "13 modules", "15 niveaux". */
  curriculum?: Localized;
  cover?: string;
  /** Site vitrine de la formation, si publié. */
  siteUrl?: string;
  /** Dépôt GitHub du contenu de la formation. */
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
    curriculum: { fr: "13 modules", en: "13 modules" },
    cover: "/gallery/Formations/fastAPI/fastAPI.png",
    siteUrl: "https://fastapi-formation-vitrine.onrender.com/",
    repoUrl: "https://github.com/patrick26-Developer/Backend-Python",
  },
  {
    slug: "php-laravel",
    language: "PHP",
    framework: "Laravel",
    title: {
      fr: "PHP → Laravel — La formation complète",
      en: "PHP → Laravel — The Complete Course",
    },
    tagline: {
      fr: "15 niveaux, du PHP fondamental à Laravel expert : API REST, Livewire, Docker, CI/CD",
      en: "15 levels, from core PHP to expert Laravel: REST APIs, Livewire, Docker, CI/CD",
    },
    description: {
      fr: "Formation gratuite et progressive pour apprendre PHP depuis les bases absolues jusqu'à la maîtrise experte de Laravel, le framework PHP le plus utilisé au monde. 15 niveaux numérotés à suivre dans l'ordre ; chaque module contient le cours (théorie + code commenté), des exercices et leurs corrigés commentés. Des mini-projets et grands projets réels (blog, petites annonces, e-commerce, SaaS) sont rattachés aux niveaux qui les rendent possibles. Couvre la POO, la sécurité, les bases de données, les tests (PHPUnit puis Pest), l'architecture et le DevOps (Docker, CI/CD).",
      en: "A free, progressive course to learn PHP from the absolute basics up to expert mastery of Laravel, the world's most used PHP framework. 15 numbered levels to follow in order; each module contains the lesson (theory + commented code), exercises, and their commented solutions. Real mini-projects and larger projects (blog, classifieds, e-commerce, SaaS) are attached to the levels that make them possible. Covers OOP, security, databases, testing (PHPUnit then Pest), architecture, and DevOps (Docker, CI/CD).",
    },
    tech: [
      "PHP 8.3",
      "Laravel",
      "Livewire",
      "Blade",
      "MySQL",
      "Pest",
      "Docker",
      "GitHub Actions",
    ],
    highlights: [
      {
        fr: "15 niveaux progressifs (00 → 14) : cours + exercices + corrigés commentés",
        en: "15 progressive levels (00 → 14): lessons + exercises + commented solutions",
      },
      {
        fr: "100 % PHP fullstack : Blade + Livewire, sans framework JS lourd",
        en: "100% PHP fullstack: Blade + Livewire, no heavy JS framework",
      },
      {
        fr: "Projets réels : blog, petites annonces, e-commerce, SaaS",
        en: "Real projects: blog, classifieds, e-commerce, SaaS",
      },
      {
        fr: "Sécurité, tests (PHPUnit / Pest), architecture et DevOps (Docker, CI/CD)",
        en: "Security, testing (PHPUnit / Pest), architecture, and DevOps (Docker, CI/CD)",
      },
    ],
    status: "available",
    curriculum: { fr: "15 niveaux", en: "15 levels" },
    repoUrl: "https://github.com/patrick26-Developer/formation-php-laravel",
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

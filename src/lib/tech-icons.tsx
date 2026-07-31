import {
  SiClaude,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiGithub,
  SiGooglegemini,
  SiJupyter,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
} from "@icons-pack/react-simple-icons";
import type { ComponentType } from "react";

type TechIcon = ComponentType<{ className?: string; color?: string }>;

/**
 * Vraies icônes de marque (simple-icons) par libellé de compétence, en monochrome
 * (`currentColor`) pour rester cohérent avec la palette sobre du site plutôt que
 * de réintroduire une mosaïque de couleurs de marque disparates.
 */
export const techIcons: Record<string, TechIcon> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  "React Native": SiReact,
  TypeScript: SiTypescript,
  "JavaScript / TypeScript": SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  NestJS: SiNestjs,
  Django: SiDjango,
  "Node.js": SiNodedotjs,
  Python: SiPython,
  "C / C++": SiCplusplus,
  "C#": SiSharp,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Pandas: SiPandas,
  "Git / GitHub / GitLab": SiGithub,
  Docker: SiDocker,
  Vercel: SiVercel,
  Jupyter: SiJupyter,
  Claude: SiClaude,
  Gemini: SiGooglegemini,
  Trello: SiTrello,
};

export function TechIcon({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const Icon = techIcons[label];
  if (!Icon) return null;
  return <Icon className={className} color="currentColor" />;
}

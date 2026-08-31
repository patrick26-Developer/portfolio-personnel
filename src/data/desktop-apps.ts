import type { Localized } from "@/i18n/types";

export type DesktopAppStatus = "development" | "published";

export interface DesktopApp {
  slug: string;
  name: string;
  tagline: Localized;
  description: Localized;
  tech: string[];
  /** Plateformes ciblées, ex: ["Windows", "macOS"]. */
  platforms?: string[];
  status: DesktopAppStatus;
  icon?: string;
  screens?: string[];
  repoUrl?: string;
}

/**
 * En attente des projets desktop réels (captures + infos fournies par l'utilisateur).
 * Zéro contenu inventé (cf. PROJECT.md §2) : tant que ce tableau est vide, la section
 * affiche un état "bientôt disponible" plutôt qu'un projet fictif.
 */
export const desktopApps: DesktopApp[] = [];

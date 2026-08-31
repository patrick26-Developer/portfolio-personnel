export type Lang = "fr" | "en";

/** Paire de traductions pour un contenu donné. */
export interface Localized {
  fr: string;
  en: string;
}

/** Résout une valeur localisée pour la langue active. */
export function pickL(lang: Lang, value: Localized): string {
  return value[lang];
}

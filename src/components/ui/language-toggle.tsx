"use client";

import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/dictionary";
import { useLanguage } from "@/i18n/language-provider";

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  const t = useT();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={t.common.toggleLanguage}
      onClick={toggleLang}
      className="text-xs font-semibold"
    >
      {lang === "fr" ? "EN" : "FR"}
    </Button>
  );
}

"use client";

import Image from "next/image";

import { useT } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";

interface WindowFrameProps {
  title: string;
  cover?: string;
  alt: string;
  initials: string;
  className?: string;
}

/**
 * Mockup de fenêtre OS (barre de titre, pas de barre d'adresse) pour les captures
 * d'applications desktop. Affiche un placeholder de marque tant qu'aucune capture
 * n'est fournie — jamais d'image cassée.
 */
export function WindowFrame({
  title,
  cover,
  alt,
  initials,
  className,
}: WindowFrameProps) {
  const t = useT();

  return (
    <div
      className={cn(
        "overflow-hidden rounded-t-xl bg-card ring-1 ring-foreground/10",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border/60 bg-muted/40 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
        </div>
        <span className="min-w-0 flex-1 truncate text-center text-xs font-medium text-muted-foreground">
          {title}
        </span>
      </div>

      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {cover ? (
          <Image
            src={cover}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 88vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-semibold text-primary">
              {initials}
            </span>
            <span className="text-xs text-muted-foreground">
              {t.common.capturePending}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

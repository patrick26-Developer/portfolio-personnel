"use client";

import Image from "next/image";

import { useT } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  cover?: string;
  alt: string;
  initials: string;
  className?: string;
}

/**
 * Mockup de téléphone (encoche + châssis) pour les captures d'application mobile.
 * Affiche un placeholder de marque tant qu'aucune capture n'est fournie.
 */
export function PhoneFrame({
  cover,
  alt,
  initials,
  className,
}: PhoneFrameProps) {
  const t = useT();

  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19] w-full max-w-[220px] overflow-hidden rounded-[2rem] bg-card p-2 ring-1 ring-foreground/10",
        className,
      )}
    >
      <div className="absolute top-2 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-background" />
      <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-muted">
        {cover ? (
          <Image
            src={cover}
            alt={alt}
            fill
            sizes="220px"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-sm font-semibold text-primary">
              {initials}
            </span>
            <span className="px-4 text-center text-[11px] text-muted-foreground">
              {t.common.capturePending}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

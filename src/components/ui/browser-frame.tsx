import { Globe } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  url: string;
  cover?: string;
  alt: string;
  initials: string;
  className?: string;
}

/**
 * Mockup de fenêtre navigateur. Affiche la vraie capture d'écran si `cover` est fournie,
 * sinon un placeholder de marque (jamais d'image cassée) en attendant que la capture soit ajoutée.
 */
export function BrowserFrame({
  url,
  cover,
  alt,
  initials,
  className,
}: BrowserFrameProps) {
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
        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs text-muted-foreground ring-1 ring-border">
          <Globe className="size-3 shrink-0" />
          <span className="truncate">{url.replace(/^https?:\/\//, "")}</span>
        </div>
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
              Capture à venir
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

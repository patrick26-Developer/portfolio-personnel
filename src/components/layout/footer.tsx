import { Github, Linkedin } from "lucide-react";
import Image from "next/image";

import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="relative size-9 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/40">
            <Image
              src={site.avatar}
              alt={site.shortName}
              fill
              className="object-cover"
              sizes="36px"
            />
          </span>
          <div>
            <div className="text-sm font-semibold">{site.name}</div>
            <div className="text-xs text-muted-foreground">{site.role}</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-10 items-center justify-center rounded-full text-muted-foreground ring-1 ring-border transition-colors hover:text-primary"
          >
            <Github className="size-4" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-10 items-center justify-center rounded-full text-muted-foreground ring-1 ring-border transition-colors hover:text-primary"
          >
            <Linkedin className="size-4" />
          </a>
        </div>

        <p className="text-center text-xs text-muted-foreground md:text-right">
          © {new Date().getFullYear()} {site.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

"use client";

import {
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/data/site";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Travaillons ensemble"
          description="Disponible pour des opportunités en développement full-stack et data science."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-2xl p-6 text-center ring-1 ring-border">
            <Mail className="size-6 text-primary" />
            <div className="text-sm font-medium">Email</div>
            <div className="text-xs break-all text-muted-foreground">
              {site.email}
            </div>
            <div className="text-xs break-all text-muted-foreground/70">
              {site.emailSecondary}
            </div>
            <Button variant="ghost" size="sm" onClick={copyEmail}>
              {copied ? (
                <Check className="size-3.5" />
              ) : (
                <Copy className="size-3.5" />
              )}
              {copied ? "Copié" : "Copier"}
            </Button>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-2xl p-6 text-center ring-1 ring-border">
            <Phone className="size-6 text-primary" />
            <div className="text-sm font-medium">Téléphone</div>
            <a
              href={site.phoneHref}
              className="text-xs text-muted-foreground hover:text-primary"
            >
              {site.phone}
            </a>
            <a
              href={site.phoneSecondaryHref}
              className="text-xs text-muted-foreground/70 hover:text-primary"
            >
              {site.phoneSecondary}
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-2xl p-6 text-center ring-1 ring-border">
            <MapPin className="size-6 text-primary" />
            <div className="text-sm font-medium">Localisation</div>
            <div className="text-xs text-muted-foreground">{site.location}</div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-primary/5 p-8 text-center">
          <h3 className="text-xl font-semibold sm:text-2xl">
            Prêt à collaborer ?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
            Échangeons sur votre projet ou votre besoin en recrutement.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href={`mailto:${site.email}`} />}
            >
              <Mail className="size-4" />
              M'écrire un email
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <Github className="size-4" />
              GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <Linkedin className="size-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

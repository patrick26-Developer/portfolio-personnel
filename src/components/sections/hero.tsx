"use client";

import { ArrowRight, Download, Github } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-primary)_0%,transparent_100%)] opacity-[0.07]"
      />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Disponible pour de nouvelles opportunités
            </span>

            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
              {site.role.split(" & ")[0]} &amp;{" "}
              <span className="text-primary">{site.role.split(" & ")[1]}</span>
            </h1>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-0">
              {site.bio}
            </p>

            <div className="flex flex-col flex-wrap justify-center gap-3 pt-2 sm:flex-row md:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group"
              >
                Discutons de votre projet
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href={site.cvUrl} download={site.cvFilename} />}
              >
                <Download className="size-4" />
                Télécharger le CV
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative shrink-0"
          >
            <div className="relative aspect-[2/3] w-64 overflow-hidden rounded-3xl ring-1 ring-border sm:w-80 md:w-96">
              <Image
                src={site.avatar}
                alt={site.name}
                fill
                priority
                sizes="(min-width: 768px) 384px, 256px"
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:gap-4 lg:grid-cols-4"
        >
          {site.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl px-4 py-5 text-center ring-1 ring-border sm:text-left"
            >
              <div className="text-2xl font-semibold sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

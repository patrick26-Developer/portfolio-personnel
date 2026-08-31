"use client";

import { PeekCarousel } from "@/components/ui/peek-carousel";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/data/projects";
import { useT } from "@/i18n/dictionary";

export function FeaturedProjects() {
  const t = useT();

  return (
    <section id="projets" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />
      </div>

      <div className="mx-auto max-w-6xl lg:px-12">
        <PeekCarousel
          items={featuredProjects}
          keyOf={(p) => p.slug}
          itemClassName="basis-[88%] sm:basis-1/2 xl:basis-1/3"
          renderItem={(project) => <ProjectCard project={project} />}
        />
      </div>
    </section>
  );
}

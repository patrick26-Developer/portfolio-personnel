import {
  BarChart3,
  Grid3x3,
  Map as MapIcon,
  ScatterChart,
  Thermometer,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { dataVizProjects } from "@/data/projects";
import { site } from "@/data/site";

const icons = [BarChart3, Thermometer, MapIcon, Grid3x3, ScatterChart];

export function DataScience() {
  return (
    <section id="data-science" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Data Science"
          title="Analyse & visualisation de données"
          description="Projets Python / D3.js réalisés dans le cadre de mes certifications freeCodeCamp."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dataVizProjects.map((project, i) => {
            const Icon = icons[i % icons.length];
            return (
              <a
                key={project.repo}
                href={`${site.socials.github}/${project.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full transition-shadow group-hover:shadow-lg group-hover:shadow-foreground/5">
                  <CardHeader className="gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <CardTitle className="text-base">{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="text-muted-foreground"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

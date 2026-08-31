"use client";

import {
  Code2,
  Database,
  Globe,
  Layers,
  LineChart,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { SkillCategoryKey } from "@/data/skills";
import { skillGroups, softSkills } from "@/data/skills";
import { useT } from "@/i18n/dictionary";
import { useL } from "@/i18n/language-provider";
import type { Localized } from "@/i18n/types";
import { TechIcon } from "@/lib/tech-icons";

const icons: Record<SkillCategoryKey, React.ElementType> = {
  frontend: Globe,
  backend: Layers,
  languages: Code2,
  databases: Database,
  dataScience: LineChart,
  aiTools: Sparkles,
  tools: Wrench,
};

function isLocalized(item: string | Localized): item is Localized {
  return typeof item === "object";
}

export function Skills() {
  const t = useT();
  const l = useL();

  return (
    <section
      id="competences"
      className="bg-muted/30 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = icons[group.category] ?? Code2;
            return (
              <Card key={group.category}>
                <CardHeader className="flex-row items-center gap-3 space-y-0">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4.5" />
                  </span>
                  <CardTitle className="text-base">
                    {t.skillCategories[group.category]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => {
                      const label = isLocalized(item) ? l(item) : item;
                      const key = isLocalized(item) ? item.fr : item;
                      return (
                        <Badge key={key} variant="secondary">
                          <TechIcon label={label} className="size-3.5" />
                          {label}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl p-6 ring-1 ring-border">
          <h3 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            {t.skills.qualities}
          </h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((quality) => (
              <Badge key={quality.fr} variant="outline">
                {l(quality)}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

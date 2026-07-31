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
import { skillGroups, softSkills } from "@/data/skills";
import { TechIcon } from "@/lib/tech-icons";

const icons: Record<string, React.ElementType> = {
  Frontend: Globe,
  Backend: Layers,
  Langages: Code2,
  "Bases de données": Database,
  "Data Science": LineChart,
  "Gestion & Outils IA": Sparkles,
  Outils: Wrench,
};

export function Skills() {
  return (
    <section
      id="competences"
      className="bg-muted/30 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Compétences"
          title="Stack technique"
          description="Un socle full-stack complété par la data science."
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
                  <CardTitle className="text-base">{group.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary">
                        <TechIcon label={item} className="size-3.5" />
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl p-6 ring-1 ring-border">
          <h3 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Qualités
          </h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((quality) => (
              <Badge key={quality} variant="outline">
                {quality}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

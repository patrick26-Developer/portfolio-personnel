import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { githubHighlights } from "@/data/projects";
import { site } from "@/data/site";

export function GithubHighlights() {
  return (
    <section className="bg-muted/30 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="GitHub"
          title="Autres projets notables"
          description="Une sélection de dépôts personnels, web comme mobile."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {githubHighlights.map((repo) => (
            <a
              key={repo.repo}
              href={`${site.socials.github}/${repo.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full transition-shadow group-hover:shadow-lg group-hover:shadow-foreground/5">
                <CardHeader className="gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base">{repo.name}</CardTitle>
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {repo.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {repo.tech.map((t) => (
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
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
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
            Voir tout sur GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}

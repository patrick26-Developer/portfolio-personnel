"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { FeaturedProject } from "@/data/projects";
import { TechIcon } from "@/lib/tech-icons";

function initialsOf(title: string) {
  return (
    title
      .split(/\s+/)
      .filter((w) => /^[A-Z0-9]/.test(w))
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase() || title.slice(0, 2).toUpperCase()
  );
}

export function ProjectCard({ project }: { project: FeaturedProject }) {
  const initials = initialsOf(project.title);

  return (
    <Dialog>
      <Card className="h-full pt-0 transition-shadow hover:shadow-lg hover:shadow-foreground/5">
        <BrowserFrame
          url={project.liveUrl}
          cover={project.cover}
          alt={project.title}
          initials={initials}
        />

        <CardHeader className="mt-2 gap-2 px-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{project.category}</Badge>
            <Badge
              variant="outline"
              className="border-emerald-600/30 text-emerald-700 dark:text-emerald-400"
            >
              <span className="mr-1 size-1.5 rounded-full bg-emerald-500" />
              {project.status}
            </Badge>
            {project.mobileLogo && (
              <span className="ml-auto flex size-6 items-center justify-center overflow-hidden rounded-full ring-1 ring-border">
                <Image
                  src={project.mobileLogo}
                  alt="Logo application mobile"
                  width={24}
                  height={24}
                  className="size-full object-cover"
                />
              </span>
            )}
          </div>
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <CardDescription>{project.tagline}</CardDescription>
        </CardHeader>

        <CardContent className="px-5">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="text-muted-foreground"
              >
                <TechIcon label={t} className="size-3.5" />
                {t}
              </Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="outline" className="text-muted-foreground">
                +{project.tech.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="gap-2 px-5">
          <Button
            size="sm"
            className="flex-1"
            nativeButton={false}
            render={
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Voir le site
            <ExternalLink className="size-3.5" />
          </Button>
          <DialogTrigger
            render={
              <Button variant="outline" size="sm">
                Détails
              </Button>
            }
          />
        </CardFooter>
      </Card>

      <DialogContent className="max-w-lg sm:max-w-xl">
        <DialogHeader>
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{project.category}</Badge>
            <Badge
              variant="outline"
              className="border-emerald-600/30 text-emerald-700 dark:text-emerald-400"
            >
              <span className="mr-1 size-1.5 rounded-full bg-emerald-500" />
              {project.status}
              {project.year ? ` · ${project.year}` : ""}
            </Badge>
          </div>
          <DialogTitle className="text-xl">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        {project.screens && project.screens.length > 0 && (
          <div className="space-y-2">
            {project.mobileScreens && (
              <p className="text-xs font-medium text-muted-foreground">
                Aperçu web
              </p>
            )}
            <Carousel className="px-8">
              <CarouselContent>
                {project.screens.map((src) => (
                  <CarouselItem key={src}>
                    <div className="overflow-hidden rounded-lg ring-1 ring-border">
                      <Image
                        src={src}
                        alt={project.title}
                        width={1200}
                        height={750}
                        className="h-auto w-full object-cover object-top"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.screens.length > 1 && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
          </div>
        )}

        {project.mobileScreens && project.mobileScreens.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground">
              Aperçu application mobile
            </p>
            <Carousel className="px-8">
              <CarouselContent>
                {project.mobileScreens.map((src) => (
                  <CarouselItem key={src} className="basis-1/2 sm:basis-1/3">
                    <div className="overflow-hidden rounded-xl ring-1 ring-border">
                      <Image
                        src={src}
                        alt={`${project.title} — application mobile`}
                        width={720}
                        height={1520}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.mobileScreens.length > 1 && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t} variant="outline" className="text-muted-foreground">
              {t}
            </Badge>
          ))}
        </div>

        {project.achievements && project.achievements.length > 0 && (
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {project.achievements.map((a) => (
              <li key={a} className="flex gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                {a}
              </li>
            ))}
          </ul>
        )}

        <div className="flex gap-2 pt-2">
          <Button
            className="flex-1"
            nativeButton={false}
            render={
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Voir le site
            <ExternalLink className="size-4" />
          </Button>
          {project.repoUrl && (
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <Github className="size-4" />
              Code
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

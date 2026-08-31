"use client";

import { Github, Wrench } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
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
import { WindowFrame } from "@/components/ui/window-frame";
import type { DesktopApp } from "@/data/desktop-apps";
import { useT } from "@/i18n/dictionary";
import { useL } from "@/i18n/language-provider";

function initialsOf(name: string) {
  return name.slice(0, 2).toUpperCase();
}

export function DesktopAppCard({ app }: { app: DesktopApp }) {
  const t = useT();
  const l = useL();
  const initials = initialsOf(app.name);
  const cover = app.screens?.[0];
  const statusLabel = t.desktopStatus[app.status];

  return (
    <Dialog>
      <Card className="h-full pt-0 transition-shadow hover:shadow-lg hover:shadow-foreground/5">
        <WindowFrame
          title={app.name}
          cover={cover}
          alt={app.name}
          initials={initials}
        />

        <CardHeader className="mt-2 gap-2 px-5">
          <div className="flex flex-wrap items-center gap-2">
            {app.platforms?.map((platform) => (
              <Badge key={platform} variant="secondary">
                {platform}
              </Badge>
            ))}
            <Badge
              variant="outline"
              className="border-amber-600/30 text-amber-700 dark:text-amber-400"
            >
              <Wrench className="size-3" />
              {statusLabel}
            </Badge>
            {app.icon && (
              <span className="ml-auto flex size-6 items-center justify-center overflow-hidden rounded-full ring-1 ring-border">
                <Image
                  src={app.icon}
                  alt={`Icône ${app.name}`}
                  width={24}
                  height={24}
                  className="size-full object-cover"
                />
              </span>
            )}
          </div>
          <CardTitle className="text-lg">{app.name}</CardTitle>
          <CardDescription>{l(app.tagline)}</CardDescription>
        </CardHeader>

        <CardContent className="px-5">
          <div className="flex flex-wrap gap-1.5">
            {app.tech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-muted-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="gap-2 px-5">
          {app.repoUrl && (
            <Button
              size="sm"
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href={app.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <Github className="size-3.5" />
              {t.desktop.code}
            </Button>
          )}
          <DialogTrigger
            render={<Button size="sm">{t.desktop.details}</Button>}
          />
        </CardFooter>
      </Card>

      <DialogContent className="max-w-lg sm:max-w-xl">
        <DialogHeader>
          <div className="mb-1 flex flex-wrap items-center gap-2">
            {app.platforms?.map((platform) => (
              <Badge key={platform} variant="secondary">
                {platform}
              </Badge>
            ))}
            <Badge
              variant="outline"
              className="border-amber-600/30 text-amber-700 dark:text-amber-400"
            >
              <Wrench className="size-3" />
              {statusLabel}
            </Badge>
          </div>
          <DialogTitle className="text-xl">{app.name}</DialogTitle>
          <DialogDescription>{l(app.description)}</DialogDescription>
        </DialogHeader>

        {app.screens && app.screens.length > 0 && (
          <Carousel className="px-8">
            <CarouselContent>
              {app.screens.map((src) => (
                <CarouselItem key={src}>
                  <div className="overflow-hidden rounded-lg ring-1 ring-border">
                    <Image
                      src={src}
                      alt={app.name}
                      width={1200}
                      height={750}
                      className="h-auto w-full object-cover object-top"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {app.screens.length > 1 && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        )}

        <div className="flex flex-wrap gap-1.5">
          {app.tech.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-muted-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {app.repoUrl && (
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              className="flex-1"
              nativeButton={false}
              render={
                <a
                  href={app.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <Github className="size-4" />
              {t.desktop.viewSourceCode}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

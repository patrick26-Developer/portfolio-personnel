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
import { PhoneFrame } from "@/components/ui/phone-frame";
import type { MobileApp } from "@/data/mobile-apps";

function initialsOf(name: string) {
  return name.slice(0, 2).toUpperCase();
}

export function MobileAppCard({ app }: { app: MobileApp }) {
  const initials = initialsOf(app.name);
  const cover = app.screens?.[0];

  return (
    <Dialog>
      <Card className="h-full items-center pt-6 text-center transition-shadow hover:shadow-lg hover:shadow-foreground/5">
        <PhoneFrame cover={cover} alt={app.name} initials={initials} />

        <CardHeader className="items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {app.logo && (
              <span className="flex size-6 items-center justify-center overflow-hidden rounded-full ring-1 ring-border">
                <Image
                  src={app.logo}
                  alt={`Logo ${app.name}`}
                  width={24}
                  height={24}
                  className="size-full object-cover"
                />
              </span>
            )}
            <Badge
              variant="outline"
              className="border-amber-600/30 text-amber-700 dark:text-amber-400"
            >
              <Wrench className="size-3" />
              {app.status}
            </Badge>
          </div>
          <CardTitle className="text-lg">{app.name}</CardTitle>
          <CardDescription>{app.tagline}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap justify-center gap-1.5">
            {app.tech.map((t) => (
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

        <CardFooter className="gap-2">
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
              Code
            </Button>
          )}
          <DialogTrigger render={<Button size="sm">Détails</Button>} />
        </CardFooter>
      </Card>

      <DialogContent className="max-w-lg sm:max-w-xl">
        <DialogHeader>
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <Badge
              variant="outline"
              className="border-amber-600/30 text-amber-700 dark:text-amber-400"
            >
              <Wrench className="size-3" />
              {app.status} — pas encore sur les stores
            </Badge>
          </div>
          <DialogTitle className="text-xl">{app.name}</DialogTitle>
          <DialogDescription>{app.description}</DialogDescription>
        </DialogHeader>

        {app.screens && app.screens.length > 0 && (
          <Carousel className="px-8">
            <CarouselContent>
              {app.screens.map((src) => (
                <CarouselItem key={src} className="basis-1/2 sm:basis-1/3">
                  <div className="overflow-hidden rounded-xl ring-1 ring-border">
                    <Image
                      src={src}
                      alt={app.name}
                      width={720}
                      height={1520}
                      className="h-auto w-full object-cover"
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
          {app.tech.map((t) => (
            <Badge key={t} variant="outline" className="text-muted-foreground">
              {t}
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
              Voir le code source
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

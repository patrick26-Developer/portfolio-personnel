"use client";

import { Clock, ExternalLink, Github, Layers } from "lucide-react";

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Course } from "@/data/courses";
import { useT } from "@/i18n/dictionary";
import { useL } from "@/i18n/language-provider";

function initialsOf(language: string) {
  return language.slice(0, 2).toUpperCase();
}

export function CourseCard({ course }: { course: Course }) {
  const t = useT();
  const l = useL();
  const title = l(course.title);
  const initials = initialsOf(course.language);
  const isAvailable = course.status === "available";
  const primaryUrl = course.siteUrl ?? course.repoUrl;

  return (
    <Dialog>
      <Card className="h-full pt-0 transition-shadow hover:shadow-lg hover:shadow-foreground/5">
        <BrowserFrame
          url={primaryUrl ?? course.language}
          cover={course.cover}
          alt={title}
          initials={initials}
        />

        <CardHeader className="mt-2 gap-2 px-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{course.language}</Badge>
            {course.framework && (
              <Badge variant="secondary">{course.framework}</Badge>
            )}
            <Badge
              variant="outline"
              className={
                isAvailable
                  ? "border-emerald-600/30 text-emerald-700 dark:text-emerald-400"
                  : "border-amber-600/30 text-amber-700 dark:text-amber-400"
              }
            >
              <span
                className={
                  isAvailable
                    ? "mr-1 size-1.5 rounded-full bg-emerald-500"
                    : "mr-1 size-1.5 rounded-full bg-amber-500"
                }
              />
              {t.courseStatus[course.status]}
            </Badge>
            {course.curriculum && (
              <Badge
                variant="outline"
                className="ml-auto text-muted-foreground"
              >
                <Layers className="size-3" />
                {l(course.curriculum)}
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{l(course.tagline)}</CardDescription>
        </CardHeader>

        <CardContent className="px-5">
          <div className="flex flex-wrap gap-1.5">
            {course.tech.slice(0, 5).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-muted-foreground"
              >
                {tech}
              </Badge>
            ))}
            {course.tech.length > 5 && (
              <Badge variant="outline" className="text-muted-foreground">
                +{course.tech.length - 5}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="gap-2 px-5">
          {isAvailable && primaryUrl ? (
            <Button
              size="sm"
              className="flex-1"
              nativeButton={false}
              render={
                <a
                  href={primaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              {course.siteUrl ? (
                <>
                  {t.courses.viewCourse}
                  <ExternalLink className="size-3.5" />
                </>
              ) : (
                <>
                  <Github className="size-3.5" />
                  {t.courses.viewCourse}
                </>
              )}
            </Button>
          ) : (
            <Button size="sm" className="flex-1" disabled>
              <Clock className="size-3.5" />
              {t.courseStatus.upcoming}
            </Button>
          )}
          <DialogTrigger
            render={
              <Button variant="outline" size="sm">
                {t.courses.details}
              </Button>
            }
          />
        </CardFooter>
      </Card>

      <DialogContent className="max-w-lg sm:max-w-xl">
        <DialogHeader>
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{course.language}</Badge>
            {course.framework && (
              <Badge variant="secondary">{course.framework}</Badge>
            )}
            <Badge
              variant="outline"
              className={
                isAvailable
                  ? "border-emerald-600/30 text-emerald-700 dark:text-emerald-400"
                  : "border-amber-600/30 text-amber-700 dark:text-amber-400"
              }
            >
              <span
                className={
                  isAvailable
                    ? "mr-1 size-1.5 rounded-full bg-emerald-500"
                    : "mr-1 size-1.5 rounded-full bg-amber-500"
                }
              />
              {t.courseStatus[course.status]}
            </Badge>
          </div>
          <DialogTitle className="text-xl">{title}</DialogTitle>
          <DialogDescription>{l(course.description)}</DialogDescription>
        </DialogHeader>

        {course.highlights && course.highlights.length > 0 && (
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {course.highlights.map((h) => (
              <li key={h.fr} className="flex gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                {l(h)}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5">
          {course.tech.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-muted-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {(course.siteUrl || course.repoUrl) && (
          <div className="flex gap-2 pt-2">
            {course.siteUrl && (
              <Button
                className="flex-1"
                nativeButton={false}
                render={
                  <a
                    href={course.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                {t.courses.viewCourse}
                <ExternalLink className="size-4" />
              </Button>
            )}
            {course.repoUrl && (
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a
                    href={course.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <Github className="size-4" />
                {t.courses.viewSourceCode}
              </Button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

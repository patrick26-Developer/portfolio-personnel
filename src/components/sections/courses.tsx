"use client";

import { CourseCard } from "@/components/ui/course-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { courses } from "@/data/courses";
import { useT } from "@/i18n/dictionary";

export function Courses() {
  const t = useT();

  return (
    <section id="formations" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.courses.eyebrow}
          title={t.courses.title}
          description={t.courses.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

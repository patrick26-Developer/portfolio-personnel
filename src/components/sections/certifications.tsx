import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/data/certifications";
import { site } from "@/data/site";

export function Certifications() {
  return (
    <section id="certifications" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Formations validées"
          description="Certifications reconnues et parcours académique."
        />

        <div className="space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-start justify-between gap-4 rounded-2xl p-6 ring-1 ring-border sm:flex-row sm:items-center"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Award className="size-5" />
                </span>
                <div>
                  <div className="font-medium">{cert.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {cert.org} · {cert.date}
                  </div>
                </div>
              </div>
              {cert.url ? (
                <Button
                  variant="outline"
                  size="sm"
                  nativeButton={false}
                  render={
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <ExternalLink className="size-3.5" />
                  Vérifier
                </Button>
              ) : (
                <span className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  Certifié
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4 rounded-2xl bg-primary/5 p-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="size-5 text-primary" />
            <h3 className="font-semibold">Formation académique</h3>
          </div>
          {site.education.map((edu) => (
            <div
              key={edu.degree}
              className="flex flex-col items-start justify-between gap-2 border-t border-primary/10 pt-4 first:border-0 first:pt-0 sm:flex-row sm:items-center"
            >
              <div>
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {edu.school} · {edu.period}
                </p>
              </div>
              {edu.verifyUrl && (
                <Button
                  variant="ghost"
                  size="sm"
                  nativeButton={false}
                  render={
                    <a
                      href={edu.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <ExternalLink className="size-3.5" />
                  Vérifier le diplôme
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

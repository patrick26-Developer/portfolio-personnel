"use client";

import { MonitorSmartphone } from "lucide-react";
import { DesktopAppCard } from "@/components/ui/desktop-app-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { desktopApps } from "@/data/desktop-apps";
import { useT } from "@/i18n/dictionary";

export function DesktopApps() {
  const t = useT();

  return (
    <section id="desktop" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.desktop.eyebrow}
          title={t.desktop.title}
          description={t.desktop.description}
        />

        {desktopApps.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {desktopApps.map((app) => (
              <DesktopAppCard key={app.slug} app={app} />
            ))}
          </div>
        ) : (
          <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl p-10 text-center ring-1 ring-dashed ring-border">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MonitorSmartphone className="size-6" />
            </span>
            <h3 className="text-base font-semibold">{t.desktop.emptyTitle}</h3>
            <p className="text-sm text-muted-foreground">
              {t.desktop.emptyDescription}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

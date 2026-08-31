"use client";

import { MobileAppCard } from "@/components/ui/mobile-app-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { mobileApps } from "@/data/mobile-apps";
import { useT } from "@/i18n/dictionary";

export function MobileApps() {
  const t = useT();

  return (
    <section id="mobile" className="bg-muted/30 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.mobile.eyebrow}
          title={t.mobile.title}
          description={t.mobile.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mobileApps.map((app) => (
            <MobileAppCard key={app.slug} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { MobileAppCard } from "@/components/ui/mobile-app-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { mobileApps } from "@/data/mobile-apps";

export function MobileApps() {
  return (
    <section id="mobile" className="bg-muted/30 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Mobile"
          title="Applications Mobiles"
          description="Applications React Native en cours de développement — pas encore publiées sur le Play Store ou l'App Store."
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

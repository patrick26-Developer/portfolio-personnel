"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface PeekCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyOf: (item: T, index: number) => string;
  /** Tailwind basis classes controlling how many cards are visible (peek effect). */
  itemClassName?: string;
  autoplayMs?: number;
  className?: string;
}

/**
 * Carrousel avec effet "peek" (les cartes voisines dépassent légèrement) et défilement
 * automatique en pause au survol/focus — inspiré des feature/card carousels de 21st.dev,
 * construit ici avec le Carousel Embla déjà fourni par shadcn (pas de dépendance ajoutée).
 */
export function PeekCarousel<T>({
  items,
  renderItem,
  keyOf,
  itemClassName = "basis-[85%] sm:basis-1/2 lg:basis-1/3",
  autoplayMs = 5000,
  className,
}: PeekCarouselProps<T>) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || paused || autoplayMs <= 0) return;
    const id = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, autoplayMs);
    return () => clearInterval(id);
  }, [api, paused, autoplayMs]);

  const scrollSnaps = api?.scrollSnapList() ?? [];

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: pause-on-hover/focus wrapper only, the Carousel below already exposes role="region"
    <div
      className={cn("group/carousel", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {items.map((item, i) => (
            <CarouselItem key={keyOf(item, i)} className={itemClassName}>
              {renderItem(item, i)}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>

      {scrollSnaps.length > 1 && (
        <div className="mt-6 flex justify-center gap-1.5">
          {/* biome-ignore-start lint/suspicious/noArrayIndexKey: dots are a fixed-length, order-stable list derived from the carousel's snap count */}
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Aller à l'élément ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                selected === i
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-primary/25 hover:bg-primary/40",
              )}
            />
          ))}
          {/* biome-ignore-end lint/suspicious/noArrayIndexKey: dots are a fixed-length, order-stable list derived from the carousel's snap count */}
        </div>
      )}
    </div>
  );
}

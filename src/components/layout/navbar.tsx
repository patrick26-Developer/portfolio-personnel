"use client";

import { ChevronDown, Download, Menu } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageToggle } from "@/components/ui/language-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { site } from "@/data/site";
import { useT } from "@/i18n/dictionary";
import { useL } from "@/i18n/language-provider";
import { cn } from "@/lib/utils";

type NavItem = (typeof site.navItems)[number];
type NavGroup = Extract<NavItem, { children: unknown }>;
type NavChild = NavGroup["children"][number];

function isGroup(item: NavItem): item is NavGroup {
  return "children" in item;
}

/** Résout l'ancre réelle d'un lien : `sectionId` si fourni, sinon son `id`. */
function sectionIdOf(item: { id: string; sectionId?: string }) {
  return item.sectionId ?? item.id;
}

/** Aplati les groupes pour obtenir la liste des ancres à observer au scroll. */
function flattenSectionIds(items: readonly NavItem[]) {
  return items.flatMap((item) =>
    isGroup(item) ? item.children.map(sectionIdOf) : [sectionIdOf(item)],
  );
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Navbar() {
  const t = useT();
  const l = useL();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(site.navItems[0].id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = flattenSectionIds(site.navItems)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const isGroupActive = (item: NavGroup) =>
    item.children.some((child) => sectionIdOf(child) === active);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => scrollToSection(site.navItems[0].id)}
          className="flex items-center gap-2.5"
        >
          <span className="relative size-9 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-primary/40">
            <Image
              src={site.logo}
              alt={site.shortName}
              fill
              className="object-contain p-0.5"
              sizes="36px"
            />
          </span>
          <span className="hidden flex-col items-start sm:flex">
            <span className="text-sm font-semibold leading-tight">
              {site.shortName}
            </span>
            <span className="text-xs leading-tight text-muted-foreground">
              {l(site.role)}
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {site.navItems.map((item) =>
            isGroup(item) ? (
              <DropdownMenu key={item.id}>
                <DropdownMenuTrigger
                  render={
                    <button
                      type="button"
                      className={cn(
                        "group flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                        isGroupActive(item)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    />
                  }
                >
                  {t.nav[item.id]}
                  <ChevronDown className="size-3.5 transition-transform group-data-popup-open:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {item.children.map((child: NavChild) => (
                    <DropdownMenuItem
                      key={child.id}
                      onClick={() => scrollToSection(sectionIdOf(child))}
                      className={cn(
                        active === sectionIdOf(child) && "text-primary",
                      )}
                    >
                      {t.nav[child.id]}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {t.nav[item.id]}
              </button>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            className="hidden lg:inline-flex"
            size="sm"
            nativeButton={false}
            render={<a href={site.cvUrl} download={site.cvFilename} />}
          >
            <Download className="size-4" />
            {t.nav.downloadCv}
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label={t.nav.openMenu}
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>{site.shortName}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {site.navItems.map((item) =>
                  isGroup(item) ? (
                    <div key={item.id} className="flex flex-col gap-1">
                      <span className="px-3 pt-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {t.nav[item.id]}
                      </span>
                      {item.children.map((child: NavChild) => (
                        <SheetClose
                          key={child.id}
                          render={
                            <button
                              type="button"
                              onClick={() =>
                                scrollToSection(sectionIdOf(child))
                              }
                              className={cn(
                                "rounded-lg py-2.5 pr-3 pl-6 text-left text-sm font-medium transition-colors",
                                active === sectionIdOf(child)
                                  ? "bg-primary/10 text-primary"
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                              )}
                            />
                          }
                        >
                          {t.nav[child.id]}
                        </SheetClose>
                      ))}
                    </div>
                  ) : (
                    <SheetClose
                      key={item.id}
                      render={
                        <button
                          type="button"
                          onClick={() => scrollToSection(item.id)}
                          className={cn(
                            "rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors",
                            active === item.id
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground",
                          )}
                        />
                      }
                    >
                      {t.nav[item.id]}
                    </SheetClose>
                  ),
                )}
              </nav>
              <div className="mt-auto px-4 pb-4">
                <Button
                  className="w-full"
                  nativeButton={false}
                  render={<a href={site.cvUrl} download={site.cvFilename} />}
                >
                  <Download className="size-4" />
                  {t.nav.downloadCv}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

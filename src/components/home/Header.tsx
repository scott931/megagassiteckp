"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/images/logo1.png";

const nav = [
  { label: "Home", href: "/" },
  { label: "Community Kitchens", href: "/community-kitchen" },
  { label: "About us", href: "/about-us" },
  { label: "Impact", href: "/impact" },
  { label: "Overview", href: "/overview" },
  { label: "Testimonials", href: "/testimony" },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* On non-home pages the hero is light—use solid bar + dark nav. Home top uses transparent + white nav over video. */
  const solidHeader = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkClass = (isMobile: boolean) =>
    cn(
      "rounded-lg font-medium transition",
      isMobile
        ? "block w-full py-3 text-base"
        : "px-2.5 py-2 text-base hover:opacity-80",
      solidHeader
        ? "text-brand-forest hover:bg-brand-forest/5"
        : "text-white hover:bg-white/10"
    );

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        solidHeader
          ? "border-b border-brand-forest/10 bg-softwhite/95 shadow-sm shadow-brand-forest/5 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[92px] items-center justify-between gap-3 py-2 sm:min-h-[108px] sm:py-3">
          <a
            href="/"
            className="flex shrink-0 items-center rounded-lg transition-opacity hover:opacity-90"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src={logo}
              alt="Mega Gas — Clean and affordable cooking gas"
              className="h-[72px] w-[72px] object-contain object-left object-top sm:h-24 sm:w-24"
              priority
              sizes="(max-width: 768px) 72px, 96px"
            />
          </a>

          <nav
            className={cn(
              "hidden items-center gap-2 md:flex md:gap-2.5 lg:gap-3",
              solidHeader ? "text-brand-forest" : "text-white"
            )}
            aria-label="Primary"
          >
            {nav.map((item) => (
              <a key={item.label} href={item.href} className={linkClass(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#hero-cta"
              className={cn(
                "hidden rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition md:inline-flex md:items-center",
                solidHeader
                  ? "bg-brand-forest text-white hover:bg-brand-forest/90"
                  : "bg-white text-brand-forest hover:bg-white/90"
              )}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
            <button
              type="button"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-lg transition md:hidden",
                solidHeader
                  ? "text-brand-forest hover:bg-brand-forest/10"
                  : "text-white hover:bg-white/10"
              )}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Menu className="h-6 w-6" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t md:hidden",
          mobileOpen ? "block" : "hidden",
          solidHeader
            ? "border-brand-forest/10 bg-softwhite"
            : "border-white/15 bg-brand-forest/95 backdrop-blur-md"
        )}
      >
        <nav
          className="mx-auto max-h-[min(70vh,calc(100dvh-5rem))] max-w-7xl overflow-y-auto px-4 pb-6 pt-2 sm:px-6"
          aria-label="Mobile primary"
        >
          <ul
            className={cn(
              "flex flex-col divide-y",
              solidHeader ? "divide-brand-forest/15" : "divide-white/15"
            )}
          >
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={linkClass(true)}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

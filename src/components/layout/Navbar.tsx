"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useFavorites } from "@/components/favorites/FavoritesProvider";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function getLinkClassName(isActive: boolean, isMobile = false) {
  const base =
    "rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/30";

  if (isActive) {
    return `${base} bg-secondary text-on-secondary shadow-ambient ${
      isMobile ? "px-4 py-3 text-base" : "px-4 py-2 text-sm"
    }`;
  }

  return `${base} text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface ${
    isMobile ? "px-4 py-3 text-base" : "px-4 py-2 text-sm"
  }`;
}

export function Navbar() {
  const pathname = usePathname();
  const { favoriteCount } = useFavorites();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="glass-panel shadow-floating sticky top-0 z-50 border-b border-surface-dim">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-6">
        <Link
          href="/"
          className="font-display shrink-0 text-lg font-extrabold tracking-tight text-primary sm:text-xl"
        >
          Wonderlust
        </Link>

        <nav className="hidden items-center gap-1 md:flex md:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = isActiveRoute(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={getLinkClassName(isActive)}
              >
                {item.label}
                {item.href === "/favorites" && favoriteCount > 0 ? (
                  <span className="ml-1.5 inline-flex min-w-5 items-center justify-center rounded-full bg-on-primary/20 px-1.5 text-xs font-semibold">
                    {favoriteCount}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-surface-dim bg-surface p-2 text-on-surface transition hover:bg-surface-container-low md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen ? (
        <div
          className="fixed inset-0 top-[57px] z-40 md:hidden"
          style={{ backgroundColor: "var(--overlay)" }}
        />
      ) : null}

      <nav
        id="mobile-nav"
        className={`glass-panel border-t border-surface-dim md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-3">
          {NAV_ITEMS.map((item) => {
            const isActive = isActiveRoute(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={getLinkClassName(isActive, true)}
              >
                <span className="flex items-center justify-between">
                  {item.label}
                  {item.href === "/favorites" && favoriteCount > 0 ? (
                    <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-on-primary/20 px-2 text-xs font-semibold">
                      {favoriteCount}
                    </span>
                  ) : null}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

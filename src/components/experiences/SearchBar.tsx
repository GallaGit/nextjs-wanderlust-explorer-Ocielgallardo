"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { buildExperiencesHref } from "@/lib/experienceUrl";

type SearchBarProps = {
  initialSearch: string;
  category?: string;
  destination?: string;
};

export function SearchBar({
  initialSearch,
  category,
  destination,
}: SearchBarProps) {
  const router = useRouter();
  const [search, setSearch] = useState(initialSearch);

  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const nextHref = buildExperiencesHref({
        search: search.trim(),
        category,
        destination,
      });

      const currentHref = buildExperiencesHref({
        search: initialSearch.trim(),
        category,
        destination,
      });

      if (nextHref !== currentHref) {
        router.push(nextHref);
      }
    }, 300);

    return () => window.clearTimeout(timeout);
  }, [search, category, destination, initialSearch, router]);

  return (
    <label className="block">
      <span className="mb-3 block text-sm font-semibold tracking-wide text-on-surface-variant uppercase">
        Buscar por titulo
      </span>
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Ej: vela, safari, gastronomico..."
        className="shadow-floating w-full rounded-full border border-surface-dim bg-surface px-5 py-3 text-base text-on-surface outline-none transition placeholder:text-outline focus:border-secondary focus:ring-4 focus:ring-secondary/15"
      />
    </label>
  );
}

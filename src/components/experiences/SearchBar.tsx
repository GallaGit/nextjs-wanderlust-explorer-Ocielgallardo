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
      <span className="mb-2 block text-sm font-medium text-stone-700">
        Buscar por titulo
      </span>
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Ej: vela, safari, gastronomico..."
        className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none ring-teal-500 transition focus:ring-2"
      />
    </label>
  );
}

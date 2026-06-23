"use client";

import { useRouter } from "next/navigation";
import type { ExperienceCategory } from "@/types/experience";
import { buildExperiencesHref } from "@/lib/experienceUrl";

type FilterBarProps = {
  categories: ExperienceCategory[];
  countries: string[];
  initialCategory: string;
  initialDestination: string;
  search: string;
};

export function FilterBar({
  categories,
  countries,
  initialCategory,
  initialDestination,
  search,
}: FilterBarProps) {
  const router = useRouter();

  const updateFilters = (next: {
    category?: string;
    destination?: string;
  }) => {
    router.push(
      buildExperiencesHref({
        search,
        category: next.category ?? initialCategory,
        destination: next.destination ?? initialDestination,
      }),
    );
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-stone-700">
          Categoria
        </span>
        <select
          value={initialCategory}
          onChange={(event) =>
            updateFilters({ category: event.target.value })
          }
          className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none ring-teal-500 transition focus:ring-2"
        >
          <option value="">Todas</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-stone-700">
          Destino
        </span>
        <select
          value={initialDestination}
          onChange={(event) =>
            updateFilters({ destination: event.target.value })
          }
          className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none ring-teal-500 transition focus:ring-2"
        >
          <option value="">Todos</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

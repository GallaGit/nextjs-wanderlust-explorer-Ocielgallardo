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
    <div className="space-y-6">
      <div>
        <span className="mb-3 block text-sm font-semibold tracking-wide text-on-surface-variant uppercase">
          Categoria
        </span>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => updateFilters({ category: "" })}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              initialCategory === ""
                ? "border-secondary bg-secondary text-on-secondary"
                : "border-surface-dim bg-surface text-on-surface-variant hover:border-outline"
            }`}
          >
            Todas
          </button>
          {categories.map((category) => {
            const isActive = initialCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => updateFilters({ category })}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-secondary bg-secondary text-on-secondary"
                    : "border-surface-dim bg-surface text-on-surface-variant hover:border-outline"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <label className="block">
        <span className="mb-3 block text-sm font-semibold tracking-wide text-on-surface-variant uppercase">
          Destino
        </span>
        <select
          value={initialDestination}
          onChange={(event) =>
            updateFilters({ destination: event.target.value })
          }
          className="w-full rounded-lg border border-surface-dim bg-surface px-3 py-3 text-base text-on-surface outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/15 sm:max-w-sm"
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

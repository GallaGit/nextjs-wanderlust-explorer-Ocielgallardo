"use client";

import { ExperienceGrid } from "@/components/experiences/ExperienceGrid";
import { FilterBar } from "@/components/experiences/FilterBar";
import { SearchBar } from "@/components/experiences/SearchBar";
import { useFilters } from "@/hooks/useFilters";
import type { Experience, ExperienceCategory } from "@/types/experience";

type ExperiencesExplorerProps = {
  experiences: Experience[];
  categories: ExperienceCategory[];
  countries: string[];
};

export function ExperiencesExplorer({
  experiences,
  categories,
  countries,
}: ExperiencesExplorerProps) {
  const { filteredExperiences, search, category, destination } =
    useFilters(experiences);

  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <h1 className="font-display text-2xl font-bold text-on-surface sm:text-[32px] sm:leading-10">
          Explorador de experiencias
        </h1>
        <p className="text-base leading-6 text-on-surface-variant">
          {filteredExperiences.length} de {experiences.length} experiencias
          disponibles
        </p>
      </header>

      <section className="glass-panel shadow-floating space-y-6 rounded-xl border border-surface-dim p-5 sm:p-6">
        <SearchBar
          initialSearch={search}
          category={category}
          destination={destination}
        />
        <FilterBar
          categories={categories}
          countries={countries}
          initialCategory={category}
          initialDestination={destination}
          search={search}
        />
      </section>

      <ExperienceGrid experiences={filteredExperiences} />
    </div>
  );
}

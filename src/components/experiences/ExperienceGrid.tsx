"use client";

import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { useFavorites } from "@/components/favorites/FavoritesProvider";
import type { Experience } from "@/types/experience";

type ExperienceGridProps = {
  experiences: Experience[];
};

export function ExperienceGrid({ experiences }: ExperienceGridProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  if (experiences.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-outline-variant bg-surface px-6 py-16 text-center">
        <h2 className="font-display text-xl font-bold text-on-surface">
          No se encontraron experiencias
        </h2>
        <p className="mt-2 text-sm text-on-surface-variant">
          Prueba ajustando la busqueda o los filtros activos.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          isFavorite={isFavorite(experience.id)}
          onToggleFavorite={() => toggleFavorite(experience.id)}
        />
      ))}
    </div>
  );
}

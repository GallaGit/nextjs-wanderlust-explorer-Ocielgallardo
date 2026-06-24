"use client";

import Link from "next/link";
import { ExperienceGrid } from "@/components/experiences/ExperienceGrid";
import { useFavorites } from "@/components/favorites/FavoritesProvider";
import { experiences } from "@/data/experiences";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) =>
    favorites.includes(experience.id),
  );

  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <h1 className="font-display text-2xl font-bold text-on-surface sm:text-[32px] sm:leading-10">
          Favoritos
        </h1>
        <p className="text-base leading-6 text-on-surface-variant">
          {favoriteExperiences.length} experiencia
          {favoriteExperiences.length === 1 ? "" : "s"} guardada
          {favoriteExperiences.length === 1 ? "" : "s"} en esta sesion
        </p>
      </header>

      {favoriteExperiences.length === 0 ? (
        <div className="rounded-xl border border-dashed border-outline-variant bg-surface px-6 py-16 text-center">
          <h2 className="font-display text-xl font-bold text-on-surface">
            Aun no tienes favoritos
          </h2>
          <p className="mt-2 text-sm text-on-surface-variant">
            Marca experiencias con el corazon para verlas aqui.
          </p>
          <Link
            href="/experiences"
            className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition hover:opacity-90"
          >
            Explorar experiencias
          </Link>
        </div>
      ) : (
        <ExperienceGrid experiences={favoriteExperiences} />
      )}
    </div>
  );
}

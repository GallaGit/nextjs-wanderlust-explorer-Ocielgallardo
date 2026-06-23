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
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-stone-900">Favoritos</h1>
        <p className="text-stone-600">
          {favoriteExperiences.length} experiencia
          {favoriteExperiences.length === 1 ? "" : "s"} guardada
          {favoriteExperiences.length === 1 ? "" : "s"} en esta sesion
        </p>
      </header>

      {favoriteExperiences.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
          <h2 className="text-lg font-semibold text-stone-900">
            Aun no tienes favoritos
          </h2>
          <p className="mt-2 text-sm text-stone-500">
            Marca experiencias con el corazon para verlas aqui.
          </p>
          <Link
            href="/experiences"
            className="mt-6 inline-flex rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
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

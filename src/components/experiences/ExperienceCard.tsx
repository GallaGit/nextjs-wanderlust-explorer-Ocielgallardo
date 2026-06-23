"use client";

import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/components/favorites/FavoritesProvider";
import type { Experience } from "@/types/experience";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(experience.id);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/experiences/${experience.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="space-y-2 p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-2 text-base font-semibold text-stone-900">
              {experience.title}
            </h3>
            <span className="shrink-0 text-sm font-medium text-stone-700">
              ★ {experience.rating.toFixed(1)}
            </span>
          </div>

          <p className="text-sm text-stone-500">{experience.destination}</p>

          <div className="flex items-center justify-between pt-1">
            <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800">
              {experience.category}
            </span>
            <span className="text-sm font-semibold text-stone-900">
              ${experience.price}
            </span>
          </div>
        </div>
      </Link>

      <button
        type="button"
        aria-label={
          favorite ? "Quitar de favoritos" : "Agregar a favoritos"
        }
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          toggleFavorite(experience.id);
        }}
        className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-lg shadow-sm transition hover:scale-110"
      >
        {favorite ? "❤️" : "🤍"}
      </button>
    </article>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/types/experience";

type ExperienceCardProps = {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

export function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {

  return (
    <article className="group relative overflow-hidden rounded-xl bg-surface transition duration-300 hover:shadow-ambient">
      <Link href={`/experiences/${experience.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-low">
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
            <h3 className="font-display line-clamp-2 text-base font-bold text-on-surface">
              {experience.title}
            </h3>
            <span className="shrink-0 text-sm font-bold text-on-surface">
              <span className="text-tertiary">★</span>{" "}
              {experience.rating.toFixed(1)}
            </span>
          </div>

          <p className="text-sm text-on-surface-variant">
            {experience.destination}
          </p>

          <div className="flex items-center justify-between pt-1">
            <span className="rounded-full border border-surface-dim px-2.5 py-1 text-xs font-medium text-on-surface-variant">
              {experience.category}
            </span>
            <span className="text-sm font-semibold text-on-surface">
              ${experience.price}
            </span>
          </div>
        </div>
      </Link>

      <button
        type="button"
        aria-label={
          isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
        }
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          onToggleFavorite();
        }}
        className="glass-panel absolute right-3 top-3 rounded-full p-2 text-lg shadow-floating transition hover:scale-110"
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </article>
  );
}

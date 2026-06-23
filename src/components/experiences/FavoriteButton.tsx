"use client";

import { useFavorites } from "@/components/favorites/FavoritesProvider";

type FavoriteButtonProps = {
  experienceId: string;
};

export function FavoriteButton({ experienceId }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(experienceId);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(experienceId)}
      className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-teal-300 hover:text-teal-800"
    >
      <span>{favorite ? "❤️" : "🤍"}</span>
      {favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
    </button>
  );
}

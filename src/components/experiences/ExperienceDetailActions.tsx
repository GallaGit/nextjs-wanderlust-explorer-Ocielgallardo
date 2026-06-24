"use client";

import { FavoriteButton } from "@/components/experiences/FavoriteButton";
import { useFavorites } from "@/components/favorites/FavoritesProvider";

type ExperienceDetailActionsProps = {
  experienceId: string;
};

export function ExperienceDetailActions({
  experienceId,
}: ExperienceDetailActionsProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <FavoriteButton
      isFavorite={isFavorite(experienceId)}
      onToggleFavorite={() => toggleFavorite(experienceId)}
    />
  );
}

"use client";

type FavoriteButtonProps = {
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

export function FavoriteButton({
  isFavorite,
  onToggleFavorite,
}: FavoriteButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggleFavorite}
      className="inline-flex items-center gap-2 rounded-full border border-secondary bg-transparent px-5 py-2.5 text-sm font-semibold text-secondary transition hover:bg-secondary-container/40"
    >
      <span>{isFavorite ? "❤️" : "🤍"}</span>
      {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
    </button>
  );
}

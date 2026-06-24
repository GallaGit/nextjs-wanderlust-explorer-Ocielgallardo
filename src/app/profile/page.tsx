"use client";

import Image from "next/image";
import { useFavorites } from "@/components/favorites/FavoritesProvider";

const MOCK_USER = {
  name: "Lea Moreau",
  role: "Viajera curiosa",
  bio: "Explorando culturas, sabores y paisajes unicos. Wonderlust es mi espacio para descubrir la proxima aventura.",
  avatar: "https://picsum.photos/seed/wonderlust-profile/200/200",
};

export default function ProfilePage() {
  const { favoriteCount } = useFavorites();

  return (
    <div className="space-y-12">
      <header>
        <h1 className="font-display text-2xl font-bold text-on-surface sm:text-[32px] sm:leading-10">
          Perfil
        </h1>
      </header>

      <section className="grid gap-6 rounded-xl bg-surface p-5 shadow-ambient sm:grid-cols-[auto_1fr] sm:p-8">
        <div className="relative h-28 w-28 overflow-hidden rounded-full bg-surface-container-low">
          <Image
            src={MOCK_USER.avatar}
            alt={MOCK_USER.name}
            fill
            className="object-cover"
            sizes="112px"
          />
        </div>

        <div className="space-y-3">
          <div>
            <h2 className="font-display text-2xl font-bold text-on-surface">
              {MOCK_USER.name}
            </h2>
            <p className="text-sm font-semibold text-secondary">{MOCK_USER.role}</p>
          </div>
          <p className="max-w-2xl text-base leading-6 text-on-surface-variant">
            {MOCK_USER.bio}
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-outline-variant bg-secondary-container/30 p-6">
        <h3 className="font-display text-xl font-bold text-on-surface">Resumen</h3>
        <p className="mt-2 text-base leading-6 text-on-surface-variant">
          Tienes{" "}
          <span className="font-bold text-secondary">{favoriteCount}</span>{" "}
          experiencia{favoriteCount === 1 ? "" : "s"} guardada
          {favoriteCount === 1 ? "" : "s"} como favorita
          {favoriteCount === 1 ? "" : "s"}.
        </p>
      </section>
    </div>
  );
}

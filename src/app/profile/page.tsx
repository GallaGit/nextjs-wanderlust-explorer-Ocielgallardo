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
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-stone-900">Perfil</h1>
      </header>

      <section className="grid gap-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:grid-cols-[auto_1fr] sm:p-8">
        <div className="relative h-28 w-28 overflow-hidden rounded-full bg-stone-100">
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
            <h2 className="text-2xl font-semibold text-stone-900">
              {MOCK_USER.name}
            </h2>
            <p className="text-sm font-medium text-teal-700">{MOCK_USER.role}</p>
          </div>
          <p className="max-w-2xl text-stone-600">{MOCK_USER.bio}</p>
        </div>
      </section>

      <section className="rounded-2xl border border-teal-100 bg-teal-50 p-6">
        <h3 className="text-lg font-semibold text-teal-900">Resumen</h3>
        <p className="mt-2 text-stone-700">
          Tienes{" "}
          <span className="font-semibold text-teal-800">{favoriteCount}</span>{" "}
          experiencia{favoriteCount === 1 ? "" : "s"} guardada
          {favoriteCount === 1 ? "" : "s"} como favorita
          {favoriteCount === 1 ? "" : "s"}.
        </p>
      </section>
    </div>
  );
}

import Link from "next/link";

export default function HomePage() {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-600 text-white shadow-lg">
      <div className="grid gap-8 px-8 py-16 sm:px-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-20">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">
            Wonderlust
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Descubre experiencias unicas alrededor del mundo
          </h1>
          <p className="max-w-xl text-base text-teal-50 sm:text-lg">
            Explora aventuras, cultura, gastronomia y bienestar. Busca, filtra y
            comparte URLs con tus criterios para que otros vean los mismos
            resultados.
          </p>
          <Link
            href="/experiences"
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
          >
            Explorar experiencias
          </Link>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Que puedes hacer</h2>
          <ul className="mt-4 space-y-3 text-sm text-teal-50">
            <li>Buscar por titulo con coincidencia flexible</li>
            <li>Filtrar por categoria y destino</li>
            <li>Guardar favoritos durante tu sesion</li>
            <li>Compartir enlaces con filtros activos</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

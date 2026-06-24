import Link from "next/link";

export default function HomePage() {
  return (
    <section className="overflow-hidden rounded-xl bg-surface shadow-ambient">
      <div className="grid gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12 lg:px-12 lg:py-20">
        <div className="space-y-6">
          <p className="text-sm font-semibold tracking-[0.05em] text-primary uppercase">
            Wonderlust
          </p>
          <h1 className="font-display text-[32px] leading-10 font-extrabold tracking-tight text-on-surface sm:text-[48px] sm:leading-[56px] sm:tracking-[-0.02em]">
            Descubre experiencias unicas alrededor del mundo
          </h1>
          <p className="max-w-xl text-lg leading-7 text-on-surface-variant">
            Explora aventuras, cultura, gastronomia y bienestar. Busca, filtra y
            comparte URLs con tus criterios para que otros vean los mismos
            resultados.
          </p>
          <Link
            href="/experiences"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition hover:opacity-90"
          >
            Explorar experiencias
          </Link>
        </div>

        <div className="glass-panel shadow-floating rounded-xl border border-surface-dim p-6">
          <h2 className="font-display text-xl font-bold text-on-surface">
            Que puedes hacer
          </h2>
          <ul className="mt-4 space-y-3 text-base leading-6 text-on-surface-variant">
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

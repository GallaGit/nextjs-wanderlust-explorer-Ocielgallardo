import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import type { Experience } from "@/types/experience";

type ExperienceGridProps = {
  experiences: Experience[];
};

export function ExperienceGrid({ experiences }: ExperienceGridProps) {
  if (experiences.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
        <h2 className="text-lg font-semibold text-stone-900">
          No se encontraron experiencias
        </h2>
        <p className="mt-2 text-sm text-stone-500">
          Prueba ajustando la busqueda o los filtros activos.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}

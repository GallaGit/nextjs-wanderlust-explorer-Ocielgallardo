import { Suspense } from "react";
import { ExperiencesExplorer } from "@/components/experiences/ExperiencesExplorer";
import {
  experiences,
  getCategories,
  getUniqueCountries,
} from "@/data/experiences";

export default function ExperiencesPage() {
  return (
    <Suspense
      fallback={
        <div className="space-y-12">
          <header className="space-y-3">
            <h1 className="font-display text-2xl font-bold text-on-surface sm:text-[32px] sm:leading-10">
              Explorador de experiencias
            </h1>
            <p className="text-base leading-6 text-on-surface-variant">
              Cargando experiencias...
            </p>
          </header>
        </div>
      }
    >
      <ExperiencesExplorer
        experiences={experiences}
        categories={getCategories()}
        countries={getUniqueCountries()}
      />
    </Suspense>
  );
}

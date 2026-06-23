import { ExperienceGrid } from "@/components/experiences/ExperienceGrid";
import { FilterBar } from "@/components/experiences/FilterBar";
import { SearchBar } from "@/components/experiences/SearchBar";
import {
  experiences,
  getCategories,
  getUniqueCountries,
} from "@/data/experiences";
import { filterExperiences } from "@/lib/filterExperiences";

type ExperiencesPageProps = {
  searchParams: Promise<{
    search?: string;
    category?: string;
    destination?: string;
  }>;
};

export default async function ExperiencesPage({
  searchParams,
}: ExperiencesPageProps) {
  const params = await searchParams;
  const search = params.search ?? "";
  const category = params.category ?? "";
  const destination = params.destination ?? "";

  const filteredExperiences = filterExperiences(experiences, {
    search,
    category,
    destination,
  });

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-stone-900">
          Explorador de experiencias
        </h1>
        <p className="text-stone-600">
          {filteredExperiences.length} de {experiences.length} experiencias
          disponibles
        </p>
      </header>

      <section className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <SearchBar
          initialSearch={search}
          category={category}
          destination={destination}
        />
        <FilterBar
          categories={getCategories()}
          countries={getUniqueCountries()}
          initialCategory={category}
          initialDestination={destination}
          search={search}
        />
      </section>

      <ExperienceGrid experiences={filteredExperiences} />
    </div>
  );
}

import type { Experience, ExperienceCategory } from "@/types/experience";

export interface FilterParams {
  search?: string;
  category?: string;
  destination?: string;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function filterExperiences(
  experiences: Experience[],
  { search, category, destination }: FilterParams,
): Experience[] {
  return experiences.filter((experience) => {
    const matchesSearch =
      !search ||
      new RegExp(escapeRegExp(search), "i").test(experience.title);
    const matchesCategory =
      !category || experience.category === (category as ExperienceCategory);
    const matchesDestination =
      !destination || experience.country === destination;

    return matchesSearch && matchesCategory && matchesDestination;
  });
}

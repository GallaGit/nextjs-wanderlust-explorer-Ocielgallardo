import type { FilterParams } from "@/lib/filterExperiences";

export function buildExperiencesHref({
  search,
  category,
  destination,
}: FilterParams): string {
  const params = new URLSearchParams();

  if (search) {
    params.set("search", search);
  }

  if (category) {
    params.set("category", category);
  }

  if (destination) {
    params.set("destination", destination);
  }

  const query = params.toString();
  return query ? `/experiences?${query}` : "/experiences";
}

"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { filterExperiences } from "@/lib/filterExperiences";
import type { Experience } from "@/types/experience";

export function useFilters(experiences: Experience[]) {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";

  const [filteredExperiences, setFilteredExperiences] = useState(() =>
    filterExperiences(experiences, { search, category, destination }),
  );

  useEffect(() => {
    setFilteredExperiences(
      filterExperiences(experiences, { search, category, destination }),
    );
  }, [experiences, search, category, destination]);

  return { filteredExperiences, search, category, destination };
}

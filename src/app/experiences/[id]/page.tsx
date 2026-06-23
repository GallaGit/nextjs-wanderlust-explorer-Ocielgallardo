import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FavoriteButton } from "@/components/experiences/FavoriteButton";
import { getExperienceById } from "@/data/experiences";

type ExperienceDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { id } = await params;
  const experience = getExperienceById(id);

  if (!experience) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <Link
        href="/experiences"
        className="inline-flex text-sm font-medium text-teal-700 hover:text-teal-900"
      >
        ← Volver al explorador
      </Link>

      <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
        <div className="relative aspect-[16/9] bg-stone-100">
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1200px) 100vw, 1152px"
          />
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-teal-700">
                {experience.category}
              </p>
              <h1 className="text-3xl font-bold text-stone-900">
                {experience.title}
              </h1>
              <p className="text-stone-600">{experience.destination}</p>
            </div>

            <FavoriteButton experienceId={experience.id} />
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-stone-700">
            <span className="rounded-full bg-stone-100 px-3 py-1">
              ★ {experience.rating.toFixed(1)} valoracion
            </span>
            <span className="rounded-full bg-stone-100 px-3 py-1">
              ${experience.price} por persona
            </span>
          </div>

          <p className="max-w-3xl leading-7 text-stone-700">
            {experience.description}
          </p>
        </div>
      </div>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExperienceDetailActions } from "@/components/experiences/ExperienceDetailActions";
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
        className="inline-flex text-sm font-semibold text-secondary transition hover:opacity-80"
      >
        ← Volver al explorador
      </Link>

      <div className="overflow-hidden rounded-xl bg-surface shadow-ambient">
        <div className="relative aspect-[4/3] bg-surface-container-low sm:aspect-[16/9]">
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1200px) 100vw, 1280px"
          />
        </div>

        <div className="space-y-6 p-5 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wide text-secondary uppercase">
                {experience.category}
              </p>
              <h1 className="font-display text-2xl font-bold text-on-surface sm:text-[32px] sm:leading-10">
                {experience.title}
              </h1>
              <p className="text-base text-on-surface-variant">
                {experience.destination}
              </p>
            </div>

            <ExperienceDetailActions experienceId={experience.id} />
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-surface-container-low px-3 py-1.5 font-bold text-on-surface">
              <span className="text-tertiary">★</span>{" "}
              {experience.rating.toFixed(1)} valoracion
            </span>
            <span className="rounded-full bg-surface-container-low px-3 py-1.5 font-semibold text-on-surface-variant">
              ${experience.price} por persona
            </span>
          </div>

          <p className="max-w-3xl text-base leading-7 text-on-surface-variant">
            {experience.description}
          </p>
        </div>
      </div>
    </article>
  );
}

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { activityPhotos } from "@/lib/data";

export function ActivitySection() {
  return (
    <Section
      id="activity"
      index="05"
      eyebrow="Outside the IDE"
      title="After the laptop closes."
      description="After spending the whole day sitting in front of a laptop just typing code, it feels natural to get tired and want to do something else like gaming, movies, hanging out, football, photography, and video editing."
    >
      {/* photo wall */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {activityPhotos.map((photo, i) => (
          <Reveal key={photo.src} delay={Math.min(i * 30, 300)} as="div">
            <figure className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-line bg-surface transition-colors duration-300 hover:border-line-strong">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* caption on hover */}
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 bg-gradient-to-t from-canvas via-canvas/80 to-transparent p-3 font-mono text-label-sm uppercase tracking-label-sm text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {photo.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

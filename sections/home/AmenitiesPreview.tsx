import { amenities } from '@/constants/data';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Stagger, StaggerItem } from '@/components/animation/Reveal';

export function AmenitiesPreview() {
  return (
    <section className="section-py bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="World-Class Amenities"
          title="Everything You Need, Beautifully Provided"
          description="Thoughtful facilities designed to make every moment of your stay effortless and indulgent."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {amenities.map((amenity) => (
            <StaggerItem key={amenity.title}>
              <article className="group h-full rounded-2xl border border-forest-100 bg-cream-50 p-6 transition-all duration-400 hover:-translate-y-1 hover:border-gold-300 hover:bg-white hover:shadow-soft-lg">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-800 text-gold-300 transition-all duration-400 group-hover:bg-gold-400 group-hover:text-forest-950">
                  <amenity.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-forest-800">
                  {amenity.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-700/70">
                  {amenity.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

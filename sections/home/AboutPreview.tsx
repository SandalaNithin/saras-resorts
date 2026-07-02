import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/animation/Reveal';
import { SectionHeading } from '@/components/shared/SectionHeading';

const highlights = [
  { icon: Sparkles, label: 'Organic Kitchen Garden' },
  { icon: Sparkles, label: 'Private Lake Access' },
  { icon: Sparkles, label: 'Curated Nature Trails' },
  { icon: Sparkles, label: 'Dedicated Event Concierge' },
];

export function AboutPreview() {
  return (
    <section className="section-py bg-cream-100">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right" className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-soft-lg">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1582719508461-5d28e05d5d31?auto=format&fit=crop&w=1000&q=80"
                  alt="Saras Resorts architecture and gardens"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-forest-800 px-6 py-5 text-white shadow-soft-lg sm:block md:-right-6">
              <p className="font-serif text-3xl font-semibold">15+</p>
              <p className="text-xs uppercase tracking-wider text-gold-300">Years of Care</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About Saras Resorts"
              title="A Sanctuary Crafted Around Nature"
              description="Nestled in the serene landscape of Peddapur, Saras Resorts is more than a destination — it is a feeling. We blend the warmth of Indian hospitality with the calm of untouched nature."
              align="left"
            />

            <Stagger className="mt-8 space-y-6" stagger={0.15}>
              <StaggerItem className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-50 text-forest-800">
                  <Target className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-forest-800">Our Mission</h3>
                  <p className="mt-1 text-sm leading-relaxed text-forest-700/75">
                    To create unforgettable escapes where guests reconnect with nature, loved ones
                    and themselves — without compromising on luxury.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-50 text-forest-800">
                  <Eye className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-forest-800">Our Vision</h3>
                  <p className="mt-1 text-sm leading-relaxed text-forest-700/75">
                    To be Telangana&apos;s most loved nature resort — a benchmark for sustainable
                    luxury and heartfelt hospitality.
                  </p>
                </div>
              </StaggerItem>
            </Stagger>

            <Stagger className="mt-8 grid grid-cols-2 gap-3" stagger={0.1}>
              {highlights.map((h) => (
                <StaggerItem
                  key={h.label}
                  className="flex items-center gap-2 rounded-xl bg-white/70 px-4 py-3 text-sm font-medium text-forest-800 shadow-soft"
                >
                  <h.icon className="h-4 w-4 text-gold-500" />
                  {h.label}
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.2} className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-forest-800 transition-colors hover:text-gold-600"
              >
                Discover Our Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

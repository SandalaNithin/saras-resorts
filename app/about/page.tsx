import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/animation/Reveal';
import { CTABanner } from '@/sections/home/CTABanner';
import { stats, timeline, coreValues } from '@/constants/data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover the story of Saras Resorts — a premium luxury resort in Peddapur, Telangana built on heartfelt hospitality, sustainable luxury and a deep love for nature.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Saras Resorts"
        description="A journey of hospitality rooted in nature, community and an unwavering commitment to excellence."
        image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="section-py bg-cream-100">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="right">
              <div className="relative overflow-hidden rounded-3xl shadow-soft-lg">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
                    alt="Saras Resorts villa exterior"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="The Beginning"
                title="A Resort Born From a Love for Nature"
                align="left"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-forest-700/80">
                <p>
                  Saras Resorts began in 2009 as a quiet boutique getaway on the outskirts of
                  Peddapur. What started with just twelve rooms and a simple vision — to offer
                  city-weary travellers a place to breathe — has grown into one of Telangana&apos;s
                  most cherished luxury resorts.
                </p>
                <p>
                  Today, across fifty rooms and suites, sprawling gardens and a private lake, we
                  remain guided by the same belief: that true luxury is not about excess, but about
                  presence, care and connection. Every corner of Saras is designed to slow you down
                  and bring you closer to the natural world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-forest-800">
        <div className="container">
          <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4" stagger={0.12}>
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <p className="font-serif text-4xl font-semibold text-gold-300 md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-wider text-cream-100/70">
                  {s.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-py bg-cream-100">
        <div className="container">
          <SectionHeading
            eyebrow="Our Journey"
            title="A Timeline of Growth"
            description="Key milestones that shaped Saras Resorts into the destination it is today."
          />
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 h-full w-px bg-forest-200 md:left-1/2 md:-translate-x-1/2" />
            <Stagger className="space-y-12" stagger={0.15}>
              {timeline.map((item, i) => (
                <StaggerItem key={item.year}>
                  <div
                    className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                      i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                      <div className="rounded-2xl bg-white p-6 shadow-soft">
                        <span className="font-serif text-2xl font-semibold text-gold-600">
                          {item.year}
                        </span>
                        <h3 className="mt-2 font-serif text-lg font-semibold text-forest-800">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-forest-700/75">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <span className="absolute left-4 top-2 flex h-3 w-3 -translate-x-1/2 rounded-full bg-gold-400 ring-4 ring-cream-100 md:left-1/2" />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core Values"
            description="The principles that guide every decision, every detail and every guest interaction."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {coreValues.map((v) => (
              <StaggerItem key={v.title}>
                <article className="h-full rounded-2xl border border-forest-100 bg-cream-50 p-6 text-center transition-all hover:-translate-y-1 hover:shadow-soft-lg">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-800 text-gold-300">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-forest-800">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-700/70">
                    {v.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-py bg-cream-100">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal direction="right" className="rounded-3xl bg-forest-800 p-8 text-white md:p-10">
              <h3 className="font-serif text-2xl font-semibold text-gold-300">Our Mission</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream-100/85">
                To create unforgettable escapes where guests reconnect with nature, their loved
                ones and themselves — without ever compromising on comfort or luxury. We exist to
                make every stay feel personal, peaceful and profoundly restorative.
              </p>
            </Reveal>
            <Reveal direction="left" className="rounded-3xl border border-forest-200 bg-white p-8 md:p-10">
              <h3 className="font-serif text-2xl font-semibold text-forest-800">Our Vision</h3>
              <p className="mt-4 text-sm leading-relaxed text-forest-700/80">
                To be Telangana&apos;s most loved nature resort — a benchmark for sustainable
                luxury and heartfelt hospitality. We envision a future where every guest leaves
                feeling restored, inspired and eager to return.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/animation/Reveal';
import { ContactForm } from '@/components/shared/ContactForm';
import { siteConfig } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Saras Resorts in Peddapur, Telangana. Book your stay, plan an event or ask us anything — we would love to hear from you.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Whether it is a booking, an event enquiry or simply a question — our team is here to help."
        image="https://images.unsplash.com/photo-1551882547-ff40c63fe5d0?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="section-py bg-cream-100">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="right">
              <SectionHeading
                eyebrow="Send a Message"
                title="Plan Your Stay or Event"
                description="Fill in the form below and our reservations team will respond within 24 hours."
                align="left"
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="space-y-5">
                <div className="rounded-3xl bg-white p-7 shadow-soft">
                  <h3 className="font-serif text-xl font-semibold text-forest-800">
                    Contact Details
                  </h3>
                  <ul className="mt-5 space-y-4">
                    <li className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-forest-50 text-forest-800">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                          Address
                        </p>
                        <p className="mt-1 text-sm text-forest-700/80">
                          {siteConfig.address.full}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-forest-50 text-forest-800">
                        <Phone className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                          Phone
                        </p>
                        <p className="mt-1 text-sm text-forest-700/80">
                          {siteConfig.contact.phone}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-forest-50 text-forest-800">
                        <Mail className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                          Email
                        </p>
                        <p className="mt-1 text-sm text-forest-700/80">
                          {siteConfig.contact.email}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-forest-50 text-forest-800">
                        <Clock className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                          Business Hours
                        </p>
                        <p className="mt-1 text-sm text-forest-700/80">
                          Reception: {siteConfig.hours.reception}
                        </p>
                        <p className="text-sm text-forest-700/80">
                          Check-in: {siteConfig.hours.checkIn} · Check-out:{' '}
                          {siteConfig.hours.checkOut}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="overflow-hidden rounded-3xl shadow-soft">
                  <div className="relative h-[300px] w-full">
                    <iframe
                      title="Saras Resorts location map"
                      src={siteConfig.mapEmbed}
                      className="h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

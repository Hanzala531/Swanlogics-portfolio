import React from 'react';
const teamMembers = [1, 2, 3, 4];
export default function TeamSection() {
  return (
    <section id='random' className="container-px mx-auto max-w-[1400px] py-24">
      <h2 className="text-center text-4xl leading-tight sm:text-5xl">
        Teamwork makes the dream work
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div
            key={member}
            className="relative h-[340px] overflow-hidden rounded-[24px] bg-gradient-to-br from-brand-purple/50 via-brand-purple/20 to-brand-lime/40"
          >
            <div className="absolute inset-6 rounded-[18px] border border-white/20" />
          </div>
        ))}
      </div>
      <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,2.3fr)_minmax(0,1fr)] lg:items-center">
        <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-brand-navy text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 via-brand-navy/20 to-brand-purple/10" />
          <div className="absolute bottom-8 left-8 right-8 rounded-[22px] bg-white p-8 text-brand-ink shadow-surface">
            <p className="text-2xl font-bold">William C. Krueger</p>
            <p className="mt-3 font-hanken text-base leading-relaxed text-brand-gray">
              Great things are never done by one person; they're done by a team of people working together.
            </p>
          </div>
          <button
            type="button"
            className="absolute right-8 top-8 grid h-16 w-16 place-items-center rounded-full bg-brand-purple text-white"
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
              <path d="M5 12h14" strokeLinecap="round" />
              <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="space-y-6 rounded-[28px] bg-white p-8 shadow-surface">
          <h3 className="text-2xl">Where quotes meet purpose.</h3>
          <p className="font-hanken text-base text-brand-gray">
            Explore our culture, process, and the people who bring your brand to life every step of the way.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-3 rounded-full bg-brand-purple px-6 py-4 font-dewi text-sm uppercase tracking-[0.3em] text-white"
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
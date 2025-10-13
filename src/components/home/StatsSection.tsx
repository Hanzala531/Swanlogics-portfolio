import React from "react";

type Stat = {
  label: string;
  value: string;
  suffix?: string;
};

const stats: Stat[] = [
  { label: "Satisfied Clients", value: "3.4", suffix: "k+" },
  { label: "Marketing Experts", value: "85", suffix: "k" },
  { label: "Brands Served", value: "180", suffix: "k" },
  { label: "Successful Campaigns", value: "8.5", suffix: "k" },
];

export default function StatsSection() {
  return (
    <section className="container-px mx-auto max-w-[1400px] py-10">
      <div className="grid gap-10 border-brand-purple/40 pt-10 text-brand-ink md:grid-cols-4 ml-6 sm:ml-0">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-4">
            <p className="text-5xl font-bold sm:text-6xl">
              {stat.value}
              {stat.suffix && (
                <span className="text-brand-purple">{stat.suffix}</span>
              )}
            </p>
            <p className="font-hanken text-lg text-brand-gray">{stat.label}</p>
            <div className="h-px w-full bg-brand-purple/40" />
          </div>
        ))}
      </div>
    </section>
  );
}

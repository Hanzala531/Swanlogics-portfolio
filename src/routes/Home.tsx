import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import AboutSection from '../components/home/AboutSection'
import { PortfolioShowcase } from '../components/home/portfolio-showcase';
import { PortfolioGrid } from '../components/home/portfolio-grid';
import { ServicesSection } from '../components/home/services-section';
import { TeamSection as TeamShowcase } from '../components/home/team-section';
import { Footer as FooterSimple } from '../components/layout/footer';

/**
 * Landing page composition.
 */
export default function Home() {
  return (
    <div className="min-h-screen  bg-white">
      <Navbar />
      <main>
        {/* Hero area with headline and video placeholder */}
        <HeroSection />

        {/* Who we are + big headline */}
        <AboutSection />

        {/* Stats row under the intro */}
        <StatsSection />

        {/* Projects showcase matching the design */}
        <PortfolioShowcase />
        {/* <PortfolioGrid /> */}

        {/* Services ring section on dark background */}
        <ServicesSection />

        {/* Team grid and quote card */}
        <TeamShowcase />
      </main>
      <FooterSimple />
    </div>
  );
}

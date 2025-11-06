import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import VideoBackground from './VideoBackground';
import Globe from './Globe';

/**
 * Hero section with split layout and immersive background video.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center">
      <VideoBackground
        src="https://player.vimeo.com/external/854061.sd.mp4?s=8c7f0bb33d7df1c5d77e45b9da8f8f0f5b9f6d7a&profile_id=164&oauth2_token_id=57447761"
      />

      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-10 py-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="font-semibold text-brand-green">
            Web Design • Branding • UI/UX • Code & No-Code
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Crafting modern brands & websites that{' '}
            <span className="text-brand-purple">convert</span>
          </h1>
          <p className="max-w-prose text-white/80">
            SwanLogics is a design & engineering studio specializing in digital branding, responsive web
            development, and marketing experiences for growth-minded companies.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="lg">Get a Quote</Button>
            <Button size="lg" variant="outline" className="border-brand-purple">
              Our Work
            </Button>https://player.vimeo.com/external/854061.sd.mp4?s=8c7f0bb33d7df1c5d77e45b9da8f8f0f5b9f6d7a&profile_id=164&oauth2_token_id=57447761
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex md:justify-end"
        >
          <Globe />
        </motion.div>
      </div>
    </section>
  );
}

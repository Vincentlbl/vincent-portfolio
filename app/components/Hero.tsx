'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Typewriter from './Typewriter';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../lib/data';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallaxe : le fond descend moins vite que le contenu, le texte s'estompe
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Animation d'entrée : fondu + montée, avec un délai différent par élément
  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      {/* Fond : grille + halos */}
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="bg-grid absolute inset-0" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </motion.div>

      <motion.div style={{ y: textY, opacity }} className="mx-auto w-full max-w-6xl px-6 py-24">
        <motion.div {...fadeUp(0)} className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {profile.badge}
        </motion.div>

        <motion.p {...fadeUp(0.05)} className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
          {profile.name} · {profile.role}
        </motion.p>

        <motion.h1 {...fadeUp(0.1)} className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tighter sm:text-6xl md:text-7xl">
          Je développe des
          <br />
          <span className="inline-block min-h-[2.1em] sm:min-h-[1.05em]">
            <Typewriter words={profile.typewriter} className="text-gradient" />
          </span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
          {profile.intro}
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projets" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-emerald-300">
            Voir mes projets
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium transition-colors hover:border-white/40">
            <Mail size={18} /> Me contacter
          </a>
          <div className="flex items-center gap-1 pl-2 text-neutral-400">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 transition-colors hover:text-white">
              <GithubIcon size={22} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 transition-colors hover:text-white">
              <LinkedinIcon size={22} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Indicateur "Scroll" */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-neutral-600 md:flex" aria-hidden>
        Scroll
        <span className="scroll-line h-10 w-px bg-gradient-to-b from-neutral-500 to-transparent" />
      </div>
    </section>
  );
}
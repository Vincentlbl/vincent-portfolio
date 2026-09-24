'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../lib/data';

const links = [
  { href: '#experience', label: 'Expérience' },
  { href: '#projets', label: 'Projets' },
  { href: '#approche', label: 'Approche' },
  { href: '#parcours', label: 'Parcours' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Détecte le scroll pour afficher le fond flouté
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
          <span className="text-emerald-400">.</span>
        </a>

        {/* Liens desktop */}
        <div className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full border border-white/15 px-4 py-1.5 text-white transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10">
            Me contacter
          </a>
        </div>

        {/* Bouton burger mobile */}
        <button
          type="button"
          className="-mr-2 p-2 text-neutral-300 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menu mobile animé */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6">
              {[...links, { href: '#contact', label: 'Me contacter' }].map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-lg text-neutral-300 hover:text-white">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
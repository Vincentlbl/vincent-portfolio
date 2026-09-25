import type { ReactNode } from 'react';
import Reveal from './Reveal';

// Titre de section : petit surtitre vert + grand titre + texte optionnel
export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-neutral-400">{text}</p>}
    </Reveal>
  );
}

// Pastille de techno
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-neutral-300">
      {children}
    </span>
  );
}
import { ArrowUpRight, Briefcase, Lock } from 'lucide-react';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';
import { GithubIcon } from './Icons';
import { SectionHeader, Tag } from './ui';
import { persoProjects, proProjects, profile, type Project } from '../lib/data';

// Carte d'un projet StreamMind (code privé)
function ProCard({ p }: { p: Project }) {
  return (
    <SpotlightCard className="flex h-full flex-col p-7">
      <div className="mb-5 flex items-center justify-between">
        <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">StreamMind</span>
        <Lock size={14} className="text-neutral-600" aria-label="Code privé" />
      </div>
      <h4 className="text-lg font-semibold leading-snug">{p.name}</h4>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">{p.summary}</p>
      {p.highlights && (
        <ul className="mt-5 space-y-2 text-sm text-neutral-300">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="text-emerald-400">→</span>
              {h}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </SpotlightCard>
  );
}

// Carte d'un projet perso : cliquable si un repo existe
function PersoCard({ p }: { p: Project }) {
  const card = (
    <SpotlightCard className="flex h-full flex-col p-7">
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-lg font-semibold">{p.name}</h4>
        {p.repoUrl && (
          <ArrowUpRight size={20} className="shrink-0 text-neutral-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">{p.summary}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </SpotlightCard>
  );

  if (!p.repoUrl) return card;
  return (
    <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
      {card}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeader
        eyebrow="Projets"
        title="Ce que j’ai construit"
        text="Les outils livrés chez StreamMind (code privé), puis mes projets d’école et perso sur GitHub."
      />

      <h3 className="mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-neutral-500">
        <Briefcase size={16} /> En entreprise
      </h3>
      <div className="grid gap-5 lg:grid-cols-3">
        {proProjects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08} className="h-full">
            <ProCard p={p} />
          </Reveal>
        ))}
      </div>

      <h3 className="mb-6 mt-16 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-neutral-500">
        <GithubIcon size={16} /> École & perso
      </h3>
      <div className="grid gap-5 md:grid-cols-2">
        {persoProjects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06} className="h-full">
            <PersoCard p={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white">
          Tous mes repos sur GitHub <ArrowUpRight size={16} />
        </a>
      </Reveal>
    </section>
  );
}
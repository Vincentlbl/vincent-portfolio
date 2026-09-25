import { MapPin } from 'lucide-react';
import Reveal from './Reveal';
import { SectionHeader, Tag } from './ui';
import { experiences } from '../lib/data';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeader
        eyebrow="Expérience"
        title="Là où j’ai appris à livrer"
        text="Une année d’alternance dans la fintech, précédée de missions d’intégration et de SEO."
      />

      {/* La bordure gauche de la liste forme la ligne de la frise */}
      <ol className="relative border-l border-white/10">
        {experiences.map((exp, i) => (
          <li key={exp.company} className="relative pb-14 pl-8 last:pb-0 sm:pl-12">
            {/* Point sur la frise : vert si poste actuel */}
            <span
              aria-hidden
              className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${
                exp.current ? 'bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.15)]' : 'bg-neutral-600'
              }`}
            />
            <Reveal delay={i * 0.05}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold">
                  {exp.role} <span className="text-neutral-500">· {exp.company}</span>
                </h3>
                <p className="font-mono text-sm text-neutral-500">{exp.period}</p>
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral-500">
                <MapPin size={14} /> {exp.place}
              </p>
              <ul className="mt-5 space-y-2.5 text-neutral-400">
                {exp.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
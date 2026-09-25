import { Bug, FileCode2, Workflow } from 'lucide-react';
import type { Tech } from '../lib/data';

const lucideIcons = { workflow: Workflow, file: FileCode2, bug: Bug };

function TechItem({ tech }: { tech: Tech }) {
  const Icon = tech.lucide ? lucideIcons[tech.lucide] : null;
  return (
    <div className="flex shrink-0 items-center gap-3 text-neutral-500 transition-colors duration-300 hover:text-white">
      {tech.icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`https://cdn.simpleicons.org/${tech.icon}/a3a3a3`} alt="" className="h-6 w-6" loading="lazy" />
      ) : Icon ? (
        <Icon size={24} strokeWidth={1.75} />
      ) : null}
      <span className="whitespace-nowrap text-lg font-medium tracking-wide">{tech.name}</span>
    </div>
  );
}

// Carrousel infini : la liste est dupliquée et translatée de -50 %
export default function Marquee({ items }: { items: Tech[] }) {
  return (
    <div className="marquee-mask relative overflow-hidden py-8">
      <div className="animate-marquee flex w-max gap-14 pr-14">
        {[...items, ...items].map((tech, i) => (
          <TechItem key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}
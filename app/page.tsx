import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Reveal from './components/Reveal';
import { stats, techStack } from './lib/data';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />

        {/* Stack */}
        <section aria-label="Technologies" className="border-y border-white/5 bg-white/[0.01]">
          <Marquee items={techStack} />
        </section>

        {/* Chiffres clés */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="bg-neutral-950 p-6 sm:p-8">
                <p className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm text-neutral-500">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Espace temporaire */}
        <div className="h-[50vh]" />
      </main>
    </>
  );
}
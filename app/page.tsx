import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Section temporaire, haute, pour tester le scroll */}
        <section id="top" className="flex min-h-[200vh] items-start justify-center pt-60">
          <h1 className="text-4xl font-bold tracking-tight">
            Vincent Lebel<span className="text-emerald-400">.</span>
          </h1>
        </section>
      </main>
    </>
  );
}
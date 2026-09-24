import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        {/* Espace temporaire pour tester la parallaxe au scroll */}
        <div className="h-screen" />
      </main>
    </>
  );
}
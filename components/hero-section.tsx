import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1600005036530-a8d6a2352924?q=80&w=2070')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Preserving Palestinian Musical Heritage
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
          Discover traditional music and songs that tell the story of a people
        </p>
        <Link href="/collection">
          <Button size="lg" className="text-lg">
            View Collection
          </Button>
        </Link>
      </div>
    </section>
  );
}
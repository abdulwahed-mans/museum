import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Music2 } from 'lucide-react';

const featuredSongs = [
  {
    id: '1',
    title: 'Dal\'ona',
    type: 'Folk',
    region: 'Palestine',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070'
  },
  {
    id: '2',
    title: 'Zarif Al-Toul',
    type: 'Traditional',
    region: 'Jerusalem',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070'
  },
  {
    id: '3',
    title: 'Ala Dal\'ona',
    type: 'Folk',
    region: 'Galilee',
    imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070'
  }
];

export function FeaturedSongs() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured Songs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredSongs.map((song) => (
          <Card key={song.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img
                src={song.imageUrl}
                alt={song.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music2 className="h-5 w-5" />
                {song.title}
              </CardTitle>
              <CardDescription>
                {song.type} • {song.region}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add play button or additional content here */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
import { useTranslation } from '../i18n';
import { HeroSection } from '@/components/hero-section';
import { FeaturedSongs } from '@/components/featured-songs';
import { Navigation } from '@/components/navigation';

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);

  return (
    <main className="min-h-screen bg-background">
      <Navigation lng={lng} />
      <HeroSection lng={lng} />
      <FeaturedSongs lng={lng} />
    </main>
  );
}
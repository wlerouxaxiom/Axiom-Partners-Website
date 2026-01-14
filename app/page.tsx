import VideoHero from '@/components/sections/VideoHero';
import ValueProposition from '@/components/sections/ValueProposition';
import ServicesOverview from '@/components/sections/ServicesOverview';

export default function Home() {
  return (
    <div className="flex flex-col">
      <VideoHero />
      <ValueProposition />
      <ServicesOverview />
    </div>
  );
}

import VideoHero from '@/components/sections/VideoHero';
import ValueProposition from '@/components/sections/ValueProposition';
import ServicesOverview from '@/components/sections/ServicesOverview';
import IndustriesOverview from '@/components/sections/IndustriesOverview';
import ProBonoSection from '@/components/sections/ProBonoSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <VideoHero />
      <ValueProposition />
      <ServicesOverview />
      <IndustriesOverview />
      <ProBonoSection />
    </div>
  );
}
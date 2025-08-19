import Hero from '@/components/sections/Hero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import IndustriesOverview from '@/components/sections/IndustriesOverview';
import FoundersSpotlight from '@/components/sections/FoundersSpotlight';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesOverview />
      <IndustriesOverview />
      <FoundersSpotlight />
    </div>
  );
}
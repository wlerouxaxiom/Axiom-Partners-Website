import VideoHero from '@/components/sections/VideoHero';
import WhatIsAxiom from '@/components/sections/ValueProposition';
import ServicesOverview from '@/components/sections/ServicesOverview';

export default function Home() {
  return (
    <div className="flex flex-col">
      <VideoHero />
      <WhatIsAxiom />
      <ServicesOverview />
    </div>
  );
}

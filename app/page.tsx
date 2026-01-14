import VideoHero from '@/components/sections/VideoHero';
import ValueProposition from '@/components/sections/ValueProposition';

export default function Home() {
  return (
    <div className="flex flex-col">
      <VideoHero />
      <ValueProposition />
    </div>
  );
}

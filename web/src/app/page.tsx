import { Hero } from "@/components/landing/Hero";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { ValueProp } from "@/components/landing/ValueProp";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ValueProp />
      <FeatureGrid />
    </div>
  );
}

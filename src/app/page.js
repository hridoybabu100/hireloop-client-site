import Banner from "@/components/Banner";
import CallToAction from "@/components/CallToAction";
import FeaturesSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";
import { div } from "framer-motion/m";


export default function Home() {
  return (
    <div>
    <Banner></Banner>
    <StatsSection></StatsSection>
    <FeaturesSection></FeaturesSection>
    <PricingSection></PricingSection>
    <CallToAction></CallToAction>
    </div>
  );
}

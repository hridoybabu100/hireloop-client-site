import Banner from "@/components/Banner";
import CallToAction from "@/components/CallToAction";
import FeaturesSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";


export default function Home() {
  return (
    <>
    <Banner></Banner>
    <StatsSection></StatsSection>
    <FeaturesSection></FeaturesSection>
    <PricingSection></PricingSection>
    <CallToAction></CallToAction>
    </>
  );
}

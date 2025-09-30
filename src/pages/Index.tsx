import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorytellingSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import BenefitsSection from "@/components/BenefitsSection";
import DetailedBenefitsSection from "@/components/DetailedBenefitsSection";
import AuthoritySection from "@/components/AuthoritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferCard from "@/components/OfferCard";
import GuaranteeSection from "@/components/GuaranteeSection";
import UrgencySection from "@/components/UrgencySection";
import PricingSection from "@/components/PricingSection";
import FinalCTASection from "@/components/FinalCTASection";
import ScrollReveal from "@/components/ScrollReveal";
import DynamicNotifications from "@/components/DynamicNotifications";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ScrollReveal />
      <DynamicNotifications />
      <HeroSection />
      <StorytellingSection />
      <BeforeAfterSection />
      <BenefitsSection />
      <DetailedBenefitsSection />
      <AuthoritySection />
      <TestimonialsSection />
      <OfferCard />
      <GuaranteeSection />
      <UrgencySection />
      <PricingSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;

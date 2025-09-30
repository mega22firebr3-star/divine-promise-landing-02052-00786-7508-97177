import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      <Header />
      <div style={{ paddingTop: '64px' }}>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="storytelling">
          <StorytellingSection />
        </section>
        <section id="before-after">
          <BeforeAfterSection />
        </section>
        <section id="benefits">
          <BenefitsSection />
        </section>
        <DetailedBenefitsSection />
        <AuthoritySection />
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="offer">
          <OfferCard />
        </section>
        <GuaranteeSection />
        <UrgencySection />
        <PricingSection />
        <FinalCTASection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;

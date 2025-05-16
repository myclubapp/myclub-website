
import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PersonasSection from "@/components/PersonasSection";
import CtaSection from "@/components/CtaSection";
import MissionSection from "@/components/MissionSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppPreviewSection from "@/components/AppPreviewSection";
import AppFeaturesSection from "@/components/AppFeaturesSection";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <HeroSection />
        <AppPreviewSection />
        <MissionSection />
        {/* <PersonasSection /> */}
        {/* <FeaturesSection /> */}
        {/* <AppFeaturesSection /> */}
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

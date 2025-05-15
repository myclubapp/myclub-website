
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import PersonasSection from '../components/PersonasSection';
import PricingSection from '../components/PricingSection';
import MissionSection from '../components/MissionSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PersonasSection />
        <PricingSection />
        <MissionSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

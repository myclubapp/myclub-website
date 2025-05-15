
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from './Logo';

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-br from-myclub-blue to-myclub-darkblue relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-myclub-lightblue rounded-full opacity-10"></div>
        <div className="absolute bottom-10 left-20 w-60 h-60 bg-white rounded-full opacity-5"></div>
      </div>
      
      <div className="container-custom py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Logo variant="light" size="md" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit, Deinen Verein zu digitalisieren?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10">
            Starte Deine 30-tägige kostenlose Testphase und entdecke, wie myclub 
            Dein Vereinsleben transformieren kann.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-myclub-blue hover:bg-gray-100 text-lg px-8 py-6 rounded-full">
              Kostenlos starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full">
              Demo anfordern
            </Button>
          </div>
          
          <p className="mt-8 text-white/70">
            Schließe Dich über 500+ Vereinen an, die bereits mit myclub arbeiten
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

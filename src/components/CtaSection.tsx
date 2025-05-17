import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from './Logo';

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-myclub-blue/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-20 w-60 h-60 bg-myclub-purple/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container-custom py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Logo variant="light" size="md" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für die digitale Transformation deines Vereins?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Starte deine 30-tägige kostenlose Testphase und erlebe, wie myclub 
            dein Vereinsmanagement revolutioniert.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-myclub-blue text-white hover:bg-myclub-darkblue text-lg px-8 py-6 rounded-full">
              Kostenlos starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full">
              Demo anfordern
            </Button>
          </div>
          
          <p className="mt-8 text-gray-400">
            Schliesse dich über 500+ Vereinen an, die bereits mit myclub erfolgreich arbeiten
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

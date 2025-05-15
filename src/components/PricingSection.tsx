
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "my club | small",
    description: "Ideal für kleine Vereine bis 75 Mitglieder",
    monthlyPrice: "4.90",
    yearlyPrice: "49.00",
    features: [
      "1 Mannschaft",
      "Benutzerverwaltung",
      "Training & Events",
      "News-System",
      "Mobile Apps",
      "E-Mail Support"
    ],
    cta: "Jetzt starten",
    ctaVariant: "outline",
    popular: false,
    coverage: "Erfasst ca. 50% aller Vereine"
  },
  {
    name: "my club | medium",
    description: "Perfekt für Vereine mit 76-200 Mitgliedern",
    monthlyPrice: "12.90",
    yearlyPrice: "129.00",
    features: [
      "5 Mannschaften",
      "Alles aus small",
      "Helfer-Events",
      "Championship Module",
      "Push-Benachrichtigungen",
      "Prioritäts-Support"
    ],
    cta: "Empfohlen",
    ctaVariant: "default",
    popular: true,
    coverage: "Erfasst ca. 35% aller Vereine"
  },
  {
    name: "my club | large",
    description: "Für grosse Vereine ab 201 Mitglieder",
    monthlyPrice: "19.90",
    yearlyPrice: "219.00",
    features: [
      "Unbegrenzte Mannschaften",
      "Alles aus medium",
      "Vollständiges Reporting",
      "API-Zugriff",
      "White-Label Option",
      "Dedizierter Account Manager"
    ],
    cta: "Kontaktieren",
    ctaVariant: "outline",
    popular: false,
    coverage: "Erfasst ca. 15% aller Vereine"
  }
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);
  
  return (
    <section id="preise" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparente Preisgestaltung</h2>
          <p className="text-lg text-gray-600 mb-10">
            Wählen Sie den passenden Plan für Ihren Verein. Alle Pläne beinhalten 
            eine 30-tägige kostenlose Testphase.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isYearly ? 'bg-white shadow-sm text-myclub-blue' : 'text-gray-600'}`}
              >
                Monatlich
              </button>
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isYearly ? 'bg-white shadow-sm text-myclub-blue' : 'text-gray-600'}`}
              >
                Jährlich
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl border ${plan.popular ? 'border-myclub-purple shadow-lg shadow-myclub-purple/5' : 'border-gray-200'} p-8 relative`}
            >
              {plan.popular && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-myclub-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                  Beliebt
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">CHF {isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                <span className="text-gray-600">/{isYearly ? 'Jahr' : 'Monat'}</span>
                {isYearly && <p className="text-sm text-myclub-green mt-1">Jährliche Abrechnung</p>}
              </div>
              
              <p className="text-sm text-myclub-blue mb-4 font-medium">{plan.coverage}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-myclub-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.ctaVariant as "default" | "outline"} 
                className={`w-full ${plan.popular ? 'bg-myclub-purple hover:bg-myclub-darkpurple text-white' : 
                plan.ctaVariant === "outline" ? 'border-myclub-blue text-myclub-blue hover:bg-myclub-blue hover:text-white' : ''}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gray-50 p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Benötigen Sie eine individuelle Lösung?</h3>
          <p className="text-gray-600 mb-6">
            Kontaktieren Sie uns für maßgeschneiderte Pakete, die genau auf die Bedürfnisse 
            Ihres Vereins zugeschnitten sind.
          </p>
          <Button variant="outline" className="border-myclub-blue text-myclub-blue hover:bg-myclub-blue hover:text-white">
            Kontakt aufnehmen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Ideal für kleine Vereine bis 50 Mitglieder",
    monthlyPrice: "49",
    yearlyPrice: "39",
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
    popular: false
  },
  {
    name: "Premium",
    description: "Perfekt für mittelgroße Vereine bis 200 Mitglieder",
    monthlyPrice: "99",
    yearlyPrice: "79",
    features: [
      "5 Mannschaften",
      "Alles aus Starter",
      "Helfer-Events",
      "Championship Module",
      "Push-Benachrichtigungen",
      "Prioritäts-Support"
    ],
    cta: "Empfohlen",
    ctaVariant: "default",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Für große Vereine mit unbegrenzten Mitgliedern",
    monthlyPrice: "249",
    yearlyPrice: "199",
    features: [
      "Unbegrenzte Mannschaften",
      "Alles aus Premium",
      "Vollständiges Reporting",
      "API-Zugriff",
      "White-Label Option",
      "Dedizierter Account Manager"
    ],
    cta: "Kontaktieren",
    ctaVariant: "outline",
    popular: false
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
                Jährlich <span className="text-myclub-green">-20%</span>
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
              <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">€{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                <span className="text-gray-600">/Monat</span>
                {isYearly && <p className="text-sm text-myclub-green mt-1">Jährliche Abrechnung</p>}
              </div>
              
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

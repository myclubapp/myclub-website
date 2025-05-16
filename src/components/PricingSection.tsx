
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "myclub | FREE",
    description: "Für Vereine bis 25 Mitglieder",
    monthlyPrice: "0.00",
    yearlyPrice: "0.00",
    features: [
      "Mitgliederverwaltung",
      "Unlimitierte Teams",
      "Unlimitierte Trainings",
      "Unlimitierte Veranstaltungen"
    ],
    cta: "Kostenlos starten",
    ctaVariant: "outline",
    popular: false,
    color: "bg-gray-100 text-gray-800",
    badge: "🆓"
  },
  {
    name: "myclub | STARTER",
    description: "Für Vereine 26-75 Mitglieder",
    monthlyPrice: "7.90",
    yearlyPrice: "79.00",
    features: [
      "Alle FREE Features",
     
    ],
    cta: "Jetzt starten",
    ctaVariant: "outline",
    popular: false,
    color: "bg-myclub-green text-white",
    badge: "🟢"
  },
  {
    name: "myclub | STANDARD",
    description: "Für Vereine 76-200 Mitglieder",
    monthlyPrice: "14.90",
    yearlyPrice: "149.00",
    features: [
      "Alle STARTER Features",
      "Priority Support",
      "Erweiterte Berechtigungen",
      "Chat-Funktion",
      "Zahlungsverwaltung"
    ],
    cta: "Empfohlen",
    ctaVariant: "default",
    popular: true,
    color: "bg-myclub-blue text-white",
    badge: "🔵"
  },
  {
    name: "myclub | PREMIUM",
    description: "Für Vereine ab 201 Mitglieder",
    monthlyPrice: "24.90",
    yearlyPrice: "249.00",
    features: [
      "Alle STANDARD Features",
      "Dedizierter Support",
      "Custom Branding",
      "API-Zugriff",
      "Vollständiges Reporting"
    ],
    cta: "Kontaktieren",
    ctaVariant: "outline",
    popular: false,
    color: "bg-myclub-purple text-white",
    badge: "🟣"
  }
];

const additionalModules = [
  {
    name: "⚽ Meisterschafts-Modul",
    price: "5.90",
    features: [
      "Spielplanung",
      "Navigation",
      "Resultate & Tabellen"
    ]
  },
  {
    name: "🤝 Helfer-Modul",
    price: "4.90",
    features: [
      "Helfer-Events erstellen",
      "Schichtplanung",
      "Punktesystem"
    ]
  },
  {
    name: "📱 Erweiterte Features (Bundle)",
    price: "7.90",
    features: [
      "Erweiterte Statistiken",
      "Dokumentenverwaltung",
      "Sponsoren-Management",
      "Newsletter-Tool"
    ]
  }
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section id="preise" className="section bg-black py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Transparente Preisgestaltung</h2>
          <p className="text-lg text-gray-300 mb-10">
            Wählen Sie den passenden Plan für Ihren Verein. Alle Pläne beinhalten 
            eine 30-tägige kostenlose Testphase.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gray-800 p-1 rounded-full inline-flex">
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isYearly ? 'bg-myclub-blue text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Monatlich
              </button>
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isYearly ? 'bg-myclub-blue text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Jährlich
              </button>
            </div>
          </div>
        </div>
        
        {/* Basis-Abos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Basis-Abos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-2xl border ${plan.popular ? 'border-myclub-purple' : 'border-gray-800'} bg-gray-900/60 backdrop-blur-sm p-8 relative ${plan.popular ? 'shadow-lg shadow-myclub-purple/10' : ''}`}
              >
                {plan.popular && (
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-myclub-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                    Beliebt
                  </span>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {/* <Badge className={`${plan.color} mb-3`}>{plan.badge}</Badge> */}
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">CHF {plan.name === "myclub | FREE" ? "0.00" : isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  {plan.name !== "myclub | FREE" && (
                    <span className="text-gray-400">/{isYearly ? 'Jahr' : 'Monat'}</span>
                  )}
                  {isYearly && plan.name !== "myclub | FREE" && <p className="text-sm text-myclub-green mt-1">Jährliche Abrechnung</p>}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-myclub-green mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
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
        </div>
        
        {/* Zusatzmodule */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Zusatzmodule (für alle Abos verfügbar)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalModules.map((module, index) => (
              <div key={index} className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-8 hover:border-myclub-blue/50 transition-all">
                <h3 className="text-xl font-bold mb-4 text-white">{module.name}</h3>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-white">CHF {module.price}</span>
                  <span className="text-gray-400">/Monat</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-myclub-green mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-myclub-blue text-myclub-blue hover:bg-myclub-blue hover:text-white"
                >
                  Hinzufügen
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold mb-4 text-white">Benötigen Sie eine individuelle Lösung?</h3>
          <p className="text-gray-300 mb-6">
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

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Common features for all plans
const commonFeatures = [
  "Mitgliederverwaltung",
  "Unlimitierte Teams",
  "Unlimitierte Trainings",
  "Unlimitierte Veranstaltungen",
  "Mehrsprachigkeit",
  "Wordpress Integration",
  "Push-Benachrichtigungen",
  "Open Source",
];

const plans = [
  {
    name: "myclub | micro",
    description: "Für Vereine bis 20 Mitglieder",
    monthlyPrice: "0.00",
    yearlyPrice: "0.00",
    features: [

    ],
    cta: "Kostenlos starten",
    ctaVariant: "outline",
    popular: false,
    color: "border-gray-800 bg-gray-900/60",
    badge: "🆓"
  },
  {
    name: "myclub | small",
    description: "Für Vereine ab 20-79 Mitglieder",
    monthlyPrice: "6.90",
    yearlyPrice: "69.00",
    features: [

    ],
    cta: "Jetzt starten",
    ctaVariant: "outline",
    popular: false,
    color: "border-green-800/40 bg-gray-900/60",
    badge: "🟢"
  },
  {
    name: "myclub | medium",
    description: "Für Vereine ab 80-199 Mitglieder",
    monthlyPrice: "12.90",
    yearlyPrice: "129.00",
    features: [

    ],
    cta: "Empfohlen",
    ctaVariant: "default",
    popular: true,
    color: "border-myclub-blue/40 bg-gray-900/60",
    badge: "🔵"
  },
  {
    name: "myclub | large",
    description: "Für Vereine ab 200 Mitglieder",
    monthlyPrice: "24.90",
    yearlyPrice: "249.00",
    features: [

    ],
    cta: "Kontaktieren",
    ctaVariant: "outline",
    popular: false,
    color: "border-myclub-purple/40 bg-gray-900/60",
    badge: "🟣"
  }
];

const additionalModules = [
  {
    name: "🏆 Meisterschafts-Modul",
    price: "5.90",
    features: [
      "API-Zugriff Verbandsdaten (swiss unihockey, Swiss Volley, Handball Schweiz",
      "Verbandnews Integration",
      "Maps Integration",
      "Ergebnisse & Tabellen"
    ]
  },
  {
    name: "🤝 Helfer-Modul",
    price: "4.90",
    features: [
      "Helfer-Events erstellen",
      "Schichtplanung",
      "Helfer-Punktesystem",
      "Helferpunkte Reporting"
    ]
  },
  {
    name: "📱 Erweiterte Features (Pro)",
    price: "7.90",
    features: [
      "J+S Integration",
      "Mitglieder-Beitragsverwaltung",
      "Newsletter & Reporting",
      "Trainingsplanung"
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
            Finde den passenden Plan für deinen Verein. Alle Pläne beinhalten 
            eine 30-tägige kostenlose Testphase ohne Verpflichtungen.
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
          
          {/* Common features section */}
          <div className="mb-10 p-6 border border-gray-800 backdrop-blur-sm bg-gray-900/30 rounded-2xl">
            <h4 className="text-xl font-bold mb-6 text-center text-white">In allen Abos enthalten</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {commonFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3 justify-center">
                  <Check className="h-5 w-5 text-myclub-green flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`border ${plan.popular ? 'ring-2 ring-myclub-purple ring-offset-black' : ''} ${plan.color} backdrop-blur-sm relative overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-myclub-purple text-white text-xs font-bold px-8 py-1 rotate-45 translate-x-6 translate-y-3">
                      Beliebt
                    </div>
                  </div>
                )}
                
                <CardHeader>
                 {/* <Badge className="w-fit mb-2">{plan.badge}</Badge> */}
                  <CardTitle className="text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <span className="text-3xl font-bold text-white">CHF {plan.name === "myclub | FREE" ? "0.00" : isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                    {plan.name !== "myclub | FREE" && (
                      <span className="text-gray-400">/{isYearly ? 'Jahr' : 'Monat'}</span>
                    )}
                    {isYearly && plan.name !== "myclub | FREE" && <p className="text-sm text-myclub-green mt-1">Jährliche Abrechnung</p>}
                  </div>
                  
                  {plan.features.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-gray-400 mb-3">Zusätzliche Features:</p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-myclub-green mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
                
                <CardFooter>
                 {/*<Button 
                    variant={plan.ctaVariant as "default" | "outline"} 
                    className={`w-full ${plan.popular ? 'bg-myclub-purple hover:bg-myclub-darkpurple text-white' : 
                      plan.ctaVariant === "outline" ? 'border-myclub-blue text-myclub-blue hover:bg-myclub-blue hover:text-white' : ''}`}
                  >
                    {plan.cta}
                  </Button> */}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Zusatzmodule */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Zusatzmodule (für alle Abos verfügbar)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalModules.map((module, index) => (
              <Card key={index} className="border border-gray-800 bg-gray-900/60 backdrop-blur-sm hover:border-myclub-blue/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-white">{module.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <span className="text-2xl font-bold text-white">CHF {module.price}</span>
                    <span className="text-gray-400">/Monat</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-myclub-green mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  {/* <Button 
                    variant="outline" 
                    className="w-full border-myclub-blue text-myclub-blue hover:bg-myclub-blue hover:text-white"
                  >
                    Hinzufügen
                  </Button> */}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold mb-4 text-white">Benötigst du eine individuelle Lösung?</h3>
          <p className="text-gray-300 mb-6">
            Kontaktiere uns für massgeschneiderte Pakete, die perfekt auf die Anforderungen 
            deines Vereins abgestimmt sind.
          </p>
<Button asChild variant="outline" className="border-myclub-blue text-myclub-blue hover:bg-myclub-blue hover:text-white">
  <a href="mailto:info@my-club.app">
    Kontakt aufnehmen
  </a>
</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;


import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const personas = [
  {
    icon: "🏅",
    title: "Vereinsvorstand",
    problem: "Verwaltungsaufwand reduzieren und Überblick behalten",
    solutions: [
      "Zentrale Mitgliederverwaltung",
      "Automatisierte Helfer-Punkteverwaltung",
      "Integrierte Abrechnungssysteme"
    ],
    color: "blue"
  },
  {
    icon: "🎯",
    title: "Trainer",
    problem: "Trainingsorganisation vereinfachen",
    solutions: [
      "Digitale Trainingsplanung",
      "Automatische Teilnehmer-Kommunikation",
      "Schnelle An-/Abmeldungsverwaltung"
    ],
    color: "purple"
  },
  {
    icon: "⚽",
    title: "Spieler",
    problem: "Immer informiert und organisiert sein",
    solutions: [
      "Push-Benachrichtigungen für alle Events",
      "Einfache An-/Abmeldung per Klick",
      "Persönlicher Trainingskalender"
    ],
    color: "red"
  },
  {
    icon: "👨‍👩‍👧",
    title: "Eltern",
    problem: "Kinder-Aktivitäten im Blick behalten",
    solutions: [
      "Verknüpfung mit Kinderprofilen",
      "Übersicht über alle Termine",
      "Direkte Kommunikation mit Trainern"
    ],
    color: "yellow"
  }
];

const PersonasSection = () => {
  return (
    <section id="für-wen" className="section bg-black py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Die richtige Lösung für alle</h2>
          <p className="text-lg text-gray-300 mb-10">
            Myclub wurde entwickelt, um die spezifischen Probleme und Herausforderungen
            jeder Person im Vereinsumfeld zu lösen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => {
            // Map the color names to the new tailwind classes
            const borderColorClass = 
              persona.color === "blue" ? "border-myclub-blue" :
              persona.color === "purple" ? "border-myclub-purple" :
              persona.color === "red" ? "border-myclub-red" :
              "border-myclub-yellow";
            
            return (
              <Card 
                key={index}
                className={`bg-gray-900/50 border-t-4 ${borderColorClass} hover:bg-gray-900/70 transition-colors`}
              >
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{persona.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{persona.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">Problem: {persona.problem}</p>
                  
                  <ul className="space-y-2">
                    {persona.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-2"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-14 text-center">
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Vereinfache Dein Vereinsleben für alle Beteiligten. Vom Vorstand bis zum Elternteil - 
            myclub bietet jedem die passende Lösung.
          </p>
          <a href="#" className="btn btn-primary">
            Für Deinen Verein testen
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;

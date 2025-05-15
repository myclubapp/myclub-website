
import React from 'react';
import { Badge } from "@/components/ui/badge";

const personas = [
  {
    icon: "🏅",
    title: "Vereinsvorstand",
    problem: "Verwaltungsaufwand reduzieren und Überblick behalten",
    solutions: [
      "Zentrale Mitgliederverwaltung",
      "Automatisierte Helfer-Punkteverwaltung",
      "Integrierte Abrechnungssysteme",
      "Compliance mit Eltern-Kind-Beziehungen",
      "Echtzeit-Übersicht über alle Teams"
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
      "Übungssammlung und -verwaltung",
      "Schnelle An-/Abmeldungsverwaltung",
      "Mobile Zugriff auf Spielerdaten"
    ],
    color: "green"
  },
  {
    icon: "⚽",
    title: "Spieler",
    problem: "Immer informiert und organisiert sein",
    solutions: [
      "Push-Benachrichtigungen für alle Events",
      "Einfache An-/Abmeldung per Klick",
      "Persönlicher Trainingskalender",
      "Team-News direkt aufs Handy",
      "Eigene Helfer-Punkte einsehen"
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
      "Helfer-Einsätze planen",
      "Direkte Kommunikation mit Trainern",
      "Transparente Helfer-Punkte"
    ],
    color: "yellow"
  }
];

const PersonasSection = () => {
  return (
    <section id="für-wen" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Die richtige Lösung für alle</h2>
          <p className="text-lg text-gray-600">
            Myclub wurde entwickelt, um die spezifischen Probleme und Herausforderungen
            jeder Person im Vereinsumfeld zu lösen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md p-8 border-t-4 border-myclub-${persona.color}`}
            >
              <div className="text-4xl mb-4">{persona.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{persona.title}</h3>
              
              <Badge variant="outline" className="mb-5 font-normal text-sm bg-gray-50">
                Problem: {persona.problem}
              </Badge>
              
              <ul className="space-y-3">
                {persona.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-myclub-${persona.color} mr-3`}></div>
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Vereinfachen Sie das Vereinsleben für alle Beteiligten. Vom Vorstand bis zum Elternteil - 
            myclub bietet jedem die passende Lösung.
          </p>
          <a href="#" className="btn btn-primary">
            Für Ihren Verein testen
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;

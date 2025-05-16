
import React from 'react';
import { Calendar, Users, Shield, Award } from "lucide-react";

const features = [
  {
    title: "Mitgliederverwaltung",
    description: "Verwalte deinen gesamten Verein mit allen Teams und Spielern in einer übersichtlichen Struktur.",
    icon: <Users className="h-6 w-6 text-myclub-blue" />,
    image: "/lovable-uploads/de3f109c-ec56-4174-975a-afbf783404fe.png",
    alt: "Club Management"
  },
  {
    title: "Event Organisation",
    description: "Plane und organisiere Vereinsveranstaltungen, mit automatischen Benachrichtigungen für alle Beteiligten.",
    icon: <Calendar className="h-6 w-6 text-myclub-purple" />,
    image: "/lovable-uploads/b17b48ea-20fe-4830-bfea-699523530ede.png",
    alt: "Event Management"
  },
  {
    title: "Helferpunkte",
    description: "Transparente Verwaltung und Nachverfolgung von Helfereinsätzen und verdienten Punkten.",
    icon: <Shield className="h-6 w-6 text-myclub-green" />,
    image: "/lovable-uploads/9809a9ff-22cf-4db6-bb2f-47f73de9b538.png",
    alt: "Helper Points"
  },
  {
    title: "Training & Spielbetrieb",
    description: "Einfache Planung und Koordination von Trainingseinheiten und Wettkämpfen.",
    icon: <Award className="h-6 w-6 text-myclub-yellow" />,
    image: "/lovable-uploads/e8642ffc-a945-4b81-9696-c8ffb6540b76.png",
    alt: "Training Management"
  }
];

const AppFeaturesSection = () => {
  return (
    <section className="section bg-black py-24">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Funktionen im Detail</h2>
          <p className="text-lg text-gray-300">
            Entdecke alle Funktionen der myclub App, die dein Vereinsleben einfacher und effizienter machen.
          </p>
        </div>
        
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 mb-24 last:mb-0`}>
            <div className="w-full md:w-1/2">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-10 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-black rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <ul className="space-y-3">
                  {index === 0 && (
                    <>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-myclub-blue rounded-full mr-3"></div>
                        <span>Komplette Organisationsstruktur</span>
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-myclub-blue rounded-full mr-3"></div>
                        <span>Mitgliederprofile mit Details</span>
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-myclub-blue rounded-full mr-3"></div>
                        <span>Team-übergreifende Verwaltung</span>
                      </li>
                    </>
                  )}
                  
                  {index === 1 && (
                    <>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-myclub-purple rounded-full mr-3"></div>
                        <span>Übersichtliche Eventplanung</span>
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-myclub-purple rounded-full mr-3"></div>
                        <span>Automatische Teilnehmeranmeldung</span>
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-myclub-purple rounded-full mr-3"></div>
                        <span>Veranstaltungskalender</span>
                      </li>
                    </>
                  )}
                  
                  {index === 2 && (
                    <>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-myclub-green rounded-full mr-3"></div>
                        <span>Punkteübersicht pro Saison</span>
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-myclub-green rounded-full mr-3"></div>
                        <span>Automatische Punktegutschriften</span>
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-myclub-green rounded-full mr-3"></div>
                        <span>Bestätigungsprozess durch Vorstand</span>
                      </li>
                    </>
                  )}
                  
                  {index === 3 && (
                    <>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-myclub-yellow rounded-full mr-3"></div>
                        <span>Trainingseinheiten planen</span>
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-myclub-yellow rounded-full mr-3"></div>
                        <span>An-/Abmeldungen verwalten</span>
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-myclub-yellow rounded-full mr-3"></div>
                        <span>Ligazuordnung und Spielbetrieb</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="flex justify-center">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={feature.image} 
                    alt={feature.alt} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppFeaturesSection;

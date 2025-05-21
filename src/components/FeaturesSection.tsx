
import React from 'react';
import { CheckCircle, Users, Calendar, Award, MessageSquare, Shield, BarChart, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-6 w-6 text-myclub-blue" />,
    title: "Benutzerverwaltung",
    description: "Einfache Registrierung, Profilmanagement und Eltern-Kind-Verknüpfung.",
    items: ["Benutzerregistrierung & Login", "Profilmanagement", "Eltern-Kind-Beziehung", "Mehrsprachigkeit"]
  },
  {
    icon: <Shield className="h-6 w-6 text-myclub-blue" />,
    title: "Vereinsverwaltung",
    description: "Professionelle Verwaltung für Clubs und Teams aller Grossen.",
    items: ["Club-Struktur Management", "Subscription & Billing", "Team-Management", "Mitgliederverwaltung"]
  },
  {
    icon: <Calendar className="h-6 w-6 text-myclub-blue" />,
    title: "Training & Events",
    description: "Organisation von Trainings, Events und Helfereinsätzen.",
    items: ["Trainingsplanung", "Übungsverwaltung", "Club-Events", "Helfer-Events"]
  },
  {
    icon: <Award className="h-6 w-6 text-myclub-blue" />,
    title: "Championship",
    description: "Komplette Verwaltung von Spielen und Wettkämpfen.",
    items: ["Spielverwaltung", "Spielvorschau", "Ranglisten", "Spielberichte"]
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-myclub-blue" />,
    title: "Kommunikation",
    description: "Integrierte Nachrichten und Benachrichtigungen.",
    items: ["News-System", "Push-Benachrichtigungen", "E-Mail-Benachrichtigungen", "In-App Mitteilungen"]
  },
  {
    icon: <BarChart className="h-6 w-6 text-myclub-blue" />,
    title: "Reporting",
    description: "Umfassende Statistiken und Berichte für fundierte Entscheidungen.",
    items: ["Helfer-Punkte-Berichte", "Teilnahme-Statistiken", "Export-Funktionen", "Dashboards"]
  },
  {
    icon: <Smartphone className="h-6 w-6 text-myclub-blue" />,
    title: "Multi-Platform",
    description: "Überall verfügbar auf iOS, Android und als Web-App.",
    items: ["iOS App", "Android App", "Web App (PWA)", "Offline-Fähigkeit"]
  }
];

const FeaturesSection = () => {
  return (
    <section id="funktionen" className="section bg-gray-900 py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Alle Features für Ihren Verein</h2>
          <p className="text-lg text-gray-300">
            myclub bietet alles, was moderne Sportvereine benötigen. Eine umfassende Plattform, 
            die alle Aspekte des Vereinslebens digitalisiert und vereinfacht.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card hover:border-myclub-blue hover:border group"
            >
              <div className="bg-myclub-blue/20 rounded-full p-3 inline-block mb-5 group-hover:bg-myclub-blue/30 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 mb-5">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-myclub-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

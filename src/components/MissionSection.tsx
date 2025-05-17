import React from 'react';
import { Badge } from "@/components/ui/badge";

const MissionSection = () => {
  return (
    <section id="über-uns" className="section bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-myclub-blue/20 text-myclub-blue border-none mb-4 px-3 py-1">
              Über myclub
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Unsere Vision für den modernen Sportverein</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Mission</h3>
                <p className="text-gray-300">
                  Wir revolutionieren die Vereinsverwaltung im Breitensport durch innovative digitale Lösungen, 
                  die das Vereinsleben für alle Beteiligten effizienter und transparenter gestalten.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Vision</h3>
                <p className="text-gray-300">
                  Als führende digitale Plattform für Sportvereine verbinden wir Verwaltung, 
                  Kommunikation und Organisation in einer nahtlosen Lösung.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Strategie</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">1.</span>
                    <span><strong className="text-myclub-blue">Benutzerzentrierung:</strong> Intuitive Bedienung für alle Altersgruppen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">2.</span>
                    <span><strong className="text-myclub-blue">Mobile First:</strong> Optimale Nutzung auf allen Endgeräten</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">3.</span>
                    <span><strong className="text-myclub-blue">Integration:</strong> Nahtlose Anbindung an Verbandssysteme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">4.</span>
                    <span><strong className="text-myclub-blue">Skalierbarkeit:</strong> Flexible Lösungen für Vereine jeder Grösse</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">5.</span>
                    <span><strong className="text-myclub-blue">Community:</strong> Stärkung der Vereinsidentität und Mitgliederbindung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-myclub-blue to-myclub-purple rounded-2xl p-8 text-white">
              <p className="text-2xl font-bold italic mb-6">
                "Sportvereine sind das Rückgrat unserer Gesellschaft. Wir machen sie fit für die digitale Zukunft."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-myclub-blue font-bold text-xl mr-4">SS</div>
                <div>
                  <h4 className="font-bold">Sandro Scalco</h4>
                  <p className="text-white/80">CEO & Gründer, myclub</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-myclub-purple rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-myclub-green rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

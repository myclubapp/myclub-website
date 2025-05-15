
import React from 'react';
import { Badge } from "@/components/ui/badge";
const MissionSection = () => {
  return <section id="über-uns" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-myclub-blue/10 text-myclub-blue border-none mb-4 px-3 py-1">
              Über myclub
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Vision für den Breitensport</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Mission</h3>
                <p className="text-gray-600">
                  Wir digitalisieren die Vereinsverwaltung im Breitensport und machen das Vereinsleben 
                  für alle Beteiligten einfacher, transparenter und effizienter.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Vision</h3>
                <p className="text-gray-600">
                  myclub wird die führende digitale Plattform für Sportvereine im deutschsprachigen Raum, 
                  die Verwaltung, Kommunikation und Organisation nahtlos vereint.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Strategie</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">1.</span>
                    <span><strong className="text-myclub-blue">Benutzerzentrierung:</strong> Intuitive Bedienung für alle Altersgruppen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">2.</span>
                    <span><strong className="text-myclub-blue">Mobile First:</strong> Volle Funktionalität auf allen Geräten</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">3.</span>
                    <span><strong className="text-myclub-blue">Integration:</strong> Nahtlose Verbindung mit Verbandssystemen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">4.</span>
                    <span><strong className="text-myclub-blue">Wachstum:</strong> Modularer Aufbau für unterschiedliche Vereinsgrößen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">5.</span>
                    <span><strong className="text-myclub-blue">Community:</strong> Starke Bindung zwischen Verein und Mitgliedern</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-myclub-blue to-myclub-darkblue rounded-2xl p-8 text-white">
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
    </section>;
};
export default MissionSection;

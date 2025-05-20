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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Sportvereine digitalisieren, Ehrenamt entlasten</h2>
            <p className="text-gray-300">Wir machen Vereinsarbeit wieder zur Leidenschaft</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Unsere Mission</h3>
                <p className="text-gray-300">
                  Wir nehmen den administrativen Ballast von den Schultern der 375'000 Ehrenamtlichen in Schweizer Sportvereinen. Damit bleibt mehr Zeit für das, was wirklich zählt: Den Sport.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Unsere Vision</h3>
                <p className="text-gray-300">
                  In einer Zeit, in der 40% der Vereine Schwierigkeiten haben, Freiwillige zu finden, schaffen wir digitale Lösungen, die Vereinsarbeit wieder attraktiv machen - für alle Generationen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Strategie</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">1.</span>
                    <span><strong className="text-myclub-blue">Für Vorstände:</strong> Administrative Entlastung und Überblick</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">2.</span>
                    <span><strong className="text-myclub-blue">Für Trainer:</strong> Einfache Planung und Teilnehmerverwaltung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">3.</span>
                    <span><strong className="text-myclub-blue">Für Spieler:</strong> Immer informiert durch Push-Benachrichtigungen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">4.</span>
                    <span><strong className="text-myclub-blue">Für Eltern:</strong> Transparente Kommunikation und einfache Helfer-Koordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">5.</span>
                    <span><strong className="text-myclub-blue">Für Vereine:</strong> Nachhaltige Strukturen für die digitale Zukunft</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-myclub-blue to-myclub-purple rounded-2xl p-8 text-white">
              <p className="text-2xl font-bold italic mb-6">
               "Ein Verein sollte sich um seine Mitglieder kümmern, nicht um Tabellen und Listen. Wir digitalisieren die Administration, damit Vereinsarbeit wieder Spass macht."
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

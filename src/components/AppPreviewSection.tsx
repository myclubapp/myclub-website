import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
const AppPreviewSection = () => {
  return <section id="funktionen" className="section bg-gradient-to-br from-black to-gray-900 py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(51,155,222,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(121,93,235,0.15),transparent_35%)]"></div>

    <div className="container-custom relative z-10">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <Badge className="bg-myclub-blue/20 text-myclub-blue border-none mb-4 px-3 py-1">
          Mobile App
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Schluss mit Excel-Chaos und WhatsApp-Flut</h2>
        <p className="text-lg text-gray-300 mb-8">
          myclub – deine zentrale Plattform für modernes Vereinsmanagement.
          Alle Vereinsprozesse in einer einzigen App vereint: Mit myclub organisierst du Trainings, Spiele, Events und vieles mehr – flexibel, intuitiv und jederzeit verfügbar. Wenige Klicks. Volle Kontrolle. Maximaler Überblick.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
        {/* App Preview 1 - Match Details */}
        <div className="flex justify-center">
          <div className="w-64 h-auto rounded-lg overflow-hidden shadow-xl animate-phone-slide" style={{
            animationDelay: '0.1s'
          }}>
            <img alt="Match Details" className="w-full h-full object-cover" src="/lovable-uploads/96a44b63-64ee-4aab-8a47-fa8618da0ae7.png" />
          </div>
        </div>

        {/* App Preview 2 - News */}
        <div className="flex justify-center">
          <div className="w-64 h-auto rounded-lg overflow-hidden shadow-xl animate-phone-slide" style={{
            animationDelay: '0.3s'
          }}>
            <img alt="Club News" className="w-full h-full object-cover" src="/lovable-uploads/edf0e6fd-25bd-4a4c-a322-02c02120a859.png" />
          </div>
        </div>

        {/* App Preview 3 - Helper Events */}
        <div className="hidden lg:flex justify-center">
          <div className="w-64 h-auto rounded-lg overflow-hidden shadow-xl animate-phone-slide" style={{
            animationDelay: '0.5s'
          }}>
            <img alt="Helper Events" className="w-full h-full object-cover" src="/lovable-uploads/e24f8831-92b9-4607-b238-0b374a12f307.png" />
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-300 mb-8">
          Mitglieder • Training • Events • Finanzen - Alles in einer App. Für Vereine, die mehr wollen als Excel und E-Mail.
        </p>
        <a href="https://link.my-club.app/y9TCYJ" className="btn btn-primary inline-flex items-center">
          App herunterladen
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-myclub-blue/10 rounded-full blur-xl"></div>
    <div className="absolute top-1/4 right-0 w-60 h-60 bg-myclub-purple/10 rounded-full blur-xl"></div>
  </section>;
};
export default AppPreviewSection;


import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const AppPreviewSection = () => {
  return (
    <section className="section bg-gradient-to-br from-black to-gray-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(51,155,222,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(121,93,235,0.15),transparent_35%)]"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge className="bg-myclub-blue/20 text-myclub-blue border-none mb-4 px-3 py-1">
            Mobile App
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Dein Verein in der Hosentasche</h2>
          <p className="text-lg text-gray-300 mb-8">
            Die myclub App bietet alle Funktionen für Dein Vereinsleben - jederzeit und überall verfügbar.
            Verwalte Trainings, Events, Spiele und mehr mit nur wenigen Klicks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {/* App Preview 1 - Match Details */}
          <div className="flex justify-center phone-container">
            <div className="phone-mockup w-64 h-[500px] animate-phone-slide" style={{ animationDelay: '0.1s' }}>
              <img 
                src="/lovable-uploads/7502c055-afa0-4c3e-b5bb-33716d0cc329.png" 
                alt="Match Details" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* App Preview 2 - News */}
          <div className="flex justify-center phone-container">
            <div className="phone-mockup w-64 h-[500px] animate-phone-slide" style={{ animationDelay: '0.3s' }}>
              <img 
                src="/lovable-uploads/c6e3a491-248f-4fc2-93ce-80a9c09fade7.png" 
                alt="Club News" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* App Preview 3 - Helper Events */}
          <div className="hidden lg:flex justify-center phone-container">
            <div className="phone-mockup w-64 h-[500px] animate-phone-slide" style={{ animationDelay: '0.5s' }}>
              <img 
                src="/lovable-uploads/46447e77-b7d2-4764-8d7a-da8b4c4a02e2.png" 
                alt="Helper Events" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-8">
            Weitere App-Funktionen: Club Verwaltung, Training Planung, Event Management und mehr
          </p>
          <a href="#" className="btn btn-primary inline-flex items-center">
            App herunterladen
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-myclub-blue/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/4 right-0 w-60 h-60 bg-myclub-purple/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default AppPreviewSection;

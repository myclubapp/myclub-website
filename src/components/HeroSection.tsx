
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from './Logo';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-myclub-blue to-myclub-darkblue pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Decoration Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-myclub-lightblue rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-white rounded-full opacity-5"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-myclub-purple rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <Logo size="lg" className="inline-block" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Die All-in-One Plattform für <span className="text-myclub-yellow">Sportvereine</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0">
              Digitalisieren Sie Ihr Vereinsleben mit myclub. Einfacher. Transparenter. Effizienter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-myclub-blue hover:bg-gray-100 text-lg px-8 py-6 rounded-full">
                Kostenlos starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full">
                Demo anfordern
              </Button>
            </div>
            <p className="mt-6 text-white/80 text-sm">
              Keine Kreditkarte erforderlich • 30 Tage kostenlos • Cancel anytime
            </p>
          </div>
          
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl animate-fade-in">
              <div className="w-full h-full relative">
                <img 
                  src="/lovable-uploads/e8e070b4-80a2-4341-b70f-2fdab0010bb7.png" 
                  alt="myclub App" 
                  className="w-64 h-64 object-contain mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-myclub-darkblue/10 rounded-xl"></div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-myclub-purple text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
              Multi-Platform App
            </div>
          </div>
        </div>
        
        {/* Trusted By Section */}
        <div className="mt-20 text-center">
          <p className="text-white/70 text-sm uppercase font-medium tracking-wider mb-6">Vertraut von führenden Vereinen</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white/10 h-12 w-32 rounded-md backdrop-blur-sm flex items-center justify-center">
                <div className="text-white font-semibold">Verein {i}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
          <path fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,85.3C672,96,768,96,864,80C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

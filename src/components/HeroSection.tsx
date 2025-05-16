import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from './Logo';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Define our app screenshots
const appScreenshots = [{
  src: "/lovable-uploads/3a6ce75e-225b-419d-a32f-906cc5d7a14c.png",
  alt: "Spielübersicht mit Standort"
}, {
  src: "/lovable-uploads/bd06a942-297e-48dd-8762-a3b95cdd51cf.png",
  alt: "Vereinsnews und Bekleidung"
}, {
  src: "/lovable-uploads/dd2da1f8-31f0-4655-aae9-6e51595ecc14.png",
  alt: "Mitgliederverwaltung"
}, {
  src: "/lovable-uploads/de01d352-eec0-4836-8e6e-2f8607c1479f.png",
  alt: "Helferevent-Management"
}];
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % appScreenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative bg-gradient-to-br from-gray-900 to-black pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Decoration Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-myclub-blue/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-myclub-purple/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-myclub-blue/15 rounded-full blur-lg animate-float" style={{
        animationDelay: '1s'
      }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <Logo size="lg" className="inline-block" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Vereinsarbeit, die wieder <span className="text-myclub-blue">Freude macht</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0">Mit myclub wird aus Pflicht wieder Passion. Digital. Einfach. Gemeinsam.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-myclub-blue text-white hover:bg-myclub-darkblue text-lg px-8 py-6 rounded-full">
                Kostenlos starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="mt-6 text-gray-400 text-sm">30 Tage kostenlos • Jederzeit kündbar</p>
          </div>
          
          <div className="hidden lg:flex items-center justify-center relative">
            <Carousel className="w-auto h-auto relative overflow-hidden" opts={{
            loop: true,
            align: "center"
          }} orientation="horizontal" setApi={api => {
            if (api && api.scrollTo) {
              api.scrollTo(currentIndex);
            }
          }}>
              <CarouselContent>
                {appScreenshots.map((screenshot, index) => <CarouselItem key={index} className="flex items-center justify-center">
                    <div className="w-auto h-auto relative">
                      <img src={screenshot.src} alt={screenshot.alt} className="w-[100px] h-auto mx-auto object-contain" />
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
            </Carousel>
            <div className="absolute -bottom-5 -right-5 bg-myclub-purple text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">Deine Vereins-App</div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="rgb(17, 24, 39)" className="text-gray-900">
          <path fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,85.3C672,96,768,96,864,80C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>;
};
export default HeroSection;
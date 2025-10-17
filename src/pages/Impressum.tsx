
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-myclub-darkblue/20 to-black">
      <Navbar />
      <main className="container-custom pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <p className="text-gray-300 mb-4">
              myclub<br />
              c/o liitu consulting gmbh<br />
              Villenstrasse 4<br />
              8200 Schaffhausen<br />
              Schweiz
            </p>
            <p className="text-gray-300 mb-4">
              Telefon: +41 79 403 36 13<br />
              E-Mail: <a href="mailto:info@my-club.app" className="text-myclub-blue hover:underline">info@my-club.app</a>
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Handelsregistereintrag</h2>
            <p className="text-gray-300 mb-4">
              Eingetragen im Handelsregister des Kantons Schaffhausen<br />
              Registernummer: CHE-178.036.243
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
            <p className="text-gray-300 mb-4">
              Umsatzsteuer-Identifikationsnummer<br />
              CHE-178.036.243
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt </h2>
            <p className="text-gray-300 mb-4">
              Sandro Scalco (Geschäftsführer)<br />
              liitu consulting gmbh<br />
              Villenstrasse 4<br />
              8200 Schaffhausen<br />
              Schweiz
            </p>
          </section>
          
          <div className="mt-12">
            <Link to="/" className="text-myclub-blue hover:underline">Zurück zur Startseite</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;

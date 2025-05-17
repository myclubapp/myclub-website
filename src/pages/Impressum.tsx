
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="container-custom py-32">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäss § 5 TMG</h2>
            <p className="text-gray-300 mb-4">
              myclub<br />
              c/o liitu consulting gmbh<br />
              Villenstrasse 4<br />
              8200 Schaffhausen<br />
              Schweiz
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
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
              Umsatzsteuer-Identifikationsnummer gemäss §27 a Umsatzsteuergesetz:<br />
              CHE-178.036.243
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-gray-300 mb-4">
              myclub<br />
              c/o liitu consulting gmbh<br />
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

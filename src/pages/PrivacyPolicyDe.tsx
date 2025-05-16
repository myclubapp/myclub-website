
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicyDe = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="container-custom py-32">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl font-bold mb-8">Datenschutzrichtlinie</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Einführung</h2>
            <p className="text-gray-300 mb-4">
              Willkommen bei myclub | die nächste Generation. Diese Datenschutzrichtlinie umreisst unsere Praktiken bezüglich der Sammlung, Nutzung und Offenlegung Ihrer Informationen, wenn Sie unsere App verwenden, sowie die damit verbundenen Wahlmöglichkeiten.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sammlung und Nutzung von Informationen</h2>
            <p className="text-gray-300 mb-4">
              Für ein besseres Erlebnis bei der Nutzung unserer App benötigen wir möglicherweise bestimmte persönlich identifizierbare Informationen von Ihnen, einschliesslich, aber nicht beschränkt auf Ihre E-Mail-Adresse, Vor- und Nachnamen. Die gesammelten Informationen werden zur Identifikation und Verwaltung Ihrer Clubmitgliedschaft verwendet und sind für die Funktionalität unserer App notwendig.
            </p>
            
            <h3 className="text-xl font-semibold mb-2">a. Profilerstellung</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-2">
              <li>
                <strong>Erforderliche Informationen:</strong> Zur Erstellung eines Kontos benötigen wir Ihre E-Mail-Adresse, Vor- und Nachnamen. Dies ist notwendig, damit Clubadministratoren Ihre Mitgliedschaftsanfrage genehmigen können.
              </li>
              <li>
                <strong>Zusätzliche Informationen:</strong> Ihre Wohnadresse und Telefonnummer werden für die Verwaltung Ihrer Clubmitgliedschaft gesammelt und sind nur für Ihre Club- und Teamadministratoren sichtbar.
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2">b. Datenhosting</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>
                Ihre Daten werden in der Schweiz (Region Europa-West6) verarbeitet und gespeichert, um die Einhaltung lokaler Datenschutz- und Privatsphäre-Vorschriften zu gewährleisten.
              </li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Löschung Ihres Profils</h2>
            <p className="text-gray-300 mb-4">
              Sie haben die Möglichkeit, Ihr Profil direkt in der App zu löschen. Navigieren Sie zu Ihrer Profilseite, scrollen Sie nach unten und wählen Sie "Gefahrenzone: Profil löschen". Bitte beachten Sie, dass diese Aktion sofortig und unwiderruflich ist und zur Löschung aller Ihrer persönlichen Daten aus unseren Systemen führt.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Standortdaten</h2>
            <p className="text-gray-300 mb-4">
              Unsere App speichert Ihre Standortdaten nicht. Standortdienste werden ausschliesslich zur Bereitstellung von Navigationshilfen für Ihre Spiele und Veranstaltungen verwendet.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sicherheit</h2>
            <p className="text-gray-300 mb-4">
              Wir schätzen Ihr Vertrauen in die Bereitstellung Ihrer persönlichen Informationen und bemühen uns, diese mit kommerziell akzeptablen Mitteln zu schützen. Denken Sie jedoch daran, dass keine Übertragungsmethode über das Internet oder elektronische Speichermethode zu 100% sicher und zuverlässig ist und wir ihre absolute Sicherheit nicht garantieren können.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Änderungen dieser Datenschutzrichtlinie</h2>
            <p className="text-gray-300 mb-4">
              Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Daher wird empfohlen, diese Seite regelmässig auf Änderungen zu überprüfen. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen. Diese Änderungen sind unmittelbar nach ihrer Veröffentlichung auf dieser Seite wirksam.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Kontaktieren Sie uns</h2>
            <p className="text-gray-300 mb-4">
              Wenn Sie Fragen oder Anregungen zu unserer Datenschutzrichtlinie haben, zögern Sie nicht, uns unter <a href="mailto:info@my-club.app" className="text-myclub-blue hover:underline">info@my-club.app</a> zu kontaktieren.
            </p>
          </section>

          <div className="mt-12 flex space-x-4">
            <Link to="/" className="text-myclub-blue hover:underline">Zurück zur Startseite</Link>
            <Link to="/privacy-policy" className="text-myclub-blue hover:underline">English version</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyDe;

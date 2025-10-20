import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-myclub-darkblue/20 to-black">
      <Navbar />
      
      <main className="container-custom pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Häufig gestellte Fragen (FAQ)
          </h1>
          <p className="text-gray-300 text-lg mb-12">
            Hier findest du Antworten auf häufig gestellte Fragen und Anleitungen zur myclub App.
          </p>

          {/* FAQ Accordion */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Häufig gestellte Fragen</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-myclub-blue">
                  Muss jedes Kind eine eigene E-Mail-Adresse haben?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-4">
                    Das hängt von der Situation ab:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Ein Kind pro Familie:</strong> Wenn die Familie nur ein Kind hat, ist es auch in Ordnung, wenn die Familie für ihr Kind einen Account mit der Familien E-Mail-Adresse erstellt.
                    </li>
                    <li>
                      <strong>Mehrere Kinder pro Familie:</strong> Wenn eine Familie mehrere Kinder hat, ist es sinnvoll, dass man von einem Eltern-Account beide Kinder administrieren kann. In diesem Fall braucht jedes Kind eine separate E-Mail-Adresse.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Einen Elternaccount braucht es nur, wenn die Eltern:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>mehrere Kinder verwalten wollen (jedes Kind braucht dann eine separate Adresse)</li>
                    <li>das Kind keinen Zugang auf die Eltern-Adresse hat/will oder die Eltern keinen Zugriff auf die Kind E-Mail-Adresse hat/will</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-myclub-blue">
                  Wie funktioniert die Registrierung?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>App herunterladen und installieren von <a href="https://link.my-club.app/app-store" className="text-myclub-blue hover:underline" target="_blank" rel="noopener noreferrer">https://link.my-club.app/app-store</a></li>
                    <li>Auf "Erstelle einen neuen Account" klicken</li>
                    <li>E-Mail-Adresse, Passwort, Vor- und Nachname eingeben</li>
                    <li>Überprüfen, ob die E-Mail-Adresse wirklich korrekt ist</li>
                    <li>Auf "Registrieren" klicken</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-myclub-blue">
                  Wie aktiviere ich meinen Account?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Nach dem Klick auf "Registrieren" erscheint die Meldung, dass der Account erfolgreich angelegt wurde</li>
                    <li>Nach ein paar Minuten wird eine E-Mail mit dem Aktivierungslink verschickt. Bitte prüfe den Spam-Ordner, sollte keine E-Mail angekommen sein</li>
                    <li>Erst nach dem Aktivieren über den Link in der E-Mail auf "weiter" klicken</li>
                    <li>Sollte auch nach über 15 Minuten keine E-Mail angekommen sein, kann eine neue E-Mail angefordert werden. Dazu einfach auf den Button "E-Mail erneut senden" klicken</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-myclub-blue">
                  Wie trete ich einem Club bei?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Nach dem erfolgreichen Aktivieren des Accounts kann in der App auf die Schaltfläche "weiter" geklickt werden</li>
                    <li>Anschließend nach dem gewünschten Verein suchen</li>
                    <li>Verein auswählen und gewünschtes Team auswählen</li>
                    <li>Falls die E-Mail-Adresse einem Elternteil gehört, bitte "Als Elternteil registrieren" auswählen</li>
                    <li>In einem späteren Schritt kann der Eltern-Account mit einem Kind verknüpft werden</li>
                    <li>Jedes Vereinsmitglied muss sich mit einer separaten Adresse registrieren</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-myclub-blue">
                  Wie füge ich ein Kind hinzu?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Über das Menü kann das Profil geöffnet werden</li>
                    <li>Dort kann am Ende (unten) ein Kind über eine E-Mail-Adresse hinzugefügt werden. WICHTIG dabei ist, dass das Kind mit dieser E-Mail-Adresse bereits bei myclub-App registriert ist</li>
                    <li>Im Anschluss muss die Anfrage, welche an die Adresse des Kindes geschickt wurde, bestätigt werden</li>
                    <li>Im Profil ist jeweils sichtbar, welche Kinder mit dem eigenen Account verknüpft sind. Aktuell werden maximal 3 Kinder unterstützt</li>
                    <li>Es können mehrere Eltern mit den gleichen Kindern verknüpft sein</li>
                    <li>Im Account der Kinder sind zudem die verknüpften Eltern sichtbar</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-myclub-blue">
                  Wie entferne ich ein Kind aus meinem Eltern-Account?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Öffne dein Profil in der App.</li>
                    <li>Scrolle zum Bereich <strong>Kinder</strong>.</li>
                    <li>Wische beim entsprechenden Kind den Eintrag von rechts nach links.</li>
                    <li>Tippe auf <strong>Entfernen</strong> und bestätige die Abfrage.</li>
                  </ol>
                  <p className="mt-4">Wichtig: Es wird nur die Verknüpfung zu deinem Eltern-Account aufgehoben. Das Profil des Kindes bleibt bestehen und wird <strong>nicht</strong> gelöscht. Eine erneute Verknüpfung ist jederzeit möglich.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-myclub-blue">
                  Was kann ich als Elternteil in der App machen?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-4">Als Elternteil hast du folgende Möglichkeiten:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Verknüpfte Kinder für ein Training oder eine Veranstaltung an- oder abmelden</li>
                    <li>Helfereinsätze im Namen des Kindes annehmen</li>
                    <li>Jede E-Mail an ein Kind wird automatisch auch an die verknüpften Eltern weitergeleitet</li>
                    <li>Alle Trainings, Veranstaltungen und Helfereinsätze der verknüpften Kinder sind in der App sichtbar</li>
                    <li>In der App ist jeweils immer der Name des verknüpften Kindes im Status des Trainings, Veranstaltung oder Helfereinsatz sichtbar</li>
                    <li>Sollte ein Elternteil ein Vereinsmitglied sein, sind sowohl die eigenen Trainings, Veranstaltungen und Helfereinsätze, als auch die der verknüpften Kinder sichtbar</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-myclub-blue">
                  Gibt es auch eine Web-Version der App?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Ja! Für Personen ohne Smartphone steht auch eine Web-Version zur Verfügung. Die Web-Version bietet die gleichen Funktionen wie die mobile App und kann über den Browser genutzt werden.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-myclub-blue">
                  Wo erhalte ich Support?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-4">Bei Fragen steht dir unser Support-Team gerne zur Verfügung:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>E-Mail: <a href="mailto:support@my-club.app" className="text-myclub-blue hover:underline">support@my-club.app</a></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Anleitung Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Anleitung für Eltern
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                Die myclub-App unterstützt Vereine bei der Organisation von Trainings, Spielen, Veranstaltungen und Helfereinsätzen. Für eine reibungslose Kommunikation ist es notwendig, dass alle Mitglieder (und bei Minderjährigen, deren Eltern) registriert sind.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Registrierung</h3>
                  <p className="text-gray-300 mb-3">
                    Die App kann in den gängigen App Stores heruntergeladen werden: <a href="https://link.my-club.app/app-store" className="text-myclub-blue hover:underline" target="_blank" rel="noopener noreferrer">https://link.my-club.app/app-store</a>
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                    <li>App herunterladen und installieren</li>
                    <li>Auf "Erstelle einen neuen Account" klicken</li>
                    <li>E-Mail-Adresse, Passwort, Vor- und Nachname eingeben</li>
                    <li>Überprüfen, ob die E-Mail-Adresse wirklich korrekt ist!</li>
                    <li>Auf "Registrieren" klicken</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Account aktivieren</h3>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                    <li>Nach dem Klick auf "Registrieren" erscheint die Meldung, dass der Account erfolgreich angelegt wurde</li>
                    <li>Nach ein paar Minuten wird eine E-Mail mit dem Aktivierungslink verschickt. Bitte prüfe den Spam-Ordner, sollte keine E-Mail angekommen sein</li>
                    <li>Erst nach dem Aktivieren über den Link in der E-Mail auf "weiter" klicken</li>
                    <li>Sollte auch nach über 15 Minuten keine E-Mail angekommen sein, kann eine neue E-Mail angefordert werden. Dazu einfach auf den Button "E-Mail erneut senden" klicken</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Club beitreten</h3>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                    <li>Nach dem erfolgreichen Aktivieren des Accounts kann in der App auf die Schaltfläche "weiter" geklickt werden</li>
                    <li>Anschließend nach dem gewünschten Verein suchen</li>
                    <li>Verein auswählen und gewünschtes Team auswählen</li>
                    <li>Falls die E-Mail-Adresse einem Elternteil gehört, bitte "Als Elternteil registrieren" auswählen</li>
                    <li>In einem späteren Schritt kann der Eltern-Account mit einem Kind verknüpft werden</li>
                    <li>Jedes Vereinsmitglied muss sich mit einer separaten Adresse registrieren</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Kind hinzufügen</h3>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                    <li>Über das Menü kann das Profil geöffnet werden</li>
                    <li>Dort kann am Ende (unten) ein Kind über eine E-Mail-Adresse hinzugefügt werden. <strong>WICHTIG:</strong> Das Kind muss mit dieser E-Mail-Adresse bereits bei myclub-App registriert sein</li>
                    <li>Im Anschluss muss die Anfrage, welche an die Adresse des Kindes geschickt wurde, bestätigt werden</li>
                    <li>Im Profil ist jeweils sichtbar, welche Kinder mit dem eigenen Account verknüpft sind. Aktuell werden maximal 3 Kinder unterstützt</li>
                    <li>Es können mehrere Eltern mit den gleichen Kindern verknüpft sein</li>
                    <li>Im Account der Kinder sind zudem die verknüpften Eltern sichtbar</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Trainings, Veranstaltungen und Helferevents</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Als Elternteil ist es möglich, die verknüpften Kinder für ein Training oder eine Veranstaltung an- oder abzumelden</li>
                    <li>Als Elternteil ist es zudem möglich, Helfereinsätze im Namen des Kindes anzunehmen</li>
                    <li>Jede E-Mail an ein Kind wird automatisch auch an die verknüpften Eltern weitergeleitet</li>
                    <li>Als Elternteil sind alle Trainings, Veranstaltungen und Helfereinsätze der verknüpften Kinder in der App sichtbar</li>
                    <li>In der App ist jeweils immer der Name des verknüpften Kindes im Status des Trainings, Veranstaltung oder Helfereinsatz sichtbar</li>
                    <li>Sollte ein Elternteil ein Vereinsmitglied sein, sind sowohl die eigenen Trainings, Veranstaltungen und Helfereinsätze, als auch die der verknüpften Kinder sichtbar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Faq;

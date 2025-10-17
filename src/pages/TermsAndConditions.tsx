import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-myclub-darkblue/20 to-black">
      <Navbar />
      <main className="container-custom pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Terms and Conditions (Version May 2025</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-gray-300 mb-4">
                Welcome to myclub | the next generation. These Terms of Use ("Terms") govern your use of the myclub website and mobile application ("Service"). By accessing or using our Service, you agree to these Terms and our Privacy Policy.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Use of Service</h2>
              <p className="text-gray-300 mb-2">a. The Service is intended for users who are at least 18 years old. Minors may only use the Service in consultation with their legal guardians.</p>
              <p className="text-gray-300 mb-2">b. You may only use the Service for lawful purposes and in accordance with these Terms.</p>
              <p className="text-gray-300 mb-2">c. Any use or access by persons under 18 years of age is prohibited, unless the use is in consultation with legal guardians.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Accounts</h2>
              <p className="text-gray-300 mb-2">a. To use certain features of the Service, you must create an account.</p>
              <p className="text-gray-300 mb-2">b. You are responsible for maintaining the confidentiality of your account credentials.</p>
              <p className="text-gray-300 mb-2">c. You agree to promptly notify us if you become aware of any breach of security or unauthorized use of your account. Please use the email address <a href="mailto:support@my-club.app" className="text-myclub-blue hover:underline">support@my-club.app</a></p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Copyright</h2>
              <p className="text-gray-300 mb-2">a. The Service and its original content, features, and functionality are and will remain the exclusive property of myclub | the next generation and its licensors.</p>
              <p className="text-gray-300 mb-2">b. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">User Content</h2>
              <p className="text-gray-300 mb-2">a. You retain all rights to the content you submit to the Service and are solely responsible for it.</p>
              <p className="text-gray-300 mb-2">b. By posting content, you grant myclub a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content in connection with the Service.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Prohibited Activities</h2>
              <p className="text-gray-300 mb-4">You agree not to engage in any of the following prohibited activities:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-300">
                <li><strong>Illegal Activities:</strong> Using the Service for illegal purposes or violating any local, state, national, or international laws or regulations.</li>
                <li><strong>Copyright Infringement:</strong> Copying, distributing, or disclosing any part of the Service in any medium, including by automated or non-automated "scraping", or reproducing or circumventing the navigational structure or presentation of the Service without our prior written consent.</li>
                <li><strong>Harassment and Abuse:</strong> Harassing, bullying, or discriminatory behavior towards other users; posting or displaying content that is offensive, defamatory, slanderous, or hateful.</li>
                <li><strong>False Information:</strong> Providing false information in your registration or profile or impersonating another person.</li>
                <li><strong>Hacking and Unauthorized Access:</strong> Attempting to interfere with or compromise the system integrity or security or decipher any transmissions to or from the servers running the Service.</li>
                <li><strong>Malware and Viruses:</strong> Uploading or transmitting viruses, malware, or other types of malicious code that will or may be used in any way that will affect the functionality or operation of the Service.</li>
                <li><strong>Spamming:</strong> Automated use of the system, such as using scripts to send comments or messages, or using the Service to send unsolicited communications.</li>
                <li><strong>Commercial Activities:</strong> Using the Service for commercial solicitation purposes without our prior written consent.</li>
                <li><strong>Content Violations:</strong> Posting or uploading content that infringes on the rights of others, including copyright, privacy, or publicity rights.</li>
                <li><strong>Service Disruption:</strong> Interfering with, disrupting, or creating an undue burden on the Service or the networks or services connected to the Service.</li>
                <li><strong>Privacy Violations:</strong> Attempting to gather or track personal information of others; invading the privacy of others by attempting to access sensitive information without permission.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <p className="text-gray-300">We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <p className="text-gray-300">The Service is provided on an "AS IS" and "AS AVAILABLE" basis.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-gray-300">Under no circumstances shall myclub | the next generation or its directors, employees be liable for indirect, incidental, special, consequential or punitive damages arising from your use of the Service.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Jurisdiction</h2>
              <p className="text-gray-300">These Terms shall be governed by the laws of Switzerland (Schaffhausen).</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-gray-300">We reserve the right to modify or replace these Terms at any time at our sole discretion.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-300">If you have any questions about these Terms, please contact us at <a href="mailto:info@my-club.app" className="text-myclub-blue hover:underline">info@my-club.app</a></p>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-myclub-darkblue/20 to-black">
      <Navbar />
      <main className="container-custom pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy (Version May 2025)</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              Welcome to myclub | the next generation. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our app, as well as the associated choices you have.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Collection and Use of Information</h2>
            <p className="text-gray-300 mb-4">
              For a better experience while using our app, we may require certain personally identifiable information from you, including but not limited to your email address, first and last name, date of birth, phone number, and residential address. The collected information is used to identify and manage your club membership and is necessary for the functionality of our app. It serves exclusively for member management within the club.
            </p>
            
            <h3 className="text-xl font-semibold mb-2">a. Profile Creation</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-2">
              <li>
                <strong>Required Information:</strong> To create an account, we require your email address, first name, and last name. This is necessary for club administrators to approve your membership request.
              </li>
              <li>
                <strong>Additional Information:</strong> Your residential address, date of birth, profile picture, and phone number are collected for the management of your club membership and are only visible to your club and team administrators.
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2">b. Data Hosting</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>
                Your data is processed and stored in Switzerland (Europe-West6 region) to ensure compliance with local data protection and privacy regulations.
              </li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Deleting Your Profile</h2>
            <p className="text-gray-300 mb-4">
              You have the option to delete your profile directly in the app. Navigate to your profile page, scroll down, and select "Delete profile". Please note that this action is immediate and irreversible and will result in the deletion of all your personal data from our systems. Deleting your profile is not connected to leaving the club.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Location Data</h2>
            <p className="text-gray-300 mb-4">
              Our app does not store your location data. Location services are used exclusively to provide navigation assistance for your games and events.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Security</h2>
            <p className="text-gray-300 mb-4">
              We value your trust in providing your personal information and strive to use commercially acceptable means to protect it. However, remember that no method of transmission over the internet or electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. You can check and improve the code on GitHub at any time!
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update our Privacy Policy from time to time. Therefore, it is recommended that you review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:info@my-club.app" className="text-myclub-blue hover:underline">info@my-club.app</a>.
            </p>
          </section>

          <div className="mt-12 flex space-x-4">
            <Link to="/" className="text-myclub-blue hover:underline">Back to Home</Link>
            <Link to="/privacy-policy-de" className="text-myclub-blue hover:underline">Deutsche Version</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

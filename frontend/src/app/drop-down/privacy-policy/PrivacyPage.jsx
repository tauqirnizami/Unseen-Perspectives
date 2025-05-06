import React from 'react';
import { ShieldCheck, Cookie, UserRound, Info } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 pt-[100]">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <ShieldCheck className="w-8 h-8 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-semibold text-gray-800">Privacy Policy</h1>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
            <Info className="w-5 h-5 text-blue-500 mr-1" /> Welcome to Unseen Perspectives!
          </h2>
          <p className="text-gray-600">Your privacy is important to us.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <UserRound className="w-5 h-5 text-green-500 mr-1" /> Information Collection:
          </h2>
          <p className="text-gray-600">We collect your name, email, phone number, and other details when you sign up.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <ShieldCheck className="w-5 h-5 text-yellow-500 mr-1" /> Data Protection:
          </h2>
          <p className="text-gray-600">We use encryption and security measures to protect your data, but no method is 100% secure.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <Share className="w-5 h-5 text-purple-500 mr-1" /> Sharing Information:
          </h2>
          <p className="text-gray-600">We do not sell your data but may share it with trusted service providers.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <Cookie className="w-5 h-5 text-orange-500 mr-1" /> Cookies:
          </h2>
          <p className="text-gray-600">We use cookies to enhance user experience. You can disable them in your browser settings.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <HelpCircle className="w-5 h-5 text-teal-500 mr-1" /> Your Rights:
          </h2>
          <p className="text-gray-600">Contact us if you have concerns about your data or want to request changes.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <Clock className="w-5 h-5 text-indigo-500 mr-1" /> Updates:
          </h2>
          <p className="text-gray-600">We may update this Privacy Policy periodically and notify you accordingly.</p>
        </div>
      </div>
    </div>
  );
};

// Importing Lucid React icons (make sure you have @lucide/react installed)
const { Share, HelpCircle, Clock } = require('lucide-react');

export default PrivacyPolicyPage;
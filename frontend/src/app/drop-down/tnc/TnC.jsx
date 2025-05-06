import React from 'react';
import { FileText, Handshake, EyeOff, AlertTriangle, Settings } from 'lucide-react';

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 pt-[100]">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <FileText className="w-8 h-8 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-semibold text-gray-800">Terms & Conditions</h1>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
            <EyeOff className="w-5 h-5 text-blue-500 mr-1" /> Welcome to Unseen Perspectives!
          </h2>
          <p className="text-gray-600">These Terms govern your access and use of our platform.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <Handshake className="w-5 h-5 text-green-500 mr-1" /> Acceptance of Terms:
          </h2>
          <p className="text-gray-600">By using our services, you agree to these terms.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <EyeOff className="w-5 h-5 text-yellow-500 mr-1" /> Use of Service:
          </h2>
          <p className="text-gray-600">Unseen Perspectives provides a platform for blind individuals to showcase their skills.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <ShieldCheck className="w-5 h-5 text-purple-500 mr-1" /> Privacy & Data Protection:
          </h2>
          <p className="text-gray-600">We are committed to protecting your data.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <AlertTriangle className="w-5 h-5 text-orange-500 mr-1" /> Limitation of Liability:
          </h2>
          <p className="text-gray-600">We are not responsible for any damages arising from the use of our platform.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <Settings className="w-5 h-5 text-indigo-500 mr-1" /> Modifications:
          </h2>
          <p className="text-gray-600">We may update these terms and notify users.</p>
        </div>
      </div>
    </div>
  );
};

// Importing Lucid React icons (make sure you have @lucide/react installed)
const { ShieldCheck } = require('lucide-react');

export default TermsAndConditionsPage;
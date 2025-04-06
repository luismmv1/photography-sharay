"use client";

import EmailForm from "@/app/components/contact/EmailForm";
import WhatsAppForm from "@/app/components/contact/WhatsAppForm";
import { useState } from "react";

const ContactForm = () => {
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(true);

  return (
    <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8">
      <div className="flex justify-end space-x-4 mb-6">
        <button
          onClick={() => setShowWhatsAppForm(true)}
          className={`px-4 py-2 rounded-lg font-semibold ${
            showWhatsAppForm
              ? "bg-green-700 hover:bg-green-600 text-white"
              : "bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white"
          }`}
        >
          WhatsApp
        </button>
        <button
          onClick={() => setShowWhatsAppForm(false)}
          className={`px-4 py-2 rounded-lg font-semibold ${
            !showWhatsAppForm
              ? "bg-indigo-600 hover:bg-indigo-500 text-white"
              : "bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white"
          }`}
        >
          Email
        </button>
      </div>
      {showWhatsAppForm ? <WhatsAppForm /> : <EmailForm />}
    </div>
  );
};

export default ContactForm;
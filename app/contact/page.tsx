'use client'

import ContactForm from "@/app/components/contact/ContactForm";
import SocialLinks from "@/app/components/socialLinks/SocialLinks";
import { contactPageData } from "@/app/getData/contactDataForm";
import siteDataInfo from "@/app/getData/siteDataInfo";
import { BsEnvelopeAtFill, BsPhoneFill } from "react-icons/bs";

const page = () => {
 
  return (
    <div>
      <section className="relative bg-gray-100 dark:bg-gray-800">
        {/* Header con fondo */}
        <div
          className="h-60 bg-cover bg-center"
          style={{
            backgroundImage: "url('/pages/contact/contact.jpg')",
            height: "240px",
          }}
        >
          <div className="h-full w-full bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold bg-gray-700/70 rounded-md p-4">
              {contactPageData.title}
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sección de información de contacto */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {contactPageData.contactTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {contactPageData.contactDescription}
            </p>
            <ul className="space-y-4">
              <li className="text-lg text-gray-900 dark:text-white">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-indigo-100 dark:bg-indigo-600 text-indigo-600 dark:text-white rounded-full">
                  <BsPhoneFill />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {contactPageData.callMeTitle}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {contactPageData.callMeDescription}
                    </p>
                    <p className="text-indigo-600 dark:text-indigo-400">
                      {siteDataInfo.contactPhones}
                    </p>
                  </div>
                </div>
              </li>
              <li className="text-lg text-gray-900 dark:text-white">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-indigo-100 dark:bg-indigo-600 text-indigo-600 dark:text-white rounded-full">
                  <BsEnvelopeAtFill />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {contactPageData.writeMeTitle}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                    {contactPageData.writeMeDescription}
                    </p>
                    <a
                      href={`mailto:${siteDataInfo.contactEmails}`}
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      {siteDataInfo.contactEmails}
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            <div className="flex space-x-4">
              <SocialLinks />
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
'use client'

import Contact from "@/components/contactForm/Contact";
import siteDataInfo from "@/components/getData/siteDataInfo";
import SocialLinks from "@/components/socialLinks/SocialLinks";
import { BsEnvelopeAtFill, BsPhoneFill } from "react-icons/bs";

const Page = () => {
 
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
              Contáctame
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sección de información de contacto */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Información de Contacto
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Estoy aquí para ayudarte con tus consultas o proyectos. Puedes ponerte en contacto a través de los siguientes medios:
            </p>
            <ul className="space-y-4">
              <li className="text-lg text-gray-900 dark:text-white">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-indigo-100 dark:bg-indigo-600 text-indigo-600 dark:text-white rounded-full">
                  <BsPhoneFill />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      Llámame
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Estare encantada de atenderte.
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
                      Escríbeme
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Puedes enviarme un correo con tus dudas o propuestas.
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

            {/* Iconos de redes sociales */}
            <div className="flex space-x-4">
              <SocialLinks />
            </div>
          </div>

          {/* Sección del formulario */}
          <div>
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
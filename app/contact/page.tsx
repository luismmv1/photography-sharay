'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import { FaInstagram, FaPinterest, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Page = () => {
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Función para construir el enlace de WhatsApp
  const handleWhatsAppClick = () => {
    const baseUrl = "https://wa.me/56985579335";
    const texto = `Hola Shara's Photography te escribe "${nombre}" vi tu página web y estoy interesado en tus servicios de Fotografia, tengo este mensaje para ti: "${mensaje}"`;
    const encodedText = encodeURIComponent(texto); // Codifica el texto para incluirlo en la URL
    return `${baseUrl}?text=${encodedText}`;
  };

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
              Estoy aquí para ayudarte con tus consultas o proyectos. Puedes
              ponerte en contacto a través de los siguientes medios:
            </p>
            <ul className="space-y-4">
              <li className="text-lg text-gray-900 dark:text-white">
                📞 <strong>Teléfono:</strong> +56 9 8557 9335
              </li>
              <li className="text-lg text-gray-900 dark:text-white">
                📧 <strong>Email:</strong> sharayhv@icloud.com
              </li>
            </ul>

            {/* Iconos de redes sociales */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sharavision.cl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-gray-900 dark:text-white text-3xl hover:text-indigo-500 transition" />
              </a>
              <a
                href="https://www.tiktok.com/@sharayhenriquezvi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-gray-900 dark:text-white text-3xl hover:text-indigo-500 transition" />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest className="text-gray-900 dark:text-white text-3xl hover:text-indigo-500 transition" />
              </a>
              <a
                href="https://wa.me/56985579335"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-gray-900 dark:text-white text-3xl hover:text-indigo-500 transition" />
              </a>
            </div>
          </div>

          {/* Sección del formulario */}
          <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8">
            {/* Botones para alternar entre formularios */}
            <div className="flex justify-end space-x-4 mb-6">
              <button
                onClick={() => setShowWhatsAppForm(false)}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  !showWhatsAppForm
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white"
                }`}
              >
                Email
              </button>
              <button
                onClick={() => setShowWhatsAppForm(true)}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  showWhatsAppForm
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white"
                }`}
              >
                WhatsApp
              </button>
            </div>

            {/* Formulario de correo */}
            {!showWhatsAppForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Envíame un correo
                </h3>
                <form className="space-y-4 mt-4">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Tu correo"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <textarea
                    placeholder="Mensaje"
                    className="w-full px-4 py-2 border rounded-lg"
                    rows={4}
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
                  >
                    Enviar
                  </button>
                </form>
              </motion.div>
            )}

            {/* Formulario de WhatsApp */}
            {showWhatsAppForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Contáctame por WhatsApp
                </h3>
                <form className="space-y-4 mt-4">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <textarea
                    placeholder="Mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                    rows={4}
                  ></textarea>
                  <a
                    href={handleWhatsAppClick()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-2 text-center bg-green-500 text-white rounded-lg hover:bg-green-400 transition"
                  >
                    Enviar a WhatsApp
                  </a>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
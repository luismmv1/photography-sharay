import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          {/* Encabezado de la sección */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Contáctame
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Estoy aquí para ayudarte con tus consultas o proyectos. ¡Conversemos!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulario */}
            <motion.form
              action="#"
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="mb-6">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                  placeholder="Juan"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                  placeholder="Pérez"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                  placeholder="correo@ejemplo.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone-number"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                  placeholder="+58 123-456-7890"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                  placeholder="Déjame un mensaje..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 transition"
              >
                Enviar Mensaje
              </button>
            </motion.form>

            {/* Información de Contacto */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-indigo-100 dark:bg-indigo-600 text-indigo-600 dark:text-white rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    Escríbenos
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Puedes enviarnos un correo con tus dudas o propuestas.
                  </p>
                  <a
                    href="mailto:contacto@ejemplo.com"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    contacto@ejemplo.com
                  </a>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-indigo-100 dark:bg-indigo-600 text-indigo-600 dark:text-white rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    Llámanos
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nuestro equipo estará encantado de atenderte.
                  </p>
                  <p className="text-indigo-600 dark:text-indigo-400">
                    +58 123-456-7890
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs

'use client'

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Lista de imágenes para el slider
const images = [
    "/bodas/boda.jpg",
    "/bodas/bodas2.jpg",
    "/bodas/bodas3.jpg",
    "/bodas/bodas4.jpg",
    "/bodas/bodas5.jpg",
    "/bodas/bodas6.jpg",
    "/bodas/bodas7.jpg",
];

const page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Cambiar la imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section con Slider */}
      <section className="relative flex items-center justify-center h-screen">
        {/* Slider */}
        <div className="absolute inset-0">
          <AnimatePresence>
            {images.map((image, index) =>
              index === currentImageIndex ? (
                <motion.div
                  key={image}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center center",
                    backgroundSize: "contain",
                    /* backgroundSize: "cover" // esto ajusta la imagen completa */
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Contenido sobre el slider */}
        <motion.div
          className="relative z-10 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 5, y: 3 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gray-500/50 rounded-md p-4">
            Capturando Momentos Inolvidables para tí.
          </h1>
          <h2 className="mt-4 text-lg  ">
            <span className=" bg-gray-600/30 rounded-md p-2 ">
              Explora mi portafolio y descubre mi pasión por la fotografía.
            </span>
          </h2>
        
          <Link
            href="#contact"
            className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
          >
            Contáctame
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/services"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Mis Servicios
            </h2>
          </Link>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Ofrezco servicios para diferentes ocasiones especiales.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Bodas", image: "/bodas/bodas15.jpg" },
              { name: "15 Años", image: "/bodas/bodas6.jpg" },
              { name: "Aniversarios", image: "/bodas/bodas18.jpg" },
              { name: "Eventos Especiales", image: "/bodas/bodas4.jpg" },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-16 bg-gray-100 dark:bg-gray-800"
        style={{
          backgroundImage: "url('/about/perfil.jpg')", // Reemplaza con tu imagen de fondo
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-6 text-center text-gray-900 dark:text-white">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Título e Introducción */}
            <h1 className="mb-2">
            <span className=" text-white text-4xl font-bold mb-4 bg-gray-400/30 rounded-md">
              Sobre Mí
            </span>
            </h1>
            <p className="text-white dark:text-gray-200 bg-gray-400/30 rounded-md">
              Mi amor por la fotografía y la creación de contenido digital guía cada proyecto que realizo. Capturo momentos únicos y transformo ideas en arte.
            </p>
          </motion.div>

          {/* Tarjetas con diseño limpio */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Tarjeta 1 */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-700 p-6"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Experiencia Profesional
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Más de 10 años capturando emociones en eventos y proyectos artísticos.
              </p>
            </motion.div>

            {/* Tarjeta 2 */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-700 p-6"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Creación de Contenido
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Innovando en estrategias visuales y contenido digital para redes sociales y más.
              </p>
            </motion.div>

            {/* Tarjeta 3 */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-700 p-6"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Pasión por el Arte
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expresando creatividad y emociones a través de la fotografía y el diseño.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-100 dark:bg-gray-800">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/portafolio"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mi Portafolio</h2>
          </Link>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Un vistazo a mi trabajo creativo.</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Agrega imágenes aquí */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/bodas/boda.jpg"
                alt="Proyecto 1"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/bodas/bodas25.jpg"
                alt="Proyecto 1"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/bodas/bodas20.jpg"
                alt="Proyecto 1"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Repite esto para más imágenes */}
          </div>
        </motion.div>
      </section>
  
      {/* Contact Section */}
      <section id="contact" className="py-16">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/contact"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Contáctame
            </h2>
          </Link>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Estoy aquí para ayudarte con tus necesidades fotográficas.
          </p>
          <form className="mt-8 mx-auto max-w-lg space-y-4">
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
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
            >
              Enviar
            </button>
          </form>
        </motion.div>
      </section>

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


    </main>
  )
}

export default page
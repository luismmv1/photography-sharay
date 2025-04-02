'use client'

import WhatsAppForm from "@/components/contactForm/WhatsAppForm";
import { aboutLanding } from "@/components/getData/aboutData";
import Slider from "@/components/sliders/Slider";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  
  return (
    <main className="bg-white dark:bg-gray-900">
      <Slider/>

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
              { name: "Bodas", image: "/pages/home/services/bodas.jpg" },
              { name: "15 Años", image: "/pages/home/services/quinces.jpg" },
              { name: "Aniversarios", image: "/pages/home/services/aniversarios.jpg" },
              { name: "Eventos Especiales", image: "/pages/home/services/eventos.jpg" },
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
          backgroundImage: "url('/pages/home/about/about.jpg')", // Reemplaza con tu imagen de fondo
          backgroundSize: "cover",
          backgroundPosition: "top center",
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
              <Link
                href="/about">
                <span className=" text-white text-4xl font-bold mb-4 bg-gray-400/30 rounded-md">
                  {aboutLanding.title}
                </span>
              </Link>
            </h1>
            <p className="text-white dark:text-gray-200 bg-gray-400/30 rounded-md">
              {aboutLanding.description}
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
                src="/pages/services/bodas/boda.jpg"
                alt="Proyecto 1"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/pages/services/bodas/bodas25.jpg"
                alt="Proyecto 1"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/pages/services/bodas/bodas20.jpg"
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
      <section id="contact" className="py-16 items-center">
        <div className="grid container mx-auto mb-8 items-center p-12 rounded-2xl relative shadow-md overflow-hidden m-12">
        <WhatsAppForm/>
        </div>
      </section>
    </main>
  )
}

export default page;
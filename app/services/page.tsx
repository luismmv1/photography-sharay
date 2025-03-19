'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedServiceDemo } from './components/AnimatedServiceDemo';
import { AnimatedPin } from './components/AnimatePin';
import servicesDataSlug from './getData/servicesDataSlug';

const page = () => {
  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh]"
        style={{
          backgroundImage: "url('/pages/services/services.jpg')",
          backgroundPosition: "center center",
          height: "350px",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-6">
          {/* Titulo */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-gray-700/70 rounded-md p-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Servicios
          </motion.h1>
          {/* Descripcion */}
          <motion.p
            className="max-w-2xl text-gray-300 bg-gray-700/70 rounded-md p-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Cada servicio está diseñado para capturar tus momentos más preciados y transformar tus ideas en arte.
          </motion.p>
        </div>
      </section>
      {/* <AnimatedServiceDemo /> */}
      <section className="mt-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <AnimatedServiceDemo />
        </div>
      </section>
      {/* Servicios */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6 space-y-16">
          {servicesDataSlug.map((servicio, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 + index * 0.2 }}
            >
              {/* Componente de Imagen Nueva */}
              <div className="lg:w-1/2 mb-12">
                <AnimatedPin
                  title={servicio.titulo}
                  href={`/services/${servicio.slug}`}
                  imageUrl={servicio.imagen}
                />
              </div>

              {/* Contenido */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'} mt-16 lg:mt-10`}>
                <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                  {servicio.titulo}
                </h2>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  {servicio.descripcion}
                </p>
                <Link href={`/services/${servicio.slug}`} legacyBehavior>
                  <a className="mt-4 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition">
                    Ver Más
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;

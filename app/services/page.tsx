'use client';

import { motion } from 'framer-motion';
import { AnimatedService } from './components/AnimatedService';

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
      {/* Servicios Animados  */}
      <section className="mt-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <AnimatedService />
        </div>
      </section>
    </main>
  );
};

export default page;

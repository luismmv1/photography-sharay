'use client';

import { AnimatedService } from '@/app/components/services/AnimatedService';
import { motion } from 'framer-motion';
import { serviceData } from '../getData/servicesData';

const page = () => {
  return (
    <main className="bg-white dark:bg-gray-900">
      <section
        className="relative bg-cover bg-center h-[80vh]"
        style={{
          backgroundImage: `url(${serviceData.imageSection})`,
          backgroundPosition: "center center",
          height: "350px",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-gray-700/70 rounded-md p-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {serviceData.title}
          </motion.h1>
          <motion.p
            className="max-w-2xl text-gray-300 bg-gray-700/70 rounded-md p-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {serviceData.description}
          </motion.p>
        </div>
      </section>
      <section className="mt-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <AnimatedService />
        </div>
      </section>
    </main>
  );
};

export default page;

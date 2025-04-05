"use client";

import { about, aboutGallery, aboutGalleryInfo, aboutMe, experienceInfo, experiences, } from "@/app/getData/aboutData";
import { motion } from "framer-motion";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {/* Sección Sobre Mí */}
      <section className="relative bg-gray-100 dark:bg-gray-900 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{about.title}</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{about.description}</p>
        </div>

        <div className="container mx-auto space-y-16">
          {aboutMe.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="lg:w-1/2">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="rounded-full shadow-lg"
                  style={{ width: "auto", height: "auto" }}
                  loading="lazy"
                />
              </div>
              <div className="lg:w-1/2 lg:px-12 mt-8 lg:mt-0">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{item.title}</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Galería de Imágenes */}
      <section className="relative bg-gray-100 dark:bg-gray-900 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{aboutGalleryInfo.title}</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{aboutGalleryInfo.description}</p>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {aboutGallery.map((image, index) => (
            <motion.div
              key={index}
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image}
                alt={`Galería ${index + 1}`}
                width={400}
                height={400}
                loading="lazy"
                className="rounded-lg shadow-lg"
                style={{ width: "auto", height: "auto" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experiencia Laboral */}
      <section className="relative bg-gray-100 dark:bg-gray-900 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{experienceInfo.title}</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{experienceInfo.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative group perspective"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-lg shadow-lg overflow-hidden transform-gpu group-hover:rotate-2 group-hover:scale-[1.05] transition-transform duration-500">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${experience.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h2 className="text-xl font-bold text-white">{experience.title}</h2>
                  <p className="text-gray-300 text-sm mt-2">{experience.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
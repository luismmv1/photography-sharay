"use client"
import { slideInfo, sliderImages } from "@/app/getData/slideData";
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { BsPhoneFill } from "react-icons/bs";


const Slider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Cambiar la imagen automáticamente cada X segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Cambia cada 8 segundos
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative flex items-center justify-center h-screen">
        {/* Slider */}
        <div className="absolute inset-0">
          <AnimatePresence>
            {sliderImages.map((sliderImage, index) =>
              index === currentImageIndex ? (
                <motion.div
                  key={sliderImage}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${sliderImage})`,
                    backgroundPosition: "center center",
                    backgroundSize: "contain",
                    /* backgroundSize: "cover or contain" esto ajusta la imagen completa o repetir */
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
          <h1 className="text-4xl md:text-6xl font-bold bg-gray-700/70 rounded-md p-4">
          { slideInfo.sliderTitle}
          </h1>
          <h2 className="mt-4 text-lg  ">
            <span className=" bg-gray-700/70 rounded-md p-2 ">
            {slideInfo.sliderDescription}
            </span>
          </h2>
          <Link
            href="/contact"
            className="mt-6 inline-block px-10 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition"
          >
            <div className="flex items-center space-x-2">
              <BsPhoneFill className="text-center text-2xl"/>
              <span>
                Contáctame
              </span>
            </div>
          </Link>
        </motion.div>
      </section>
  )
}

export default Slider
import { portfolioLandingData, portfolioLandingImage } from "@/app/getData/portfolioLandingData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PortFolioLanding = () => {
  return (
    <div>
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Título del portafolio */}
        <Link href={portfolioLandingData.enlace}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {portfolioLandingData.title}
          </h2>
        </Link>
        {/* Descripción */}
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          {portfolioLandingData.description}
        </p>
        {/* Galería de imágenes */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioLandingImage.map((imageSrc, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageSrc}
                alt={`Proyecto ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PortFolioLanding;
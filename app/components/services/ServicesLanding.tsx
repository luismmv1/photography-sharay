import { servicesLandingData, servicesLandingImage } from "@/app/getData/servicesLandingData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';


const ServicesLanding = () => {
  return (
    <div>
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
            {servicesLandingData.title}
          </h2>
        </Link>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          {servicesLandingData.description}
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesLandingImage.map((servicesLandingImage, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={`/services/${servicesLandingImage.href}`}
              >
                <Image
                  src={servicesLandingImage.image}
                  alt={servicesLandingImage.name}
                  width={300}
                  height={200}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {servicesLandingImage.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ServicesLanding

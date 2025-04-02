import { aboutLanding, aboutLandingCards } from "@/app/getData/aboutData";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutLanding = () => {
  return (
    <div
      className="container mx-auto px-6 text-center text-gray-900 dark:text-white"
    >
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Título e Introducción */}
            <h1 className="mb-2">
              <Link href="/about">
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
            {aboutLandingCards.map((card, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-700 p-6"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
  )
}

export default AboutLanding

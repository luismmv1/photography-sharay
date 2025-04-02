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
      </div>
  )
}

export default ServicesLanding

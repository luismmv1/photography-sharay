import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

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
    </div>
  )
}

export default PortFolioLanding

'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();

  // Función para determinar si está en la página de inicio
  const isHome = pathname === "/";

  return (
    <footer className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white py-12">
      <motion.div
        className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Sección: Logo e Introducción */}
        <div>
          <motion.h2
            className="text-2xl font-bold mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Sharay Henriquez
          </motion.h2>
          <p className="text-gray-400 text-sm">
            Capturando momentos inolvidables y transformándolos en arte. Más de 10 años de experiencia en fotografía y contenido digital.
          </p>
        </div>

        {/* Sección: Enlaces de Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2">
            {[
              { name: "Inicio", href: "/" },
              { name: "Servicios", href: isHome ? "#services" : "/services" },
              { name: "Portafolio", href: isHome ? "#portfolio" : "/portafolio" },
              { name: "Contacto", href: isHome ? "#contact" : "/contact" },
              { name: "Sobre Mí", href: isHome ? "#about" : "/about" },
            ].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Link href={link.href} className="text-gray-400 hover:text-indigo-500 transition">
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Sección: Información de Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contáctame</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📞 Teléfono: +56985579335</li>
            <li>📧 Email: sharayhv@icloud.com</li>
          </ul>
        </div>

        {/* Sección: Redes Sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Sígueme</h3>
          <div className="flex space-x-4">
            <motion.a
              href="https://www.instagram.com/sharavision.cl/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaInstagram className="text-2xl hover:text-indigo-500 transition" />
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@sharayhenriquezvi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaTiktok className="text-2xl hover:text-indigo-500 transition" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/profile.php?id=61554995486929"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaFacebook className="text-2xl hover:text-indigo-500 transition" />
            </motion.a>
            <motion.a
              href="https://wa.me/56985579335"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaWhatsapp className="text-3xl hover:text-indigo-500 transition" />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Línea Divisoria y Copyright */}
      <motion.div
        className="mt-12 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <hr className="border-gray-700 mb-6" />
        © {new Date().getFullYear()} Sharay Henriquez By Luis Mogollon. Todos los derechos reservados.
      </motion.div>
    </footer>
  );
};

export default Footer;
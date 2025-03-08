'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaPinterest, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
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
            Shara`s Photography
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
              { name: "Servicios", href: "#services" },
              { name: "Portafolio", href: "#portfolio" },
              { name: "Contacto", href: "#contact" },
              { name: "Sobre Mí", href: "#about" },
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
            <li>📞 Teléfono: +58 123-456-7890</li>
            <li>📧 Email: contacto@ejemplo.com</li>
          </ul>
        </div>

        {/* Sección: Redes Sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Sígueme</h3>
          <div className="flex space-x-4">
            <motion.a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaInstagram className="text-2xl hover:text-indigo-500 transition" />
            </motion.a>
            <motion.a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaTiktok className="text-2xl hover:text-indigo-500 transition" />
            </motion.a>
            <motion.a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaPinterest className="text-2xl hover:text-indigo-500 transition" />
            </motion.a>
            <motion.a
              href="https://wa.me/581234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaWhatsapp className="text-2xl hover:text-indigo-500 transition" />
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
        © {new Date().getFullYear()} Name Photography By Luis Mogollon. Todos los derechos reservados.
      </motion.div>
    </footer>
  );
};

export default Footer;
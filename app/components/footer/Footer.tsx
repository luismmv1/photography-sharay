'use client'

import SocialLinks from "@/app/components/socialLinks/SocialLinks";
import siteDataInfo from "@/app/getData/siteDataInfo";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Title from "../header/Title";

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
            <Link
              href="/">
              <Title
                logoHeight={80}
                logoWidth={80}
                textSize="text-3xl"
              />
            </Link>
          </motion.h2>
          <p className="text-gray-400 text-sm text-justify">
            {siteDataInfo.siteSlogan}
          </p>
        </div>

        {/* Sección: Enlaces de Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2">
            {[
              { name: "Inicio", href: "/" },
              { name: "Servicios", href: isHome ? "#services" : "/services" },
              { name: "Portafolio", href: isHome ? "#portfolio" : "/portfolio" },
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
            <li>📞 Teléfono: {siteDataInfo.contactPhones}</li>
            <li>📧 Email: {siteDataInfo.contactEmails}</li>
          </ul>
        </div>

        {/* Sección: Redes Sociales */}
        <div>
          <SocialLinks/>
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
        <hr className="border-gray-300 mb-12" />
        <span>
          Copyright © {new Date().getFullYear()} {siteDataInfo.siteName} By <a
            href={`${siteDataInfo.contactWebSiteSupports}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteDataInfo.contactSupport}
          </a>
          . Todos los derechos reservados.
        </span>
      </motion.div>
    </footer>
  );
};

export default Footer;
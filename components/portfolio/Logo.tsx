import { motion } from "motion/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

// Componente Logo
export const Logo = () => {
    return (
      <Link
        href="/contact"
        onClick={() => console.log("Logo clic para ver todo")} // Placeholder para clic en el logo
        className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20 bg-green-700 rounded-full"
        >
        <div className="h-5 w-6 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm shrink-0" />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex font-medium text-white dark:text-white whitespace-pre items-center text-center"
        >
                <FaWhatsapp className="text-center text-2xl mr-2" />
                Contactame
        </motion.span>
      </Link>
    );
  };
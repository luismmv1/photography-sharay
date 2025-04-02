import siteDataInfo from "@/getData/siteDataInfo";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div>
          <h3 className="text-lg font-semibold mb-4">Sígueme</h3>
          <div className="flex space-x-4">
            <motion.a
              href={`${siteDataInfo.socialMedia.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaInstagram className="text-3xl hover:text-indigo-500 transition" />
            </motion.a>
            <motion.a
              href={`${siteDataInfo.socialMedia.tiktok}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaTiktok className="text-3xl hover:text-indigo-500 transition" />
            </motion.a>
            <motion.a
              href={`${siteDataInfo.socialMedia.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaFacebook className="text-3xl hover:text-indigo-500 transition" />
            </motion.a>
            <motion.a
              href={`${siteDataInfo.socialMedia.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaWhatsapp className="text-3xl hover:text-indigo-500 transition" />
            </motion.a>
          </div>
        </div>
  )
}

export default SocialLinks;
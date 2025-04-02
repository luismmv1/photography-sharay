'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'; // Importar íconos

// Propiedades del modal
interface ImageModalProps {
  images: string[]; // Lista de imágenes
  initialIndex: number; // Índice inicial al abrir el modal
  onClose: () => void; // Función para cerrar el modal
}

const ImageModal: React.FC<ImageModalProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex); // Estado para la imagen actual

  // Lista de efectos de transición aleatorios
  const transitionEffects = [
    { opacity: 0, y: -100 }, // Desvanecimiento hacia arriba
    { opacity: 0, y: 100 },  // Desvanecimiento hacia abajo
    { opacity: 0, x: -100 }, // Desvanecimiento hacia la izquierda
    { opacity: 0, x: 100 },  // Desvanecimiento hacia la derecha
    { opacity: 0, scale: 0.5 }, // Escala pequeña y desvanecimiento
    { opacity: 0, rotate: 45 }, // Rotación y desvanecimiento
  ];

  // Función para obtener un efecto aleatorio de la lista
  const getRandomEffect = () => {
    return transitionEffects[Math.floor(Math.random() * transitionEffects.length)];
  };

  // Función para mostrar la imagen siguiente
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Función para mostrar la imagen anterior
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      {/* Botón para cerrar el modal */}
      <motion.button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:scale-110 transition-transform"
        whileHover={{ rotate: 360 }} // Animación al pasar el mouse
      >
        <FiX /> {/* Ícono para cerrar */}
      </motion.button>

      {/* Botón para la imagen anterior */}
      <motion.button
        onClick={handlePrev}
        className="absolute left-4 text-white text-4xl hover:scale-110 transition-transform"
        whileHover={{ scale: 1.2 }} // Escala al pasar el mouse
      >
        <FiChevronLeft /> {/* Ícono para retroceder */}
      </motion.button>

      {/* Botón para la imagen siguiente */}
      <motion.button
        onClick={handleNext}
        className="absolute right-4 text-white text-4xl hover:scale-110 transition-transform"
        whileHover={{ scale: 1.2 }} // Escala al pasar el mouse
      >
        <FiChevronRight /> {/* Ícono para avanzar */}
      </motion.button>

      {/* Imagen con animaciones */}
      <motion.img
        key={currentIndex} // Cambia la key para reiniciar la animación
        src={images[currentIndex]} // Imagen actual
        alt={`Image ${currentIndex}`} // Texto alternativo dinámico
        className="max-w-3xl max-h-full rounded-lg shadow-lg"
        initial={getRandomEffect()} // Efecto de entrada aleatorio
        animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }} // Estado final
        exit={getRandomEffect()} // Efecto de salida aleatorio
        transition={{ duration: 0.8 }} // Duración de las transiciones
      />
    </div>
  );
};

export default ImageModal;
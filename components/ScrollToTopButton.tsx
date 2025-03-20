'use client';

import { useEffect, useState } from 'react';
import { BsShiftFill } from 'react-icons/bs';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón al hacer scroll
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  useEffect(() => {
    // Escuchar el evento de scroll
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Limpiar el evento al desmontar
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-20 z-50 p-4 rounded-md bg-indigo-800 text-white shadow-lg hover:bg-indigo-700 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Ir al inicio"
    >
          <BsShiftFill />
    </button>
  );
}
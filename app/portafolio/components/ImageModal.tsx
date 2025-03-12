'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface ImageModalProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        &times;
      </button>
      <button onClick={handlePrev} className="absolute left-4 text-white">
        &#8249;
      </button>
      <button onClick={handleNext} className="absolute right-4 text-white">
        &#8250;
      </button>
      <motion.img
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        className="max-w-3xl max-h-full rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </div>
  );
};

export default ImageModal;
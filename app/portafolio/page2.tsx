'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ImageModal from './components/ImageModal';

const images = [
    '/portafolio/bodas/boda.jpg',
    '/portafolio/bodas/bodas.jpg',
    '/portafolio/bodas/bodas1.png',
    '/portafolio/bodas/bodas2.jpg',
    '/portafolio/bodas/bodas3.jpg',
    '/portafolio/bodas/bodas4.jpg',

];

const categories = [
  'Aniversarios',
  'Audiovisuales',
  'BabyShowers',
  'Bautizos',
  'Bodas',
  'Cumples',
  'Contenido Digital',
  'Eventos Especiales',
  'Modelos',
  'Productos',
  'Quince Años',
  'Retratos',
];

const page: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todo');
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // This effect ensures the selected image is in view when modal is closed
    const selectedImage = document.getElementById(`image-${currentIndex}`);
    if (selectedImage) {
      selectedImage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [showModal]);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-64 bg-white dark:bg-gray-900 p-4">
        <h2 className="text-xl font-bold mb-4">Portafolio</h2>
        <ul>
          <li
            className={`cursor-pointer p-2 ${selectedCategory === 'Todo' ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => handleCategoryClick('Todo')}
          >
            Todo
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer p-2 ${selectedCategory === category ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-8">
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Video</h2>
          <video controls className="w-full h-[320px] rounded-lg">
            <source
              src="/pages/services/bodas/clics/bodas.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className="text-3xl font-bold mb-8">Portafolio - {selectedCategory}</h1>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              id={`image-${index}`}
              className="bg-white rounded-lg shadow-lg p-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleImageClick(index)}
            >
              <img src={image} alt={`Portfolio ${index}`} className="w-full h-auto object-cover rounded-lg" />
            </motion.div>
          ))}
        </div>
        {showModal && (
          <ImageModal images={images} initialIndex={currentIndex} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default page;
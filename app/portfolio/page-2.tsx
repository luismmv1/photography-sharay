'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ImageModal from '../../components/imageModal/ImageModal';
import { categories, getCategoryImages } from './getData/categories';

const page: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todo');
  const [images, setImages] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = (category: string) => {
      if (category === 'Todo') {
        const allImages = categories.flatMap(cat => getCategoryImages(cat.path));
        setImages(allImages);
      } else {
        const categoryImages = getCategoryImages(categories.find(cat => cat.title === category)?.path || '');
        setImages(categoryImages);
      }
    };

    fetchImages(selectedCategory);
  }, [selectedCategory]);

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
    // Ensure the selected image is in view when modal is closed
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
              key={category.path}
              className={`cursor-pointer p-2 ${selectedCategory === category.title ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => handleCategoryClick(category.title)}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-8">
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Video</h2>
          <video controls className="w-full h-[320px] rounded-lg ">
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
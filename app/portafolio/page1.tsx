'use client';

import React, { useState } from 'react';

const images = [
  '/images/folder1/image1.jpg',
  '/images/folder1/image2.png',
  '/images/folder2/image3.jpg',
  '/images/folder2/image4.png',
];

const categories = [
  'Aniversarios',
  'Bodas',
  'Cumples'
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todo');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-64 bg-white dark:bg-gray-900 p-4">
        <h2 className="text-xl font-bold mb-4">Portafolio</h2>
        <ul>
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
              src="/bodas/clics/bodas.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className="text-3xl font-bold mb-8">Portafolio - {selectedCategory}</h1>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <img src={image} alt={`Portfolio ${index}`} className="w-full h-48 object-cover rounded-lg" />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
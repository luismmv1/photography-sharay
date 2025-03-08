"use client"

import { Disclosure } from '@headlessui/react';
import { useState } from 'react';

function Navbar() {
  const [active, setActive] = useState('');

  return (
    <Disclosure as="nav" className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <a href="/" className="text-lg font-bold">MiPortafolio</a>
        <div className="space-x-4">
          <a href="#about" onClick={() => setActive('about')} className={`${active === 'about' ? 'underline' : ''}`}>Sobre mí</a>
          <a href="#services" onClick={() => setActive('services')} className={`${active === 'services' ? 'underline' : ''}`}>Servicios</a>
          <a href="#portfolio" onClick={() => setActive('portfolio')} className={`${active === 'portfolio' ? 'underline' : ''}`}>Portafolio</a>
          <a href="#blog" onClick={() => setActive('blog')} className={`${active === 'blog' ? 'underline' : ''}`}>Blog</a>
          <a href="#contact" onClick={() => setActive('contact')} className={`${active === 'contact' ? 'underline' : ''}`}>Contacto</a>
        </div>
      </div>
    </Disclosure>
  );
}

export default Navbar;
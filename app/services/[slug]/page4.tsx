'use client';

import { useEffect, useState } from 'react';
import { AnimatedService } from '../components/AnimatedService';
import servicesDataSlug from '../getData/servicesDataSlug';

interface ServiceData {
  slug: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  images: string[];
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const [service, setService] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchParams() {
      const { slug } = await params;
      const foundService = servicesDataSlug.find(service => service.slug === slug);
      setService(foundService || null);
      setLoading(false);
    }
    fetchParams();
  }, [params]);

  if (loading || !service) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              {service.titulo}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {service.descripcion}
            </p>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-gray-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Volver a Servicios
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border bg-green-500 border-gray-300 rounded-lg hover:bg-green-400 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Contactar por WhatsApp
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.images.map((src, index) => (
                <div key={index} className="relative">
                  <img
                    src={src}
                    alt={`${service.titulo} ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Integración del componente AnimatedServiceDemo */}
      <section className="mt-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <AnimatedService />
        </div>
      </section>
    </div>
  );
}

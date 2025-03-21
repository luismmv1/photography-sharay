'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsReplyFill } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import servicesDataSlug from '../getData/servicesDataSlug';

interface ServiceData {
  slug: string;
  titulo: string;
  subtitle: string;
  context: string;
  imagen: string;
  images: string[];
}

interface Params {
  slug: string;
}

interface PageProps {
  params: Promise<Params>;
}

export default function ServicePage({ params }: PageProps) {
  const [resolvedParams, setResolvedParams] = useState<Params | null>(null);
  const [service, setService] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function resolveParams() {
      const paramsResult = await params;
      setResolvedParams(paramsResult);
    }

    resolveParams();
  }, [params]);

  useEffect(() => {
    if (resolvedParams) {
      const { slug } = resolvedParams;
      const foundService = servicesDataSlug.find(service => service.slug === slug);
      setService(foundService || null);
      setLoading(false);
    }
  }, [resolvedParams]);

// Función para construir el enlace de WhatsApp dinámico
  const handleWhatsAppClick = () => {
    if (!service) return "#"; // Validar si no hay servicio cargado
    const baseUrl = "https://wa.me/56985579335";
    const texto = `Hola Sharay Henriquez, vi tu sitio web y estoy interesado en tus servicios de ${service.titulo}.`;
    const encodedText = encodeURIComponent(texto);
    return `${baseUrl}?text=${encodedText}`;
  };

  if (loading || !service) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Seccion Encabezado: Titulo y botones */}
      <section
        className="relative bg-cover bg-center flex justify-around items-center h-50 w-full min-h-0 md:min-h-full"
        style={{
          backgroundImage: "url('/pages/services/bodas/boda.jpg')",
          backgroundPosition: "center center",
          height: "200px",
        }}
      >
        {/* Boton Volver */}
        <div className="text-center">
          <Link
            href="/services"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border bg-black border-gray-300 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <div className='flex text-center space-x-2'>
              <BsReplyFill
                className='text-center text-2xl'
              />
              <span>
                Volver
              </span>
            </div>
          </Link>
        </div>
        {/* Titulo del Servicio */}
        <div className='text-center'>
          <h1 className=" max-w-4xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white bg-gray-700/70 rounded-md p-4">
            {service.titulo}
          </h1>
        </div>
        {/* Boton Contactar Whatsapp */}
        <div className='text-center'>
          <a
            href={handleWhatsAppClick()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border bg-green-700 border-gray-300 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <div className='flex text-center space-x-2'>
              <span>
                Contactar por WhatsApp
              </span>
              <FaWhatsapp
                className='text-center text-2xl'
              />
            </div>
          </a>
        </div>
      </section>

      {/* Contenido de la Página */}
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            {/* subtitle de Servicio 1 */}
            <h2 className="max-w-2xl mb-6 mt-6 text-2xl font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400 text-justify">
              {service.subtitle}
            </h2>
            {/* subtitle de Servicio 2 */}
            <p className='max-w-2xl mt-6 mb-6 text-justify'>
              {service.context}
            </p>

          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.images.map((src, index) => (
                <div key={index} className="relative">
                  <Image
                    src={src}
                    alt={`${service.titulo} ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                    width={500}
                    height={500}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className='container mx-auto mb-8 p-8'>
      

      </section>
    </div>
  );
}
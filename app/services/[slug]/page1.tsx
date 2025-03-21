'use client';

import Image from 'next/image';
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
  params: Promise<Params>;  // Ajuste aquí para manejar params como una promesa
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

  if (loading || !service) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="container mx-auto bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-4 xl:gap-0 lg:py-8 lg:grid-cols-6">
          <a
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
          </a>
          <a
            href="https://wa.me/YOUR_PHONE_NUMBER"
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
      <section className='flex mx-auto justify-center'>
        <h1 className="max-w-4xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          {service.titulo}
        </h1>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              {service.titulo}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {service.subtitle}
            </p>
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
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
            <p>
              {service.context}
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
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
    </div>
  );
}

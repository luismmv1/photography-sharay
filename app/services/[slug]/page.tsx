"use client";

import { AnimatedCircularProgressBarDemo } from "@/app/components/progress/progressMagicUI";
import { constructWhatsAppLink, serviceSlugError } from "@/app/getData/servicesData";
import servicesDataSlug from "@/app/getData/servicesDataSlug";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsReplyFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

interface ServiceData {
  slug: string;
  tittle: string;
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
      const foundService = servicesDataSlug.find((service) => service.slug === slug);
      setService(foundService || null);
      setLoading(false);
    }
  }, [resolvedParams]);

  // Show the progress indicator until the loading is complete
  

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
        <AnimatedCircularProgressBarDemo />
      </div>
    );
  }
  
  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
        <Link
          href={serviceSlugError.enlace}
          className="text-2xl text-gray-700 dark:text-gray-300"
        >
          {serviceSlugError.error1}
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Section Header: title and buttons */}
      <section
        className="relative bg-cover bg-center flex justify-around items-center h-50 w-full min-h-0 md:min-h-full"
        style={{
          backgroundImage: "url('/pages/services/bodas/boda.jpg')",
          backgroundPosition: "center center",
          height: "200px",
        }}
      >
        {/* Back Button */}
        <div className="text-center">
          <Link
            href="/services"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border bg-black border-gray-300 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <div className="flex text-center space-x-2">
              <BsReplyFill className="text-center text-2xl" />
              <span>Volver</span>
            </div>
          </Link>
        </div>
        {/* Service Title */}
        <div className="text-center">
          <h1 className="max-w-4xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white bg-gray-700/70 rounded-md p-4">
            {service.tittle}
          </h1>
        </div>
        {/* WhatsApp Contact Button */}
        <div className="text-center">
          <Link
            href={service?.tittle ? constructWhatsAppLink(service?.tittle) : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-5 py-3 font-medium text-center text-white border bg-green-700 rounded-lg hover:bg-green-600"
          >
            <div className="flex text-center space-x-2">
              <span>Contactar por WhatsApp</span>
              <FaWhatsapp className="text-center text-2xl" />
            </div>
          </Link>
        </div>
      </section>

      {/* Page Content */}
      <section className="grid container mx-auto mb-8 items-center p-12 rounded-2xl relative shadow-md overflow-hidden m-12">
        <div className="items-center">
          <div className="flex flex-row p-4">
            <div className="basis-2/3">
              <article>
                <h2 className="text-justify text-3xl font-bold text-gray-500 m-12">{service.subtitle}</h2>
                <p className="text-justify text-2xl text-gray-500 m-12">{service.context}</p>
              </article>
            </div>
            <div className="basis-1/3 items-center text-center">
              <motion.div
                className="relative overflow-hidden rounded-lg transition-shadow duration-300 bg-white w-auto h-100"
                whileHover={{ scale: 1.2 }}
              >
                <Image
                  src={service.imagen}
                  alt={service.tittle}
                  className="w-auto h-auto rounded-lg text-center"
                  priority
                  width={300}
                  height={300}
                />
              </motion.div>
            </div>
          </div>
          <div className="col-span-4 col-start-2 text-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 items-center">
              {service.images.length > 0 ? (
                service.images.map((src, index) => (
                  <motion.div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-700 w-90 h-auto"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={src}
                      alt={`${service.tittle} ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg"
                      width={300}
                      height={300}
                      priority={index === 0}
                    />
                  </motion.div>
                ))
              ) : (
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {serviceSlugError.error}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
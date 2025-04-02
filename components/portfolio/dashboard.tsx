"use client";

import { categories, getCategoryImages } from "@/app/portfolio/getData/categories";
import siteDataInfo from "@/components/getData/siteDataInfo";
import ImageModal from "@/components/imageModal/ImageModal"; // Modal para imágenes
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { IconBrandTabler } from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export function DashBoardSide() {
  // Estados
  const [open, setOpen] = useState(false); // Controlar apertura del Sidebar
  const [isModalOpen, setIsModalOpen] = useState(false); // Controlar apertura del modal
  const [modalImages, setModalImages] = useState<string[]>([]); // Imágenes en el modal
  const [modalIndex, setModalIndex] = useState(0); // Índice inicial del modal
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Categoría seleccionada

  // Combinar todas las imágenes de las categorías
  const allImages = categories.flatMap((category) => getCategoryImages(category.path));

  // Manejo del clic en una imagen
  const handleImageClick = (images: string[], index: number) => {
    setModalImages(images); // Configura las imágenes del modal
    setModalIndex(index); // Índice inicial de la imagen seleccionada
    setIsModalOpen(true); // Abre el modal
  };

  // Enlaces del Sidebar (incluyendo "Todo" y categorías dinámicas)
  const links = [
    {
      label: "Todo",
      href: "#todo",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
      ),
      onClick: () => setSelectedCategory(null), // Mostrar todas las imágenes
    },
    ...categories.map((category) => ({
      label: category.title,
      href: `#${category.path}`,
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
      ),
      onClick: () => setSelectedCategory(category.path), // Mostrar imágenes de la categoría seleccionada
    })),
  ];

  return (
    <>
      {/* Contenedor Principal */}
      <div
        className={cn(
          "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-auto mx-auto border border-neutral-200 dark:border-neutral-700",
          "h-[80vh]" // Altura personalizada
        )}
      >
        {/* Sidebar */}
        <Sidebar open={open} setOpen={setOpen} animate={true}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-auto overflow-x-hidden">
              <>
                <Logo /> {/* Logo del Dashboard */}
              </>
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink
                    key={idx}
                    link={{
                      ...link,
                      onClick: link.onClick, // Lógica de clic asociada
                    }}
                  />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: siteDataInfo.siteName,
                  href: "/about",
                  icon: (
                    <Image
                      src={siteDataInfo.logoPng}
                      className="h-10 w-auto shrink-0"
                      width={50}
                      height={50}
                      alt="logo"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>

        {/* Dashboard */}
        <Dashboard
          selectedCategory={selectedCategory}
          allImages={allImages} // Pasar todas las imágenes combinadas al Dashboard
          onImageClick={(images, index) =>
            handleImageClick(
              selectedCategory === null ? allImages : images, // Usar todas las imágenes si es "Todo"
              index
            )
          }
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ImageModal
          images={modalImages} // Imágenes actuales en el modal
          initialIndex={modalIndex} // Índice inicial
          onClose={() => setIsModalOpen(false)} // Cerrar modal
        />
      )}
    </>
  );
}

// Componente Logo
export const Logo = () => {
  return (
    <Link
      href="/contact"
      onClick={() => console.log("Logo clic para ver todo")} // Placeholder para clic en el logo
      className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20 bg-green-700 rounded-full"
    >
      <div className="h-5 w-6 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-white dark:text-white whitespace-pre"
      >
        Contactame
      </motion.span>
    </Link>
  );
};

// Componente del Dashboard
const Dashboard = ({
  selectedCategory,
  allImages,
  onImageClick,
}: {
  selectedCategory: string | null; // Categoría seleccionada
  allImages: string[]; // Todas las imágenes combinadas
  onImageClick: (images: string[], index: number) => void; // Función para clic en imágenes
}) => {
  // Mostrar solo imágenes relevantes
  const filteredCategories = selectedCategory
    ? categories
        .filter((category) => category.path === selectedCategory) // Filtrar categorías
        .map((category) => ({
          ...category,
          images: getCategoryImages(category.path), // Obtener imágenes de cada categoría filtrada
        }))
    : [{ title: "Todo", path: "all", images: allImages }]; // Agrupar todas las imágenes

  return (
    <div className="flex flex-1 overflow-auto mb-20 rounded-tl-2xl bg-white border border-neutral-200">
      <div className="p-2 md:p-12 rounded-tl-2xl flex flex-col gap-2 flex-1 w-full h-full">
        {filteredCategories.map((category, idx) => (
          <div key={idx} className="mb-18">
            <h2 className="text-3xl font-bold mb-8" id={category.path}>
              {category.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {category.images.map((src, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer"
                  onClick={() => onImageClick(category.images, index)} // Abrir modal al hacer clic
                >
                  <img
                    src={src}
                    alt={`${category.title} ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
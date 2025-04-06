"use client";

import ImageModal from "@/app/components/imageModal/ImageModal"; // Modal para imágenes
import Dashboard from "@/app/components/portfolio/Dashboard";
import { Sidebar, SidebarBody, SidebarLink } from "@/app/components/portfolio/sidebar";
import { AnimatedCircularProgressBarDemo } from "@/app/components/progress/progressMagicUI"; // Import progress component
import { categories, getCategoryImages } from "@/app/getData/portFolioData";
import siteDataInfo from "@/app/getData/siteDataInfo";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { Logo } from "./Logo";

export function DashBoardSide() {
  // Estados
  const [open, setOpen] = useState(false); // Controlar apertura del Sidebar
  const [isModalOpen, setIsModalOpen] = useState(false); // Controlar apertura del modal
  const [modalImages, setModalImages] = useState<string[]>([]); // Imágenes en el modal
  const [modalIndex, setModalIndex] = useState(0); // Índice inicial del modal
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Categoría seleccionada
  const [loading, setLoading] = useState(true); // Estado de carga

  // Combinar todas las imágenes de las categorías
  const allImages = categories.flatMap((category) => getCategoryImages(category.path));

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setLoading(false); // Once loading completes, set state to false
    }, 3000); // Adjust duration as needed
    return () => clearTimeout(timeout); // Clear timeout on cleanup
  }, []);

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
      icon: <BsFilterLeft  className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />,
      onClick: () => setSelectedCategory(null), // Mostrar todas las imágenes
    },
    ...categories.map((category) => ({
      label: category.title,
      href: `#${category.path}`,
      icon: <category.icon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />,
      onClick: () => setSelectedCategory(category.path), // Mostrar imágenes de la categoría seleccionada
    })),
  ];

  if (loading) {
    // Mostrar indicador de progreso mientras se carga el contenido
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
        <AnimatedCircularProgressBarDemo /> {/* Indicador de progreso */}
      </div>
    );
  }

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
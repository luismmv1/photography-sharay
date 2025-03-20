"use client";

import { Carousel } from "@/components/ui/carousel";
export function ServicesCarousel() {
  const slideData = [
    {
      title: "",
      button: "",
      src: "/pages/services/bodas/boda.jpg",
    },
    {
      title: "",
      button: "",
      src: "/pages/services/bodas/bodas.jpg",
    },
    {
      title: "",
      button: "",
      src: "/pages/services/bodas/bodas1.png",
    },
    {
      title: "",
      button: "",
      src: "/pages/services/bodas/bodas2.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}

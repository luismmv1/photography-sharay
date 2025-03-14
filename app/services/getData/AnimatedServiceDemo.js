import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import servicesDataSlug from "./servicesDataSlug";

export function AnimatedServiceDemo() {
  const services = servicesDataSlug.map(service => ({
    quote: service.descripcion,
    name: service.titulo,
    designation: "", // Valor vacío para agregar manualmente más tarde
    src: service.imagen, // Usar la imagen principal del servicio
  }));

  return <AnimatedTestimonials testimonials={services} />;
}
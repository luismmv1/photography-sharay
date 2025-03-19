import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import servicesDataSlug from "../getData/servicesDataSlug";

export function AnimatedServiceDemo() {
  const services = servicesDataSlug.map(service => ({
    quote: service.descripcion,
    name: service.titulo,
    designation: "", // Valor vacío para agregar manualmente más tarde
    src: service.imagen, // Usar la imagen principal del servicio
    slug: "services/"+service.slug,
  }));

  return <AnimatedTestimonials testimonials={services} />;
}
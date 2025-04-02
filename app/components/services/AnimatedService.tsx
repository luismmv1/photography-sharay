import { AnimatedTestimonials } from "@/app/components/services/animated-testimonials";
import servicesDataSlug from "@/app/getData/servicesDataSlug";

export function AnimatedService() {
  const services = servicesDataSlug.map(service => ({
    quote: service.subtitle,
    name: service.tittle,
    designation: "", // Valor vacío para agregar manualmente más tarde
    src: service.imagen, // Usar la imagen principal del servicio
    slug: "services/" + service.slug,
  }));

  return <AnimatedTestimonials testimonials={services} />;
}
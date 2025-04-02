import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// BOTON WHATSAPP EN PAGINA SERVICIOS
export const constructWhatsAppLink = (serviceTitle: string | undefined): string => {
  if (!serviceTitle) return "#"; // Validate if serviceTitle is not provided
  const baseUrl = "https://wa.me/56985579335";
  const texto = `Hola Sharay Henriquez, vi tu sitio web y estoy interesado en tus servicios de ${serviceTitle}.`;
  const encodedText = encodeURIComponent(texto);
  return `${baseUrl}?text=${encodedText}`;
};

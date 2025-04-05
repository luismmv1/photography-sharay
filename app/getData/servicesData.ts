export const serviceData = {
    title: "Servicios",
    description: "Cada servicio está diseñado para capturar tus momentos más preciados y transformar tus ideas en arte.",
    services: [
        {
            
        },]
    
}

export const serviceSlugError = {
    enlace: "/services",
    error: "No hay imágenes disponibles para este servicio.",
    error1: "No se pudo cargar el servicio y/o no existe. Click aqui para Volver atras",
}
  
// BOTON WHATSAPP EN PAGINA SERVICIOS
export const constructWhatsAppLink = (serviceTitle: string | undefined): string => {
    if (!serviceTitle) return "#"; // Validate if serviceTitle is not provided
    const baseUrl = "https://wa.me/56985579335";
    const texto = `Hola Sharay Henriquez, vi tu sitio web y estoy interesado en tus servicios de ${serviceTitle}.`;
    const encodedText = encodeURIComponent(texto);
    return `${baseUrl}?text=${encodedText}`;
  };
  
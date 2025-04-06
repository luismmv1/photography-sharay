import { categories, getCategoryImages } from "@/app/getData/portFolioData";
import Image from "next/image";

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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
              {category.images.map((src, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer"
                  onClick={() => onImageClick(category.images, index)} // Abrir modal al hacer clic
                >
                  <Image
                    src={src}
                    alt={`${category.title} ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                    width={300}
                    height={300}
                    loading="lazy"
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
  
export default Dashboard;
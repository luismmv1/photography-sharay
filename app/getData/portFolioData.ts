import {
  ArrowPathIcon,
  BuildingLibraryIcon,
  CakeIcon,
  CalendarDaysIcon,
  GiftIcon,
  GiftTopIcon,
  HeartIcon,
  SparklesIcon,
  UserCircleIcon,
  UserIcon,
  VideoCameraIcon,
  ViewfinderCircleIcon,
} from '@heroicons/react/20/solid';
const basePath = '/pages/services/';

// Define el tipo para los íconos (opcional si los íconos son componentes React)
type IconType = React.ElementType;

// Define el tipo para las categorías
interface Category {
  title: string;
  path: string;
  icon: IconType;
  images: string[];
}

export const categories: Category[] = [

  {
    title: 'Aniversarios',
    path: 'aniversarios',
    icon: CalendarDaysIcon,
    images: [
      'aniversarios/aniversarios.jpg',
      'aniversarios/aniversarios1.png',
      'aniversarios/aniversarios2.png',
      'aniversarios/aniversarios3.png',
      'aniversarios/aniversarios4.png',
      'aniversarios/aniversarios5.png',
    ],
  },
  {
    title: 'Audiovisuales',
    path: 'audiovisual',
    icon: VideoCameraIcon,
    images: [
      'audiovisual/audiovisual.jpg',
    ],
  },
  {
    title: 'BabyShowers',
    path: 'babyshowers',
    icon: GiftTopIcon,
    images: [
      'babyshowers/babyshowers.jpg',
      'babyshowers/babyshowers1.jpg',
      'babyshowers/babyshowers2.jpg',
    ],
  },
  {
    title: 'Bautizos',
    path: 'bautizos',
    icon: BuildingLibraryIcon,
    images: [
      'bautizos/bautizos.jpg',
    ],
  },
  {
    title: 'Bodas',
    path: 'bodas',
    icon: HeartIcon,
    images: [
      'bodas/boda.jpg',
      'bodas/bodas.jpg',
      'bodas/bodas1.png',
      'bodas/bodas2.jpg',
      'bodas/bodas3.jpg',
      'bodas/bodas4.jpg',
      'bodas/bodas5.jpg',
      'bodas/bodas6.jpg',
      'bodas/bodas7.jpg',
      'bodas/bodas8.jpg',
      'bodas/bodas9.jpg',
      'bodas/bodas10.jpg',
      'bodas/bodas11.jpg',
      'bodas/bodas12.jpg',
      'bodas/bodas13.jpg',
      'bodas/bodas14.jpg',
      'bodas/bodas15.jpg',
      'bodas/bodas16.jpg',
      'bodas/bodas17.jpg',
      'bodas/bodas18.jpg',
      'bodas/bodas19.jpg',
      'bodas/bodas20.jpg',
      'bodas/bodas21.jpg',
      'bodas/bodas22.jpg',
      'bodas/bodas23.jpg',
      'bodas/bodas24.jpg',
      'bodas/bodas25.jpg',
      'bodas/bodas26.png',
      'bodas/bodas27.jpg',
      'bodas/bodas28.png',
      'bodas/bodas29.jpg',
      'bodas/bodas30.jpg',
      'bodas/bodas31.png',
      'bodas/bodas32.png',
      'bodas/bodas33.jpg',
      'bodas/bodas34.png',
      'bodas/bodas35.jpg',
      'bodas/bodas36.png',
      'bodas/bodas37.jpg',
      'bodas/bodas38.jpg',
      'bodas/bodas39.jpg',
      'bodas/bodas40.jpg',
      'bodas/bodas41.jpg',
      'bodas/bodas42.jpg',
      'bodas/bodas43.jpg',
      'bodas/bodas44.jpg',
      'bodas/bodas45.jpg',
      'bodas/bodas46.jpg',
      'bodas/bodas47.jpg',
      'bodas/bodas48.jpg',
      'bodas/bodas49.jpg',
      'bodas/bodas50.jpg',
      'bodas/bodas51.jpg',
      'bodas/bodas52.png',
    ],
  },
  {
    title: 'Cumpleaños',
    path: 'cumples',
    icon: CakeIcon,
    images: [
      'cumples/cumples.jpg',
    ],
  },
  {
    title: 'Contenido Digital',
    path: 'digital',
    icon: ViewfinderCircleIcon,
    images: [
      'digital/digital.jpg',
    ],
  },
  {
    title: 'Eventos Especiales',
    path: 'eventos',
    icon: SparklesIcon,
    images: [
      'eventos/eventos.jpg',
      'eventos/eventos1.jpg',
      'eventos/eventos2.png',
      'eventos/eventos3.jpg',
      'eventos/eventos4.png',
      'eventos/eventos5.png',
      'eventos/eventos6.jpg',
      'eventos/eventos7.jpg',
      'eventos/eventos8.jpg',
      'eventos/eventos9.jpg',
      'eventos/eventos10.jpg',
      'eventos/eventos11.jpg',
      'eventos/eventos12.jpg',
    ],
  },
  {
    title: 'Modelos',
    path: 'model',
    icon: UserIcon,
    images: [
      'model/model.jpg',
      'model/model1.jpg',
      'model/model2.jpg',
      'model/model3.jpg',
      'model/model4.jpg',
      'model/model5.jpg',
      'model/model6.jpg',
      'model/model7.jpg',
      'model/model8.jpg',
    ],
  },
  {
    title: 'Productos',
    path: 'producto',
    icon: ArrowPathIcon,
    images: [
      'producto/producto.jpg',
    ],
  },
  {
    title: 'Quince Años',
    path: 'quinces',
    icon: GiftIcon,
    images: [
        'quinces/quinces.jpg',
        'quinces/quinces1.png',
        'quinces/quinces2.png',
        'quinces/quinces3.png',
        'quinces/quinces4.png',
        'quinces/quinces5.png',
    ],
  },
  {
    title: 'Retratos',
    path: 'retratos',
    icon: UserCircleIcon,
    images: [
      'retratos/retratos.jpg',
    ],
  },
];
// Función para obtener las imágenes de una categoría específica
export const getCategoryImages = (path: string): string[] => {
  const category = categories.find((category) => category.path === path);

  // Verifica si la categoría existe para evitar errores
  if (!category) {
    throw new Error(`Category with path '${path}' not found.`);
  }

  // Agrega el basePath a cada imagen
  return category.images.map((image) => `${basePath}${image}`);
};

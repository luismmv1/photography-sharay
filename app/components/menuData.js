// menuData.js
import {
  CalendarDaysIcon,
  GiftIcon,
  HeartIcon,
  PhoneIcon, PlayCircleIcon,
  SparklesIcon,
  SquaresPlusIcon,
} from '@heroicons/react/20/solid';
  
  export const callsToAction = [
    { name: 'Observa mi Portafolio', href: '/portafolio', icon: PlayCircleIcon },
    { name: 'Contáctame', href: '/contact', icon: PhoneIcon },
  ];
  
export const services = [
    /* { name: 'Creacion de Contenido', description: 'Contenido que conecta y transforma tu presencia online.', href: '/services/digital', icon: ViewfinderCircleIcon }, */
    { name: 'Bodas', description: 'El día más importante, contado en imágenes perfectas.', href: '/services/bodas', icon: HeartIcon },
    { name: '15 Años', description: 'Captura la magia de tu transición más especial.', href: '/services/quinces', icon: GiftIcon },
    { name: 'Aniversarios', description: 'Celebra el amor, captura recuerdos eternos.', href: '/services/aniversarios', icon: CalendarDaysIcon },
    { name: 'Eventos Especiales', description: 'Tus eventos únicos, capturados con precisión.', href: '/services/eventos', icon: SparklesIcon },
    /*  { name: 'BabyShowers', description: 'Tu dulce espera, retratada con amor.', href: '/services/babyshowers', icon: GiftTopIcon }, */
    /* { name: 'Bautizos', description: 'Inmortaliza el comienzo de una fe llena de amor.', href: '/services/bautizos', icon: BuildingLibraryIcon }, */
    /* { name: 'Cumpleaños', description: 'Memorias vibrantes de tu celebración especial.', href: '/services/cumples', icon: CakeIcon }, */
    /* { name: 'Productos', description: 'Resalta lo mejor de tu producto.', href: '/services/productos', icon: ArrowPathIcon }, */
    /* { name: 'Retratos', description: 'Expresa tu esencia en cada fotografía.', href: '/services/retratos', icon: UserCircleIcon }, */
    /* { name: 'Modelos', description: 'Construye tu portafolio con impacto.', href: '/services/model', icon: UserIcon }, */
    /* { name: 'Producción Audiovisual', description: 'Narrativas visuales que conectan.', href: '/services/audiovisual', icon: VideoCameraIcon }, */
    { name: 'Y Mucho más...', description: 'No dudes en ver todos mis servicios...', href: '/services', icon: SquaresPlusIcon },
  ];
  

  export const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre Mi', href: '/about' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Contáctame', href: '/contact' },
  ];
  

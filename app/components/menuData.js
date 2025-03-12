// menuData.js
import {
  ArrowPathIcon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon,
  PhoneIcon, PlayCircleIcon,
  SquaresPlusIcon
} from '@heroicons/react/20/solid';
  
  export const callsToAction = [
    { name: 'Observa mi Portafolio', href: '/portafolio', icon: PlayCircleIcon },
    { name: 'Contáctame', href: '/contact', icon: PhoneIcon },
  ];
  
  export const services = [
    { name: 'Bodas', description: 'Get a better understanding of your traffic', href: '/services/bodas', icon: ChartPieIcon },
    { name: '15 Años', description: 'Speak directly to your customers', href: '/services/quinces', icon: CursorArrowRaysIcon },
    { name: 'Aniversarios', description: 'Your customers’ data will be safe and secure', href: '/services/aniversarios', icon: FingerPrintIcon },
    { name: 'Eventos Especiales', description: 'Connect with third-party tools', href: '/services/eventos', icon: SquaresPlusIcon },
     /*  { name: 'BabyShowers', description: 'Build strategic funnels that will convert', href: '/services/babyshowers', icon: ArrowPathIcon }, */
    /* { name: 'Bautizos', description: 'Build strategic funnels that will convert', href: '/services/bautizos', icon: ArrowPathIcon }, */
    /* { name: 'Cumpleaños', description: 'Build strategic funnels that will convert', href: '/services/cumples', icon: ArrowPathIcon }, */
    { name: 'Y Mucho más...', description: 'Build strategic funnels that will convert', href: '/services', icon: ArrowPathIcon },
  ];
  

  export const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre Mi', href: '/about' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Contáctame', href: '/contact' },
  ];
  
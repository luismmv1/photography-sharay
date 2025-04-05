import siteDataInfo from '@/app/getData/siteDataInfo';
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
});

interface TitleProps {
  logoHeight?: number; // Altura del logo ajustable (en px)
  logoWidth?: number; // Anchura del logo ajustable (en px)
  textSize?: string; // Tamaño de la fuente ajustable
}

const Title: React.FC<TitleProps> = ({ 
  logoHeight = 120, // Valor predeterminado en px
  logoWidth = 120, // Valor predeterminado en px
  textSize = 'text-4xl' // Valor predeterminado para Tailwind CSS
}) => {
  return (
    <div className="flex lg:flex-1 text-white items-center">
      {/* Logo ajustable */}
      <Image
        alt="logo"
        src={siteDataInfo.logoPng}
        width={logoWidth} // Dinámico
        height={logoHeight} // Dinámico
        className="w-auto h-auto" // Mantiene proporciones
        priority 
      />
      {/* Texto ajustable */}
      <h2
        className={`self-center font-bold text-gray-900 dark:text-white ${textSize} ${greatVibes.className}`}
      >
        {siteDataInfo.siteName}
      </h2>
    </div>
  );
};

export default Title;
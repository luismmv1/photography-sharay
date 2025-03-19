'use client';
import { PinContainer } from '@/components/ui/3d-pin';
import { FC } from 'react';

interface AnimatedPinProps {
  title?: string;
  description?: string;
  href: string;
  imageUrl: string;  // Nueva prop para la URL de la imagen
}

export const AnimatedPin: FC<AnimatedPinProps> = ({
  title = undefined,
  description = undefined,
  href,
  imageUrl,  // Nueva prop para la URL de la imagen
}) => {
  return (
    <div className="h-[25rem] w-full flex items-center justify-center">
      <PinContainer title={title} href={href}>
{/*         <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
 */}        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">

          {title && (
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              {/* {title} */}
            </h3>
          )}
          {description && (
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">{description}</span>
            </div>
          )}
          <div className="flex flex-1 w-full rounded-lg">
            <img
              src={imageUrl}
              alt="Imagen del Pin"
              /* className="w-full h-full object-cover rounded-lg" */
              className='h-full w-full rounded-3xl object-cover object-center'
              width={500}
              height={500}
            /> {/* Imagen del Pin */}
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

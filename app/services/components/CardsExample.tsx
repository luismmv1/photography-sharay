import { AnimatedPin } from './AnimatePin';

const CardsExample = () => {
    return (
        <div>
            // Ejemplo de uso con título, descripción y enlace
            <AnimatedPin
                title="Aceternity UI"
                description="Customizable Tailwind CSS and Framer Motion Components."
                href="https://ui.aceternity.com"
                imageUrl="/bodas/boda.jpg"

            />

// Ejemplo de uso solo con enlace
            <AnimatedPin
                href="https://ui.aceternity.com"
                imageUrl="/bodas/boda.jpg"

            />
      
        </div>
    );
}

export default CardsExample

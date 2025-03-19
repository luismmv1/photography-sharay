'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    const experiences = [
        {
            title: "Fotógrafo Profesional",
            description: "Más de 10 años capturando momentos inolvidables, desde bodas hasta eventos corporativos.",
            image: "/pages/about/about9.jpg", // Ruta de imagen
        },
        {
            title: "Diseñador de Contenidos Digitales",
            description: "Creación de contenido atractivo para redes sociales y proyectos digitales innovadores.",
            image: "/pages/about/about10.jpg", // Ruta de imagen
        },
        {
            title: "Creador de Estrategias Visuales",
            description: "Desarrollo de estrategias visuales para marcas, desde campañas de marketing hasta branding.",
            image: "/pages/about/about11.jpg", // Ruta de imagen
        },
    ];

    return (
        <div>
            <section className="relative bg-gray-100 dark:bg-gray-900 py-16">
                {/* Título */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Sobre Mí
                    </h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        Mi pasión por el arte, la fotografía y la creación de contenido.
                    </p>
                </div>

                {/* Alternancia de imagen y texto */}
                <div className="container mx-auto space-y-16">
                    {/* Bloque 1: Imagen izquierda, texto derecho */}
                    <motion.div
                        className="flex flex-col lg:flex-row items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="lg:w-1/2 ">
                            <Image
                                src="/pages/about/about1.jpg"
                                alt="Fotografía creativa"
                                width={500}
                                height={500}
                                className="rounded-lg shadow-lg"
                                style={{ width: 'auto', height: 'auto' }}
                            />
                        </div>
                        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                La Fotografía como Arte
                            </h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                Con más de 10 años de experiencia, he perfeccionado mi habilidad para capturar momentos significativos y convertirlos en arte. Mi formación en arte visual y diseño me ha permitido explorar nuevas formas de expresión.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bloque 2: Texto izquierda, imagen derecha */}
                    <motion.div
                        className="flex flex-col lg:flex-row-reverse items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="lg:w-1/2">
                            <Image
                                src="/pages/about/about2.jpg"
                                alt="Creación de contenido digital"
                                width={500}
                                height={500}
                                className="rounded-lg shadow-lg"
                                style={{ width: 'auto', height: 'auto' }}
                            />
                        </div>
                        <div className="lg:w-1/2 lg:pr-12 mt-8 lg:mt-0">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Pasión por el Contenido Digital
                            </h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                Más allá de la fotografía, mi amor por el contenido digital me ha llevado a explorar la creación de contenido visual que impacta. Desde videografía hasta diseño gráfico, cada proyecto es una nueva oportunidad de innovar.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Galería de imágenes en perspectiva */}
                <div className="container mx-auto mt-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        Un Vistazo a Mi Trabajo
                    </h2>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {[
                            "/pages/about/about3.jpg",
                            "/pages/about/about4.jpg",
                            "/pages/about/about5.jpg",
                            "/pages/about/about6.jpg",
                            "/pages/about/about7.jpg",
                            "/pages/about/about8.jpg",
                        ].map((src, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={src} // Reemplaza con las rutas de tus imágenes
                                    alt={`Trabajo ${index + 1}`}
                                    width={400}
                                    height={400}
                                    className="rounded-lg shadow-lg"
                                    style={{ width: 'auto', height: 'auto' }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <section className="bg-gray-100 dark:bg-gray-900 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Experiencia Laboral
                        </h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            Conoce más sobre mi trayectoria profesional y las áreas en las que me destaco.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={index}
                                className="relative group perspective"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Card container */}
                                <div className="relative rounded-lg shadow-lg overflow-hidden transform-gpu group-hover:rotate-2 group-hover:scale-[1.05] transition-transform duration-500">
                                    {/* Background image */}
                                    <div
                                        className="h-64 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${experience.image})` }}
                                    ></div>

                                    {/* Content */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <h2 className="text-xl font-bold text-white">
                                            {experience.title}
                                        </h2>
                                        <p className="text-gray-300 text-sm mt-2">
                                            {experience.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

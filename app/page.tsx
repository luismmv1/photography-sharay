'use client'

import AboutLanding from "@/app/components/about/AboutLanding";
import WhatsAppForm from "@/app/components/contactForm/WhatsAppForm";
import PortFolioLanding from "@/app/components/portfolio/PortFolioLanding";
import ServicesLanding from "@/app/components/services/ServicesLanding";
import Slider from "@/app/components/sliders/Slider";

const page = () => {
  
  return (
    <main className="bg-white dark:bg-gray-900">
      <section id="slider" className="border shadow-2xl">
        <Slider />
      </section>
      <section id="services" className="py-16">
        <ServicesLanding/>
      </section>
      <section
        id="about"
        className="relative py-16 bg-gray-100 dark:bg-gray-800"
        style={{
          backgroundImage: "url('/pages/home/about/about.jpg')", // Reemplaza con tu imagen de fondo
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AboutLanding />
      </section>
      <section id="portfolio" className="py-16 bg-gray-100 dark:bg-gray-800">
        <PortFolioLanding/>
      </section>
        <section id="contact" className="py-16 items-center">
        <div className="grid container mx-auto mb-8 items-center p-12 rounded-2xl relative shadow-md overflow-hidden m-12">
          <WhatsAppForm />
        </div>
      </section>
    </main>
  )
}

export default page;
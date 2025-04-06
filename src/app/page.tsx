"use client"

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
import { FaRegCopy, FaCheck } from "react-icons/fa";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import { motion } from "framer-motion";


export default function Home() {
  const handleDownload = () => {
    // Aquí especificamos la ruta al archivo PDF que queremos descargar
    const fileUrl = '/CV_RodrigoRivas.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV_RodrigoRivas.pdf'; // Nombre con el que se descargará el archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [isCopied, setIsCopied] = useState(false); // Estado para cambiar el ícono

  const email = "jrmrivas21@gmail.com"; // Tu correo electrónico

  // Función para copiar al portapapeles
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true); // Cambia el ícono a "check"

      // Vuelve al ícono original después de 2 segundos
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error al copiar al portapapeles:", error);
    }
  };
  return (
    <section className="h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1.4,
            duration: 0.4,
            ease: "easeIn"
          }
        }}
        className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desarrollador Front End</span>
            <h1 className="h1 mb-6">Hola Soy <br /> <span className="text-accent">Rodrigo Rivas</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">Hago todo lo posible para que los proyectos sean de la mas alta calidad, sigo aprendiendo y me gusta el front end demasiado.</p>
            {/* botones y red social */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mb-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Descargar CV </span>
                <FiDownload className="text-xl" />
              </Button>
              {/* <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div> */}
            </div>

            <div className="flex items-center space-x-5 rounded-full border border-accent px-8 w-80 uppercase tracking-wider  h-[44px]">
              <span className="text-accent">{email}</span>
              <button
                onClick={handleCopy}
                className="py-2 px-4 text-xl flex items-center border-l-2 border-accent text-accent rounded-r-full hover:bg-accent hover:text-primary hover:border-white hover:transition-all duration-500"
              >
                {isCopied ? (<FaCheck />) : (<FaRegCopy />)}
              </button>
            </div>
          </div>
          {/* Foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

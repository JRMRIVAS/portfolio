'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/validations/contactSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import React, { useState } from "react";

const info = [
  //{ icon: <FaPhoneAlt />, title: "Teléfono", description: "(+503) 7742 8283" },
  { icon: <FaEnvelope />, title: "Email", description: "jrmrivas21@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Ubicación", description: "San Salvador, El Salvador" }
];

export default function ContactPage() {
  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange" // 👈 Valida en tiempo real mientras se escribe
    //🎯 Opciones alternativas:
    // mode: "onBlur" → Muestra los errores cuando el usuario sale del campo.
    // mode: "all" → Valida tanto al escribir como al salir del campo.
  });

  const [isLoading, setIsLoading] = useState(false); // 👈 Estado para el loader

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true); // 🌀 Inicia el loader
    try {
      console.log("Datos enviados:", data);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Mensaje enviado',
          text: 'Tu mensaje ha sido enviado con éxito. Pronto recibirás una respuesta.',
          confirmButtonText: 'Aceptar'
        });
        reset({
          name: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
          confirmButtonText: 'Aceptar'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error del servidor',
        text: 'No se pudo conectar con el servidor. Por favor, inténtalo más tarde.',
        confirmButtonText: 'Aceptar'
      });
      console.error("Error al enviar el mensaje:", error);
    } finally {
      setIsLoading(false); // ✅ Finaliza el loader
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px]">
          {/* Formulario */}
          <div className="bg-[#27272c] rounded-xl p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
              <h3 className="text-4xl text-accent">Trabajemos juntos</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input className="w-full" type="text" placeholder="Nombre" {...register("name")} onBlur={(e) => {
                    const capitalized = capitalizeFirstLetter(e.target.value);
                    e.target.value = capitalized;
                    setValue("name", capitalized);
                  }} />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <Input className="w-full" type="text" placeholder="Apellido" {...register("lastName")} onBlur={(e) => {
                    const capitalized = capitalizeFirstLetter(e.target.value);
                    e.target.value = capitalized;
                    setValue("lastName", capitalized);
                  }} />
                  {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                </div>
                <div>
                  <Input className="w-full" type="email" placeholder="Correo Electrónico" {...register("email")} />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <Textarea className="h-[200px] resize-none" placeholder="Escribe tu mensaje aquí" {...register("message")} />
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                size="default"
                className="max-w-40 flex items-center justify-center"
                disabled={isLoading} // 👈 Lo desactiva mientras se carga
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Enviar"
                )}
              </Button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

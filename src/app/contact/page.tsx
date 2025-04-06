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

const info = [
  { icon: <FaPhoneAlt />, title: "Teléfono", description: "(+503) 7742 8283" },
  { icon: <FaEnvelope />, title: "Email", description: "jrmrivas21@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Ubicación", description: "San Salvador, El Salvador" }
];

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange" // 👈 Valida en tiempo real mientras se escribe
    //🎯 Opciones alternativas:
    // mode: "onBlur" → Muestra los errores cuando el usuario sale del campo.
    // mode: "all" → Valida tanto al escribir como al salir del campo.
  });

  const onSubmit = async (data: ContactFormData) => {
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
          text: 'Tu mensaje ha sido enviado con éxito.',
          confirmButtonText: 'Aceptar'
        });
        reset();
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
                  <Input className="w-full" type="text" placeholder="Nombre" {...register("name")} />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <Input className="w-full" type="text" placeholder="Apellido" {...register("lastName")} />
                  {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                </div>
                <div>
                  <Input className="w-full" type="email" placeholder="Correo Electrónico" {...register("email")} />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <Textarea className="h-[200px]" placeholder="Escribe tu mensaje aquí" {...register("message")} />
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
              </div>

              <Button type="submit" size="default" className="max-w-40">
                Enviar
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

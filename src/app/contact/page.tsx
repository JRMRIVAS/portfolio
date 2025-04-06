'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/validations/contactSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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
    console.log("Datos enviados:", data);
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Mensaje enviado con éxito.");
      reset();
    } else {
      alert("Error al enviar el mensaje.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Formulario */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 bg-[#27272c] rounded-xl p-10">
              <h3 className="text-4xl text-accent">Trabajemos juntos</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input type="text" placeholder="Nombre" {...register("name")} />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <Input type="text" placeholder="Apellido" {...register("lastName")} />
                  {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                </div>
                <div>
                  <Input type="email" placeholder="Correo Electrónico" {...register("email")} />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                {/* <Input type="text" placeholder="Teléfono" {...register("phone")} /> */}
              </div>

              <div>
                <Textarea className="h-[200px]" placeholder="Escribe tu mensaje aquí" {...register("message")} />
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
              </div>

              <Button type="submit" size="default" className="max-w-40">Enviar</Button>
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

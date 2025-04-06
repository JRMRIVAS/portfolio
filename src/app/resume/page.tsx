'use client'

import { Description } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaJs, FaReact, FaAngular, FaBootstrap } from "react-icons/fa"
import { SiTailwindcss, SiPrimeng, SiTypescript } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { li } from "framer-motion/m";
//About data
const about = {
  title: "Un poco mas sobre mí",
  description: "Dejo mis datos de contacto ",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Rodrigo Rivas",
    },
    {
      fieldName: "Teléfono",
      fieldValue: "(+503) 7742 8283",
    },
    {
      fieldName: "Experiencia",
      fieldValue: "1 Año",
    },
    {
      fieldName: "Correo",
      fieldValue: "jrmrivas21@gmail.com",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Inglés, Francés",
    }
  ]
};

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Mi experiencia',
  descripcion: "A lo largo de mi carrera, he asumido roles diversos, lo que me ha convertido en un profesional versátil, capaz de tomar decisiones basadas en fundamentos técnicos. Mi objetivo y mi meta es escribir código limpio, eficiente y seguir aprendiendo para ofrecer soluciones innovadoras en cada proyecto.",
  items: [
    {
      company: "(Cliente Confidencial - NDA)",
      position: "Desarrollador Frontend",
      duration: "2023 - Septiembre 2024"
    },
    {
      company: "Arias Defense Components",
      position: "Desarrollador Web Frontend (Freelance)",
      duration: "2024 (3 Meses)"
    },
    {
      company: "Kodigo",
      position: "Desarrollador Web Frontend (Pasantía)",
      duration: "2023 (2 Meses)"
    },
    {
      company: "Bimbo El Salvador",
      position: "Administrador de Proyecto Industrial",
      duration: "2021 - 2022"
    },
  ]
}

//education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Mis Estudios',
  descripcion: "Mi formación en diversas áreas de la tecnología me ha permitido desarrollar una visión integral y habilidades técnicas que aportan valor a cada proyecto.",
  items: [
    {
      institution: "Kodigo",
      degree: "Bootcamp Full Stack Junior",
      duration: "2023"
    },
    {
      institution: "ITCA Fepade",
      degree: "Ingeniero en Mecatrónica",
      duration: "2016 - 2021"
    },
    {
      institution: "ITCA Fepade",
      degree: "Técnico en Ingeniería Mecatrónica",
      duration: "2014 - 2016"
    },
  ]
}

//skills data
const skills = {
  title: "Mis Habilidades",
  description: "He trabajado con una variedad de tecnologías. Me apasiona mantenerme actualizado y aprender sobre las innovaciones que surgen en este dinámico entorno.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <FaAngular />,
      name: "angular.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <SiPrimeng />,
      name: "primeng"
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap 4+"
    },
    {
      icon: <SiTypescript />,
      name: "typescript"
    },
  ]
}

export default function ResumePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger className="hover:bg-[#323238]" value="experience">Experiencia</TabsTrigger>
            <TabsTrigger className="hover:bg-[#323238]" value="education">Educación</TabsTrigger>
            <TabsTrigger className="hover:bg-[#323238]" value="skills">Habilidades</TabsTrigger>
            <TabsTrigger className="hover:bg-[#323238]" value="about">Sobre mi</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* Experiencia */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{experience.title}</h3>
                <p className="max-w-[800px] text-white/70 mx-auto xl:mx-0 px-5 md:px-0">{experience.descripcion}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Educacion */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{education.title}</h3>
                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">{education.descripcion}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent ">{item.institution}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.duration}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Habilidades */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-accent">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex  justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">
                                {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>

              </div>
            </TabsContent>
            {/* Sobre mi */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-accent">{about.title}</h3>
                <p className="max-w-[600px] text-white/70 mx-auto  xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index) =>{
                    return(
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>

  )
}

'use client'
import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from "framer-motion"
import { div } from 'framer-motion/m';

const tecnologias = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum, maxime dignissimos sapiente illo obcaecati quia cum dolore pariatur dolorum eum sequi impedit architecto.',
    href: ""
  },
  {
    num: '02',
    title: 'UI/UX Desing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum, maxime dignissimos sapiente illo obcaecati quia cum dolore pariatur dolorum eum sequi impedit architecto.',
    href: ""
  },
  {
    num: '03',
    title: 'Logo Desing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum, maxime dignissimos sapiente illo obcaecati quia cum dolore pariatur dolorum eum sequi impedit architecto.',
    href: ""
  },
  {
    num: '04',
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum, maxime dignissimos sapiente illo obcaecati quia cum dolore pariatur dolorum eum sequi impedit architecto.',
    href: ""
  },
];

export default function variantes() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl"py-0'>
      <div className="container mx-auto">
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
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {tecnologias.map((tecnologia, index) => {
            return (
              <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                <div className='w-full flex justify-between items-center'>
                  {/* top */}
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{tecnologia.num}</div>
                  <Link href={tecnologia.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                    <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                {/* title */}
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{tecnologia.title}</h2>
                <p className='text-white/60'>{tecnologia.description}</p>
                {/* border */}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

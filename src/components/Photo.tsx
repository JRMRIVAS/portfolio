'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export default function Photo() {
    return (
        // Optimizar este componente, cada ves que se navega entre paginas y se regresa a home se carga la imagen de nuevo
        <div className="h-full w-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' } }}
            >
                {/* imagen */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeInOut' } }}
                    className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500] mix-blend-lighten absolute "
                >
                    <Image
                        src="/assets/prubaport.png"
                        alt="profilePhoto"
                        priority
                        quality={100}
                        fill
                        className="object-contain rounded-full"
                    />
                </motion.div>
                {/* circle animation */}
                <motion.svg className="w-[300px] xl:w-[506px] h-[300] xl:h-[506px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle cx="253"
                        cy="253" r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        >

                    </motion.circle>
                </motion.svg>
            </motion.div>
        </div>
    )
}

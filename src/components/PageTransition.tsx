'use client'

import { AnimatePresence, motion } from "framer-motion";
import { use } from "framer-motion/m";
import { usePathname } from "next/navigation";

export default function PageTransition({children}:any) {
    const pathname = usePathname();


    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div initial={{opacity:1}} 
                    animate={{
                        opacity:0, 
                        transition:{delay:1, duration: 0.5, ease: "easeInOut"}
                    }}
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                    />
                    {children}
            </div>
        </AnimatePresence>
    )
}


import { motion } from "framer-motion"


export default function Stairs() {
  const stairAnimation = {
    initial: {
      top: "0%"
    },
    animate: {
      top: "100%"
    },
    exit: {
      top: ["100%", "0%"]
    }
  }

  //calcula el reversed index para el retardo escalonado
  const reverseIndex = (index: any) => {
    const totalSteps = 3;
    return totalSteps - index - 1;
  }

  return (
    <>
      {/* render 6 motion divs each representing a step of the stairs.
      cada div tendra la misma animacion dfinida por stairsAnimation,
      el retardo de cada div es calculado dinamicamente basado en su reversed index,
      creando un efecto escalonado con retardo en decremento para cada subsecuente paso.
     */}
      {[...Array(6)].map((_, index) =>{
        return(
          <motion.div  key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"/>
        )
      })}

    </>



  )
}

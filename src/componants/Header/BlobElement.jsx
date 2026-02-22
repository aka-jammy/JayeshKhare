import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

const BlobElement = () => {

   const [isHovered, setIsHovered] = useState(false);
   const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div className=" h-full w-full md:w-1/3 flex items-center justify-center absolute md:static shrink pr-15 overflow-hidden md:overflow-visible">

      {/* ------------------ Figma -------------------- */}

      <motion.div initial={{ filter: 'blur(5px)' }} animate={{ y: [300, 0], opacity: [0, 1], filter: 'blur(0px)' }} transition={{ duration: 0.5 }} className={`flex absolute md:relative scale-40 sm:scale-60 lg:scale-80 xl:scale-120
        justify-center items-center -translate-y-6 md:-translate-y-20 lg:-translate-y-20
        shrink-0 -left-35 sm:-left-15 md:left-50 lg:left-50 xl:left-25
        rounded-full
        ${!isHovered ? "animate-(--animate-wiggle)" : "animate-none"}
        
      `}>

        <div onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}  className="scale-70 rounded-full overflow-hidden z-2 shrink-0 ">

          <img className='scale-70 -rotate-10 flex shrink-0' src="ic_figma.png" alt="figma-logo" />
        </div>

        <img className='absolute scale-120 z-1 -translate-y-2 -translate-x-2' src="blobShape.svg" alt="shape" />

        <img className='absolute scale-120' src="blobShapeBlack.svg" alt="shapeShadow" />

      </motion.div>

      {/* ------------------Dribbble-------------------- */}

      <motion.div initial={{ filter: 'blur(5px)' }} animate={{ y: [-300, 0], opacity: [0, 1], filter: 'blur(0px)' }} transition={{ duration: 0.5,ease:'easeInOut' }} className={`flex absolute md:relative scale-28 sm:scale-40 lg:scale-50 xl:scale-75 justify-center items-center -top-8 md:top-20 lg:top-36 xl:top-50 -right-47 sm:-right-30 md:right-30 lg:right-15 shrink-0 hover:animate-none animate-(--animate-wiggle-rev) rounded-full overflow-hidden
        ${!isHovered2 ? "animate-(--animate-wiggle)" : "animate-none"}0
        `}>

        <div onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}  className=" -translate-x-1 z-2 scale-60 md:scale-60 rounded-full overflow-hidden shrink-0">

          <img className='scale-120 rounded-full -translate-y-2 -translate-x-1.5 shrink-0' src="ic_dribbble.jpeg" alt="" />
        </div>
        <img className='absolute scale-190 z-1 -translate-y-3 -translate-x-3' src="blobShapepink.svg" alt="" />
        <img className='absolute scale-190' src="blobShapeBlack.svg" alt="" />
      </motion.div>

    </div>
  )
}

export default BlobElement

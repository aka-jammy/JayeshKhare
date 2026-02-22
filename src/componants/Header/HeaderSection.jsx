import React, { useRef, useState } from 'react'
import CirclePattern from '../parts/CirclePattern';
import BlobElement from './BlobElement';
import StyledButtonShadow from '../parts/StyledButtonShadow';
import {motion} from 'motion/react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, SplitText);

const HeaderSection = () => {
  const [shadow, setShadow] = useState(false)
  const [duration, setDuration] = useState(150);

  const paraRef = useRef(null);

  useGSAP(
    () => {
      const split = SplitText.create(paraRef.current, {
        type: "chars",
      });

      gsap.from(split.chars, {
        x: 30,
        opacity: 0,
        stagger: 0.03,
        duration: 1,
        ease: "power3.out",
        delay:.4,
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 100%",
        },
      });

      return () => split.revert();
    },
    { scope: paraRef }
  );
  

  return (
    <section className=' h-[96vh] sm:h-screen w-screen border-b-4 overflow-hidden relative no-select' id="mainHeader">
      <div className='w-full h-full flex flex-col md:flex-row items-center justify-center mx-auto overflow-x-hidden' id="header">


        <div className=" h-full md:w-2xl lg:w-5xl flex flex-col justify-center z-5 md:pl-15">

          <motion.h2 initial={{scale:0.7,filter: 'blur(5px)'}} animate={{scale:1,filter: 'blur(0px)'}} className='font-comfortaa-bold text-[1.8rem] lg:text-[2.5rem] xl:text-[3rem] text-center md:text-left'>Hey There ! I am</motion.h2>

          {/* ------------------ Name section-------------------- */}

          <motion.h1 initial={{scale:0.7,filter: 'blur(5px)'}} animate={{scale:1,filter: 'blur(0px)'}} transition={{delay:0.1}} className='font-anton-reg text-[5.5rem] sm:text-[6rem] lg:text-[7rem] xl:text-[8rem] md:mb-5 text-center md:text-left flex flex-col md:flex-row shrink'>Jayesh

            <span className='-translate-y-8 md:translate-y-0 lg:translate-y-0 md:ml-5 lg:ml-10 after:content-[url("star.svg")] after:absolute after:-translate-x-5 sm:after:-translate-x-4 lg:after:translate-x-0 after:-translate-y-6 sm:after:-translate-y-8 lg:after:-translate-y-17 after:scale-50 sm:after:scale-60 lg:after:scale-none shrink'>Khare</span></motion.h1>

          {/* ------------------ About para -------------------- */}

          < motion.p ref={paraRef} className=' font-comfortaa-reg mb-6 text-[1.4rem] sm:text-[1.5rem] text-center md:text-left px-7.5 md:px-0 -mt-8 lg:mt-0 w-95 sm:w-145 md:w-152 shrink'>An Aspiring and soon to be UI/UX designer with a love for simlicity :D</motion.p>

          {/* ------------------ Resume me button -------------------- */}

          <div className="relative flex justify-center mx-auto md:mx-0 flex-col md:w-sm lg:w-xl z-30 rounded-lg md:justify-start ">

            <div className=" h-full w-full flex absolute -right-2">
              <StyledButtonShadow />
            </div>
            <button

              onMouseDown={() => { setDuration(20); setShadow(true); }}
              onMouseUp={() => { setDuration(100); setShadow(false); }}
              onMouseLeave={() => { setDuration(50); setShadow(false); }}

              onTouchStart={() => { setDuration(0); setShadow(true); }}
              onTouchEnd={() => { setDuration(50); setShadow(false); }}
              onTouchCancel={() => { setDuration(50); setShadow(false); }}

              className={`font-silkscreen-reg px-5 lg:px-10 py-5 lg:py-5 text-xl lg:text-[2rem] rounded-lg border-4 flex justify-center shrink-0 flex-nowrap `}

              style={{
                transitionDuration: `${duration}ms`,
                transform: shadow ? "translate(8px, 8px)" : "translate(0, 0)",
                backgroundColor: shadow ? "var(--btn-Secondary-Color)" : "var(--btn-Primary-Color)",
              }}

            >download me resume

              <img className=' size-6 lg:size-10 ml-2 -translate-y-0.5 ' src="ic_arrow.svg" alt="arrow" /></button>
          </div>
        </div>

        {/* ------------------blob icon part-------------------- */}

        <BlobElement />

        <div className="absolute -bottom-48 -left-55 md:scale-0 scale-80 ">
          <CirclePattern />
        </div>

        <div className=" absolute -bottom-6 right-0 scale-80 md:hidden">
          <img src="cat.svg" alt="cat" />
        </div>

      </div>
    </section>
  )
}

export default HeaderSection
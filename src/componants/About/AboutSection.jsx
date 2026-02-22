import React, { useEffect, useRef } from 'react'
import CirclePattern from '../parts/CirclePattern'
import Constraction from '../parts/Construction'
import TrexGame from '../DinoGameParts/TrexGame'
import { motion } from 'motion/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText);


const AboutSection = () => {

    
    const dinoRef = useRef(null);
    const { contextSafe } = useGSAP({ scope: dinoRef });
    const expanded = useRef(false);
    
    useGSAP(() => { }, { scope: dinoRef });

    const onClickDino = contextSafe(() => {
        if (window.innerWidth <= 1024) return;

        expanded.current = !expanded.current;
        
        gsap.to(dinoRef.current, {
            width: expanded.current && "100%",
            duration: 0.8,
            ease: "back.out(.5)",
        });
    });

    const onDblClickDino = contextSafe(() => {
        expanded.current = false;
        
        gsap.to(dinoRef.current, {
            width: 200,
            duration: 0.8,
            ease: "back.out(.5)",
        });
    });
    
    
    const container = useRef(null);

    useGSAP(                                                                   //paragraph animation
        async () => {
            await document.fonts.ready;
            const split = SplitText.create(container.current.children,
                {
                    type: "lines",
                    linesClass: "line",
                });
            gsap.set(container.current, { autoAlpha: 1 });
            gsap.from(split.lines,
                {
                    yPercent: 100,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power4.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                        toggleActions: "play",
                    },
                });
            return () => split.revert();
        },
        { scope: container });



    const labelRef = useRef(null);                                              //label animation

    useEffect(() => {
        if (window.innerWidth > 700) {
            gsap.fromTo(
                labelRef.current,
                { y: -280 },
                {
                    y: 0,
                    duration: 2,
                    delay: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: labelRef.current,
                        start: "top 25%",
                        once: true,
                        scrub: true,
                    },
                });
        }else if (window.innerWidth < 700) {
            gsap.fromTo(
                labelRef.current,
                { x: -280 },
                {
                    x: 0,
                    duration: 2,
                    delay: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: labelRef.current,
                        start: "top 35%",
                        end:"top 9%",
                        once: true,
                        scrub: true,
                    },
                });
        }
    }, []);





    return (
        <section className='h-[92vh] sm:h-screen relative w-screen border-t-2 bg-[#DAC7F5] flex justify-center items-center overflow-hidden z-20' id="mainAbout">

            {/* ------------------ Dino -------------------- */}

            <div ref={dinoRef} onClick={onClickDino} onDoubleClick={onDblClickDino} className="Dino absolute left-0 sm:left-0 bottom-0 h-96 w-50 sm:w-60 shrink-0 overflow-hidden z-1">
                <TrexGame />
            </div>

            {/* ------------------ Cat -------------------- */}

            <motion.div>
                <motion.img initial={{ y: 0, opacity: 0 }}
                    whileInView={{
                        y: [0, -30, 0, -15, 0],
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 1
                    }}
                    viewport={{ once: true, amount: 0.3 }} className='absolute md:bottom-5 lg:bottom-10 xl:bottom-13 md:right-0 lg:right-3 xl:right-10 w-0 md:w-[13%] xl:w-[10%] before:content-"MEOW"' src="cat.svg" alt="cat" />
                <motion.p
                    initial={{ y: 0, opacity: 0 }}
                    whileInView={{
                        y: [0, -30, 0, -15, 0],
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 1
                    }}
                    viewport={{ once: true, amount: 0.3 }} className='absolute text-2xl right-13 bottom-46 h-15 font-silkscreen-reg flex-col lg:flex hidden '
                >ME
                    <span
                        className='-translate-y-5 mt-2'
                    >OW
                    </span>
                </motion.p>
            </motion.div>

            {/* ------------------ Circle pattern -------------------- */}

            <div className="absolute md:top-0 lg:top-0 xl:top-5 md:-right-20 lg:-right-40 xl:-right-30 scale-0 lg:scale-70 xl:scale-[90%] z-1">
                <CirclePattern />
            </div>

            {/* ------------------ Top left lable -------------------- */}

            <div

                ref={labelRef}

                className="absolute h-80 md:h-50 lg:h-60 xl:h-70 md:w-20 lg:w-20 xl:w-29 overflow-hidden -top-26 sm:-top-24 md:-top-10 lg:top-0 left-26 sm:left-[14%] md:left-[6%] lg:left-[3%] -rotate-90 lg:rotate-0 ">

                <img className='relative -top-65 md:-top-80 h-150 w-20 sm:w-25 md:w-29 scale-x-[-1] lg:scale-x-[1]' src="banner.svg" alt="lable" />
                <h3 className='absolute font-anton-reg -left-4.5 sm:-left-2 md:-left-5 xl:-left-1.5 top-25 sm:top-28 md:top-14 xl:top-25 w-31 rotate-90 lg:-rotate-90 '> About Me</h3>

            </div>

            {/* ------------------ Construction Pattern section -------------------- */}


            <div className="absolute -bottom-9 sm:-bottom-13 md:-bottom-14 xl:-bottom-21 -left-50 sm:-left-40 md:-left-30 lg:-left-20 xl:-left-10 scale-80 lg:scale-100 -rotate-5 z-2">
                <Constraction />
            </div>

            {/* ------------------ Para section -------------------- */}

            <div ref={container}
                id="about"
                className="font-comfortaa-bold relative h-3/5 sm:h-4/5 w-full md:w-[60%] lg:w-[52%] py-5 md:py-0 px-5 sm:px-10 md:px-2 flex flex-col text-[0.9rem] sm:text-[1.4rem] md:text-[1.4rem] xl:text-[1.7rem] xl:gap-10 justify-evenly opacity-0 ">

                {["I am a B.Tech IT student and a passionate UI/UX designer who loves crafting clean, intuitive, and user-centered experiences.",

                    "I enjoy designing modern interfaces, experimenting with design systems, and bringing ideas to life with Figma and front-end development. I also love blending tech and creativity to make things that just feel right.",

                    "Currently, I'm looking for opportunities to collaborate on meaningful projects and grow as a designer and developer.",

                    "When I'm not designing, you'll probably find me playing some video games (Currently I am heavily invested in Hollow Knight - Silksong :v)."].map((item, index) => <p>{item}</p>)}

                {/* ------------------ Quotes -------------------- */}

                <img className='absolute size-20 sm:size-30 md:size-40 lg:size-50 xl:size-70 -top-10 sm:-top-3 md:-top-10 lg:-top-20 xl:-top-30 -left-4 sm:-left-5 md:-left-30 lg:-left-40 xl:-left-55' src="ic_quotes.svg" alt="top quotes" />

                <img className='absolute size-20 sm:size-30 md:size-40 lg:size-50 xl:size-70 -bottom-10 sm:bottom-0 md:-bottom-10 lg:-bottom-15 xl:-bottom-25 -right-4 sm:right-0 md:-right-25 lg:-right-40 xl:-right-50 scale-x-[-1]' src="ic_quotes.svg" alt="bottom quotes" />

            </div>
            <div className="absolute w-full h-full z-0 "></div>
            {/* <div className="absolute w-7/8 right-0 bottom-0 h-3/4 z-50 opacity-20 bg-amber-500"></div> */}
        </section>
    )
}

export default AboutSection

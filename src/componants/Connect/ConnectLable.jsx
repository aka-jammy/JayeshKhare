import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ConnectLable = () => {
    const labelRef = useRef(null);

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
        <div ref={labelRef} className="absolute h-80 md:h-50 lg:h-60 xl:h-70 md:w-20 lg:w-20 xl:w-29 overflow-hidden -top-24 sm:-top-24 md:-top-10 lg:top-1 left-26 sm:left-[14%] md:left-[6%] lg:left-[7%] -rotate-90 lg:rotate-0 ">

            <img className='relative -top-65 md:-top-80 h-150 w-20 sm:w-25 md:w-29 scale-x-[-1] lg:scale-x-[1]' src="banner.svg" alt="lable" />
            <h3 className='absolute font-anton-reg -left-4.5 sm:-left-2 md:-left-5 xl:-left-1.5 top-25 sm:top-28 md:top-14 xl:top-25 w-31 rotate-90 lg:-rotate-90 tracking-wide'> Connect</h3>

        </div>
    )
}

export default ConnectLable

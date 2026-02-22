import { useEffect, useRef, useState } from "react";

const Cube = () => {
    const cubeRef = useRef(null);
    const [rotate, setRotate] = useState(-130);



    useEffect(() => {
        const canHover = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;

        // 🚫 Touch devices → lock rotation
        if (!canHover) {
            setRotate(-130);
            return;
        }
        const handleMouseMove = (e) => {
            if (!cubeRef.current) return;

            const rect = cubeRef.current.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    return (
        <div
            ref={cubeRef}
            className="absolute md:right-1 lg:right-7 xl:right-[2%] bottom-6 lg:bottom-10 md:w-60 xl:w-72 flex"
        >
            <img
                className="w-full h-auto"
                src={`${import.meta.env.BASE_URL}Cube_no_eyes.svg`}
                alt="cube svg"
            />

            <div className="absolute h-full w-full flex justify-center items-center -translate-x-14 md:-translate-x-10 xl:-translate-x-14 translate-y-6 md:translate-y-4 xl:translate-y-6 scale-100 md:scale-80 xl:scale-100">

                <div
                    className="rotate-90"
                    style={{ transform: `rotate(${rotate}deg)` }}
                >
                    <img src={`${import.meta.env.BASE_URL}Eye.svg`} />
                </div>

                <div
                    className="rotate-90 translate-y-4 -translate-x-6"
                    style={{ transform: `rotate(${rotate}deg)` }}
                >
                    <img src={`${import.meta.env.BASE_URL}Eye.svg`} />
                </div>
            </div>
        </div>
    );
};

export default Cube;

import { useState, useEffect, useRef } from "react";

export default function DinoRuning() {
  const [toggle, setToggle] = useState(false);
  const [start, setStart] = useState(false)
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(prev => !prev);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const isDesktop = window.innerWidth > 1024;

  const Run1 =
    start && isDesktop ? "dino_run1.svg" : "dino-without-path.svg";

  const Run2 =
    start && isDesktop ? "dino_run2.svg" : "dino-without-path.svg";

  const pathHandler = () => {

    if (isDesktop) {
      setIsMoving(true)
    } else {
      setIsMoving(false)
    }
  }

  return (
    <div
      className="absolute -bottom-10 -left-8 h-60 shrink-0">
      <img

        onMouseDown={() => { setStart(true); pathHandler() }}
        onDoubleClick={() => { setIsMoving(false); setStart(false) }}

        src={toggle ? `${Run1}` : `${Run2}`}
        alt="dino"
        className=" h-58 sm:h-60 -translate-y-1 sm:translate-x-1 select-none shrink-0"
      />

      <div className=" absolute -translate-y-10 shrink-0 bottom-0 left-0">
        <div className={` h-full w-[300vh] sm:w-[150vw] scale-x-110 whitespace-wrap shrink-0 ${isMoving && "animate-slideGround"}`}>
          <img className='absolute bottom-3 h-8' src="ground.png" alt="" />

        </div>
        <div className={` h-full w-[300vh] sm:w-[150vw] scale-x-110 whitespace-wrap shrink-0 ${isMoving && "animate-slideGround2"}`}>
          <img className='absolute bottom-3 h-8 ' src="ground.png" alt="" />

        </div>
      </div>
    </div>
  );
}
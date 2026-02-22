import React, { useState, useRef } from "react";

const CirclePattern = () => {
  const [rotate, setRotate] = useState(15);

  const isAnimating = useRef(false);
  const pending = useRef(null);
  const timeoutRef = useRef(null);

  const MAX_DURATION = 1150; // longest circle animation

  const triggerRotate = (direction) => {
    if (isAnimating.current) {
      pending.current = direction;
      return;
    }

    isAnimating.current = true;
    setRotate((prev) => prev + 180);

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      isAnimating.current = false;

      if (pending.current) {
        const next = pending.current;
        pending.current = null;
        triggerRotate(next);
      }
    }, MAX_DURATION);
  };

  return (
    <div
      onPointerEnter={() => triggerRotate("enter")}
      onPointerLeave={() => triggerRotate("leave")}
      className="relative flex justify-center items-center h-70 w-120 scale-[-1]"
    >
      <div className="relative flex justify-center items-center">
        {[550, 700, 850, 1000, 1120].map((duration, index) => (
          <div key={index} className={`circle-wrapper absolute`} style={{
            left: index === 0 ? "85px" : index === 1 ? 0 : undefined,
            right: index === 3 ? "15px" : index === 4 ? "85px" : undefined,
          }}>
            <div
              className="w-35 h-70 border-4 rounded-[50%]"
              style={{
                transform: `rotate(${rotate}deg)`,
                transition: `transform ${duration}ms ease`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CirclePattern;


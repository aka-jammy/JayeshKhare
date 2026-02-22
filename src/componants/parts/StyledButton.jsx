import React, { useState } from 'react';
import StyledButtonShadow from './StyledButtonShadow';

const StyledButton = ({ children }) => {
    // 1. Give each button its OWN state
    const [duration, setDuration] = useState(50);
    const [shadow, setShadow] = useState(false);

    // Dynamic colors based on the state
    const baseBg = "#2ED1A4"; // Emerald-300 equivalent in color
    const pressedBg = "#2aa783"; // Slightly darker color

    return (
        <div className="relative flex items-center w-full h-[25%]">
            <button
                // 2. Event handlers update THIS component's state
                onMouseDown={() => { setDuration(20); setShadow(true); }}
                onMouseUp={() => { setDuration(100); setShadow(false); }}
                onMouseLeave={() => { setDuration(50); setShadow(false); }}

                onTouchStart={() => { setDuration(0); setShadow(true); }}
                onTouchEnd={() => { setDuration(5); setShadow(false); }}
                onTouchCancel={() => { setDuration(50); setShadow(false); }}

                className={`after: flex font-silkscreen-reg w-full rounded-lg z-1 border-4 h-full justify-center items-center text-xl lg:text-[2rem] `}
                style={{
                    transitionDuration: `${duration}ms`,
                    transform: shadow ? "translate(0px, 8px)" : "translate(0, 0)",
                    // boxShadow: shadow ? "none" : "8px 8px 0 black",
                    backgroundColor: shadow ? pressedBg : baseBg,
                }}

            //     onClick={() => {
            //         switch (children[0]) {
            //         case "Email me!":
            //             window.open("https://google.com", "_blank");
            //             break;

            //         case "Connect me":
            //             window.open("https://www.linkedin.com/in/jayesh-khare/", "_blank");
            //             break;

            //         case "Visit Dribbble":
            //             window.open("https://dribbble.com", "_blank");
            //             break;

            //         case "Visit Behance":
            //             window.open("https://behance.com", "_blank");
            //             break;

            //         default:
            //             console.log("No matching site for:", children);
            //     }
            // }}
            >
                {children}
            </button>

                <StyledButtonShadow/>
        </div>
    );
};

export default StyledButton;
import '../styles/ScrollToTopButton.css'
import Button from './Button'
import IconButton from './IconButton'

import ArrowUp from '../assets/icons/ic_arrow_up.svg'
import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    }


    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (<>

        <IconButton
            className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
            hoverColor={"--button-background"}
            ariaLabel={"Scroll to the top"}
            onClick={scrollToTop}
            background={ArrowUp}
        />
    </>)
}
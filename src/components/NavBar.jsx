import { useState, useEffect } from "react";
import "../styles/NavBar.css";

import IconButton from "./IconButton";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/icons/ic_menu.svg";
import closeIcon from "../assets/icons/ic_cross.svg";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        if (window.innerWidth <= 768) {
            document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
            document.body.style.overflow = isMenuOpen ? "hidden" : "";
        }

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const scrollToHome = () => {
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
        closeMenu();
    };

    return (
        <>
            <div
                className={`nav-bar-scrim ${isMenuOpen ? "active" : ""}`}
                onClick={closeMenu}
            />

            <nav className="nav-bar">
                <IconButton
                    ariaLabel="Home"
                    onClick={scrollToHome}
                    className="logo icon-btn"
                    background={logo}
                />

                <div className="spacer" />

                <div className={`nav-items-container ${isMenuOpen ? "open" : ""}`}>
                    <a draggable="false" href="#about-me" className="nav-item" onClick={closeMenu}>About Me</a>
                    <a draggable="false" href="#projects" className="nav-item" onClick={closeMenu}>Projects</a>
                    <a draggable="false" href="#connect" className="nav-item" onClick={closeMenu}>Connect</a>
                </div>

                <IconButton
                    ariaLabel="Menu"
                    className="menu-btn icon-btn"
                    background={isMenuOpen ? closeIcon : menuIcon}
                    onClick={toggleMenu}
                />
            </nav>
        </>
    );
}

export default NavBar;
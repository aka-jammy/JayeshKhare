import Button from '../components/Button.jsx'
import Sticker from '../components/Sticker.jsx'
import ScrollDownPrompt from '../components/ScrollDownPrompt.jsx'
import Sparkle from '../components/Sparkle.jsx'

import FigmaLogo from '../assets/figma_logo.svg'
import DribbbleLogo from '../assets/dribbble_logo.svg'
import { useState } from 'react'
import './HeroPage.css'

function HeroPage() {

    const [showResume, setShowResume] = useState(false);

    const openResume = () => {
        window.open(`${import.meta.env.BASE_URL}Jayesh_Khare_Resume.pdf`, "_blank");
    };

    return (
        <div id='home'>
            <section className={"hero-section"}>
                <div className={"container"}>
                    <div className={"greeting"}>Hey There! I am</div>
                    <div className={"name"}>
                        Jayesh Khare
                        <Sparkle className={"sparkle"} />
                    </div>
                    <div className={"supporting-text"}>An Aspiring and soon to be UI/UX designer with a love for simplicity :D</div>
                </div>

                <Button
                    className={"resume-btn"}
                    onClick={openResume}
                >My Resume</Button>

                <ScrollDownPrompt />

                <Sticker
                    className={"sticker figma-sticker"}
                    logo={FigmaLogo}
                    alt={"Figma Logo"}
                    backgroundColor={"#d1fde7"}
                    rotation={"-18deg"}
                />

                <Sticker
                    className={"sticker dribbble-sticker"}
                    logo={DribbbleLogo}
                    alt={"Figma Logo"}
                    backgroundColor={"#FFABE7"}
                    rotation={"5deg"}
                />

            </section>
        </div>
    )
}

export default HeroPage

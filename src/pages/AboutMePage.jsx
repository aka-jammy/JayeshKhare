import './AboutMePage.css'
import Ribbon from '../components/Ribbon.jsx'
import QuoteIcon from '../assets/icons/ic_quotation.svg'
import Dino from '../components/Dino.jsx'

function AboutMePage() {

    return (
        <div id='about-me'>
            <section id="about-section">
                <div className="about-me-ribbon"><Ribbon>About Me</Ribbon></div>

                <div className="about-content-container">

                    <div className='about-content'>
                        <p>
                            I am a BTech IT student and a passionate UI/UX designer who loves crafting clean, intuitive, and user-centered experiences
                        </p>

                        <p>
                            I enjoy designing modern interfaces, experimenting with design systems, and bringing ideas to life with Figma and front-end development. I also love blending tech and creativity to make things that just feel right
                        </p>

                        <p>
                            Currently, I’m looking for opportunities to collaborate on meaningful projects and grow as a designer and developer.
                        </p>

                        <p>
                            When I’m not designing, you’ll probably find me playing some video games (Currently I am heavily invested in Hollow Knight - Silksong :v).
                        </p>
                    </div>
                </div>

                <Dino />

            </section>
        </div>
    )
}

export default AboutMePage

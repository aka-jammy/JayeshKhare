import './App.css'
import Navbar from './componants/Navbar/Navbar'
import HeaderSection from './componants/Header/HeaderSection'
import AboutSection from './componants/About/AboutSection'
import ProjectSection from './componants/projects/ProjectSection'
import Connectsection from './componants/Connect/Connectsection'
import Dino from './componants/DinoGameParts/Dino'
import BackToTop from './componants/BackToTopButton/BackToTop'
import LocomotiveScroll from 'locomotive-scroll';

function App({ children }) {


const locomotiveScroll = new LocomotiveScroll();

  const connectCard = [{
    icon: "ic_email.svg",
    btnText: "Email me!",
    bgColor: "var(--card-bg-mint)"
  }, {
    icon: "https://cdn.brandfetch.io/idJFz6sAsl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1740371012427",
    btnText: "view profile",
    bgColor: "var(--card-bg-lightBlue)"
  }, {
    icon: "dribbble.svg",
    btnText: "View Profile",
    bgColor: "var(--card-bg-pink)"
  }, {
    icon: "https://cdn.brandfetch.io/idxhowbknc/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1758076627341",
    btnText: "view profile",
    bgColor: "var(--card-bg-darkBlue)"
  }]

  return (
    <>
      <Navbar />
      {/* <BackToTop /> */}
      <div>
        <HeaderSection />
        <AboutSection />
        <ProjectSection />
        <Connectsection connectCard={connectCard} />
      </div>
    </>
  )
}

export default App

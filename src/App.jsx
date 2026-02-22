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
    bgColor: "var(--card-bg-mint)",
    action: () => window.location.href = "mailto:jayeshkhare6@gmail.com"
  }, {
    icon: "https://cdn.brandfetch.io/idJFz6sAsl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1740371012427",
    btnText: "view profile",
    bgColor: "var(--card-bg-lightBlue)",
    action: () => window.open("https://www.linkedin.com/in/jayesh-khare/", "_blank")
  }, {
    icon: "dribbble.svg",
    btnText: "View Profile",
    bgColor: "var(--card-bg-pink)",
    action: () => window.open("https://www.behance.net/jayeshkhare", "_blank")
  }, {
    icon: "https://cdn.brandfetch.io/idxhowbknc/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1758076627341",
    btnText: "view profile",
    bgColor: "var(--card-bg-darkBlue)",
    action: () => window.open("https://www.behance.net/jayeshkhare", "_blank")
  }]

  const projects = [{
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4ebef5235432599.68ebde15d277c.png",
    description: "An created for a local jewellery shop to replace physical records, the old way of managing gold loan.",
    url: "https://www.behance.net/gallery/235432599/Gold-Loan-Management-App-Pritesh-Jewellers"
  }]

  return (
    <>
      <Navbar />
      {/* <BackToTop /> */}
      <div>
        <HeaderSection />
        <AboutSection />
        <ProjectSection projects={projects} />
        <Connectsection connectCard={connectCard} />
      </div>
    </>
  )
}

export default App

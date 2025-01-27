import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Container from './Component/Container'
import Footer from './Component/Footer'
import SkillSection from './Component/SkillSection'
import ProjectSection from './Component/ProjectSection'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import design from '../src/images/B.svg'
function App() {
  return (
    <>
      <div
        className={`  bg-bgPink text-txColor font-oswald dark:bg-dark dark:text-txColor  relative overflow-hidden`}
      >
        {/* <img src={design} alt="vector" className="absolute top-32 rotate-180  -right-48 w-96 h-96 object-contain opacity-80" />
        <img src={design} alt="vector" className="absolute rotate-180 top-96 -left-52 w-96 h-96 object-contain opacity-80" />
        <img src={design} alt="vector" className="absolute rotate-45 top-2/4 -left-60 w-[500px] h-[500px] object-contain opacity-80" />   
        
        <img src={design} alt="vector" className="absolute top-32 rotate-180  -right-48 w-96 h-96 object-contain opacity-80" />
        <img src={design} alt="vector" className="absolute rotate-180 top-96 -left-52 w-96 h-96 object-contain opacity-80" />
        <img src={design} alt="vector" className="absolute -rotate-90 top-2/3 -right-52 w-80 h-80 object-contain opacity-80" />   
       
        <img src={design} alt="vector" className="absolute top-32 rotate-180  -right-48 w-96 h-96 object-contain opacity-80" />
        <img src={design} alt="vector" className="absolute -rotate-180 top-96 -left-52 w-96 h-96 object-contain opacity-80" />
        <img src={design} alt="vector" className="absolute -rotate-45 top-1/3 -right-52 w-96 h-96 object-contain opacity-80" />    */}
        {/* <Navbar /> */}
        {/* <Container className=""> */}
        <Home />

        <SkillSection />
        <ProjectSection />

        <Footer />
      </div>
    </>
  )
}

export default App


import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Container from "./Component/Container";
import Footer from "./Component/Footer";
import SkillSection from "./Component/SkillSection";
import ProjectSection from "./Component/ProjectSection";
import design from "../src/images/B.svg"
function App() {
 
  return (
    <>
      <div className={`  bg-neutral-50 text-gray-700 font-oswald dark:bg-dark dark:text-grayy  relative overflow-hidden`}>
        {" "}   <img src={design} alt="vector" className="absolute top-32 rotate-180  -right-48 w-96 h-96 object-contain" />    <img src={design} alt="vector" className="absolute rotate-180 top-96 -left-52 w-96 h-96 object-contain" /><img src={design} alt="vector" className="absolute rotate-180 top-2/4 -left-52 w-96 h-96 object-contain" />   
        <Navbar />
        <Container className="">
          <Home />
         
          <SkillSection />
          <ProjectSection/>

        </Container> 
        <Footer/>
      </div>
    </>
  );
}

export default App;

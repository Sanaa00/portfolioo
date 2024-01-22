
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Container from "./Component/Container";
import Footer from "./Component/Footer";
import SkillSection from "./Component/SkillSection";
import ProjectSection from "./Component/ProjectSection";
import design from "../images/B.svg"
function App() {
 
  return (
    <>
      <div className={`  bg-neutral-50 text-gray-700 font-oswald dark:bg-dark dark:text-grayy  relative overflow-hidden`}>
        {" "}   <img src={design} alt="vector" className="absolute  -right-40 w-96 h-96 object-contain" />   
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

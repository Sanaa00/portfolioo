import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Container from "./Component/Container";
import Footer from "./Component/Footer";
import SkillSection from "./Component/SkillSection";
import ProjectSection from "./Component/ProjectSection";

function App() {
 
  return (
    <>
      <div className={` bg-grayy text-gray-700 font-oswald dark:bg-dark dark:text-grayy  `}>
        {" "}
        <Navbar />
         <Container className="flex flex-col ">
          <Home />
          {/* <SkillSection />
          <ProjectSection/> */}
          {/* <Routes className=" ">
            <Route path="/" element={  <Home />}/>
             <Route path="/Skills" element={  <SkillSection />} />
         <Route path="/Projects" element={<ProjectSection />} />
          </Routes> */}

      
        
        </Container> 
        <Footer/>
      </div>
    </>
  );
}

export default App;

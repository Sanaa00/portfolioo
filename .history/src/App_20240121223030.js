
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
      <div className={`  bg-neutral-50 text-gray-700 font-oswald dark:bg-dark dark:text-grayy  `}>
        {" "}
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

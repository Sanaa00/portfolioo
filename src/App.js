import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Container from "./Component/Container";
import { useSelector } from "react-redux";
function App() {
  const dark = useSelector((state) => state.theme.theme);
  return (
    <>
      <div className={` ${dark ? "bg-grayy" : "bg-dark text-gray-50"} + `}>
        {" "}
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </div>
    </>
  );
}

export default App;

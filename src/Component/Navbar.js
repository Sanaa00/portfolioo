import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import Theme from "../feature/theme/Theme";
import close from "../images/close.png";
import menu from "../images/menuu.png";
import Container from "./Container";
function Navbar() {
  const dark = useSelector((state) => state.theme.theme);
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-gradient-to-r from-pinkk to-purplee flex  w-full shadow`}
    >
      <Container>
        <div
          className={`flex justify-between items-center w-full h-16 text-lg font-bold font-Zen text-grayy`}
        >
          <button onClick={() => setOpen(!open)} className="sm:hidden">
            <img src={menu} alt="menu" className="w-8 h-8" />
          </button>{" "}
          <div
            className={`rounded-sm sm:hidden flex flex-col fixed bg-grayy w-3/5 top-0 z-40 left-0 shadow-lg transform duration-500 ease-in-out ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex h-16">
              <button
                onClick={() => setOpen(!open)}
                className="text-black w-full px-6"
              >
                <img src={close} alt="close" className="w-8 h-8" />
              </button>
            </div>

            <div className="w-full h-screen flex flex-col">
              <Link
                to="/"
                onClick={() => setOpen(!open)}
                className="text-transparent bg-clip-text bg-gradient-to-r from-pinkk to-purplee text-center py-2"
              >
                Home
              </Link>
              <Link
                to="/projects"
                onClick={() => setOpen(!open)}
                className="text-transparent bg-clip-text bg-gradient-to-r from-pinkk to-purplee text-center py-2"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(!open)}
                className="text-transparent bg-clip-text bg-gradient-to-r from-pinkk to-purplee text-center py-2"
              >
                Contact
              </Link>{" "}
              <Link to="/" onClick={() => setOpen(!open)}>
                {" "}
                <Theme />
              </Link>
            </div>
          </div>
          <Link to="/" className="">
            Sana
          </Link>
          <ul className="hidden sm:flex justify-between items-center sm:w-2/5 md:w-3/6 lg:w-2/5">
            <NavLink
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-grayy" : "") + ""
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "border-b-2  border-grayy " : "") + ""
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "border-b-2  border-grayy " : "") + ""
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>
          <div className="hidden sm:flex">
            <Theme />{" "}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;

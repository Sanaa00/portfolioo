import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import Theme from "../feature/theme/Theme";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import Container from "./Container";

function Navbar() {
  const dark = useSelector((state) => state.theme.theme);
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${
        dark ? "bg-grayy" : "bg-dark shadow-darkgray border-darkgray"
      } + flex w-full h-16 border-b-2`}
    >
      <Container>
        <div
          className={`flex justify-between items-center w-full h-full text-lg font-bold font-Poppins text-grayy `}
        >
          <button onClick={() => setOpen(!open)} className="sm:hidden">
            <IoMenu fill="#f55951" className="w-8 h-8 text-orange" />
          </button>{" "}
          <div
            className={`${
              dark ? "bg-grayy" : "bg-dark shadow-darkgray"
            } + rounded-sm sm:hidden flex flex-col fixed w-3/5 top-0 z-40 left-0 shadow-lg transform duration-500 ease-in-out ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex h-16">
              <button
                onClick={() => setOpen(!open)}
                className="text-black w-full px-6"
              >
                <IoCloseCircle className="text-orange w-8 h-8" />
              </button>
            </div>

            <div className="w-full h-screen flex flex-col">
              <Link
                to="/"
                onClick={() => setOpen(!open)}
                className="text-orange text-center py-3"
              >
                Home
              </Link>
              <Link
                to="/projects"
                onClick={() => setOpen(!open)}
                className="text-orange text-center py-3"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(!open)}
                className="text-orange text-center py-3"
              >
                Contact
              </Link>{" "}
              <div
                className="flex justify-center items-center"
                onClick={() => setOpen(!open)}
              >
                <Theme className="py-3" />
              </div>
            </div>
          </div>
          <Link to="/" className="text-orange">
            Sana
          </Link>
          <ul className="hidden sm:flex justify-between items-center sm:w-2/5 md:w-3/6 lg:w-2/5">
            <NavLink
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-orange " : "") +
                "hover:scale-110 hover:duration-500 duration-500 text-orange"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "border-b-2  border-orange " : "") +
                "hover:scale-110 hover:duration-500 duration-500 text-orange"
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "border-b-2  border-orange " : "") +
                "hover:scale-110 hover:duration-500 duration-500 text-orange"
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

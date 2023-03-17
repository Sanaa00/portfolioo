import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import Theme from "../feature/theme/Theme";
import Container from "./Container";
function Navbar() {
  const dark = useSelector((state) => state.theme.theme);
  return (
    <div className="flex bg-gradient-to-tr from-pinkk to-purplee w-full">
      <Container>
        <div
          className={`flex justify-between items-center w-full h-16 text-grayy font-bold font-Zen`}
        >
          <Link to="/" className="">
            Sana
          </Link>
          <ul className="flex justify-between items-center w-1/5">
            <NavLink
              className={({ isActive }) =>
                (isActive ? "border-b-2  border-grayy " : "") + ""
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
          <Theme />
          {/* <p className="">toggle</p> */}
        </div>
      </Container>
    </div>
  );
}

export default Navbar;

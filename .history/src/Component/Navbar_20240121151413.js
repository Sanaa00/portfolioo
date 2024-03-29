import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
import Theme from "../feature/theme/Theme";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
import cv from "../images/sana-rzgar-cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-grayy text-gray-700 dark:bg-dark dark:text-grayy z-50`}
   
    >
          <div className="flex flex-col  ">
         
        <div
          className={" dark:bg-dark bg-opacity-70 dark:bg-opacity-70 bg-grayy px-6 sm:px-12 md:px-20 lg:px-26 xl:px-36 z-50   fixed w-full text-xl 2xl:text-2xl flex flex-row justify-between items-center  h-20 font-semibold " }
        >
      
          <div className="hidden sm:flex  items-center ">
            <Link
               spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
              to="home"
                 className={({ isActive }) =>
                (isActive ? "text-orange dark:text-orange " : "") +
                " hover:duration-500 hover:text-gray-600 dark:hover:text-gray-300 duration-500  mr-4"
              }
          
            >
              Sana
            </Link>
            {/* <NavLink
              to="/"  
            className={({ isActive }) =>
                (isActive ? "text-orange dark:text-orange" : "") +
                " hover:duration-500 hover:text-gray-600 dark:hover:text-gray-300 duration-500 px-2"
              }
            
            >
              t
            </NavLink> */}
            <Link
               spy={true} 
      smooth={true} 
      // offset={100} 
      duration={500} 
                to="skills"
                 className={({ isActive }) =>
                (isActive ? "text-orange dark:text-orange" : "") +
                " hover:duration-500 hover:text-gray-600 dark:hover:text-gray-300 duration-500 px-2"
              }
            >
              Skills
            </Link>
            <Link
               spy={true} 
      smooth={true} 
      // offset={50} 
      duration={500} 
              to="projects"
              className={({ isActive }) =>
                (isActive ? "text-orange dark:text-orange" : "") +
                " hover:duration-500 hover:text-gray-600 dark:hover:text-gray-300 duration-500 px-2"
              }
            
            >
              Projects
            </Link>
            </div>
            <div className="hidden sm:flex items-center ">
            <Theme className="mx-2" />
            <a href={cv} download className=" lg:ml-3 flex items-center text-sm 2xl:text-lg hover:bg-opacity-80 duration-500 hover:duration-500 font-semibold bg-orange text-grayy rounded px-6 py-1">
              Resume
              <AiOutlineDownload className="ml-1 w-6 h-6 animate__flash animate__animated animate__slower animate__repeat-3" />
            </a>
             
          </div>
          <div className="flex sm:hidden">
            <Link  spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  to="home" className="sm:hidden ml-2 text-2xl font-semibold text-orange">Sana</Link>
            </div>
          
          <div className="sm:hidden">
            <div className={`sm:hidden flex justify-between hover:bg-opacity-80 duration-500 hover:duration-500 items-center w-full h-full text-lg font-bold font-Poppins text-grayy `} >
              <Theme  />
              <button onClick={() => setOpen(!open)} className="sm:hidden ">
               <GiHamburgerMenu  className="w-8 object-cover h-9 text-purple5" />
              </button>{" "}
            <div
                className={`
            bg-grayy dark:bg-dark dark:shadow-darkgray rounded-sm sm:hidden flex flex-col fixed w-3/5 top-0 z-40 right-0 shadow-lg transform duration-500 ease-in-out ${
              open ? "-translate-x-0" : "translate-x-full"
            }`}
             >
            <div className="flex justify-end  h-16">
              <button
                onClick={() => setOpen(!open)}
                className="text-gray-700 flex justify-end mb-2 right-0 px-6"
              >
                <IoCloseCircle className="text-purple5 justify-end w-8 object-cover h-8 self-end" />
              </button>
            </div>

            <div className="w-full items-center h-screen flex flex-col text-purple5">
              <Link
                    to="/"
                onClick={() => setOpen(!open)}
                className="dark:text-grayy text-center py-3"
              >
                Home
              </Link>
              <Link
                    to="/skills"
             onClick={() => setOpen(!open)}
                className="dark:text-grayy text-center py-3"
              >
                Skills
              </Link>
               <Link
                    to="/projects"

                onClick={() => setOpen(!open)}
                className="dark:text-grayy text-center py-3"
              >
                Projects
              </Link>{" "} 
               <div className="flex sm:hidden items-center ">
        
                    <a href={cv} download className="mt-5 flex items-center text-sm font-semibold bg-purple5 text-neutral-50 rounded px-6 py-1">
                      Resume <AiOutlineDownload className="ml-1 w-6 h-6 text-neutral-50" /></a>
             
          </div>
            </div>
            </div>
          </div> 
          
          </div>  
        </div> 
   
        </div>
        </div >
  );
}

export default Navbar;

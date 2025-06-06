import React, { useState } from "react";
import Theme from "../feature/theme/Theme";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
// import cv from "../images/sana-rzgar-cv.pdf";
import cv from "../images/sanaa-cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-EAC4D5 text-txColor dark:bg-dark dark:text-neutral-100 z-50`}
   
    >
          <div className="flex flex-col  ">
         
        <div
          className={" dark:bg-dark bg-opacity-80 dark:bg-opacity-80 bg-neutral-50 px-6 sm:px-12 md:px-20 lg:px-26 xl:px-36 z-50   fixed w-full text-xl 2xl:text-2xl flex flex-row justify-between items-center  h-20 font-semibold " }
        >
      
          <div className="hidden sm:flex  items-center ">
            <Link
               spy={true} 
      smooth={true} 
      offset={0} 
              duration={500} 
              activeClass="text-purple5 dark:text-purple5"
              to="home"
                 className={
                " hover:duration-500 duration-500  mr-4"
              }
          
            >
              About
            </Link>
          
            <Link
                activeClass="text-purple5 dark:text-purple5"
               spy={true} 
      smooth={true} 
      offset={0} 
      duration={500} 
                to="skills"
                 className={" hover:duration-500 duration-500 px-2 mx-2"}
            >
              Skills
            </Link>
            <Link
                activeClass="text-purple5 dark:text-purple5"
               spy={true} 
      smooth={true} 
      offset={0} 
      duration={500} 
              to="projects"
              className={" hover:duration-500 duration-500 px-2 mx-2"}
            
            >
              Projects
            </Link>
            </div>
            <div className="hidden sm:flex items-center ">
            <Theme className="mx-2" />
            <a href={cv} download className=" lg:ml-3 flex items-center text-sm 2xl:text-lg hover:bg-opacity-80 duration-500 hover:duration-500 font-semibold bg-purple5 text-neutral-50 rounded px-6 py-1">
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
            <div className={`sm:hidden flex justify-between hover:bg-opacity-80 duration-500 hover:duration-500 items-center w-full h-full text-lg font-bold font-Poppins text-neutral-50 `} >
              <Theme  />
              <button onClick={() => setOpen(!open)} className="sm:hidden ">
               <GiHamburgerMenu  className="w-8 object-cover h-9 text-purple5" />
              </button>{" "}
            <div
                className={`
            bg-neutral-50 dark:bg-dark dark:shadow-darkgray rounded-sm sm:hidden flex flex-col fixed w-3/5 top-0 z-40 right-0 shadow-lg transform duration-500 ease-in-out ${
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
                    spy={true} 
      smooth={true} 
     
      duration={500} 
                    to="home"
                onClick={() => setOpen(!open)}
                className="dark:text-neutral-50 text-center py-3"
              >
                Home
              </Link>
                  <Link
                    spy={true} 
      smooth={true} 
     
      duration={500} 
                    to="skills"
             onClick={() => setOpen(!open)}
                className="dark:text-neutral-50 text-center py-3"
              >
                Skills
              </Link>
                  <Link
                    spy={true} 
      smooth={true} 
     
      duration={500} 
                    to="projects"

                onClick={() => setOpen(!open)}
                className="dark:text-neutral-50 text-center py-3"
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

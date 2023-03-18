import React from "react";
import { useSelector } from "react-redux";
import ContactCard from "../Component/ContactCard";
import cv from "../images/myCv1.jpg";
function Contact() {
  const dark = useSelector((state) => state.theme.theme);
  return (
    <div
      className={` ${
        dark ? "bg-grayy" : "bg-dark"
      } + flex flex-col pt-20 items-center w-screen sm:my-20 font-Zen h-screen`}
    >
      <ContactCard />
      <a
        href={cv}
        className="mx-10 mt-10  text-sm bg-sawz p-2 bg-orange  w-full sm:w-96 text-center text-gray-200 rounded hover:opacity-70 duration-500 hover:duration-500"
        download
      >
        Download CV
      </a>
    </div>
  );
}

export default Contact;

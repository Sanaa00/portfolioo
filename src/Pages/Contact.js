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
      } + flex flex-col justify-center items-center w-screen my-20 h-full font-Zen`}
    >
      <ContactCard />
      <a
        href={cv}
        className="mx-10 mt-10 text-sm bg-sawz p-2 bg-gradient-to-tr from-pinkk to-purplee w-96 text-center text-gray-100 rounded"
        download
      >
        Download CV
      </a>
    </div>
  );
}

export default Contact;

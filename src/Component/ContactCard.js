import React from "react";
import { useSelector } from "react-redux";
import { contact } from "../Data";
function ContactCard() {
  const dark = useSelector((state) => state.theme.theme);
  return (
    <div className="grid grid-cols-1 w-full sm:w-96">
      {contact.map((con) => {
        return (
          <a
            className={` ${
              dark
                ? "bg-grayy"
                : "bg-dark shadow-darkgray hover:shadow-darkgray"
            } + flex items-center mb-5 p-6 shadow hover:shadow-xl w-full hover:scale-105 hover:duration-500 duration-500`}
            key={con.id}
            href={con.url}
          >
            {con.icon}
            <p className="pl-5">{con.name}</p>
          </a>
        );
      })}
    </div>
  );
}

export default ContactCard;

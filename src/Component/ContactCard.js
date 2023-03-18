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
            } + flex items-center mb-5 p-6 shadow hover:shadow-xl w-full`}
            key={con.id}
            href={con.url}
          >
            <img alt="icons" src={con.icon} className="w-8 h-8" />
            <p className="pl-5">{con.name}</p>
          </a>
        );
      })}
    </div>
  );
}

export default ContactCard;

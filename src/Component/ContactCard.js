import React from "react";
import { useSelector } from "react-redux";
import { contact } from "../Data";
function ContactCard() {
  const dark = useSelector((state) => state.theme.theme);
  return (
    <div>
      <div className="flex flex-col w-96 ">
        {contact.map((con) => {
          return (
            <a
              className={` ${
                dark
                  ? "bg-grayy"
                  : "bg-dark shadow-darkgray hover:shadow-darkgray"
              } + flex items-center mt-5 p-6 shadow hover:shadow-xl`}
              key={con.id}
              href={con.url}
            >
              <div>{con.icon}</div>
              <p className="pl-5">{con.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default ContactCard;

import React from "react";
import { useSelector } from "react-redux";
function Home() {
  const dark = useSelector((state) => state.theme.theme);
  return (
    <div
      className={` ${
        dark ? "bg-grayy" : "bg-dark"
      } + flex flex-col w-full mt-16 justify-center items-center font-Zen`}
    >
      <div className="flex flex-col justify-center items-center text-gray-800">
        <img
          className="rounded-full h-80 w-80 object-cover"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt="person"
        />
        <div className=" flex flex-col justify-center items-center mt-5">
          <p className="flex text-2xl text-gradient font-bold text-transparent bg-clip-text bg-gradient-to-r from-pinkk to-purplee">
            Sana Rizgar
          </p>
          <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pinkk to-purplee font-bold mt-2">
            Software Engineer & Front-end Developer
          </p>
          <p
            className={` ${
              dark ? "text-gray-800" : "text-grayy"
            } + w-2/4 text-justify mt-2`}
          >
            I'm junior Software Engineer and front-End Developer, I am eager to
            build on my skills and contribute to software development projects.
            I have experience working with HTML, CSS, JavaScript, React and am
            committed to learning new technologies and best practices. I am a
            collaborative team player who communicates effectively and works
            well under tight deadlines.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

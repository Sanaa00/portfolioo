import React from "react";
import { useSelector } from "react-redux";
import { data } from "../Data";
function ProjectCard() {
  const dark = useSelector((state) => state.theme.theme);
  return (
    <div className=" xl:pt-10 grid grid-cols-1 grid-rows-2 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between items-center">
      {data.map((project) => {
        return (
          <a
            href={project.link}
            key={project.id}
            className={` ${
              dark
                ? "bg-grayy text-gray-700 "
                : "bg-dark  shadow-darkgray hover:shadow-darkgray text-gray-300"
            } + shadow-md rounded hover:shadow-xl  hover:scale-105 hover:duration-500 duration-500`}
          >
            <div className="flex justify-center items-center mt-4">
              <img
                className="h-60 w-60 object-cover rounded-full"
                alt="projects"
                src={project.url}
              />
            </div>

            <div className="p-4">
              <div className="text-lg text-orange font-bold">
                {project.title}
              </div>
              <p className="text-sm">{project.description}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default ProjectCard;

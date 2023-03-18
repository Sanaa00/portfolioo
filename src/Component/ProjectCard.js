import React from "react";
import { useSelector } from "react-redux";
import { data } from "../Data";
function ProjectCard() {
  const dark = useSelector((state) => state.theme.theme);
  return (
    <div className=" xl:pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between items-center">
      {data.map((project) => {
        return (
          <div
            key={project.id}
            className={` ${
              dark
                ? "bg-grayy "
                : "bg-dark  shadow-darkgray hover:shadow-darkgray"
            } + shadow-md rounded hover:shadow-xl hover`}
          >
            <div className="flex justify-center items-center mt-4">
              <img
                className="h-60 w-60 object-cover rounded-full"
                alt="projects"
                src={project.url}
              />
            </div>

            <div className="p-4">
              <div className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-pinkk to-purplee font-bold">
                {project.title}
              </div>
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCard;

import React from "react";
import { useSelector } from "react-redux";
import ProjectCard from "../Component/ProjectCard";
function Projects() {
  const dark = useSelector((state) => state.theme.theme);
  return (
    <div
      className={` ${
        dark ? "bg-grayy" : "bg-dark"
      } + w-screen pt-10 pb-20 flex justify-center items-center min-h-screen`}
    >
      <ProjectCard />
    </div>
  );
}

export default Projects;

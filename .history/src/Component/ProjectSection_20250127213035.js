import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../utility'
import { IoIosLink } from 'react-icons/io'
import { VscGithubAlt } from 'react-icons/vsc'
function ProjectSection() {
  return (
    <section
      id="projects"
      className="text-txColor dark:text-neutral-100 flex flex-col justify-center items-center py-20  lg:mt-10 z-10 sm:h-fit  px-4 sm:px-10 lg:px-20"
    >
      <p className="animate__animated  animate__slideInDown text-xl 2xl:text-3xl sm:text-2xl font-semibold ">
        My Projects
      </p>
      {/* <p className='animate__animated  animate__slideInDown text-lg 2xl:text-2xl text-center justify-center mt-3'>I've harnessed my expertise in React, Redux, JavaScript, and Next.js to craft these impressive projects.</p> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-10 mt-5 ">
        {' '}
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="border-b-2 border-bgPinkSection"
              //     className="shadow hover:shadow-md hover:duration-300 duration-300 relative rounded   animate__animated  animate__fadeIn animate__slower"
            >
              {/* <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt="project"
                  className="border w-full h-52 object-cover overflow-hidden hover:scale-105 duration-500 hover:duration-500"
                />
              </div> */}

              <div className="mt-2 p-2 flex flex-col items-center justify-between">
                <div className="flex  w-full justify-between items-center">
                  {' '}
                  <p className="text-lg  font-semibold">{project.name}</p>
                  <div className="flex  2xl:text-xl items-center text- font-semibold">
                    {/* <Link to={project.demo} className="">
                      <IoIosLink className="w-6 h-6" />
                    </Link> */}
                    <Link
                      to={project.code}
                      // className="pl-1"
                    >
                      <VscGithubAlt className="w-6 h-6" />{' '}
                    </Link>
                  </div>
                </div>

                <div className="w-full flex mt-1 mx-0">
                  <span className=" text- text-sm py-1 mr-1">Stack: </span>
                  {project.tools.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex text- text-sm mr-2 py-1 rounded-sm "
                      >
                        {' '}
                        {item.name}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectSection

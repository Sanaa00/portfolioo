import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../utility'

function ProjectSection() {
  return (
       <div className=" flex flex-col justify-center items-center py-20  lg:mt-10">
            <p className="text-xl 2xl:text-3xl sm:text-2xl font-semibold ">My Projects</p>
            <p className='text-lg 2xl:text-2xl text-center justify-center mt-3'>I've harnessed my expertise in React, Redux, JavaScript, and Next.js to craft these impressive projects.</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3  gap-10 mt-5'>     {
                 projects.map((project) => {
                      return <div key={project.id} className=''>
                           <div className='overflow-hidden'>
                                <img src={project.image} alt="project" className='border w-full h-52 object-cover overflow-hidden hover:scale-105 duration-500 hover:duration-500' /></div>
                          
                           <div className='mt-2 flex items-center justify-between'>
                                <p className='text-lg 2xl:text-xl font-semibold'>{project.name}</p>
                                <div className='flex  2xl:text-xl items-center text-orange'>
                                     <Link to={project.demo} className=''>Demo</Link>
                                     <Link to={project.code} className='pl-4'>Code</Link>
                                </div>
                           </div>
                      </div>
                 })
      }</div>
       
    </div>
  )
}

export default ProjectSection
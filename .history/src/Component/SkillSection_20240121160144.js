import React from 'react'
import { skills } from '../utility'
import 'animate.css/animate.min.css';
function SkillSection() {

  return (
       <section id="skills" className=' py-26 sm:my-0 w-full flex flex-col justify-center items-center '>
            <p className="animate__animated  animate__slideInDown text-xl sm:text-2xl 2xl:text-3xl font-semibold ">Skills</p>
            <p className='animate__animated  animate__slideInDown text-lg 2xl:text-2xl mt-3'>Here are my skills and used technologies</p>
            <div className='grid sm:grid-cols-2 sm:gap-10 gap-5 w-full mt-8 animate__animated  animate__fadeIn animate__slower'>
                 {skills.map((skill) => {
                 return <div key={skill.id} className=' flex w-full justify-start pl-4 items-center h-12 bg-purple5 rounded'>
                      <div className='text-grayy'>{skill.icon}</div>
                      <p className='pl-4 font-lg text-grayy'>{skill.name}</p>
                 </div>
                 })}
            </div>
          
    </section>
  )
}

export default SkillSection

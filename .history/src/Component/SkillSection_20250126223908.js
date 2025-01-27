import React from 'react'
import { skills } from '../utility'
import 'animate.css/animate.min.css'
function SkillSection() {
  return (
    <section
      id="skills"
      className="dark:text-neutral-100 bg-bgPinkSection text-txColor py-20 sm:my-0 w-full flex flex-col justify-center items-center "
    >
      <p className="animate__animated  animate__slideInDown text-xl sm:text-2xl 2xl:text-3xl font-semibold ">
        Skills
      </p>
      {/* <p className='animate__animated  animate__slideInDown text-lg 2xl:text-2xl mt-3'>Here are my skills and used technologies</p> */}
      <div className="flex  sm:gap-10 gap-5 w-full mt-8 animate__animated  animate__fadeIn animate__slower">
        {skills.map((skill) => {
          return (
            <div
              key={skill.id}
              className="text-txColor flex px-8 py-1 justify-start pl-4 items-center bg-bgPink rounded-full"
            >
              <div>{skill.icon}</div>
              <p className="pl-4 font-lg truncate">{skill.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SkillSection

import React, { useEffect, useState } from 'react'
import { skills } from '../utility'
import 'animate.css/animate.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
function SkillSection() {
  const [slide, setSlide] = useState(2)
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: 'linear',
  }
  useEffect(() => {
    if (window.innerWidth > 640) {
      setSlide(5)
    }
  })
  return (
    <section
      id="skills"
      className="dark:text-neutral-100 bg-bgPinkSection text-txColor py-10 sm:my-0 w-full flex flex-col justify-center items-center "
    >
      <p className="animate__animated  animate__slideInDown text-xl sm:text-2xl 2xl:text-3xl font-semibold ">
        Skills
      </p>
      {/* <div className="w-full "> */}
      {/* <div className="slider-container"> */}
      <Slider {...settings} className="flex w-full mt-10">
        {skills.map((skill) => {
          return (
            <span key={skill.id} className="flex flex-row text-txColor ">
              <div className="flex justify-center items-center w-fit bg-bgPink px-8 py-1 rounded-full">
                {' '}
                <span className="w-fit">{skill.icon}</span>
                <p className="pl-2 font-lg ">{skill.name}</p>
              </div>
            </span>
          )
        })}
        {/* <div className="w-full">
            <h3>1</h3>
          </div>
          <div className="w-full">
            <h3>2</h3>
          </div>
          <div className="w-full">
            <h3>3</h3>
          </div>
          <div className="w-full">
            <h3>4</h3>
          </div>
          <div className="w-full">
            <h3>5</h3>
          </div>
          <div className="w-full">
            <h3>6</h3>
          </div> */}
      </Slider>
      {/* </div> */}
      {/* </div> */}
      {/* <p className='animate__animated  animate__slideInDown text-lg 2xl:text-2xl mt-3'>Here are my skills and used technologies</p> */}
      {/* <div className="flex  sm:gap-10 gap-5 w-full mt-8 animate__animated  animate__fadeIn animate__slower">
        {skills.map((skill) => {
          return (
            <div
              key={skill.id}
              className="text-txColor flex px-8 py-1 justify-start pl-4 items-center bg-bgPink rounded-full"
            >
              <div>{skill.icon}</div>
              <p className="pl-2 font-lg truncate">{skill.name}</p>
            </div>
          )
        })}
      </div> */}
    </section>
  )
}

export default SkillSection

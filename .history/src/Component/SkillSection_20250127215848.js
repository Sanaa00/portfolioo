import React, { useEffect, useState } from 'react'
import { skills } from '../utility'
import 'animate.css/animate.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
function SkillSection() {
  const [slide, setSlide] = useState(2)
  const settings = {
    infinite: true,
    slidesToShow: slide,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: 'linear',
  }
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setSlide(5)
    } else if (window.innerWidth > 640) {
      setSlide(3)
    }
  }, [slide])
  return (
    <section
      id="skills"
      className="dark:text-neutral-100 bg-bgPinkSection text-txColor py-10 sm:my-0 w-full flex flex-col justify-center items-center "
    >
      <p className=" text-xl sm:text-2xl 2xl:text-3xl font-semibold ">Skills</p>

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
      </Slider>
    </section>
  )
}

export default SkillSection

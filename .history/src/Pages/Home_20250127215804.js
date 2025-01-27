/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import 'animate.css/animate.min.css'
import cv from '../images/sanaa-cv.pdf'
import me from '../images/Me.JPG'

function Home() {
  return (
    <section
      id="home"
      className={` dark:text-neutral-100 text-txColor dark:bg-dark flex flex-col w-full  items-center  relative overflow-hidden min-h-screen sm:h-fit  px-4 lg:px-20`}
    >
      <div className="w-full flex justify-between items-center mt-8">
        <div className="w-full flex  items-center">
          <a
            href={cv}
            download
            className="mx-2 bg-bgPinkSection px-8 py-1 rounded-full flex justify-center items-center"
          >
            cv
          </a>
          <div className="w-full flex justify-end items-center">
            <a target="_blank" href="https://www.linkedin.com/in/sana-rizgar/">
              Linkedin
            </a>{' '}
            <p className="mx-2">/</p>{' '}
            <a href="https://github.com/Sanaa00" target="_blank">
              {' '}
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="py-10 pt-20  mt-24  sm:mt-10 sm:my-0 flex flex-col h-full justify-center items-center w-full">
        <img
          alt="sana"
          className="border object-cover w-60 h-60 rounded-full "
          src={me}
        />
        <p className="animate__animated  animate__slideInDown flex text-2xl sm:text-3xl 2xl:text-3xl text-gradient font-bold text-orange mt-5">
          Sana Rizgar
        </p>
        <p className="animate__animated  animate__slideInDown text-center text-xl sm:text-3xl 2xl:text-4xl text-orange font-bold mt-1 sm:mt-2">
          Software Engineer & Front-end Developer
        </p>
      </div>
    </section>
  )
}

export default Home

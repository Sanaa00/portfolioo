import React from 'react'
import 'animate.css/animate.min.css'
// import design from "../images/B.svg"
function Home() {
  return (
    <section
      id="home"
      className={` dark:text-neutral-100 text-txColor dark:bg-dark flex flex-col w-full  items-center  relative overflow-hidden min-h-screen sm:h-fit`}
    >
      <div className="w-full flex justify-between items-center ">
        <div className="w-full flex  items-center">
          {' '}
          <p>sanarizgar34@gmail.com</p>
          <button>cv</button>
          <div className="w-full flex justify-end items-center">
            <p>Linkedin</p> <p className="mx-5">/</p> <p>Github</p>
          </div>
        </div>
      </div>
      <div className="py-10 pt-20 sm:mt-10 sm:my-0 flex flex-col justify-center items-center w-full">
        <img
          alt="sana"
          className="border object-cover w-60 h-60 rounded-full "
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
        />
        <p className="animate__animated  animate__slideInDown flex text-2xl sm:text-3xl 2xl:text-3xl text-gradient font-bold text-orange mt-5">
          Sana Rizgar
        </p>
        <p className="animate__animated  animate__slideInDown text-center text-xl sm:text-3xl 2xl:text-4xl text-orange font-bold mt-1 sm:mt-2">
          Software Engineer & Front-end Developer
        </p>
        {/* <p className="animate__animated  animate__fadeIn animate__slower text-xl sm:text-2xl 2xl:text-3xl font-semibold mt-8">About Me</p> */}
        {/* <p
            className={`animate__animated  animate__fadeIn animate__slower dark:text-grayy text-lg 2xl:text-xl w-full text-justify  lg:text-center mt-3 px-6`}
          >
           Hello there! I'm a dedicated front-end web developer who thrives on transforming creative ideas into captivating digital experiences. My journey into the tech world began with a solid educational foundation – I hold a degree in Software Engineering from Salahaddin University. Eager to put my knowledge into action, I ventured into the realm of education, working as an assistant lecturer at Charmo University. During this time, I not only deepened my understanding of technology but also honed my communication skills. Following my passion for web development, I took on the challenge of the WeCode Front-End Bootcamp and later the comprehensive Bit Fullstack Bootcamp. These experiences equipped me with a strong command of tools like React and a holistic understanding of full-stack development. With a blend of academic excellence and hands-on coding skills, I'm committed to crafting user-centric interfaces that seamlessly merge aesthetics with functionality.
          </p> */}
      </div>
    </section>
  )
}

export default Home

import React from "react";
// import { useSelector } from "react-redux";
function Home() {
  // const dark = useSelector((state) => state.theme.theme);
  return (
    <div
      className={`bg-grayy dark:bg-dark flex flex-col w-full  justify-center items-center min-h-screen `}
    >
      
      <div className="py-10 pt-20 sm:mt-10 sm:my-0 flex flex-col justify-center items-center w-full">
      
          <p className="flex text-2xl sm:text-3xl 2xl:text-4xl text-gradient font-bold text-orange">
            Sana Rizgar
          </p>
          <p className="text-center text-xl sm:text-3xl 2xl:text-4xl text-orange font-bold mt-1 sm:mt-2">
            Software Engineer & Front-end Developer
        </p>
        <p className="text-xl sm:text-2xl 2xl:text-3xl font-semibold mt-8">About Me</p>
          <p
            className={`  text-gray-600 dark:text-grayy text-lg 2xl:text-xl w-full text-justify  lg:text-center mt-3 px-6`}
          >
           Hello there! I'm a dedicated front-end web developer who thrives on transforming creative ideas into captivating digital experiences. My journey into the tech world began with a solid educational foundation – I hold a degree in Software Engineering from Salahaddin University. Eager to put my knowledge into action, I ventured into the realm of education, working as an assistant lecturer at Charmo University. During this time, I not only deepened my understanding of technology but also honed my communication skills. Following my passion for web development, I took on the challenge of the WeCode Front-End Bootcamp and later the comprehensive Bit Fullstack Bootcamp. These experiences equipped me with a strong command of tools like React and a holistic understanding of full-stack development. With a blend of academic excellence and hands-on coding skills, I'm committed to crafting user-centric interfaces that seamlessly merge aesthetics with functionality.
          </p>
        </div>
   
    </div>
  );
}

export default Home;

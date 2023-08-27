
import { FaGithubSquare,FaTwitterSquare} from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 ,SiTailwindcss,SiNpm ,SiTypescript} from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import PROJECT1  from "../src/images/PROJECT1.jpg" 
import PROJECT2 from "../src/images/PROJECT2.jpg" 
import PROJECT6 from "../src/images/PROJECT6.jpg" 
import PROJECT3 from "../src/images/PROJECT3.jpg" 
import PROJECT4 from "../src/images/PROJECT4.jpg" 
import PROJECT5 from "../src/images/PROJECT5.jpg" 

// export const skills = [
//      {
//           id: 1,
//           image: html
//      },
//       {
//           id: 2,
//           image: css
//      },
//        {
//           id: 3,
//           image: javascript
//      }, {
//           id: 4,
//           image: github
//      },
     
//         {
//           id: 5,
//           image: react
//      },
//          {
//           id: 6,
//           image: tailwind
//      },
//           {
//           id: 7,
//           image: redux
//      },
//            {
//           id: 8,
//           image: typescript
//      },

//              {
//           id: 9,
//           image: nextjs
//      }, 
// ]
 export const contacts = [
     {
          id: 1,
          "name": "Sana Rizgar",
          "link": "https://www.linkedin.com/in/sana-rizgar/",
          "icon":<ImLinkedin className='w-5 h-5 md:w-6 md:h-6'/>
     },
       {
          id: 2,
          "name": "Sana Rizgar",
            "link": "https://twitter.com/SanaRizgar23",
          "icon":<FaTwitterSquare className='w-5 h-5 md:w-6 md:h-6'/>
     },
     {
          id: 3,
          "name": "Sanaa00",
          "link": "https://github.com/Sanaa00",
          "icon":<FaGithubSquare className='w-5 h-5 md:w-6 md:h-6'/>
     },
]
export const projects = [
     {
          id: 1,
          name: "Candle Store",
          demo: "https://candle-store.netlify.app/",
          code: "https://github.com/Sanaa00/Candle-Store-FrontEnd",
          image:PROJECT1
     },
      {
          id: 2,
          name: "Free Shopping",
          demo: "https://shopping-0.netlify.app/",
           code: "https://github.com/Sanaa00/shopping-ecommerce-website",
              image:PROJECT3
     },
       {
          id: 3,
          name: "Real Estate Home",
          demo: "https://real-estate-home0.netlify.app/",
            code: "https://github.com/Sanaa00/real-estate-home",
              image:PROJECT2
     },
        {
          id: 4,
          name: "Hoo Bank",
          demo: "https://grand-pastelito-4e2d34.netlify.app/",
             code: "https://github.com/Sanaa00/web-business",
              image:PROJECT4
     },
         {
          id: 5,
          name: "Tickty",
          demo: "https://sage-cendol-7f5b99.netlify.app/",
              code: "https://github.com/Sanaa00/Hotel-Travel",
              image:PROJECT5
     },
           {
          id: 6,
          name: "AdminPanel-candle",
          demo: "https://candlestore-adminpanel.netlify.app/",
              code: "https://github.com/Sanaa00/candle-AdminPanel",
              image:PROJECT6
     }
]
export  const skills = [
          {
               id: 1,
               name: "HTML",
               icon:<AiFillHtml5 className='w-8 h-8'/>
          },
           {
               id: 2,
               name: "CSS",
               icon:<SiCss3 className='w-7 h-7'/>
          },
            {
               id: 3,
               name: "JavaScript",
               icon:<DiJavascript className='w-8 h-8'/>
          },
             {
               id: 4,
               name: "React",
               icon:<GrReactjs className='w-8 h-8'/>
          },
              {
               id: 5,
               name: "Redux Toolkit",
               icon:<TbBrandRedux className='w-8 h-8'/>
          },
               {
               id: 6,
               name: "Typescript",
               icon:<SiTypescript className='w-7 h-7'/>
          },
                {
               id: 7,
               name: "NextJs",
               icon:<TbBrandNextjs className='w-8 h-8'/>
          },
                    {
               id: 8,
               name: "Git & Github",
               icon:<FaGithub className='w-7 h-7'/>
          },
                              {
               id: 9,
               name: "TailwindCss",
               icon:<SiTailwindcss className='w-8 h-8'/>
          },
                                        {
               id: 10,
               name: "npm",
               icon:<SiNpm className='w-7 h-7'/>
          },
                
     ]
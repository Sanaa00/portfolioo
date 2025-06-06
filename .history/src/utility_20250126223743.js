import { GrReactjs } from 'react-icons/gr'
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTypescript,
} from 'react-icons/tb'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { CgNpm } from 'react-icons/cg'
import { SiTailwindcss, SiRedux } from 'react-icons/si'
import PROJECT1 from '../src/images/PROJECT1.jpg'
import PROJECT2 from '../src/images/PROJECT2.jpg'
import PROJECT6 from '../src/images/PROJECT6.jpg'
import PROJECT3 from '../src/images/PROJECT3.jpg'
import PROJECT4 from '../src/images/PROJECT4.jpg'
import PROJECT7 from '../src/images/project7.jpg'
import { VscGithubAlt } from 'react-icons/vsc'
import { CiTwitter } from 'react-icons/ci'
import { PiLinkedinLogoLight } from 'react-icons/pi'

export const contacts = [
  {
    id: 1,
    name: 'Sana Rizgar',
    link: 'https://www.linkedin.com/in/sana-rizgar/',
    icon: <PiLinkedinLogoLight className="w-7 h-7" />,
  },
  {
    id: 2,
    name: 'Sana Rizgar',
    link: 'https://twitter.com/SanaRizgar23',
    icon: <CiTwitter className="w-7 h-7" />,
  },
  {
    id: 3,
    name: 'Sanaa00',
    link: 'https://github.com/Sanaa00',
    icon: <VscGithubAlt className="w-6 h-6" />,
  },
]
export const projects = [
  {
    id: 1,
    name: 'Candle Store',
    demo: 'https://candle-store.netlify.app/',
    code: 'https://github.com/Sanaa00/Candle-Store-FrontEnd',
    image: PROJECT1,
    tools: [
      {
        id: 1,
        name: 'React js',
      },
      {
        id: 2,
        name: 'Tailwind',
      },
      {
        id: 3,
        name: 'Express js',
      },
      {
        id: 4,
        name: 'Node js',
      },
    ],
  },
  {
    id: 2,
    name: 'Free Shopping',
    demo: 'https://shopping-0.netlify.app/',
    code: 'https://github.com/Sanaa00/shopping-ecommerce-website',
    image: PROJECT3,
    tools: [
      {
        id: 1,
        name: 'React js',
      },
      {
        id: 2,
        name: 'Tailwind',
      },
    ],
  },
  {
    id: 3,
    name: 'Real Estate Home',
    demo: 'https://real-estate-home0.netlify.app/',
    code: 'https://github.com/Sanaa00/real-estate-home',
    image: PROJECT2,
    tools: [
      {
        id: 1,
        name: 'React js',
      },
      {
        id: 2,
        name: 'Tailwind',
      },
    ],
  },
  {
    id: 4,
    name: 'Hoo Bank',
    demo: 'https://grand-pastelito-4e2d34.netlify.app/',
    code: 'https://github.com/Sanaa00/web-business',
    image: PROJECT4,
    tools: [
      {
        id: 1,
        name: 'React js',
      },
      {
        id: 2,
        name: 'Tailwind',
      },
    ],
  },
  {
    id: 5,
    name: 'Foodied',
    demo: '',
    code: 'https://github.com/Sanaa00/FOODIED.git',
    image: PROJECT7,
    tools: [
      {
        id: 1,
        name: 'Next js',
      },
      {
        id: 2,
        name: 'Tailwind',
      },
      {
        id: 4,
        name: 'Express js',
      },
      {
        id: 5,
        name: 'Node js',
      },
      {
        id: 3,
        name: 'TypeScript',
      },
    ],
  },
  {
    id: 6,
    name: 'AdminPanel-candle',
    demo: 'https://candlestore-adminpanel.netlify.app/',
    code: 'https://github.com/Sanaa00/candle-AdminPanel',
    image: PROJECT6,
    tools: [
      {
        id: 1,
        name: 'Next js',
      },
      {
        id: 2,
        name: 'Tailwind',
      },
      {
        id: 4,
        name: 'Express js',
      },
      {
        id: 3,
        name: 'TypeScript',
      },
      {
        id: 5,
        name: 'Node js',
      },
    ],
  },
]
export const skills = [
  {
    id: 1,
    name: 'HTML',
    icon: <AiOutlineHtml5 className="w-5 h-5" />,
  },
  {
    id: 2,
    name: 'CSS',
    icon: <TbBrandCss3 className="w-5 h-5" />,
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: <TbBrandJavascript className="w-5 h-5" />,
  },
  {
    id: 4,
    name: 'React',
    icon: <GrReactjs className="w-5 h-5" />,
  },
  {
    id: 5,
    name: 'Redux Toolkit',
    icon: <SiRedux className="w-5 h-5" />,
  },
  {
    id: 6,
    name: 'Typescript',
    icon: <TbBrandTypescript className="w-5 h-5" />,
  },
  {
    id: 7,
    name: 'NextJs',
    icon: <TbBrandNextjs className="w-5 h-5" />,
  },
  {
    id: 8,
    name: 'Git & Github',
    icon: <VscGithubAlt className="w-5 h-5 font-bold" />,
  },
  {
    id: 9,
    name: 'TailwindCss',
    icon: <SiTailwindcss className="w-5 h-5" />,
  },
  {
    id: 10,
    name: 'npm',
    icon: <CgNpm className="w-5 h-5" />,
  },
]

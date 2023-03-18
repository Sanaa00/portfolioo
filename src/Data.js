// import project1 from "./images/project1.jpg";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import project1 from "./images/project1.png";
import project4 from "./images/project4.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
export const data = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "This ecommerce website is built with React and utilizes Tailwind CSS for its user interface design. It provides a seamless shopping experience with its easy-to-navigate pages and responsive layout. Customers can browse and purchase products securely, with features such as a shopping cart. The website also offers search functionality and filters to help customers find the products they need quickly. With its modern design and powerful functionality",
    url: project1,
    link: "https://shopping-0.netlify.app/",
  },
  {
    id: 2,
    title: "Hotels & Travels",
    description:
      "This hotel and travel agency website is built with React and JavaScript, utilizing Tailwind CSS for its sleek and modern design. Users can easily search and book hotels and vacation packages through the website, with detailed information and pricing displayed for each option. The website also offers travel tips and guides to help users plan their perfect trip. With a user-friendly interface and responsive design .",
    url: project2,
    link: "https://tourism-app-0.netlify.app/",
  },
  {
    id: 3,
    title: "Qoute",
    description:
      " This web app allows users to post and share their favorite quotes with others, utilizing the power of React, Redux, and Tailwind CSS. Users can create their own quotes, and browse through a collection of quotes posted by others. The intuitive user interface design makes it easy to navigate and use. Overall, this web app is a great tool for quote enthusiasts and a testament to the power of React, Redux, and Tailwind CSS.",
    url: project3,
    link: "https://qoute-app-0.netlify.app/",
  },
  {
    id: 4,
    title: "Real-Estaite-Home",
    description:
      " This real estate home web design utilizes the power of React and Tailwind CSS to create a highly customizable and scalable design system. Tailwind's utility-first approach makes it easy to build and style components quickly and efficiently, while React's component-based architecture allows for modular and reusable code. Overall, this real estate home web design showcases the power of React and Tailwind CSS in creating beautiful  web applications.",
    url: project4,
    link: "https://real-estate-home0.netlify.app/",
  },
];

export const contact = [
  {
    id: 1,
    icon: <FaLinkedin className="w-8 h-8 text-orange" />,
    name: "Sana Rzigar",
    url: "https://www.linkedin.com/in/sana-rizgar/",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="w-8 h-8 text-orange" />,
    name: "Sana Rzigar",
    url: "https://github.com/Sanaa00",
  },
  {
    id: 3,
    icon: <FaPhoneSquareAlt className="w-8 h-8 text-orange" />,
    name: "0750 116 93 42",
    url: "",
  },
];

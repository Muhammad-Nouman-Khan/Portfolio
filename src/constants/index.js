import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  starbucks,
  tesla,
  shopify,
  threejs,
} from "../assets";
import instagram from "../assets/instagram.png";
import brainwave from "../assets/brainwave.png";
import gemini from "../assets/gemini.png";
import hoobank from "../assets/hoobank.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-End Web Dev",
    icon: mobile,
  },
  {
    title: "C++",
    icon: backend,
  },
  {
    title: "Firebase",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "C++",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Proficient in Object-Oriented Programming (OOP) and Data Structures and Algorithms (DSA) using C++.",
      "Designed and implemented efficient algorithms and data structures.",
      " Utilized OOP principles to create modular and maintainable code.",
    ],
  },
  {
    title: "Front-End Web Dev",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Experienced in creating responsive and interactive web applications using HTML, CSS, and JavaScript.",
      "Developed user-friendly interfaces with React and Tailwind css.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implemented dynamic functionalities and single-page applications (SPAs) using JavaScript and React.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Instagram Clone",
    description:
      "Instagram clone in which users can upload images, also includes like and comment functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: instagram,
    source_code_link: "https://github.com/Muhammad-Nouman-Khan/Instagram-clone",
  },
  {
    name: "Modern Website",
    description:
      "Modern Website built using React and Tailwind CSS, showcasing my knowledge of web development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: brainwave,
    source_code_link: "https://github.com/Muhammad-Nouman-Khan/BrainwaveClone",
  },
  {
    name: "HooBank",
    description: "Modern website using react.js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link:
      "https://github.com/Muhammad-Nouman-Khan/ReactJSProjects/tree/main/HooBank",
  },
  {
    name: "Gemini",
    description: "Google Gemini clone using react.js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gemini,
    source_code_link: "https://github.com/Muhammad-Nouman-Khan/GeminiClone",
  },
];

export { services, technologies, experiences, testimonials, projects };

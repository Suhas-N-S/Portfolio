import { meta, shopify, starbucks, tesla, thales } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Java Developer",
    company_name: "Thales India",
    icon: thales,
    iconBg: "#000000",
    date: "August 2022 - October 2023",
    points: [
      "Designed, developed, and resolved issues in the Capella Model-Based Systems Engineering (MBSE) project using the Arcadia methodology for system modeling and architectural design.",
      "Built and optimized custom Eclipse Rich Client Platform (RCP) plugins to enhance the user experience and simplify complex modeling tasks.",
      "Extended Capella’s functionality through tailored Eclipse RCP plugin development, aligning with specific modeling requirements.",
      "Led the development and issue resolution efforts for TOCATA and NAVDB, critical modules of the ITAC tool.",
      "Took ownership of key technical components by implementing essential features and addressing system-level issues.",
      "Improved performance by identifying bottlenecks and optimizing code for better efficiency and maintainability.",
      "Worked closely with stakeholders to deliver robust and scalable solutions within tight project timelines.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Apple Website Clone",
    description:
      "Recreated the Apple website using React, Tailwind CSS, CSS, and Three.js to replicate the visual aesthetics and interactive experience of the original site. Integrated 3D elements with Three.js to enhance user engagement and bring a modern, dynamic feel to the interface. The project reflects a strong focus on responsive design, component-driven development, and performance optimization, while demonstrating the ability to work with advanced front-end technologies.",
    link: "https://apple-clone-kappa-two.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Nike Website Clone",
    description:
      'Developed a modern and fully responsive Nike website replica leveraging React, Tailwind CSS, and CSS. The project emphasizes intuitive navigation, bold visual elements, and adaptive layouts tailored for various devices. This clone reflects a keen attention to design detail and showcases the ability to translate complex UI into performant, maintainable code.',
    link: "https://nike-two-lake.vercel.app/",
  },
];

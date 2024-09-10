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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  ucx,
  appbites,
  wearecasino,
  ortus,
  dojo,
  mprofessional,
  trafiku,
} from "../assets";

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
    title: "Web & Mobile Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: backend,
  },
  {
    title: "Javascript Enthusiast",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "UCX",
    icon: ucx,
    iconBg: "#383E56",
    date: "Jun 2019 - Sep 2019",
    points: [
      "Collaborated with a team of 10 interns to develop an e-commerce web app and website.",
      "Contributed to back-end development using Java EE to ensure robust functionality and seamless performance.",
      "Utilized the Angular framework for front-end development to build an intuitive user interface.",
      "Applied TypeScript to enhance front-end design and create a compelling user experience.",
    ],
  },
  {
    title: "Web Developer & Designer",
    company_name: "Appbites",
    icon: appbites,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Sep 2020",
    points: [
      "Programmed front-end interfaces for high-profile projects and websites.",
      "Crafted visually appealing and responsive web designs.",
      "Utilized ReactJS and JavaScript to create dynamic and engaging user experiences.",
      "Worked on notable projects such as Trafiku Urban, Speex Backoffice, and Karcher e-commerce website.",
    ],
  },
  {
    title: "L2 Technical Support Engineer – Web and Game Applications",
    company_name: "WeAreCasino",
    icon: wearecasino,
    iconBg: "#383E56",
    date: "Apr 2022 - Jan 2024",
    points: [
      "Provided L2 technical support for high-profile web and game applications.",
      "Identified and resolved bugs in website and game code.",
      "Collaborated with development teams to troubleshoot and fix front-end and back-end issues.",
      "Ensured optimal performance and functionality of applications across various projects.",
    ],
  },
  {
    title: "Project Director & Outbound Specialist",
    company_name: "The Ortus Club",
    icon: ortus,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Generate leads and develop business by reaching out to potential clients across various platforms.",
      "Ensure a steady pipeline of outbound marketing leads, contributing to the company's growth.",
      "Build and maintain relationships with potential clients to drive long-term business development.",
      "Lead the planning and execution of high-profile business events, managing teams and collaborating with clients to deliver impactful experiences.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Dionis consistently exceeds expectations with his dedication and meticulous approach to every task.",
    name: "Driton Hyseni",
    designation: "Head of Performance",
    company: "The Ortus Club",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "His relentless pursuit of perfection and professionalism make Dionis an invaluable asset to any team.",
    name: "Flandra Sadiku",
    designation: "Head of Strategic Growth",
    company: "The Ortus Club",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "The Dojo Project Managment",
    description:
      "Personal project that I made in my spare time. This is a task managment web application to help users easily create, assign, and track tasks for their projects. It’s all about making it easier to stay organized and keep everything on track.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: dojo,
    source_code_link: "https://github.com/DioPrebreza/Dojo-Project-Management",
    live_link: "https://dojomanagement.netlify.app",
  },
  {
    name: "Mprofessional Expense",
    description:
      "Freelance project which I developed alongside my good friend for a client which wanted his personal expense tracker. The app enables users to categorize and add expenses, view summaries, and filter data by calendar. Please note that the provided link leads to a staging environment due to confidentiality and privacy requirements set by the client.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: mprofessional,
    source_code_link: "https://github.com/EnesHasani123/Budget-Buddy-App-main",
    live_link:
      "https://apps.apple.com/gb/app/mprofessional-expense/id6520393197",
  },
  {
    name: "Trafiku Urban",
    description:
      "Professional company project which i contributed in developing when working for Appbites. This app provides users in Prishtina with real-time information on urban bus locations and schedules, featuring a live map that displays current bus positions and estimated arrival times. Please note that, due to company privacy policies, the source code cannot be shared.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "google-maps-api",
        color: "pink-text-gradient",
      },
    ],
    image: trafiku,
    source_code_link: false,
    live_link: "https://apps.apple.com/gb/app/trafiku-urban/id1192711894",
  },
];

export { services, technologies, experiences, testimonials, projects };

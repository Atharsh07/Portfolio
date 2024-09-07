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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "Threat Intelligence",
    icon: mobile,
  },
  {
    title: "DATA Analytics",
    icon: backend,
  },
  {
    title: "Backend Developer",
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
    title: "Pentesting",
    company_name: "App/web",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Conducting penetration testing on web and mobile applications within local projects using virtual machines (VMs) and various pentesting tools.",
      "Collaborating with cross-functional teams including developers, security analysts, and product managers to ensure robust application security.",
      "Identifying and addressing vulnerabilities in applications, ensuring secure implementation while maintaining functionality.",
      "Participating in security audits, code reviews, and providing detailed reports and feedback on security issues.",
    ],
  },
  {
    title: "FullStack Development",
    company_name: "LocalProjects",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining full stack web applications using technologies such as React.js, Node.js, Express, and MongoDB.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality, scalable products.",
      "Deploying applications on Vercel and other platforms, ensuring smooth CI/CD processes.",
    ],
  },
  {
    title: "BlockChain Development",
    company_name: "SmartContracts/NFTs",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining blockchain applications, including smart contracts using Solidity and Ethereum pipelines.",
      "Collaborating with cross-functional teams including designers, product managers, and developers to deliver high-quality decentralized solutions.",
      "Implementing secure and efficient smart contracts, integrating NFT functionalities, and ensuring seamless interactions with blockchain networks.",
      "Managing CI/CD pipelines and employing DevOps practices for the continuous deployment of blockchain applications.",
    ],
  },
  {
    title: "Data Analytics",
    company_name: "Big Data / Analytics",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining data analytics solutions, utilizing technologies such as Python, R, SQL, and big data frameworks.",
      "Collaborating with cross-functional teams including data scientists, business analysts, and product managers to deliver data-driven insights.",
      "Ensuring data accuracy and integrity across multiple sources while optimizing for performance and scalability.",
      "Implementing data visualization, reporting tools, and statistical models to analyze trends and improve decision-making.",
    ],
  },
];


const projects = [
  {
    name: "Boardy",
    description:
      "Web-based platform that allows users to collabarate with other users and do tasks like notes creating, design with different shapes and also real time approch from both users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Atharsh07/Boardy-2024",
  },
];

export { services, technologies, experiences, projects };

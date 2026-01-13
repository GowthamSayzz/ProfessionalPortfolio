import companyImg from '../Images/company.jpg';
import internImg from '../Images/internship.png';
import intern1Img from '../Images/intern1.png';
import engImg from '../Images/EngLogo.png';
import reactIcon from '../Images/React.png';
import javascriptIcon from '../Images/JavaScript-logo.png';
import awsIcon from '../Images/aws-lo.png';
import sqlIcon from '../Images/SQL_Image.png';
import htmlIcon from '../Images/html-icon.png';
import cssIcon from '../Images/css-icon.png';
import bootstrapIcon from '../Images/bootstrap-logo.png';
import gitIcon from '../Images/git-icon.png';
import githubIcon from '../Images/github-logo.png';
import mongoDBIcon from '../Images/mongodb-icon.png';
import vscodeIcon from '../Images/vscode-icon.png';
import postmanIcon from '../Images/postman-icon.png';
import jiraIcon from '../Images/jira-icon.png';
import swaggerIcon from '../Images/Swagger-logo.png';
import nodejsIcon from '../Images/nodejs.png';
import dotnet from '../Images/dotnet.png';
import tailwindcss from '../Images/tailwindcss.png';
import project1 from '../Images/Shoporia NoBg Logo.png';
import portfolioImg from '../Images/portfolio.png';
import narayanaLogo from '../Images/narayana-logo.png';
import schoolLogo from '../Images/school.jpg';
import materialui from '../Images/Material-Ui.png';
import redux from '../Images/redux.png';
import typescript from '../Images/typescript.png';
import gpCompany from '../Images/GP.png';

export const Bio = {
  name: "Gowtham Kunjeti",
  roles: [
    "Frontend Developer",
    "REST API Developer",
    "SQL Developer",
    ".NET Developer",
    "Manual Tester",
    "Production Engineer"
  ],
  description: "Front End Software Developer with 4+ years of experience in building responsive and scalable POS systems in the retail domain. I am skilled in React JS, JavaScript, and front-end integration with APIs. Experienced in optimizing UI/UX, automating workflows with PowerShell and SQL, and delivering high performance web solutions. and committed to delivering high quality, performance driven solutions in software development.",
  resume: "https://drive.google.com/file/d/1volK1ArOSzzWzzSL3xFXxcD6qzejti4A/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/gk7731",
  github: 'https://github.com/GowthamSayzz',
  gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=gkunjeti@gmail.com"
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "ReactJS",
        image: reactIcon
      },
      {
        name: "JavaScript",
        image: javascriptIcon
      },
      {
        name: "Redux",
        image: redux,
      },
      {
        name: "TypeScript",
        image: typescript,
      },
      {
        name: "Bootstrap",
        image: bootstrapIcon,
      },
      {
        name: "Tailwind CSS",
        image: tailwindcss,
      },
      {
        name: "Material UI",
        image: materialui,
      },
      {
        name: "HTML",
        image: htmlIcon,
      },
      {
        name: "CSS",
        image: cssIcon,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "NodeJS",
        image: nodejsIcon,
      },
      {
        name: "SQL",
        image: sqlIcon
      },
      {
        name: "MongoDB",
        image: mongoDBIcon
      },
      {
        name: "AWS",
        image: awsIcon
      },
      {
        name: ".NET Core",
        image: dotnet
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image: gitIcon,
      },
      {
        name: "GitHub",
        image: githubIcon,
      },
      {
        name: "VS Code",
        image: vscodeIcon,
      },
      {
        name: "Postman",
        image: postmanIcon,
      },
      {
        name: "JIRA",
        image: jiraIcon
      },
      {
        name: "Swagger",
        image: swaggerIcon
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: gpCompany,
    role: "Associate Senior Software Engineer",
    company: "Global Payments",
    date: "Nov 2025 - Present",
    desc: "Developed multiple react based UI components of a financial product, addressed and resolved new development tasks and bugs.",
    skills: [
      "React JS",
      "Node Js",
      "TypeScript",
      "Material UI",
      "Redux",
      "Thunks",
      "GraphQL",
      "AWS"
    ],
    },
  {
    id: 0,
    img: companyImg,
    role: "Member Technical Staff",
    company: "NEC Corporation India Pvt Ltd.",
    date: "Aug 2021 - Nov 2025",
    desc: "Performed in-depth analysis of POS system issues, generated detailed reports, and provided actionable solutions to drive resolution. Utilized PowerShell scripting to automate key processes, minimizing downtime and addressing high-priority incidents effectively.",
    skills: [
      "React JS",
      "Node Js",
      "JavaScript",
      "AWS",
      "ASP.NET",
      "REST API",
      "jQuery",
      "C#",
      "SQL"
    ],
    },
  {
    id: 0,
    img: internImg,
    role: "Selenium Tester (Internship)",
    company: "The Sparks Foundation",
    date: "June 2021 - Jul 2021",
    desc: "Working & Testing on the frontend web application of sparks foundation website. and part of testing team to make the website defect free.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Python",
      "Selenium",
    ],
  },
  {
    id: 1,
    img: intern1Img,
    role: "Web Developer (Internship)",
    company: "Suthra Technologies Inc",
    date: "June 2019 - July 2019",
    desc: "Built an frontend website for a hospital and used frontend technologies and deployed.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Netlify"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: engImg,
    school: "SCSVMV University, Kanchipuram",
    date: "Aug 2017 - Apr 2021",
    grade: "8.6 CGPA",
    desc: "My coursework included Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, and Computer Networks, among other foundational subjects.",
    degree: "Bachelor of Engineering, Computer Science and Engineering",
  },
  {
    id: 1,
    img: narayanaLogo,
    school: "Narayana Juniour College",
    date: "Apr 2016 - Apr 2017",
    grade: "91.1%",
    desc: "I completed my class +2 high school education at Narayana Juniour College. I have taken courses like Maths, Physics, Chemistry.",
    degree: "BIEAP(XII), M.P.C",
  },
  {
    id: 2,
    img: schoolLogo,
    school: "Gurukul Vidyapeeth High School",
    date: "Apr 2014 - Apr 2015",
    grade: "8.7 CGPA",
    desc: "I completed my class 10 education at AVR High School, Kadapa, Andhra Pradesh.",
    degree: "SSE(X)",
  },
];

export const projects = [
  {
    id: 1,
    title: "Shoporia Ecommerce Website",
    date: "Sept 2025 - Present",
    description:
      "Designed and developed the shoporia ecommerce project. Leveraged key features such as task product inventory, estimation delivery time, and cart tracking to improve productivity and project outcomes. The plan is to deliver customer daily needs where they can find good products at lowest prices.",
    image: project1,
    tags: [
      "ReactJS",
      "API",
      "JavaScript",
      "Bootstrap",
      "CSS3",
      "HTML5",
    ],
    category: "Online Shopping Portal",
    github: "https://github.com/GowthamSayzz/shoporia",
    webapp: "https://shoporiadotin.netlify.app/",
  },
  {
    id: 2,
    title: "Professional Portfolio",
    date: "Aug 2025 - Aug 2025",
    description:
      "Developed a responsive professionall portfolio website. Implemented smooth animations and interactive UI components to enhance user experience. Optimized for performance and accessibility, ensuring cross-browser compatibility and mobile responsiveness.",
    image: portfolioImg,
    tags: ["ReactJS", "Material UI", "JavaScript", "HTML5", "CSS3"],
    category: "portfolio",
    github: "https://github.com/GowthamSayzz/ProfessionalPortfolio",
    webapp: "https://gowtham-kunjeti.netlify.app/",
  }
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];

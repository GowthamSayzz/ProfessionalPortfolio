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
//import postgresIcon from '../Images/postgresql-icon.png';
import nodejsIcon from '../Images/nodejs.png';
import dotnet from '../Images/dotnet.png';
import figmaIcon from '../Images/figma.png';
import project1 from '../Images/Shoporia NoBg Logo.png';
import portfolioImg from '../Images/portfolio.png';
import narayanaLogo from '../Images/narayana-logo.png';
import schoolLogo from '../Images/school.jpg';

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
  description: "Front End Software Developer with 4 years of experience in building responsive and scalable POS systems in the retail domain. I am skilled in React JS, JavaScript, and front-end integration with APIs. Experienced in optimizing UI/UX, automating workflows with PowerShell and SQL, and delivering high performance web solutions. and committed to delivering high quality, performance driven solutions in software development.",
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
        image:javascriptIcon
      },
      {
        name: "HTML",
        image: htmlIcon,
      },
      {
        name: "CSS",
        image: cssIcon,
      },
      {
        name: "Bootstrap",
        image: bootstrapIcon,
      },
      {
        name: "Figma",
        image: figmaIcon,
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
    /*
    {
      title: "Android",
      skills: [
        {
          name: "Java",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        },
        {
          name: "Kotlin",
          image:
            "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
        },
        {
          name: "XML",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
        },
        {
          name: "Android Studio",
          image:
            "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
        },
      ],
    },*/
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
    img: companyImg,
    role: "Member Technical Staff",
    company: "NEC Corporation India Pvt Ltd.",
    date: "Aug 2021 - Present",
    desc: "Performed in-depth analysis of POS system issues, generated detailed reports, and provided actionable solutions to drive resolution. Utilized PowerShell scripting to automate key processes, minimizing downtime and addressing high-priority incidents effectively. Managed software update rollouts for POS terminals, ensuring seamless deployment and prompt issue resolution.",
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
    //doc: "https://media.licdn.com/dms/image/D4D2DAQFlp60ZqHuaFQ/profile-treasury-image-shrink_1280_1280/0/1691180828512?e=1692381600&v=beta&t=mM5Y_NE5EPlQhez5FAN6NLVSKcO_Ojt_9Gq3mnFGkAQ",
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
    //doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
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
      /*{
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/girlScript.jpeg?alt=media&token=e656a621-cf3c-4230-bf0f-e74b4cec6035",
    role: "Open Source Contributor ",
    company: "GirlScript Summer of Code",
    date: "May 2023 - Present",
    desc: "Contributing to different open-source projects and learn from industry experts",
    doc: "https://media.licdn.com/dms/image/D4D22AQGzSpgFaR4hsQ/feedshare-shrink_800/0/1684079632872?e=1687996800&v=beta&t=i0xWn_k32Oj9SxKfc6rARSbOghXD9Ge6WyEb2p2vvrc",
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/gdsc.jpeg?alt=media&token=c162329c-efaa-4be8-a173-8d3f4c48ea70",
    role: "Android Developer",
    company: "DSC KIIT",
    date: "Nov2021 - Present",
    desc: "As an Android developer at the Google Developers Student Club (GDCS), I have had the opportunity to work on exciting projects and collaborate with talented developers who share my passion for technology. Through my involvement with GDCS, I have also had the opportunity to host and participate in numerous events, including hackathons, study jams, and workshops.",
    skills: [
      "Leadership",
      "Mobile Application Development",
      "Kotlin",
      "XML",
      "Figma",
    ],
  },
  {
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Rudraksha.jpeg?alt=media&token=8f83f41e-d0a1-486f-9c7f-dd4cd1d09e8d",
    role: "Android Developer Intern",
    company: "Rudraksha Welffare Foundation",
    date: "June 2021 - Oct 2021",
    desc: "As an Android Developer Intern at Rudraksha Welfare Foundation from June 2021 to October 2021, I gained valuable hands-on experience in application development. During my tenure, I contributed to the development of the application's back-end cloud functions using Firebase and implemented a front-end with the MVVM structure, which was designed using Figma. I also added a one-to-one video call feature, conceptualized new features, and optimized app performance. This internship helped me enhance my skills in Android development and gave me an opportunity to work in a collaborative team environment.",
    skills: [
      "Android",
      "Java",
      "Kotlin",
      "XML",
      "Node Js",
      "Cloud Firestore",
      "Firebase",
      "Figma",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Image%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245",
  }, */
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
      "Axios API",
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
      "Developed a responsive personal portfolio website using React.js, HTML5, CSS3, and JavaScript. Implemented smooth animations and interactive UI components to enhance user experience. Optimized for performance and accessibility, ensuring cross-browser compatibility and mobile responsiveness.",
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

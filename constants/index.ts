import { FaFacebook } from "react-icons/fa";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  { skill_name: "HTML", image: "html.png", width: 75, height: 85},
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 60, height: 65, className: "mt-2 " },
  { skill_name: "TypeScript", image: "ts.png", width: 60, height: 65, className: "mt-2 "   },
  { skill_name: "Java", image: "java.svg", width: 90, height: 100,},
];

export const FRONTEND_SKILL = [
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 70, height: 70 },
  { skill_name: "Redux", image: "redux.png", width: 70, height: 70, className: "mt-1 "  },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "Framer", image: "framer.png", width: 65, height: 70, className: "mt-2 "  },
  { skill_name: "Material UI", image: "mui.png", width: 70, height: 70, className: "mt-1 "  },
  { skill_name: "Bootstrap", image: "bootstrap.svg", width: 75, height: 75, className: "mt-1 "  },
];

export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "node.png", width: 70, height: 70 },
  { skill_name: "Express.js", image: "express.png", width: 70, height: 70, className: "mt-1 "  },
  { skill_name: "MongoDB", image: "mongodb.png", width: 42, height: 45,},
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70, className: "mt-2 "  }, // added
  { skill_name: "REST API", image: "api.png", width: 70, height: 70, className: "mt-2 "  },
  { skill_name: "JWT", image: "jwt.png", width: 100, height: 100, className: "mt-1 " },
  { skill_name: "Mongoose", image: "mongoose.svg", width: 90, height: 100, className: "mt-1 "  },
];


export const FULLSTACK_SKILL = [
  {
    skill_name: "API Integ..",
    image: "local-area-network.png",
    width: 80,
    height: 70,
  },
  {
    skill_name: "Authentication",
    image: "auth.png",
    width: 80,
    height: 70,
  },
  {
    skill_name: "Deployment",
    image: "upload.png",
    width: 80,
    height: 70,
  },
];


export const OTHER_SKILL = [
  { skill_name: "GIT", image: "icons8-git.svg", width: 80, height: 80 },
  { skill_name: "GitHub", image: "github-mark.svg", width: 70, height: 70 },
  { skill_name: "VS Code", image: "vscode.svg", width: 70, height: 70 },
  { skill_name: "Figma", image: "figma.png", width: 50, height: 50 },
  {
    skill_name: "Postman",
    image: "postman-logo-orange-stacked.svg",
    width: 90,
    height: 90,
    className: "mt-1 ",
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 90,
    height: 90,
    className: "mt-1 ",
  },
  {
    skill_name: "Razor Pay",
    image: "razorpay.svg",
    width: 120,
    height: 120,
    className: "mt-3",
  },
];

export const SOCIALS = [
  { name: "Instagram", icon: RxInstagramLogo, link: "https://instagram.com" },
  { name: "Facebook", icon: FaFacebook, link: "https://facebook.com" },
  { name: "Twitter", icon: RxTwitterLogo, link: "https://twitter.com" },
];

// constants/index.ts
export const PROJECTS = [
  {
    title: "Velora",
    image: "/projects/Velora.png",
    description:
      "A SaaS-based stock trading platform with modern UI, secure authentication, portfolio tracking, and responsive dashboards for a smooth trading experience.",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "Tailwind CSS",
    ],
    github: "https://github.com/Anirudh-Singh-26/Velora-frontend",
    webapp: "https://velora-frontend-seven.vercel.app/",
  },
  {
    title: "CrowdSpark",
    image: "/projects/CrowdSpark.png",
    description:
      "A SaaS-based crowdfunding platform featuring role-based authentication, an admin panel, Razorpay integration for donations, campaign creation, receipt PDF downloads, and real-time campaign management.",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "JWT Auth",
      "Tailwind CSS",
    ],
    github: "https://github.com/Anirudh-Singh-26/crowdspark-frontend",
    webapp: "https://crowdspark-frontend-gamma.vercel.app/",
  },
  {
    title: "Mavix",
    image: "/projects/MAVIX-–-AI-Assistant-for-the-Future.png",
    description:
      "A SaaS-based AI chatbot platform with a dedicated landing page, secure login system, admin panel, password reset, plan upgrade functionality, and searchable conversation history for enhanced productivity.",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "JWT Auth",
      "Tailwind CSS",
    ],
    github: "https://github.com/Anirudh-Singh-26/MAVIX_Frontend",
    webapp: "https://mavix-frontend.vercel.app/",
  },
  {
    title: "Speedline Auto Parts – The Future of Auto Parts",
    image: "/projects/GearXpert-find-your-Desired-auto-parts.png",
    description:
      "A responsive auto parts marketplace connecting buyers and sellers, with advanced search, filters, and a secure checkout system.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Anirudh-Singh-26/GearXpert-Client",
    webapp:
      "https://gear-xpert-client-anirudh-singh-rathores-projects.vercel.app/",
  },
];


export const FOOTER_DATA = [
  {
    title: "Community",
    data: [{ name: "GitHub", icon: RxGithubLogo, link: "https://github.com/Anirudh-Singh-26" }],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/anirudh-singh26/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:anirudhrathore2003@gmail.com",
      },
    ],
  },
];

export const NAV_LINKS = [
  { title: "About Me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Experience", link: "#journey" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
];


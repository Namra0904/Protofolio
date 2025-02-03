import { Mail, Phone, Linkedin, Github } from "lucide-react";

// Contact Details
export const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "namramevada@gmail.com",
      href: "mailto:namramevada@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8003895484",
      href: "tel:+918003895484",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "Connect with me",
      href: "https://www.linkedin.com/in/namra-mevada-5658092a0/",
    },
    {
      icon: Github,
      title: "GitHub",
      content: "View my work",
      href: "https://github.com/Namra0904",
    },
];

// Projects Details
export const projects = [
    {
      id: "chat-pulse",
      title: "Chat Pulse",
      description:
        "A real-time chat application built using the MERN stack, featuring secure JWT authentication, one-on-one and group chats, and real-time notifications. Integrated WebSocket (Socket.io) for instant messaging and updates, with a responsive user interface built in React.js.",
      technologies: ["Node.js", "React.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/Namra0904/Chat_Pulse",
    },
    {
      id: "network",
      title: "Network",
      description:
        "Developed a full-stack social networking application ’Network’ using Django and React.js, implementing JWT authentication. Enabled core features including post creation, liking, saving, commenting, profile updates, and user interaction through following/unfollowing. Integrated username search for user discovery and connection.",
      technologies: ["React.js", "Django", "Bootstrap"],
      githubUrl: "https://github.com/Namra0904/Network",
    },
    {
      id: "aarogyam",
      title: "Aarogyam",
      description:
        "Developed a comprehensive healthcare platform for appointment booking, medical record management, and medication tracking for diverse roles: Admin, Hospital, Doctor, and Patient.",
      technologies: ["Next.js", "Express.js", "PostgreSQL", "Bootstrap", "FastAPI", "TailwindCSS"],
      githubUrl: "https://github.com/Namra0904/Aarogyam",
    },
    {
      id: "resume-builder",
      title: "Resume Builder",
      description:
        "Designed and developed a responsive Resume Builder application using HTML, CSS, JavaScript, and Bootstrap. The app allows users to create customized resumes by selecting templates.",
      technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
      githubUrl: "https://github.com/Namra0904/Resume_Builder",
    },
];

// Skill Details
export const skills =[
    // Row 1
    [
      {
        name: "HTML",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736655139/culfw7sbt1mmeepicqpc.png",
      },
      {
        name: "CSS",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736655188/i9k60tvclpsqxbtpxymp.png",
      },
      {
        name: "JavaScript",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736655687/sonlgiupoceylzqqddla.png",
      },
      {
        name: "TypeScript",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736656018/klrv5sunvwgy5tbykjrl.png",
      },
      {
        name: "Node",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
    ],
    // Row 2
    [
      {
        name: "Django",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736654721/yns5uvuu6aab1qvbio7x.png",
      },
      {
        name: "React",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736655275/ddqlhmirz7orxinl24mc.png",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736656129/yvfgrk7rz5hhpz8rqfqq.png",
      },
    ],
    // Row 3
    [
      {
        name: "MongoDB",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736657873/kajfxnai6jpgifco0ppq.png",
      },
      {
        name: "PostgreSQL",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736658521/csnlptxlmhmtogpixwge.png",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Github",
        icon: "https://res.cloudinary.com/dffsbxpp4/image/upload/v1736658907/bmpb4voiissrpypbcrkq.png",
      },
    ],
];

export default { projects,skills,contactInfo }
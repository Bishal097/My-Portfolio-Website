import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    h2s,
    gdsc,
    docker,
    carrent,
    jobit,
    tripguide,
    eth,
    sol,
    cloud,
    aec,
    amir
  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Blockchain Developer",
      icon: mobile,
    },
    {
      title: "Competitive Programmer",
      icon: backend,
    },
    {
      title: "Cloud Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
   
    {
      name: "JavaScript",
      icon: javascript,
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
      name: "git",
      icon: git,
    },
   
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Etherium",
      icon: eth,
    },
    {
      name: "Solidity",
      icon: sol,
    },
    {
      name: "Cloud",
      icon: cloud,
    },

  ];
  
  const experiences = [
    {
      title: "Campus Lead",
      company_name: "Hack2Skill",
      icon: h2s,
      iconBg: "#E6DEDD",
      date: " December 2022 - November 2023",
      points: [
        "Led a community of over 1000 members, organizing and executing various hackathons, coding competitions, and skill-building workshops. ",
        "Collaborated with tech companies and startups to provide internship opportunities and real-world project experience.",
        "Introduced peer coding sessions and coding challenges to promote hands-on learning and practical application of skills.",
      ],
    },
    {
      title: "CP Lead",
      company_name: "GDSC",
      icon: gdsc,
      iconBg: "#E6DEDD",
      date: "Aug 2023 -  Jul 2024",
      points: [
        "Led GDSC club's competitive programming initiatives, organizing coding events and workshops ",
        "Increased club membership and engagement through innovative programming challenges.",
        "Coordinated with industry experts for guest lectures and mentoring sessions.",
        "Taught Data Structures and Algorithms to over 200 students, improving skills.",
      ],
    },
    {
      title: "Campus Lead",
      company_name: "AEC CodingClub",
      icon: aec,
      iconBg: "#E6DEDD",
      date: "Jan 2024 -  Present",
      points: [
        "Leading college coding club, organized successful events ",
        "Mentored members in competitive programming techniques.",
        "Facilitated peer learning and coding collaborations.",
        "Enhanced members' coding skills and problem-solving abilities.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "Displays remarkable dedication and passion, delivering work of the highest quality on every project.",
      name: "Sanamdeep Singh",
      designation: "SDE",
      company: "Algozenith",
      
    },
    {
      testimonial:
        "I've never met a developer who truly cares about his passion and dream  like Bishal does.",
      name: "Sudip De",
      designation: "Mentor",
      company: "AEC",
      
    },
    {
      testimonial:
        "An outstanding team player who collaborates seamlessly, bringing both technical expertise and a positive energy.",
      name: "Prayag Dwivedi",
      designation: "Community Manager",
      company: "Algozenith",
      
    },
  ];
  
  const projects = [
    {
      name: "Rubik's Cube Solver",
      description:
        "Rubik's Cube Solver-using Korf's IDA* Algorithm. Achieved a solving time of under 3 seconds for a Rubik's cube jumbled 8 times using BFS, DFS and IDFS algorithms",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      
    },
    {
      name: "BlogIt",
      description:
        "Developed a web based application which  serves as a full-text editor for writing content, including the ability to upload images for users",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Appwrite",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],  
      image: jobit,
      
    },
    {
      name: "White Board",
      description:
        "An interactive whiteboard built with React, offering refined functionalities and a seamless real-time collaborative experience for users.",
      tags: [
        {
          name: "reactjs",
          color: "green-text-gradient",
        },
       
      ],
      image: tripguide,
      
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };

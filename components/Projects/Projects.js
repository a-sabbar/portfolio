'use client'
import Image from "next/image"
import Link from "next/link"
import Project from "./Project";

export default function Projects({setScaleValue,cursorRef} = props) {

  const handleMouseEnter = (e) => {
    cursorRef.current.style.background = "transparent";
    cursorRef.current.style.border = "2px dashed #FD7818";
  }
  const handleMouseLeave = (e) => {
    cursorRef.current.style.background = "#FD7818";
    cursorRef.current.style.border = "none";
  }

  const Projects = [
    {
      title: "Ft_Trancendance",
      description: "Is an exciting project aiming to build an immersive website for the renowned Mighty Pong contest. The goal is a feature-rich hub for participants, spectators, and organizers.",
      Category: "Design , Development",
      year: "2023",
      image: [
          "/images/Project1.png",
          "/images/Project2.png",
          "/images/Project3.png",
      ],
      link: "/",
      technologies: ["NextJS", "TypeScript", "TailwindCSS", "Framer Motion", "NestJS", "Socket.io", "PostgreSQL", "Docker"],
      github: "/"
    },
    {
      title: "Webserv",
      description: "Project to create your own HTTP server, delving into web mechanisms and protocols. It's hands-on and offers insights into web server development and client communication.",
      Category: "Development",
      year: "2023",
      image: [
        "/images/Project1.png",
        "/images/Project2.png",
        "/images/Project3.png",
      ],
      link: "/",
      technologies: ["c++", "Http", "TCP", "Socket"],
      github: "/"
    },
    {
      title: "Inception",
      description: "Project enhances system administration skills using Docker. It involves virtualizing multiple Docker images within a personal virtual machine to explore containerization.",
      Category: "Development",
      year: "2022",
      image: [
        "/images/Project1.png",
        "/images/Project2.png",
        "/images/Project3.png",
      ],
      link: "/",
      technologies: ["Docker", "Virtual Machine", "Linux", "Shell"],
      github: "/"
    },
    {
      title: "Minishell",
      description: "Project to create a simple shell. It's a great opportunity to explore processes and file descriptors and to get acquainted with the Unix system API.",
      Category: "Development",
      year: "2022",
      image: [
          "/images/Project1.png",
          "/images/Project2.png",
          "/images/Project3.png",
      ],
      link: "/",
      technologies: ["C", "Shell", "Linux"],
      github: "/"
    },
    {
      title: "Philosophers",
      description: "Project to explore the basics of threading a process. It's a great opportunity to discover threads in C and to see how they work internally.",
      Category: "Development",
      year: "2021",
      image: [
          "/images/Project1.png",
          "/images/Project2.png",
          "/images/Project3.png",
      ],
      link: "/",
      technologies: ["C", "Algorithm", "Thread"],
      github: "/"
    },
    {
      title: "Push_swap",
      description: "Project to sort data on a stack, with a limited set of instructions, using the lowest possible number of actions. It's a great opportunity to discover sorting algorithms and to implement them.",
      Category: "Development",
      year: "2021",
      image: [
          "/images/Project1.png",
          "/images/Project2.png",
          "/images/Project3.png",
      ],
      link: "/",
      technologies: ["C", "Algorithm", "Sorting"],
      github: "/"
    },
  ]

  return (
    <div className=" w-full bg-black  relative flex flex-col gap-24 px-[10px] pb-[100px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center items-cente min-w-full text-[7em] poppins font-[600] text-[#FFF]"

      >
        <p className="z-[10] relative after:absolute after:top-8 after:right-1 after:w-[150px] after:h-[100px]  after:z-[-1] after:bg-[rgba(253,120,24,0.85)]" 
          onMouseEnter={() => setScaleValue(0)}
          onMouseLeave={() => setScaleValue(1)}
          >
          Projects.
        </p>
      </div>
      <div className="flex flex-col  z-0">
        <div className="w-full grid grid-cols-3 gap-24 border-t-[1px] border-white py-[5px] font-[500] text-[#b1b1b1] duration-1000   overflow-hidden  relative cursor-pointer">
            <p className="cursor-pointer z-[1]">Project</p>
            <p className="cursor-pointer z-[1]">Category</p>
            <p className="cursor-pointer z-[1]">Year</p>

        </div>
        {
          Projects.map((project, index) => {
            return (
              <Project key={index} data={project} setScaleValue={setScaleValue}/>
            )
          })
        }
      </div>
    </div>
  )
}
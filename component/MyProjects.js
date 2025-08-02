import React, {forwardRef} from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import FadeUpOnScroll from "./hooks/FadeUpOnScroll";
import ProjectsCard from "./ProjectsCard";

const MyProjects = forwardRef((props, ref) => {
  const projectsData = {
    project1: {
      url: "https://sunshinenobleschool.com",
      img: "/project/SSNS.png",
      projectName: "School Project",
      projectDescription: `I developed a clean, responsive website for Sun Shine Noble School,
            This project helped the school establish a professional online
            presence and improved accessibility for local families exploring
            admission options.`,
      projectIcons: [
        "/icons/html-5.svg",
        "/icons/CSS3.svg",
        "/icons/JavaScript.svg",
        "/icons/React.svg",
        "/icons/TailwindCss.svg",
        "/icons/google-maps.png",
        "/icons/Firebase.svg",
        "/icons/cashless-payment.png",
      ],
    },
    project2: {
      url: "https://myvartaapp.web.app",
      img: "/project/vartaApp.png",
      projectName: "Real Time Chat Application",
      projectDescription: `My Varta App is a real-time chat application designed for seamless and instant communication between users. Built with modern web technologies and a focus on simplicity and responsiveness.`,
      projectIcons: [
        "/icons/React.svg",
        "/icons/TailwindCss.svg",
        "/icons/Node.js.svg",
        "/icons/Express.svg",
        "/icons/Socket.io.svg",
        "/icons/MongoDB.svg",
        "/icons/Firebase.svg",
      ],
    },
    project3: {
      url: "https://martialrahulsharma.github.io/mytodolist/",
      img: "/project/todoApp.png",
      projectName: "My First Todo App",
      projectDescription: `A simple and responsive ToDo app built with React Vite and tailwind CSS. It allows users to add, delete, and manage daily tasks efficiently with a clean user interface.`,
      projectIcons: [
        "/icons/React.svg",
        "/icons/TailwindCss.svg",
        "/icons/VSCode.svg",
        "/icons/Github.svg",
        "/icons/Vite.js.svg",
      ],
    },
    project4: {
      url: "https://martialrahulsharma.github.io/Tiles-App/",
      img: "/project/tilesApp.png",
      projectName: "Tiles Measurement App",
      projectDescription: `It is a tiles measurement app. Basically when give length, width and height of wall and fulfill other areas then it gives finall result. You can try and check it`,
      projectIcons: [
        "/icons/React.svg",
        "/icons/TailwindCss.svg",
        "/icons/VSCode.svg",
        "/icons/Github.svg",
        "/icons/Vite.js.svg",
      ],
    },
  };

  return (
    <div ref={ref} className="mt-10">
      <FadeUpOnScroll>
        <div className="flex items-center gap-4 px-4">
          {/* Left Arrow */}
          <span className="text-[1.5em] text-fuchsia-700">
            <IoIosArrowBack />
          </span>

          {/* Title and Right Arrow */}
          <div className="flex items-center gap-2">
            <p className="text-[1.6em] font-extrabold">My Projects</p>
            <span className="text-[1.5em] text-fuchsia-700">
              <IoIosArrowForward />
            </span>
          </div>

          {/* Decorative Line */}
          <div className="flex-1 h-px bg-fuchsia-700" />
        </div>
      </FadeUpOnScroll>
      <div className="flex flex-col mt-10">
        <div className="flex flex-wrap box-border"> 
          {Object.entries(projectsData).map(([key, project]) => (
            <div className="flex flex-col md:flex-wrap lg:w-[32%] m-2 rounded-2xl overflow-hidden border">
              <ProjectsCard
                key={key}
                projectUrl={project.url}
                projectImage={project.img}
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                projectIcons={project.projectIcons}
              />
            </div>
          ))}
        </div>
        <div>
          <FadeUpOnScroll>
            <div className="flex justify-end">
              <span className="text-[1.5em] text-fuchsia-700 flex items-center">
                <IoIosArrowBack />
              </span>

              {/* Title and Right Arrow */}
              <div className="flex items-center">
                <span className="text-5xl text-fuchsia-700 font-extrabold">
                  /
                </span>
                <p className="text-[1.6em] font-extrabold">My Projects</p>
                <span className="text-[1.5em] text-fuchsia-700">
                  <IoIosArrowForward />
                </span>
              </div>
            </div>
          </FadeUpOnScroll>
        </div>
      </div>
    </div>
  );
});

export default MyProjects;

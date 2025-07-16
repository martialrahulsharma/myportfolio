import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsCard = ({projectUrl, projectImage, projectName, projectDescription, projectIcons}) => {
  return (
    <Link
      href={projectUrl}
      target="_blank"
      className="flex flex-col rounded-2xl"
    >
      <div className="h-48 w-full flex items-start justify-center overflow-hidden relative">
        <Image
          src={projectImage}
          alt="SSNS"
          width={0}
          height={0}
          className="absolute top-0 left-0 h-full w-full object-cover"
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col p-2 gap-4 bg-deepPurple">
        <div className="text-2xl">
          <p>{projectName}</p>
        </div>
        <div className="flex justify-center text-center">
          <p>
            {projectDescription}
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          {projectIcons.map((item, index) => (
            <Image
            key={index}
              src={item}
              width={40}
              height={40}
              alt="HTML 5"
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;

import React from "react";
import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import FadeUpOnScroll from "./hooks/FadeUpOnScroll";

const Banner = () => {
  return (
    <div className="flex">
    <div className="flex w-full flex-col-reverse mt-4 justify-evenly md:flex-row">
      <FadeUpOnScroll>
        <div className="flex flex-1/2 flex-col justify-center items-center text-center text-3xl md:flex md:items-start">
          <p>Hi! my name is,</p>
          <p className="font-bold text-8xl lg:text-[144px] p-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 bg-[length:400%_400%] animate-gradient">
            Rahul.
          </p>
          <p>I'm a Fullstack Web Developer.</p>
          <p>
            I create{" "}
            <span className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 bg-[length:400%_400%] animate-gradient">
              Exciting Stuff{" "}
            </span>
            on the Internet.
          </p>
          <div className="flex justify-evenly w-full mt-10">
            <Link href="https://www.instagram.com/martialrahul/">
              <SiInstagram size={40}/>
            </Link>
            <Link href="www.linkedin.com/in/martialrahul">
              <AiOutlineLinkedin size={40}/>
            </Link>
            <Link href="https://github.com/martialrahulsharma">
              <VscGithub size={40} />
            </Link>
          </div>
        </div>
      </FadeUpOnScroll>
      <div className="flex justify-center items-center self-center spring-jump">
        <div className="relative w-100 h-100">
          {/* Animated Circles */}
          <svg viewBox="0 0 200 200" className="absolute inset-0">
            <circle
              cx="100"
              cy="100"
              r="90"
              className="circle-style circle-1"
            />
            <circle
              cx="100"
              cy="100"
              r="75"
              className="circle-style circle-2"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              className="circle-style circle-3"
            />
            <circle
              cx="100"
              cy="100"
              r="45"
              className="circle-style circle-4"
            />
          </svg>

          {/* Center Image */}
          <img
            src="/avatar.jpg" // replace with your image path
            alt="avatar image"
            className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full object-cover translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;

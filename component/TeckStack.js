"use client";
import React from "react";
import FadeUpOnScroll from "./hooks/FadeUpOnScroll";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const TeckStack = () => {
  return (
    <>
      <div className="mt-20 gap-4 px-4">
        <FadeUpOnScroll>
          <div className="flex flex-row justify-center items-center text-center">
            <div className="flex-1 h-px border border-fuchsia-700"></div>
            <span className="text-[1.5em] text-fuchsia-700">
              <IoIosArrowBack />
            </span>
            <p className="text-[1.6em] font-extrabold pr-4">Teck Stack</p>
            <span className="text-5xl text-fuchsia-700 font-extrabold">/</span>
            <span className="text-[1.5em] text-fuchsia-700">
              <IoIosArrowForward />
            </span>
            <div className="flex-1 h-px border border-fuchsia-700"></div>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="flex flex-col lg:flex-row mt-10 gap-y-20">
            <div className="flex-1/2 flex-col overflow-hidden">
              <div className="flex flex-row justify-center items-center mb-10">
                <p className="text-[1.6em] font-extrabold pr-4">Front-End</p>
                <span className="text-[1.5em] text-fuchsia-700">( )</span>
              </div>
              <div className="flex flex-wrap justify-evenly items-center gap-4">
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/html-5.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">HTML</span>
                </Link>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/CSS3.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">CSS</span>
                </Link>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/JavaScript.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">JavaScript</span>
                </Link>
                <Link
                  href="https://react.dev"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/React.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">React.js</span>
                </Link>
                <Link
                  href="https://nextjs.org"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/Next.js.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">Next.js</span>
                </Link>
                <Link
                  href="https://tailwindcss.com"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/TailwindCss.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">Tailwind</span>
                </Link>
                <Link
                  href="https://redux.js.prg"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/Redux.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">Redux</span>
                </Link>
              </div>
            </div>
            <div className="flex-1/2 flex-col overflow-hidden lg:border-l-2 lg:border-fuchsia-700">
              <div className="flex flex-row justify-center items-center mb-10">
                <p className="text-[1.6em] font-extrabold pr-4">Back-End</p>
                <span className="text-[1.5em] text-fuchsia-700">( )</span>
              </div>
              <div className="flex flex-wrap justify-evenly items-center gap-4">
                
                <Link
                  href="https://nodejs.org"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/Node.js.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">Node.js</span>
                </Link>
                <Link
                  href="https://expressjs.com"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/Express.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">Express.js</span>
                </Link>
                <Link
                  href="https://mongodb.com"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/MongoDB.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">MongoDB</span>
                </Link>
                <Link
                  href="https://firebase.google.com"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/Firebase.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">Firebase</span>
                </Link>
              </div>
            </div>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="flex flex-col lg:flex-row mt-20 gap-y-20">
            <div className="flex-1/2 flex-col overflow-hidden">
              <div className="flex flex-row justify-center items-center mb-10">
                <p className="text-[1.6em] font-extrabold pr-4">Programming</p>
                <span className="text-[1.5em] text-fuchsia-700">( )</span>
              </div>
              <div className="flex flex-wrap justify-evenly items-center gap-4">
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/JavaScript.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">JavaScript</span>
                </Link>
                <Link
                  href="https://python.org"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/Python.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">Python</span>
                </Link>
                <Link
                  href="https://isocpp.org"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/C++.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">C++</span>
                </Link>
              </div>
            </div>
            <div className="flex-1/2 flex-col overflow-hidden lg:border-l-2 lg:border-fuchsia-700">
              <div className="flex flex-row justify-center items-center mb-10">
                <p className="text-[1.6em] font-extrabold pr-4">Teck & Tools</p>
                <span className="text-[1.5em] text-fuchsia-700">( )</span>
              </div>
              <div className="flex flex-wrap justify-evenly items-center gap-4">
                <Link
                  href="https://www.npmjs.com"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/NPM.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">NPM</span>
                </Link>
                <Link
                  href="https://git.scm.com"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/Git.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">Git</span>
                </Link>
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/GitHub.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">GitHub</span>
                </Link>
                <Link
                  href="https://vitejs.dev"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/Vite.js.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">Vite.Js</span>
                </Link>
                <Link
                  href="https://socket.io"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/Socket.io.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">Socket.io</span>
                </Link>
                <Link
                  href="https://code.visualstudio.com"
                  target="_blank"
                  className="h-24 w-24 rounded-xl flex flex-col items-center justify-center gap-1 bg-deepPurple  hover:scale-105 transition-transform shadow-md"
                >
                  <Image
                    src="/icons/VSCode.svg"
                    width={40}
                    height={40}
                    alt="HTML 5"
                  />
                  <span className="text-sm font-medium">VS Code</span>
                </Link>
              </div>
            </div>
          </div>
        </FadeUpOnScroll>
      </div>
    </>
  );
};

export default TeckStack;

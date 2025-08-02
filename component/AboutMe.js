import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import FadeUpOnScroll from "./hooks/FadeUpOnScroll";

const AboutMe = ({ refProp }) => {
  return (
    <section ref={refProp} className="mt-10">
      <FadeUpOnScroll>
        <div className="flex items-center mt-10 gap-4 px-4">
          {/* Left Arrow */}
          <span className="text-[1.5em] text-fuchsia-700">
            <IoIosArrowBack />
          </span>

          {/* Title and Right Arrow */}
          <div className="flex items-center gap-2">
            <p className="text-[1.6em] font-extrabold">About Me</p>
            <span className="text-[1.5em] text-fuchsia-700">
              <IoIosArrowForward />
            </span>
          </div>

          {/* Decorative Line */}
          <div className="flex-1 h-px bg-fuchsia-700" />
        </div>
      </FadeUpOnScroll>
      <div className="flex flex-col mt-10 gap-y-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-center items-center">
            <FadeUpOnScroll>
              <div className="flex justify-center w-[28em]">
                <img
                  src="/avatar.jpg"
                  alt="avatar image"
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>
            </FadeUpOnScroll>
          </div>
          <div className="hidden lg:flex mr-3 ml-3 border border-fuchsia-700"></div>
          <div>
            <FadeUpOnScroll>
              <div className="flex flex-col gap-3 text-[1.2em] mt-3 mb-3">
                <p className="text-[1.6em] font-extrabold">Hi there!</p>
                <p>
                  I'm Rahul, a{" "}
                  <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 bg-[length:400%_400%] animate-gradient">
                    Full Stack Web Developer
                  </span>{" "}
                  with a strong passion for crafting digital realms that
                  captivate and inspire.
                </p>
                <p>
                  I specialize in creating dynamic and interactive UI/UX
                  experience. I stay up to date with the latest tools and
                  techniques and worked on a wide range of projects, from
                  personal websites to large-scale applications, sharpening my
                  problem solving skills and fostering creativity.
                </p>
                <p>
                  If you're seeking a dedicated and passionate web developer,
                  I'm eager to collaborate with you. Let's bring your ideas to
                  life!
                </p>
              </div>
            </FadeUpOnScroll>
          </div>
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
                <p className="text-[1.6em] font-extrabold">About Me</p>
                <span className="text-[1.5em] text-fuchsia-700">
                  <IoIosArrowForward />
                </span>
              </div>
            </div>
          </FadeUpOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

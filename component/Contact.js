import React from "react";
import FadeUpOnScroll from "./hooks/FadeUpOnScroll";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { SiInstagram } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { MdSend } from "react-icons/md";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="mt-20 gap-4 px-4">
        <FadeUpOnScroll>
          <div className="flex flex-row justify-center items-center text-center">
            <div className="flex-1 h-px border border-fuchsia-700"></div>
            <span className="text-[1.5em] text-fuchsia-700">
              <IoIosArrowBack />
            </span>
            <p className="text-[1.6em] font-extrabold pr-4">Contact</p>
            <span className="text-5xl text-fuchsia-700 font-extrabold">/</span>
            <span className="text-[1.5em] text-fuchsia-700">
              <IoIosArrowForward />
            </span>
            <div className="flex-1 h-px border border-fuchsia-700"></div>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="flex flex-col gap-3 text-[1.2em] mt-3 mb-3 justify-center items-center text-center">
            <p>
              <span className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 bg-[length:400%_400%] animate-gradient">
                Let's collaborate!
              </span>{" "}
            </p>
            <p>
              Contact me to discuss your web development needs <br />
              or just to say hello. 😉
            </p>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
        <div className="flex flex-col md:flex-row justify-evenly">
            
          <div className="flex md:w-1/2 w-full justify-center items-center p-10">
            {/* Outer circle wrapper — NO overflow-hidden here */}
            <div className="relative flex justify-center items-center size-96 rounded-full border border-dashed">
              {/* Inner clipping wrapper for the image */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  src="https://img.freepik.com/premium-photo/smartphone-with-abstract-global-network_670147-39060.jpg"
                  alt="avatar image"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating absolute decorations — now they’re visible */}
              <div className="absolute left-40 -top-[35px] flex justify-center items-center size-18 rounded-full border border-dashed bg-black">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/martialrahul/"
                >
                  <SiInstagram size={40} />
                </Link>
              </div>
              <div className="absolute -left-2 top-15 flex justify-center items-center size-18 rounded-full border border-dashed bg-black">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/martialrahul/"
                >
                  <AiOutlineLinkedin size={40} />
                </Link>
              </div>
              <div className="absolute -right-2 top-15 flex justify-center items-center size-18 rounded-full border border-dashed bg-black">
                {" "}
                <Link
                  target="_blank"
                  href="https://github.com/martialrahulsharma"
                >
                  <VscGithub size={40} />
                </Link>
              </div>
            </div>
          </div>
          {/* contact me form start here */}
          <form className="flex-col md:w-1/2 w-full">
            <div className="flex flex-col p-6 bg-deepPurple text-xl gap-y-4 rounded-md">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-2 bg-black rounded-md mt-2"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full p-2 bg-black rounded-md mt-2"
                />
              </div>
              <div>
                <label>Message</label>
                <textarea
                  placeholder="Enter Your Message"
                  className="w-full p-2 bg-black rounded-md mt-2 resize-none h-28"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full lg:w-1/2 p-2 bg-black rounded-md flex items-center justify-center gap-2 text-white cursor-pointer"
                >
                  Submit <MdSend size={20} />
                </button>
              </div>
            </div>
          </form>
        </div>
        </FadeUpOnScroll>
      </div>
    </>
  );
};

export default Contact;

"use client"
import React, {useState} from "react";
import { GiTireIronCross } from "react-icons/gi";
import { VscListSelection } from "react-icons/vsc";
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <div className="sticky z-50 top-0 backdrop-blur-sm">
      <nav className="flex justify-between w-full p-4 items-center text-center md:flex-row">
        <div className="font-Satisfy font-bold text-3xl h-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 bg-[length:400%_400%] animate-gradient">
          Portfolio.
        </div>

        <div className="gap-x-6 hidden md:flex">
        <a className="hover:cursor-pointer">ABOUT</a>
        <a className="hover:cursor-pointer">SKILLS</a>
        <a className="hover:cursor-pointer">PROJECTS</a>
        <a className="hover:cursor-pointer">CONTACT</a>
      </div>
        <div>
          <div className="p-[4px] bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 bg-[length:400%_400%] animate-gradient hidden md:inline-block">
            <div className="flex items-center bg-black text-white px-10 py-2 gap-x-2 hover:cursor-pointer">
              <a>RESUME</a> <MdOutlineFileDownload size={22}/>
            </div>
          </div>
          <div className="md:hidden hover:cursor-pointer">
            <GiTireIronCross size={26} className="hidden"/>
            <VscListSelection size={32} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

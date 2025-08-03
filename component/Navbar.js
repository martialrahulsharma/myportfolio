"use client"
import React, {useState, useEffect} from "react";
import { GiTireIronCross } from "react-icons/gi";
import { VscListSelection } from "react-icons/vsc";
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = ({ scrollToAbout, scrollToTechStack, scrollToMyProjects, scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  if (isOpen) {
    setIsVisible(true); // show immediately on open
  } else {
    const timeout = setTimeout(() => {
      setIsVisible(false); // hide after animation finishes
    }, 600); // match your CSS transition duration

    return () => clearTimeout(timeout);
  }
}, [isOpen]);


  return (
    <div className="sticky z-50 top-0 backdrop-blur-sm">
      <nav className="relative flex justify-between w-full p-4 items-center text-center md:flex-row">
        <div className="font-Satisfy font-bold text-3xl h-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 bg-[length:400%_400%] animate-gradient">
          Portfolio.
        </div>

        <div className="gap-x-6 hidden md:flex">
        <a className="hover:cursor-pointer" onClick={scrollToAbout}>ABOUT</a>
        <a className="hover:cursor-pointer" onClick={scrollToTechStack}>SKILLS</a>
        <a className="hover:cursor-pointer" onClick={scrollToMyProjects}>PROJECTS</a>
        <a className="hover:cursor-pointer" onClick={scrollToContact}>CONTACT</a>
      </div>

      {isVisible && (
        <div className={`md:hidden absolute top-18 right-0 flex flex-col items-center justify-center gap-y-6 bg-black w-full text-xl ${isOpen ? "dropdown-open" : "dropdown-close"}`}>
          <a className="hover:cursor-pointer" onClick={()=>{setIsOpen(false); scrollToAbout();}}>ABOUT</a>
          <a className="hover:cursor-pointer" onClick={()=>{setIsOpen(false);  scrollToTechStack();}}>SKILLS</a>
          <a className="hover:cursor-pointer" onClick={()=>{setIsOpen(false); scrollToMyProjects();}}>PROJECTS</a>
          <a className="hover:cursor-pointer" onClick={()=>{setIsOpen(false); scrollToContact();}}>CONTACT</a>
          <div className="inline-flex items-center gap-2">
  <a href="/CV/Rahul_Resume.pdf" download={true} className="inline-block">RESUME</a>
  <MdOutlineFileDownload size={22} />
</div>

        </div>)

}
        <div>
          <div className="p-[4px] bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 bg-[length:400%_400%] animate-gradient hidden md:inline-block">
            <div className="flex items-center bg-black text-white px-10 py-2 gap-x-2 hover:cursor-pointer">
              <a href="/CV/Rahul_Resume.pdf" download={true}>RESUME</a> <MdOutlineFileDownload size={22}/>
            </div> 
          </div>
          <div className="md:hidden hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)} >
            {isOpen ? (<GiTireIronCross size={32} />) : (<VscListSelection size={32} />)}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

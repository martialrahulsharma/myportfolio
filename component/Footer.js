import React from "react";
import FadeUpOnScroll from "./hooks/FadeUpOnScroll";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <FadeUpOnScroll>
          <div className="flex flex-col justify-center items-center mb-10">
            <div>
              <p className="font-bold text-8xl lg:text-[144px] p-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 bg-[length:400%_400%] animate-gradient">
                R
              </p>
            </div>
            <div>
              Rahul Sharma | Portfolio
            </div>
            <div></div>
            <div>
              © Copyright 2023-2025 Rahul Sharma
            </div>
          </div>
        </FadeUpOnScroll>
      </div>
    </>
  );
};

export default Footer;

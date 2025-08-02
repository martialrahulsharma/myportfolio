"use client";
import React, { useRef } from "react";
import AboutMe from "@/component/AboutMe";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar";
import TeckStack from "@/component/TeckStack";
import MyProjects from "@/component/MyProjects";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";

export default function Home() {
  const aboutMeRef = useRef(null);
  const myProjectsRef = useRef(null);
  const techStackRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="mx-5">
      <Navbar 
      scrollToAbout = {()=>scrollToSection(aboutMeRef)}
      scrollToTechStack = {()=>scrollToSection(techStackRef)}
      scrollToMyProjects = {()=>scrollToSection(myProjectsRef)}
      scrollToContact = {()=>scrollToSection(contactRef)}
      />
      <Banner />
      <AboutMe refProp={aboutMeRef} />
      <TeckStack refProp={techStackRef} />
      <MyProjects refProp={myProjectsRef} />
      <Contact refProp={contactRef} />
      <Footer />
    </div>
  );
}

"use client";
import AboutMe from "@/component/AboutMe";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar";
import TeckStack from "@/component/TeckStack";
import MyProjects from "@/component/MyProjects";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <div className="mx-5">
      <Navbar />
      <Banner />
      <AboutMe />
      <TeckStack />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

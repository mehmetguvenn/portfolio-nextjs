import About from "@/components/About/About";
import Arcihive from "@/components/Arcihive/Arcihive";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col bg-mycolor-400">
    <Navbar />



    <div className="container mt-24 md:mt-36 px-12 py-4">
      
      <Hero/>
      <Arcihive/>
      <About/>
      <Projects/>
      <Contact/>
    </div>

    <Footer/>
    </main>

    
    </>
  );
}

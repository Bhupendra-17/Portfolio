import React from 'react';
import { motion } from "framer-motion";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Container';
import Footer from './Footer';

// Sections
import Hero from './components/HomeSections/Hero';
import About from './components/HomeSections/About';
import Experience from './components/HomeSections/Experience';
import Services from './components/HomeSections/Services';
import Skills from './components/HomeSections/Skills';
import ProjectsHighlight from './components/HomeSections/ProjectsHighlight';
import Achievements from './components/HomeSections/Achievements';
import Education from './components/HomeSections/Education';
import Contact from './components/HomeSections/Contact';

function Home() {
  return (
    <div className="bg-gray-950 min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ---- Global ambient background ---- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-right glow */}
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-cyan-900/8 rounded-full blur-[160px]" />
        {/* Bottom-left glow */}
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-sky-900/8 rounded-full blur-[160px]" />
        {/* Center subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-900/4 rounded-full blur-[120px]" />
      </div>

      {/* ---- Navbar ---- */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-50"
      >
        <Navbar />
      </motion.div>

      {/* ---- Layout: Sidebar + Main ---- */}
      <div className="relative z-10">
        {/* Floating Sidebar (unchanged) */}
        <Sidebar />

        {/* Main scroll content */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Services />
          <Skills />
          <ProjectsHighlight />
          <Achievements />
          <Education />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Card';
import Sidebar from './components/Sidebar/Container';
import Experience from './components/Experience';
import Footer from './Footer';
import Giphy from '/giphy.webp';
import Awards from '/awards.png';

const skillBars = (skills) =>
  skills.map((skill, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-6 hover:bg-gray-800/70 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <div className="relative z-10">
        <h3 className="text-lg sm:text-md md:text-md font-bold text-white mb-2">{skill.name}</h3>
        {skill.level && (
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.2 }}
              className="bg-gradient-to-r from-sky-400 to-cyan-300 h-2 rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  ));


function Home() {
  const [isVisible, setIsVisible] = useState({});

  const skills = [
    { name: "React.js", level: 65 },
    { name: "Tailwind CSS", level: 80 },
    { name: "FastAPI", level: 55 },
    { name: "MySQL", level: 60 },
    { name: "Node.js", level: 45 },
    { name: "Express.js", level: 40 },
    { name: "Git", level: 60 },
    { name: "GitHub", level: 65 },
    { name: "Firebase", level: 30 },
    { name: "HTML", level: 85 },
    { name: "CSS", level: 70 },
  ];

  const languages = [
    { name: "C++", level: 80 },
    { name: "Java", level: 40 },
    { name: "Python", level: 30 }
  ];

  const otherskills = [
    { name: "Problem Solving" },
    { name: "Debugging" },
    { name: "Team Working" },
    { name: "Content Writing" },
  ];

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-sky-900 min-h-screen overflow-x-hidden">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-1/4">
            <Sidebar />
          </aside>

          <main className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/60 to-sky-900/40 shadow-xl rounded-2xl p-5 backdrop-blur-md hover:shadow-cyan-500/40 transition-shadow duration-500"
              >
                <Container />
              </motion.div>

              <div
                className="relative group overflow-hidden rounded-2xl"
                data-animate
                id="video-container"
              >
                <video
                  src="/hey.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Section title="Technical Expertise">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FloatingImage src={Giphy} />
          <SkillGroup title="Programming Languages">{skillBars(languages)}</SkillGroup>
          <SkillGroup title="Development Skills">{skillBars(skills)}</SkillGroup>
          <SkillGroup title="Other Skills">
            {otherskills.map((skill, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-5 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-md md:text-md font-bold text-white mb-2">{skill.name}</h3>
                </div>
              </div>
            ))}
          </SkillGroup>
        </motion.div>
      </Section>

      {/* Awards Section */}
      <Section title="Awards">
        <motion.img
          src={Awards}
          alt="award"
          initial={{
            scale: 0.6,
            rotate: -10,
            opacity: 0,
            filter: "blur(8px)",
          }}
          whileInView={{
            scale: 1,
            rotate: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 60,
          }}
          className="md:h-40 lg:h-40 shadow-2xl mx-auto rounded-xl border-2 border-cyan-300 hover:scale-105 transition-transform duration-300 hover:shadow-cyan-400"
        />
      </Section>
      <Footer />

      {/* Custom Animation CSS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

// Reusable Components
const Section = ({ title, children }) => (
  <section className="py-20 bg-gradient-to-b from-gray-900 to-sky-900">
    <div className="container mx-auto px-10">
      <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const ExperienceItem = ({ company, role, duration, description }) => (
  <div className="my-5 group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-5 hover:bg-gray-800/70 transition-all duration-300">
    <div className="relative z-10 text-white">
      <h3 className="text-xl font-bold mb-1">{company}</h3>
      <p className="text-md text-sky-300 mb-1">{role}</p>
      <p className="text-md text-gray-400 mb-3">{duration}</p>
      {description && (
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);


const SkillGroup = ({ title, children }) => (
  <>
    <h2 className="text-xl font-black m-5 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
      {title}
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">{children}</div>
  </>
);

const FloatingImage = ({ src }) => (
  <div className="relative text-center mb-6">
    <div className="inline-block animate-float">
      <img src={src} alt="Floating Icon" className="h-16 w-16 mx-auto rounded-md" />
    </div>
  </div>
);

export default Home;

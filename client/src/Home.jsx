import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Card';
import Sidebar from './components/Sidebar/Container';
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
            <div
              className="bg-gradient-to-r from-sky-400 to-cyan-300 h-2 rounded-full transition-all duration-700"
              style={{ width: `${skill.level}%` }}
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
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-1/4">
            <Sidebar />
          </aside>

          <main className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
              <div
                id="card1"
                data-animate
                className={`transition-all duration-[2000ms] transform ${
                  isVisible.card1 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              >
                <Container />
              </div>

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
      <Section title="Experience">
        <ExperienceItem
          company="Thought Applied Creations"
          role="Web Developer Trainee"
          duration="July-2024 to August-2024"
        />
        <ExperienceItem
          company="Newsletter Team, SSIPMT Raipur"
          role="Content Writer"
          duration="October-2023 to July-2024"
        />
      </Section>

      {/* Skills Section */}
      <Section title="Technical Expertise">
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
      </Section>

      {/* Awards Section */}
      <Section title="Awards">
        <div
          id="card1"
          data-animate
          className={`transition-all duration-[5000ms] transform ${
            isVisible.card1 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <img
            src={Awards}
            alt="award"
            className="md:h-40 lg:h-40 shadow-lg mx-auto rounded-md"
          />
        </div>
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

const ExperienceItem = ({ company, role, duration }) => (
  <div className="my-5 group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-5 hover:bg-gray-800/70 transition-all duration-300">
    <div className="relative z-10 text-white">
      <h3 className="text-xl font-bold mb-2">{company}</h3>
      <p>{role}</p>
      <p>{duration}</p>
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

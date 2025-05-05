import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Card';
import Sidebar from './components/Sidebar/Container';
// import Skills from './Skills';
import Footer from './Footer';
import Giphy from '/giphy.webp';

function Home() {
  const [animate, setAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const skills = [
    { name: "React.js", level: 70 },
    { name: "Tailwind CSS", level: 90 },
    { name: "FastAPI", level: 65 },
    { name: "MySQL", level: 70 },
    { name: "Node.js", level: 50 },
    { name: "Express.js", level: 45 },
    { name: "Git", level: 60 },
    { name: "GitHub", level: 65 },    
    { name: "Firebase", level: 50 }
  ];
  const languages = [
    { name: "C++", level: 85 },
    { name: "Java", level: 50 },
    { name: "Python", level: 30 }
  ];
  const otherskills = [
    { name: "Problem Solving" },
    { name: "Debugging" },
    { name: "Team Working" },
    { name: "Content Writing" }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    setAnimate(true);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-sky-900 min-h-screen overflow-x-hidden">
      <Navbar />
 
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-1/4">
            <Sidebar />
          </aside>

          <main className="">
            {/* Projects Grid with Hover Effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div
                id="card1"
                data-animate
                className={`transform transition-all duration-[1500ms] ${isVisible.card1 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
              >
                <Container />
              </div>

              {/* Video Section with Animation */}
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
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </main>

        </div>
      </div>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-sky-900">
        <div className="container mx-auto px-10">
          <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
            Experience
          </h2>
      
          <div className="flex flex-col gap-4">
              <div
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-5 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="relative z-10 text-white">
                  <h3 className="text-xl font-bold  mb-2">Thought Applied Creations</h3>
                  <p> Web Developer Trainee</p>
                  <p>July-2024  to  August-2024</p>
                </div>
              </div>
              <div
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-5 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="relative z-10 text-white">
                  <h3 className="text-xl font-bold  mb-2">Newsletter Team, SSIPMT Raipur</h3>
                  <p> Content Writer</p>
                  <p>Sept-2023  to  August-2024</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-sky-900">
        <div className="container mx-auto px-10">
          <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
            Technical Expertise
          </h2>
          {/* floating Image */}
          <div className="relative text-center">
            <div className="inline-block animate-float">
              <img
                src={Giphy}
                alt="Skills decoration"
                className="h-16 w-16 mx-auto rounded-md"
              />
            </div>
          </div>

          {/* Skills Grid with Animated Cards */}
          <h2 className="text-xl font-black m-5 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
            Programming Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((skill, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-6 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-sky-400 to-cyan-300 h-2 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Development skills */}
          <h2 className="text-xl font-black m-5 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
            Development Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-6 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-sky-400 to-cyan-300 h-2 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* other skills */}
          <h2 className="text-xl font-black m-5 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
            Other Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {otherskills.map((skill, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-5 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />

      {/* Custom CSS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
}

export default Home;

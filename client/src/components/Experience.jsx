import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "VidyutSense AI",
    role: "Full Stack Developer",
    duration: "Oct 2023 – July 2024",
    description: [
      "Developed full-stack features using React, FastAPI, MongoDB.",
      "Integrated AI models for electrical asset monitoring.",
      "Built secure JWT authentication flows.",
    ],
  },
  {
    company: "Thought Applied Creations",
    role: "Web Developer Trainee",
    duration: "July 2024 – Aug 2024",
    description: [
      "Built UI components using React and Tailwind.",
      "Optimized landing pages for SEO and performance.",
    ],
  },
  {
    company: "Newsletter Team, SSIPMT Raipur",
    role: "Content Writer",
    duration: "Oct 2023 – July 2024",
    description: [
      "Wrote technical content for monthly newsletter.",
      "Collaborated with editorial and design teams.",
    ],
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 1.6,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

const ExperienceSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + experiences.length) % experiences.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const { company, role, duration, description } = experiences[index];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-sky-950">
      <div className="container mx-auto px-6 text-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 drop-shadow-[0_2px_12px_rgba(56,189,248,0.4)]">
          Experience
        </h2>

        <div className="flex justify-center items-center gap-6">
          {/* Optional manual controls */}
          <button
            onClick={() => paginate(-1)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition hidden md:block"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="relative w-full max-w-xl h-full min-h-[250px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/80 p-6 shadow-2xl backdrop-blur-md border border-cyan-400/10 hover:border-cyan-400/40 transition-all duration-700 hover:shadow-cyan-500/20 hover:scale-[1.02]"
              >
                <h3 className="text-2xl font-semibold mb-1 text-cyan-300">{company}</h3>
                <p className="text-sky-400 mb-1">{role}</p>
                <p className="text-gray-400 mb-3">{duration}</p>
                <ul className="list-disc pl-4 space-y-1 text-sm text-gray-300">
                  {description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Optional manual controls */}
          <button
            onClick={() => paginate(1)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition hidden md:block"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSlider;

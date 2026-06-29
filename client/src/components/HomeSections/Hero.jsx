import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Code2, Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const badges = [
  { icon: <Code2 className="w-3.5 h-3.5" />, text: "Competitive Coder", color: "from-orange-500/20 to-orange-400/10 border-orange-500/30 text-orange-300" },
  { icon: <Trophy className="w-3.5 h-3.5" />, text: "Top 50 – Vultr Hackathon", color: "from-yellow-500/20 to-yellow-400/10 border-yellow-500/30 text-yellow-300" },
  { icon: <Star className="w-3.5 h-3.5" />, text: "HackerRank 5★ C++", color: "from-emerald-500/20 to-emerald-400/10 border-emerald-500/30 text-emerald-300" },
  { icon: <Code2 className="w-3.5 h-3.5" />, text: "1000+ Problems Solved", color: "from-cyan-500/20 to-cyan-400/10 border-cyan-500/30 text-cyan-300" },
];

const roles = ["Full Stack Developer", "Software Engineer", "Problem Solver", "React Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timer;

    if (!isDeleting && displayed.length < fullText.length) {
      timer = setTimeout(() => setDisplayed(fullText.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(fullText.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">

      {/* ---- Background layers ---- */}
      <div className="absolute inset-0 bg-dot-pattern opacity-100 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-[130px] pointer-events-none -translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-600/8 rounded-full blur-[130px] pointer-events-none translate-x-1/3 translate-y-1/4" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 xl:px-24 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

        {/* ---- Text Content ---- */}
        <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0">

          {/* Name + Role */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <p className="text-cyan-400 font-medium text-lg tracking-widest uppercase font-mono">
              Hi there 👋 — I'm
            </p>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="shimmer-text">Bhupendra</span>
              <br />
              <span className="text-white">Dewangan</span>
            </h1>
            <div className="flex items-center gap-3 justify-center lg:justify-start mt-3 h-10">
              <span className="text-2xl md:text-3xl font-bold text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {displayed}
              </span>
              <span className="text-2xl text-cyan-400 font-bold cursor-blink">|</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gray-400 text-lg leading-relaxed max-w-xl"
          >
            Passionate about building scalable, impactful web applications — turning complex problems into elegant, user-centric solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link
              to="/project"
              className="group relative flex items-center gap-2 px-7 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://drive.google.com/file/d/1ro_ckWcbjgFtqmPOeu1OswoDpjbUy7Eg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700 hover:border-gray-600 text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-7 py-3.5 bg-transparent hover:bg-gray-800/60 border border-gray-700 hover:border-cyan-500/60 text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              Contact
            </a>
          </motion.div>

          {/* Achievement Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="space-y-3"
          >
            <p className="text-xs font-medium text-gray-500 uppercase tracking-widest text-center lg:text-left font-mono">Highlights</p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {badges.map((badge, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.07, duration: 0.3 }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r border backdrop-blur-sm transition-all duration-200 hover:scale-105 cursor-default ${badge.color}`}
                >
                  {badge.icon}
                  {badge.text}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ---- Profile Visual ---- */}
        <motion.div
          className="flex-shrink-0 flex flex-col items-center gap-10"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Profile image with orbiting ring */}
          <div className="relative flex items-center justify-center">
            {/* Outer slow-spinning ring */}
            <div className="absolute w-[320px] h-[320px] md:w-[370px] md:h-[370px] rounded-full border border-dashed border-cyan-500/20 spin-slow" />
            <div className="absolute w-[290px] h-[290px] md:w-[340px] md:h-[340px] rounded-full border border-cyan-500/10" />

            {/* Glow */}
            <div className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* Image container */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 ring-cyan-500/30 shadow-2xl shadow-cyan-500/10 float">
              <img
                src="/Photo1.jpg"
                alt="Bhupendra Dewangan"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #0f172a, #164e63)';
                }}
              />
            </div>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-8">
            {[
              { value: "1478", label: "LeetCode", color: "text-orange-400" },
              { value: "1594", label: "GFG", color: "text-green-400" },
              { value: "5★", label: "HackerRank", color: "text-yellow-400" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className={`text-xl font-black ${stat.color}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{stat.value}</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;

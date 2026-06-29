import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Botivate Services LLP",
    location: "Raipur • Onsite",
    period: "Jan 2026 – Present",
    current: true,
    points: [
      "Developed and maintained multiple client web applications.",
      "Built features using React.js, Node.js, and Supabase.",
      "Collaborated with clients and cross-functional teams.",
      "Improved application performance and user experience."
    ],
    tech: ["React.js", "Node.js", "Supabase"]
  },
  {
    title: "Full Stack Developer Intern",
    company: "Primo Fiscal",
    location: "Remote",
    period: "June 2025 – Aug 2025",
    current: false,
    points: [
      "Worked on backend authentication workflows.",
      "Used Firebase Authentication for secure user management.",
      "Developed backend services using Python (FastAPI).",
      "Worked with AWS Lambda and AWS AppSync."
    ],
    tech: ["Firebase", "Python", "AWS Lambda", "AppSync"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 xl:px-24 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">02 — Experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-sky-500/30 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-6 -translate-y-1/2 items-center justify-center">
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${exp.current ? 'border-cyan-500 bg-cyan-500/10 shadow-[0_0_16px_rgba(6,182,212,0.4)]' : 'border-gray-700 bg-gray-800'}`}>
                    <Briefcase className={`w-5 h-5 ${exp.current ? 'text-cyan-400' : 'text-gray-500'}`} />
                  </div>
                </div>

                <div className={`group relative bg-gray-800/35 border rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/50 ${exp.current ? 'border-cyan-500/30 hover:border-cyan-500/50' : 'border-gray-700/40 hover:border-gray-600/60'}`}>
                  {exp.current && (
                    <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/15 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.9)]"></span>
                      Current
                    </span>
                  )}

                  <div className="mb-5">
                    <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {exp.title}
                    </h3>
                    <p className="text-cyan-300 font-semibold text-lg mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{exp.location}</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                        <span className="text-cyan-500 shrink-0 mt-1">▹</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-900/70 border border-gray-700 text-cyan-300 text-xs font-mono rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

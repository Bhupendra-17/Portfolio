import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = {
  "Languages": {
    color: "cyan",
    skills: ["C++", "Python", "SQL", "JavaScript"]
  },
  "Frontend": {
    color: "sky",
    skills: ["HTML/CSS", "React.js", "Next.js", "Tailwind CSS"]
  },
  "Backend": {
    color: "indigo",
    skills: ["Node.js", "Express.js", "FastAPI", "RESTful APIs"]
  },
  "Databases": {
    color: "emerald",
    skills: ["MongoDB", "MySQL", "Supabase", "PostgreSQL"]
  },
  "Tools": {
    color: "violet",
    skills: ["Git & GitHub", "Firebase", "Cloudinary", "AWS (Lambda)"]
  },
  "Core CS": {
    color: "rose",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS"]
  }
};

const colorMap = {
  cyan: { tab: "border-cyan-500 text-cyan-400", bg: "bg-cyan-500/10", gradient: "from-cyan-500/20 to-cyan-400/5 hover:border-cyan-500 hover:shadow-cyan-500/20" },
  sky: { tab: "border-sky-500 text-sky-400", bg: "bg-sky-500/10", gradient: "from-sky-500/20 to-sky-400/5 hover:border-sky-500 hover:shadow-sky-500/20" },
  indigo: { tab: "border-indigo-500 text-indigo-400", bg: "bg-indigo-500/10", gradient: "from-indigo-500/20 to-indigo-400/5 hover:border-indigo-500 hover:shadow-indigo-500/20" },
  emerald: { tab: "border-emerald-500 text-emerald-400", bg: "bg-emerald-500/10", gradient: "from-emerald-500/20 to-emerald-400/5 hover:border-emerald-500 hover:shadow-emerald-500/20" },
  violet: { tab: "border-violet-500 text-violet-400", bg: "bg-violet-500/10", gradient: "from-violet-500/20 to-violet-400/5 hover:border-violet-500 hover:shadow-violet-500/20" },
  rose: { tab: "border-rose-500 text-rose-400", bg: "bg-rose-500/10", gradient: "from-rose-500/20 to-rose-400/5 hover:border-rose-500 hover:shadow-rose-500/20" }
};

const Skills = () => {
  const categories = Object.entries(skillsData);
  const [active, setActive] = useState(categories[0][0]);
  const activeData = skillsData[active];
  const colors = colorMap[activeData.color];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">04 — Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Tab list */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {categories.map(([cat, data]) => {
                const isActive = cat === active;
                const c = colorMap[data.color];
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`flex items-center justify-center lg:justify-start px-6 py-4 rounded-xl border text-center lg:text-left transition-all duration-250 ${
                      isActive
                        ? `${c.bg} ${c.tab} border-current font-bold`
                        : 'bg-gray-800/30 border-gray-700/50 text-gray-400 hover:bg-gray-800/50 hover:text-gray-200 font-medium'
                    }`}
                  >
                    <span className="text-sm md:text-base">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skill cards panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/30 border border-gray-700/40 rounded-2xl p-8 backdrop-blur-sm min-h-full"
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {active}
                  </h3>
                  <div className={`h-1 w-16 mt-4 rounded-full bg-gradient-to-r ${colors.tab.split(' ')[0].replace('border-', 'from-')} to-transparent`} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeData.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.05, type: "spring", stiffness: 200 }}
                      className={`group px-6 py-5 rounded-xl bg-gradient-to-br border border-gray-700/60 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 cursor-default ${colors.gradient}`}
                    >
                      <span className="text-gray-100 font-semibold text-lg tracking-wide group-hover:text-white transition-colors">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* All skills badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 bg-gray-800/20 border border-gray-700/30 rounded-2xl p-6 backdrop-blur-sm"
        >
          <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-4">Tech Arsenal</p>
          <div className="flex flex-wrap gap-2.5">
            {Object.values(skillsData).flatMap(d => d.skills).map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-gray-900/60 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-gray-800 transition-all cursor-default font-mono shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

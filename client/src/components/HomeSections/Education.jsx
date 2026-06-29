import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    emoji: "🎓",
    degree: "B.Tech – Computer Science & Engineering",
    institution: "Shri Shankaracharya Institute of Professional Management & Technology",
    period: "2022 – 2026",
    score: "CGPA: 8.6",
    scoreColor: "text-cyan-400",
    tags: ["Data Structures", "Algorithms", "Software Engineering", "DBMS"]
  },
  {
    emoji: "🏫",
    degree: "Class 12 – CBSE",
    institution: "Jawahar Navodaya Vidyalaya",
    period: "2021 – 2022",
    score: "85.6%",
    scoreColor: "text-sky-400",
    tags: ["PCM", "Computer Science"]
  },
  {
    emoji: "📚",
    degree: "Class 10 – CBSE",
    institution: "Jawahar Navodaya Vidyalaya",
    period: "2019 – 2020",
    score: "87.4%",
    scoreColor: "text-indigo-400",
    tags: []
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 xl:px-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">07 — Education</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </motion.div>

        <div className="space-y-5">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-gray-800/30 border border-gray-700/40 rounded-2xl p-6 md:p-7 backdrop-blur-sm hover:bg-gray-800/50 hover:border-gray-600/60 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-5">
                  <div className="text-3xl w-12 h-12 flex items-center justify-center bg-gray-900/60 rounded-xl border border-gray-700 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {edu.emoji}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="font-mono">{edu.period}</span>
                    </div>
                    {edu.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.tags.map((tag, i) => (
                          <span key={i} className="px-2.5 py-1 bg-gray-900/60 border border-gray-700 text-gray-400 text-xs font-mono rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="shrink-0">
                  <div className="flex items-center gap-2 px-5 py-2.5 bg-gray-900/70 border border-gray-700 rounded-xl">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className={`font-black text-lg ${edu.scoreColor}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

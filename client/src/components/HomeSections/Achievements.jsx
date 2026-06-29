import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Code2, Medal, Zap } from 'lucide-react';

const achievementGroups = [
  {
    icon: Code2,
    title: "Competitive Programming",
    gradient: "from-orange-500/15 to-yellow-500/10 border-orange-500/25",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
    items: [
      { icon: "🟠", label: "LeetCode Rating", value: "1478", sub: "Active competitor" },
      { icon: "🟢", label: "GeeksforGeeks Rating", value: "1594", sub: "Active contributor" },
      { icon: "⚡", label: "Problems Solved", value: "1000+", sub: "Across all platforms" }
    ]
  },
  {
    icon: Trophy,
    title: "Hackathons",
    gradient: "from-yellow-500/15 to-amber-500/10 border-yellow-500/25",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10",
    items: [
      { icon: "🏆", label: "Vultr Cloud Hackathon", value: "Top 50", sub: "National Level Finalist" },
      { icon: "🥈", label: "Navonmesh Hackathon", value: "Finalist", sub: "National Level" },
      { icon: "🎯", label: "Xcelerate Hackathon", value: "Participant", sub: "IIIT Naya Raipur" }
    ]
  },
  {
    icon: Star,
    title: "Certifications & Ratings",
    gradient: "from-emerald-500/15 to-teal-500/10 border-emerald-500/25",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    items: [
      { icon: "⭐", label: "HackerRank C++", value: "5★", sub: "Expert level" },
      { icon: "🟡", label: "HackerRank Problem Solving", value: "3★", sub: "Proficient" },
      { icon: "🗃️", label: "HackerRank SQL", value: "3★", sub: "Proficient" }
    ]
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-yellow-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">06 — Achievements</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`bg-gradient-to-br border rounded-2xl p-7 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 ${group.gradient}`}
              >
                <div className={`w-12 h-12 ${group.iconBg} rounded-xl flex items-center justify-center mb-6 border border-white/10`}>
                  <Icon className={`w-6 h-6 ${group.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {group.title}
                </h3>

                <div className="space-y-5">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xl shrink-0">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-300 text-sm font-medium leading-snug">{item.label}</p>
                        <p className="text-gray-500 text-xs">{item.sub}</p>
                      </div>
                      <span className={`shrink-0 font-black text-lg ${group.iconColor}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

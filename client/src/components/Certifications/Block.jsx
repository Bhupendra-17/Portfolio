import React from 'react';
import { easeIn, motion } from 'framer-motion';

function Card() {
  const data = [
    { id: 1, title: 'Project Development Competition', by: 'AICTE Idea Lab' },
    { id: 2, title: 'Vultr Cloud Innovate Hackathon', by: 'GeeksforGeeks' },
    { id: 3, title: 'NITS 7.0 Hackathon', by: 'NIT Silchar' },
    { id: 4, title: 'Programming Contest', by: 'SSIPMT Raipur' },
    { id: 5, title: 'SQL Basic', by: 'HackerRank' },
    { id: 6, title: 'Codekaze (Round 1 & 2)', by: 'Coding Ninjas' },
    { id: 7, title: 'Intermediate in DSA', by: 'GreatLearning' },
    { id: 8, title: '3X 1st Position in IMO', by: 'JNV Raipur(School)' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true}}
      transition={{ duration: 0.6,ease: easeIn }}
      className="bg-gradient-to-br from-gray-900 to-stone-700 bg-opacity-60 backdrop-blur-lg
        m-4 border border-gray-700 rounded-3xl p-8 sm:ml-4 md:ml-16 shadow-[0_4px_30px_rgba(0,0,0,0.4)]
        text-white font-sans max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold pb-4 border-b border-gray-600 mb-6 text-center">
        My Certifications
      </h2>

      <div className="flex flex-col gap-5">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            className="p-4 rounded-xl bg-slate-800/40 hover:bg-slate-800/70 transition-all duration-300
              border border-gray-600 hover:shadow-md hover:shadow-cyan-500/20"
          >
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="text-sm text-gray-300">Issued by: {item.by}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Card;

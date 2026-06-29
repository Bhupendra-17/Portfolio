import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 xl:px-24 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-10">
            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">01 — About</span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
          </div>

          <div className="bg-gray-800/30 border border-gray-700/40 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Software Developer<br />
            </h2>

            <div className="text-gray-300 text-lg leading-relaxed space-y-6 relative z-10">
              <p>
                Hi, I'm Bhupendra! I'm a passionate software developer who loves turning complex problems into clean, efficient, and user-friendly web applications. For me, coding is more than just writing logic—it's about building practical solutions that make a real difference in how people interact with technology.
              </p>
              <p>
                Whether I'm designing a seamless frontend experience or architecting a robust backend, I thrive on the challenge of learning new technologies and continuously improving my craft. I'm always looking for opportunities to grow, collaborate on exciting projects, and push the boundaries of what I can build next.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

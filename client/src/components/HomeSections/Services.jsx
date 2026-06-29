import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Globe, Server, Database, Gauge, Wrench, Code2, MonitorPlay, Layers } from 'lucide-react';

const services = [
  { icon: Globe, title: "Custom Business Websites", desc: "Tailored websites reflecting your brand identity and driving real results.", accent: "from-cyan-500/10 to-cyan-400/5 border-cyan-500/20" },
  { icon: Layout, title: "Responsive Web Design", desc: "Fluid, pixel-perfect designs that look stunning on every device and screen size.", accent: "from-sky-500/10 to-sky-400/5 border-sky-500/20" },
  { icon: Code2, title: "Full Stack Development", desc: "End-to-end web apps with robust frontend, backend, and database architecture.", accent: "from-indigo-500/10 to-indigo-400/5 border-indigo-500/20" },
  { icon: MonitorPlay, title: "Portfolio Development", desc: "Premium personal portfolios that make a lasting impression on recruiters.", accent: "from-violet-500/10 to-violet-400/5 border-violet-500/20" },
  { icon: Layers, title: "Landing Pages", desc: "High-converting, visually stunning landing pages built for marketing campaigns.", accent: "from-fuchsia-500/10 to-fuchsia-400/5 border-fuchsia-500/20" },
  { icon: Server, title: "API & Backend Services", desc: "Scalable, secure RESTful APIs and microservices to power your applications.", accent: "from-emerald-500/10 to-emerald-400/5 border-emerald-500/20" },
  { icon: Database, title: "Database Design", desc: "Optimized schemas and integrations for seamless, reliable data management.", accent: "from-teal-500/10 to-teal-400/5 border-teal-500/20" },
  { icon: Gauge, title: "Performance Optimization", desc: "Deep analysis and fixes to drastically improve load times and Lighthouse scores.", accent: "from-orange-500/10 to-orange-400/5 border-orange-500/20" },
  { icon: Wrench, title: "Deployment & Maintenance", desc: "Smooth hosting setup, CI/CD pipelines, and reliable ongoing support.", accent: "from-rose-500/10 to-rose-400/5 border-rose-500/20" }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">03 — Services</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`group p-6 rounded-2xl bg-gradient-to-br border backdrop-blur-sm transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-xl ${svc.accent}`}
              >
                <div className="w-11 h-11 rounded-xl bg-gray-900/70 border border-gray-700/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

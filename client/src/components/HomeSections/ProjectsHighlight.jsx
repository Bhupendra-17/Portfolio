import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlightProjects = [
  {
    title: "Ecoyukt",
    tagline: "Sustainable Collaborative Platform",
    description: "Community platform promoting sustainable practices and environmental awareness with social collaboration features.",
    techStack: ["Next.js", "MongoDB", "Express.js", "Node.js", "Cloudinary", "Tailwind CSS"],
    image: "/Ecoyukt.png",
    github: "#",
    live: "https://ecoyukt.vercel.app/",
    accentFrom: "from-emerald-500/20",
    accentBorder: "group-hover:border-emerald-500/50"
  },
  {
    title: "Avayra Ethereal",
    tagline: "Custom Business Clothing",
    description: "A premium e-commerce platform for custom business clothing, designed to provide a seamless and sophisticated shopping experience for professionals.",
    techStack: ["React", "Tailwind CSS"],
    image: "/Clothing.png",
    github: "#",
    live: "https://avayra-ethereal.lovable.app/",
    accentFrom: "from-violet-500/20",
    accentBorder: "group-hover:border-violet-500/50"
  },
  {
    title: "Ghummu",
    tagline: "Intelligent Itinerary Planner",
    description: "Discovers hidden gems and suggests nearby places based on travel plans and budgets to create the perfect personalized travel itinerary.",
    techStack: ["React", "Tailwind CSS"],
    image: "/Ghummu.png",
    github: "#",
    live: "https://ghummu.lovable.app/",
    accentFrom: "from-cyan-500/20",
    accentBorder: "group-hover:border-cyan-500/50"
  }
];

const ProjectsHighlight = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-center justify-between mb-14 gap-6"
        >
          <div className="flex items-center gap-4 flex-1">
            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">05 — Projects</span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
          </div>

          <Link
            to="/project"
            className="group flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {highlightProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group flex flex-col bg-gray-800/35 border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-sm hover:-translate-y-1.5 hover:shadow-2xl ${project.accentBorder}`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accentFrom} to-gray-900/80 z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => {
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #0f172a, #164e63)';
                    e.target.style.display = 'none';
                  }}
                />
                {/* Tagline overlay */}
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <span className="inline-block px-2.5 py-1 bg-black/40 backdrop-blur-sm border border-white/10 text-white/70 text-xs font-mono rounded-md">
                    {project.tagline}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-gray-900/80 text-cyan-300 text-xs font-mono rounded-md border border-gray-700/80">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 pt-4 border-t border-gray-700/40">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-medium">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors font-medium">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/project"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-800/60 hover:bg-gray-700/70 border border-gray-700 hover:border-cyan-500/50 text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            Show More Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHighlight;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2 } from 'lucide-react';
import Navbar from './components/Navbar/Navbar';
import Footer from './Footer';
import Sidebar from './components/Sidebar/Container';

// Import images (assuming they exist in public or assets based on original file)
import TaskManager from '/task.png';
import Printify from '/Printify.png';
import Zomato from '/Zomato.png';
import ClubVista from '/ClubVista.png';
import GreenBreeze from '/GreenBreeze.png';
import Speeliable from '/Speeliable.png';
import Ecoyukt from '/Speeliable.png'; // Mocking, fallback handled below
import GetTestAI from '/Speeliable.png'; // Mocking, fallback handled below

function Project() {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 0,
            title: "Speeliable",
            description: "A workforce delivery management solution to track, assign, and optimize delivery operations. Includes QR-based package lookup and live location tracking.",
            image: Speeliable,
            category: "full-Stack",
            githubLink: "https://github.com/JAIKUMAR07/Speeliable",
            liveLink: "https://speeliable.vercel.app/",
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        },
        {
            id: 1,
            title: "Ecoyukt",
            description: "Community platform promoting sustainable practices and environmental awareness.",
            image: Ecoyukt,
            category: "full-Stack",
            githubLink: "#",
            liveLink: "#",
            techStack: ["Next.js", "MongoDB", "Express.js", "Node.js", "Cloudinary", "Tailwind CSS"],
        },
        {
            id: 2,
            title: "GetTestAI",
            description: "AI-powered platform generating sectional mock tests with authentication, dashboard, and result history using Mistral AI.",
            image: GetTestAI,
            category: "full-Stack",
            githubLink: "#",
            liveLink: "#",
            techStack: ["React.js", "FastAPI", "MongoDB", "Tailwind CSS", "Mistral AI"],
        },
        {
            id: 3,
            title: "ClubVista",
            description: "Manages club events efficiently. Creates, schedules, and manages events. Uploads and stores reports for future reference.",
            image: ClubVista,
            category: "full-Stack",
            githubLink: "https://github.com/Bhupendra-17/Clubvista",
            liveLink: "https://schedule-3fe75.web.app/",
            techStack: ["React.js", "Node.js", "Firebase", "FireStore", "Tailwind CSS"],
        },
        {
            id: 4,
            title: "Task Manager",
            description: "A simple and efficient todo list app to manage daily tasks, with user friendly layout and design.",
            image: TaskManager,
            category: "full-Stack",
            githubLink: "https://github.com/Bhupendra-17/TaskManager",
            liveLink: "https://taskmanager.vercel.app",
            techStack: ["React.js", "Tailwind CSS", "FastAPI", "SQLite"],
        },
        {
            id: 5,
            title: "GreenBreeze",
            description: "An innovative solution for urban air quality management through strategic plantation planning.",
            image: GreenBreeze,
            category: "full-Stack",
            githubLink: "https://github.com/Bhupendra-17/GreenBreeze",
            liveLink: "https://greenbreeze.vercel.app",
            techStack: ["React.js", "Node.js", "Tailwind CSS"],
        },
        {
            id: 6,
            title: "Printify Landing Page",
            description: "Recreates the UI of Printify.com, showcasing design and front-end development skills.",
            image: Printify,
            category: "frontend",
            githubLink: "https://github.com/Bhupendra-17/PrintifyWeb",
            liveLink: "https://printify-web-three.vercel.app/",
            techStack: ["React.js", "Tailwind CSS"],
        },
        {
            id: 7,
            title: "Zomato UI Page",
            description: "Replicates the basic UI of Zomato's landing page, demonstrating the ability to translate visual design into code.",
            image: Zomato,
            category: "frontend",
            liveLink: "/zomato",
            techStack: ["React.js", "Tailwind CSS"],
        }
    ];

    const filteredProjects = projects.filter(project => activeFilter === 'all' || project.category === activeFilter);

    return (
        <div className="bg-gray-950 min-h-screen font-sans text-gray-200">
            {/* Background Ambient Gradients */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900/10 via-gray-950 to-gray-950"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/10 via-gray-950 to-gray-950"></div>
            </div>

            <Navbar />

            <div className="flex relative z-10 w-full min-h-screen pt-20">
                <Sidebar />

                <main className="flex-1 w-full px-6 py-12 md:py-20">
                    <div className="container mx-auto max-w-7xl">

                        {/* Header & Filters */}
                        <div className="mb-16">
                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 inline-block"
                            >
                                All Projects
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex flex-wrap gap-4 mt-4"
                            >
                                {['all', 'full-Stack', 'frontend'].map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === filter
                                            ? 'bg-cyan-600 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                                            : 'bg-gray-900/60 border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-cyan-300 hover:border-gray-600'
                                            }`}
                                    >
                                        {filter === 'full-Stack' ? 'Full Stack' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                                    </button>
                                ))}
                            </motion.div>
                        </div>

                        {/* Projects Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            <AnimatePresence>
                                {filteredProjects.map((project, index) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        key={project.id}
                                        className="group flex flex-col bg-gray-800/40 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-lg hover:shadow-cyan-500/10 backdrop-blur-sm"
                                    >
                                        <div className="relative h-56 overflow-hidden bg-gray-900">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-800');
                                                    e.target.parentElement.innerHTML = `
                                                        <div class="flex flex-col items-center gap-3 text-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-2 text-cyan-900"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                                                            <span class="font-medium">${project.title}</span>
                                                        </div>
                                                    `;
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-90"></div>
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 mb-6 flex-1 leading-relaxed text-sm">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                                {project.techStack.map((tech, i) => (
                                                    <span key={i} className="px-2.5 py-1 bg-gray-900/80 text-cyan-300 text-xs font-medium rounded-md border border-gray-700">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
                                                {project.githubLink && (
                                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                                        <Github className="w-4 h-4" />
                                                        Code
                                                    </a>
                                                )}
                                                {project.liveLink && (
                                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                                                        <ExternalLink className="w-4 h-4" />
                                                        Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}

export default Project;

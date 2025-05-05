import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './Footer';
import Sidebar from './components/Sidebar/Container';
// import Container from './components/Viewproject/Container';
import TaskManager from '/task.png';
import Printify from '/Printify.png';
import Zomato from '/Zomato.png';
import ClubVista from '/ClubVista.png';
import GreenBreeze from '/GreenBreeze.png';


function Project() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    // Define projects data in a dynamic format
    const projects = [
        {
            id: 1,
            title: "ClubVista",
            description: "Manages club events efficiently. Creates, schedules, and manages events. Uploads and stores reports for future reference.",
            image: ClubVista,
            category: "full-Stack",
            githubLink: "https://github.com/Bhupendra-17/Clubvista",
            liveLink: "https://schedule-3fe75.web.app/",
            techStack: [
                { name: "React.js" },
                { name: "Node.js" },
                { name: "Firebase" },
                { name: "FireStore" },
                { name: "Tailwind CSS" }
            ],
            features: [
                "Event scheduling and management",
                "Reporting system for future references",
                "User authentication and profile management"
            ]
        },
        {
            id: 2,
            title: "Task Manager",
            description: "A simple and efficient todo list app to manage daily tasks, with user friendly layout and design.",
            image: TaskManager,
            category: "full-Stack",
            githubLink: "https://github.com/Bhupendra-17/TaskManager",
            liveLink: "https://taskmanager.vercel.app",
            techStack: [
                { name: "React.js" },
                { name: "Tailwind CSS" },
                { name: "FastAPI" },
                { name: "SQLite" }
            ],
            features: [
                "Task creation, editing, and deletion",
                "Track your tasks"
            ]
        },
        {
            id: 3,
            title: "GreenBreeze",
            description: "An innovative solution for urban air quality management through strategic plantation planning.",
            image: GreenBreeze,
            category: "full-Stack",
            githubLink: "https://github.com/Bhupendra-17/GreenBreeze",
            liveLink: "https://greenbreeze.vercel.app",
            techStack: [
                { name: "React.js"},
                { name: "Node.js" },
                { name: "Tailwind CSS" }
            ],
            features: [
                "Real-time air quality monitoring",
                "Calculates required area for plantation in the city",
                "Analysing the population and area of city"
            ]
        },
        {
            id: 4,
            title: "Printify Landing Page",
            description: "Recreates the UI of Printify.com, showcasing design and front-end development skills.",
            image: Printify,
            category: "frontend",
            githubLink: "https://github.com/Bhupendra-17/PrintifyWeb",
            liveLink: "https://printify-web-three.vercel.app/",
            techStack: [
                { name: "React.js" },
                { name: "Tailwind CSS"}
            ],
            features: [
                "Responsive landing page design",
                "Interactive UI components",
                "Mobile-first approach"
            ]
        },
        {
            id: 5,
            title: "Zomato UI Page",
            description: "Replicates the basic UI of Zomato's landing page, demonstrating the ability to translate visual design into code.",
            image: Zomato,
            category: "frontend",
            liveLink: "/zomato",
            techStack: [
                { name: "React.js",  },
                { name: "Tailwind CSS", }
            ],
            features: [
                "Landing page layout",
                "Navigation and structure",
                "UI component design"
            ]
        }
    ];

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-sky-900 to-cyan-900'>
            <Navbar />
            <div className='container mx-auto px-4 py-12'>
                <div className='flex flex-col lg:flex-row gap-8'>
                    {/* Sidebar */}
                    <div className='hidden lg:block lg:w-1/4'>
                        <div className='sticky top-24'>
                            <Sidebar />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className=''>
                        {/* Project Filters */}
                        <div className='mb-12 mt-10'>
                            <h1 className='text-4xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400'>
                                My Projects
                            </h1>
                            
                            <div className='mt-2 flex flex-wrap gap-4'>
                                {['all', 'full-Stack', 'frontend'].map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`px-6 py-2 rounded-full transition-all duration-300 ${
                                            activeFilter === filter
                                                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                                                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
                                        }`}
                                    >
                                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            {projects.filter(project => activeFilter === 'all' || project.category === activeFilter).map((project) => (
                                <div
                                    key={project.id}
                                    className={`group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-[1.02] ${
                                        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                    }`}
                                >
                                    {/* Project Image */}
                                    <div className='relative h-48 overflow-hidden'>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
                                    </div>

                                    {/* Project Content */}
                                    <div className='p-6'>
                                        <h3 className='text-2xl font-bold text-white mb-3'>{project.title}</h3>
                                        <p className='text-gray-300 mb-4'>{project.description}</p>

                                        {/* Tech Stack */}
                                        <div className='mb-6'>
                                            <h4 className='text-sm font-semibold text-cyan-400 mb-2'>Technologies Used</h4>
                                            <div className='flex flex-wrap gap-2'>
                                                {project.techStack.map((tech, index) => (
                                                    <div
                                                        key={index}
                                                        className='flex items-center gap-1 px-3 py-1 rounded-full bg-gray-700/50 text-sm text-gray-300'
                                                    >
                                                        <span>{tech.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Key Features */}
                                        <div className='mb-6'>
                                            <h4 className='text-sm font-semibold text-cyan-400 mb-2'>Key Features</h4>
                                            <ul className='space-y-2'>
                                                {project.features.map((feature, index) => (
                                                    <li key={index} className='flex items-center text-gray-300'>
                                                        <span className='mr-2'>•</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Project Links */}
                                        <div className='flex gap-4'>
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors'
                                            >
                                                Github
                                            </a>
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition-colors'
                                            >
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Project;

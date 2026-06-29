import React, { useState } from 'react';
import Inner from './Inner';
import Codolio from '/codolio.jpg';
import Gfg from '/geeksforgeeks.svg';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative z-40'>
            {/* Toggle button */}
            <button
                onClick={toggleSidebar}
                aria-label="Toggle social links"
                className={`fixed top-24 left-3 transform -translate-y-1/2 z-20
                w-11 h-11 bg-cyan-600 hover:bg-cyan-500 rounded-full text-white
                flex items-center justify-center transition-all duration-300 shadow-lg shadow-cyan-500/30
                ${isOpen ? 'rotate-180 bg-gray-700 shadow-none' : ''}`}
            >
                <i className="fas fa-bars text-sm"></i>
            </button>

            {/* Sidebar panel */}
            <div
                className={`fixed top-1/4 left-0 h-fit flex flex-col items-center justify-center 
                bg-gray-900/90 backdrop-blur-md border border-gray-700/60 rounded-2xl gap-3 
                py-4 px-2.5 ml-3 shadow-2xl shadow-black/30 transition-all duration-300 
                ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} 
                sm:top-28`}
            >
                <Inner title="fa-brands fa-linkedin" link="https://www.linkedin.com/in/bhupendra-dewangan-172-rahul" />
                <Inner title="fa-brands fa-github" link="https://github.com/Bhupendra-17" />
                <Inner imgs={Codolio} link="https://codolio.com/profile/Bhupendra_17" />
                <Inner imgs={Gfg} link="https://www.geeksforgeeks.org/user/bhupendra_17/" />
                <Inner title="fa-brands fa-hackerrank" link="https://www.hackerrank.com/profile/bhupendradewang5" />
                <Inner title="fa-regular fa-file" link="https://drive.google.com/file/d/1ro_ckWcbjgFtqmPOeu1OswoDpjbUy7Eg/view?usp=sharing" />
                <Inner title="fa-brands fa-x-twitter" link="https://x.com/Bhupendra17_" />
            </div>
        </div>
    );
}

export default Sidebar;

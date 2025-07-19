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
            {/* Circle Button to toggle Sidebar */}
            <button
                onClick={toggleSidebar}
                className={`fixed top-24 lg:top-16 left-3 transform -translate-y-1/2 z-20 
                w-12 h-12 bg-sky-500 rounded-full text-white flex items-center justify-center transition-all duration-300 
                ${isOpen ? 'rotate-180' : ''}`}
            >
                <i className="fas fa-bars"></i>
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-1/4 left-0 h-fit flex flex-col items-center justify-center bg-white rounded-full gap-4 py-2 sm:py-4 px-2 m-3 shadow-xl transition-all duration-300 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:flex-col md:flex-col lg:flex-col sm:top-24`}
            >
                <Inner title="fa-brands fa-linkedin" link="https://www.linkedin.com/in/bhupendra-dewangan-172-rahul" />
                <Inner title="fa-brands fa-github" link="https://github.com/Bhupendra-17" />
                <Inner imgs={Codolio} link="https://codolio.com/profile/Bhupendra_17" />
                <Inner imgs={Gfg} link="https://www.geeksforgeeks.org/user/bhupendra_17/" />
                <Inner title="fa-brands fa-hackerrank" link="https://www.hackerrank.com/profile/bhupendradewang5" />
                <Inner title="fa-regular fa-file" link="https://drive.google.com/file/d/1w02-m8KJRd-Y4g5fyYdog0u_2fdqD37t/view?usp=sharing" />
            </div>
        </div>
    );
}

export default Sidebar;

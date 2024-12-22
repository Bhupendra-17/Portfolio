import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './Footer';
import Sidebar from './components/Sidebar/Container';
import Container from './components/Viewproject/Container';
function Project() {
    return (
        <div className='bg-gradient-to-r from-gray-400 to-cyan-300 min-h-screen overflow-hidden '>
            <Navbar />
            <div className='flex'>
                <div className='hidden sm:block'>
                    <Sidebar />
                </div>
                <div className='flex-grow flex items-center justify-center pt-24'>
                    <Container />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Project;

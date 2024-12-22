import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Card';
import Sidebar from './components/Sidebar/Container';
import Skills from './Skills'
import Footer from './Footer';
function Home() {
  return (
    <div className='bg-gradient-to-r from-gray-400 to-cyan-300 min-h-screen overflow-hidden'>
      <Navbar />

      {/* Main Body*/}
      <div className='flex'>
        <div className='hidden sm:block'>
          <Sidebar />
        </div>
        <div className='flex-grow flex items-center justify-center pt-28'>
          <div className='m-5 border border-gray-700 rounded-xl p-2 shadow-xl shadow-gray-500 bg-gradient-to-r from-sky-900 to-stone-700 transition transform hover:-translate-y-3 cursor-pointer duration-300'>
            <Container />
          </div>
        </div>
      </div>

      {/* Skill Section */}
      <div className=''>
        <h1 className='mt-12 px-7 py-2 w-fit text-3xl m-auto font-semibold rounded-full bg-sky-900 text-white'>Skill Set</h1>
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

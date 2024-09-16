import React from 'react';
import Navbar from './components/Navbar/temp';
import Container from './components/Container/temp';
import Sidebar from './components/Sidebar/temp';

function Home() {
  return (
    <div className='bg-gradient-to-r from-rose-200 to-orange-300 min-h-screen overflow-hidden'>
      <Navbar />
      <div className='flex'>
      <div className='fixed top-[55px] left-0 h-fit flex items-center justify-center bg-white rounded-full gap-4 py-2 sm:py-4 px-2 m-3 shadow-xl
        sm:flex-col md:flex-col lg:flex-col sm:top-24'>
          <Sidebar title="fa-brands fa-linkedin" link="https://www.linkedin.com/in/bhupendra-dewangan-172-rahul" />
          <Sidebar title="fa-brands fa-github" link="https://github.com/Bhupendra-17" />
          <Sidebar imgs="https://www.svgrepo.com/show/330494/geeksforgeeks.svg" link="https://www.geeksforgeeks.org/user/bhupendra_17/" />
          <Sidebar title="fa-brands fa-hackerrank" link="https://www.hackerrank.com/profile/bhupendradewang5" />
          <Sidebar title="fa-regular fa-file" link="https://drive.google.com/file/d/1RKzj8nMW46LPlcpu_2KNdqotvZeh2-i9/view?usp=drive_link" />
        </div>
        <div className='flex-grow flex items-center justify-center pt-28'>
          <div className='m-5 border border-gray-700 rounded-xl p-2 shadow-xl shadow-gray-500 bg-gradient-to-r from-sky-900 to-stone-700 transition transform hover:-translate-y-3 cursor-pointer duration-300'>
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

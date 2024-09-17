import React from 'react';
import Navbar from './components/Navbar/temp';
import Sidebar from './components/Sidebar/temp';
import Viewproject from './components/Viewproject/temp'
import { Link } from 'react-router-dom'

<a href='./c'></a>
function Project() {
    return (
        <div className='bg-gradient-to-r from-rose-200 to-orange-300 min-h-screen overflow-hidden pb-7'>
            <Navbar />
            <div className='flex'>
                <div className='fixed top-[55px] left-0 h-fit flex items-center justify-center bg-white rounded-full gap-4 py-2 sm:py-4 px-2 m-3 shadow-xl
        sm:flex-col md:flex-col lg:flex-col sm:top-24'>
                    <Sidebar title="fa-brands fa-linkedin" link="https://www.linkedin.com/in/bhupendra-dewangan-172-rahul" />
                    <Sidebar title="fa-brands fa-github" link="https://github.com/Bhupendra-17" />
                    <Sidebar imgs="https://www.svgrepo.com/show/330494/geeksforgeeks.svg" link="https://www.geeksforgeeks.org/user/bhupendra_17/" />
                    <Sidebar title="fa-brands fa-hackerrank" link="https://www.hackerrank.com/profile/bhupendradewang5" />
                    <Sidebar title="fa-regular fa-file" link="https://drive.google.com/file/d/12y2utIkZoRoGxxydnwnrA6Rr_l1IL_bU/view?usp=drive_link" />
                </div>
                <div className='flex-grow flex items-center justify-center pt-28'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8'>
                        <Viewproject title="ClubVista" desc="A website to manage the events of a club. Reports can also uploaded and view for future reference."
                            link="https://schedule-3fe75.web.app/" />
                        <Link to="/zomato"><Viewproject title="Zomato UI page" desc="Cloned the basic UI of Zomato Landing Page."
                        /></Link>
                        <Link to="/adobe"><Viewproject title="Adobe UI page" desc="Cloned the basic UI of Adobe Landing Page."
                        /></Link>
                        <Link to="/musicplayer"><Viewproject title="Music Player Website" desc="A simple website to play songs."
                        /></Link>
                        <Link to="/digitalclock"><Viewproject title="A Digital Clock" desc="A simple website to display clock."
                        /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;

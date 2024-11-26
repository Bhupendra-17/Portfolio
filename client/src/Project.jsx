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
                <div className='fixed top-[65px] left-0 h-fit flex flex-col items-center justify-center bg-white rounded-full gap-4 py-2 sm:py-4 px-2 m-3 shadow-xl
        sm:flex-col md:flex-col lg:flex-col sm:top-24'>
                    <Sidebar title="fa-brands fa-linkedin" link="https://www.linkedin.com/in/bhupendra-dewangan-172-rahul" />
                    <Sidebar title="fa-brands fa-github" link="https://github.com/Bhupendra-17" />
                    <Sidebar imgs="https://www.svgrepo.com/show/330494/geeksforgeeks.svg" link="https://www.geeksforgeeks.org/user/bhupendra_17/" />
                    <Sidebar title="fa-brands fa-hackerrank" link="https://www.hackerrank.com/profile/bhupendradewang5" />
                    <Sidebar title="fa-regular fa-file" link="https://drive.google.com/file/d/1UrUkFBhb8WgXX90bq9iXof8IBcI6uJbZ/view?usp=drive_link" />
                </div>
                <div className='flex-grow flex items-center justify-center pt-24'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                        <Viewproject title="ClubVista" desc="A website to manage the events of a club. Reports can also uploaded and view for future reference."
                        link="https://schedule-3fe75.web.app/"  target="_blank"/>
                        <Link to="https://greenbreeze.vercel.app" target="_blank"> <Viewproject title="GreenBreeze" desc="A website that can calculate the required area for plantation needed to improve the Air Quality of the city."
                        /></Link>
                        <Link to="https://printify-web-three.vercel.app/" target="_blank"><Viewproject title="Printify Landing Page" desc="Cloned the UI of printify.com and added some changes."
                        /></Link>
                        <Link to="/zomato"><Viewproject title="Zomato UI page" desc="Cloned the basic UI of Zomato Landing Page."
                        /></Link>
                        <Link to="/musicplayer"><Viewproject title="Music Player Website" desc="A simple website to play songs."
                        /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;

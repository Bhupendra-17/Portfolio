import React from 'react';
import Navbar from './components/Navbar/temp';
import Sidebar from './components/Sidebar/temp';
import Skillset from './components/Skillset/temp'
import Cpp from './components/Skillset/c++.png'
import Java from './components/Skillset/java.png'
import Html from './components/Skillset/html.png'
import Css from './components/Skillset/css.png'
import Reactjs from './components/Skillset/react.png'
import Tailwind from './components/Skillset/tailwind.png'
import JavaScript from './components/Skillset/js.png'
import Firebase from './components/Skillset/firebase.png'
import MySql from './components/Skillset/mysql.png'

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
                    <Sidebar title="fa-regular fa-file" link="https://drive.google.com/file/d/1RKzj8nMW46LPlcpu_2KNdqotvZeh2-i9/view?usp=drive_link" />
                </div>
                <div className='flex-grow flex items-center justify-center pt-28'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                        <Skillset item={Cpp} title="C++" desc="Intermediate"
                        />
                        <Skillset item={Java} title="Java" desc="Intermediate"
                        />
                        <Skillset item={JavaScript} title="JavaScript" desc="Intermediate"
                        />
                        <Skillset item={Reactjs} title="React Js" desc="Beginner"
                        />
                        <Skillset item={Tailwind} title="Tailwind CSS" desc="Intermediate"
                        />
                        <Skillset item={Html} title="HTML" desc="Intermediate"
                        />
                        <Skillset item={Css} title="CSS" desc="Intermediate"
                        />
                        <Skillset item={MySql} title="MySQL" desc="Intermediate"
                        />
                        <Skillset item={Firebase} title="Firebase" desc="Begginer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;

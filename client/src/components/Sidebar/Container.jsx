import React from 'react'
import Inner from './Inner'

function Sidebar() {
    return (
        <div className='fixed top-[55px] left-0 h-fit flex flex-col items-center justify-center bg-white rounded-full gap-4 py-2 sm:py-4 px-2 m-3 shadow-xl
        sm:flex-col md:flex-col lg:flex-col sm:top-24'>
            <Inner title="fa-brands fa-linkedin" link="https://www.linkedin.com/in/bhupendra-dewangan-172-rahul" />
            <Inner title="fa-brands fa-github" link="https://github.com/Bhupendra-17" />
            <Inner imgs="https://www.svgrepo.com/show/330494/geeksforgeeks.svg" link="https://www.geeksforgeeks.org/user/bhupendra_17/" />
            <Inner title="fa-brands fa-hackerrank" link="https://www.hackerrank.com/profile/bhupendradewang5" />
            <Inner title="fa-regular fa-file" link="https://drive.google.com/file/d/1UrUkFBhb8WgXX90bq9iXof8IBcI6uJbZ/view?usp=drive_link" />
        </div>
    )
}

export default Sidebar
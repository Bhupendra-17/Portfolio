import React from 'react';
import photo from './photo.png'; // Adjust the path relative to the current file

function Temp() {
    return (
        <div className='flex justify-center p-2'>
            <div className='w-fit flex flex-col lg:flex-row gap-4 lg:gap-8 items-center'>
                <img src={photo} className="bg-stone-200 p-2 w-40 lg:w-52 self-center rounded-full" alt="Profile Photo" />
                <div className='text-2xl lg:text-3xl font-semibold text-center lg:text-left text-white'>
                    <h2>Hello,</h2>
                    <h2>I'm Bhupendra Dewangan</h2>
                    <h3 className='text-lg text-stone-300'>Student @ SSIPMT Raipur | Web Developer |<br /> Ex-Navodayan</h3>
                </div>
            </div>
        </div>
    );
}

export default Temp;

import React from 'react';
import photo from './photo.png'; // Adjust the path relative to the current file

function Card() {
  return (
    <div className="flex justify-center p-2">
      <div className="w-full max-w-4xl flex flex-col gap-4 items-center">
        <img
          src={photo}
          className="bg-stone-200 p-2 w-40 lg:w-52 self-center rounded-full"
          alt="Profile Photo"
        />
        <div className="text-2xl lg:text-3xl font-semibold text-center text-white">
          <h3 className='text-2xl'>Hi! 👋</h3><h2> I'm Bhupendra Dewangan</h2>
          <h3 className="text-lg text-stone-300">
            Aspiring Software Developer | <br />Student @ SSIPMT Raipur | Web Developer | <br />Ex-Navodayan
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Card;

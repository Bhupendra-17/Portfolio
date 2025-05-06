import React from 'react';
import photo from '/photo.png'; // Adjust the path relative to the current file

function Card() {
  return (
    <div className="flex justify-center p-2">
      <div className="w-full max-w-4xl flex flex-col gap-4 items-center">
        <img
          src={photo}
          className="bg-stone-200 p-1 h-40 lg:h-52 self-center rounded-full"
          alt="Profile Photo"
        />
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-white">
          <h3 className="text-lg sm:text-xl">Hi! 👋</h3>
          <h2 className="text-xl sm:text-2xl">I'm Bhupendra Dewangan</h2>
          <h3 className="text-base sm:text-lg md:text-xl text-stone-300">
            Aspiring Software Developer | <br className="hidden sm:block" />
            B. Tech @ SSIPMT Raipur | Web Developer | <br className="hidden sm:block" />
            Navodayan 
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Card;

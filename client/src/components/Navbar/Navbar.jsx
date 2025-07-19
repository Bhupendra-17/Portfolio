import React from 'react';
import Items from './Items';

function Navbar() {
  return (
    <div className='fixed top-0 z-50 bg-sky-950 text-white shadow-md text-xl w-full'>
      <div className='flex justify-end lg:mr-10'>
        <Items title="About Me" link="/" />
        <Items title="Projects" link="/project" />
        <Items title="Certifications" link="/certifications" />
      </div>
    </div>
  );
}

export default Navbar;

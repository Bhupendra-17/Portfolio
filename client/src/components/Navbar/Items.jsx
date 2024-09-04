import React from 'react';

function Navbar() {
  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="relative text-white text-lg font-medium transition-all duration-300 ease-in-out"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-transparent group-hover:bg-red-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

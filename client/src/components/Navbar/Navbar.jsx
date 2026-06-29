import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { title: "Home", link: "/" },
  { title: "Projects", link: "/project" }
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/85 backdrop-blur-xl border-b border-gray-800/60 shadow-2xl shadow-black/30' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-8 md:px-16 xl:px-24 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-lg font-black text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Bhupendra's <span className="text-cyan-400">Portfolio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.link;
            return (
              <Link
                key={item.link}
                to={item.link}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                  }`}
              >
                {item.title}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
                )}
              </Link>
            );
          })}
          <a
            href="https://drive.google.com/file/d/1ro_ckWcbjgFtqmPOeu1OswoDpjbUy7Eg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-b border-gray-800 px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800 text-sm font-medium transition-colors"
            >
              {item.title}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1ro_ckWcbjgFtqmPOeu1OswoDpjbUy7Eg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2.5 bg-cyan-600 text-white text-sm font-semibold rounded-xl text-center mt-2"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

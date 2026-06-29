import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-gray-800/60 bg-gray-950/90 backdrop-blur-md py-10 z-10">
      <div className="container mx-auto px-8 md:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left: Branding */}
          <div>
            <h2 className="text-xl font-black text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Bhupendra Dewangan
            </h2>
            <p className="text-sm text-gray-500 font-mono">Software Developer / Full Stack Engineer</p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com/Bhupendra-17", icon: <Github className="w-5 h-5" />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/bhupendra-dewangan-172-rahul", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
              { href: "https://x.com/Bhupendra17_", icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
              { href: "mailto:bhupendrad1724@gmail.com", icon: <Mail className="w-5 h-5" />, label: "Email" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-cyan-500/60 hover:bg-gray-700 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Right: Copyright + Back to top */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <button
              onClick={scrollTop}
              className="group w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-cyan-500/60 hover:bg-cyan-900/40 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <p className="text-xs text-gray-600 font-mono">
              © {new Date().getFullYear()} Bhupendra Dewangan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
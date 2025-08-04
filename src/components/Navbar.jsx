import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-7 inset-x-0 z-50">
      <div
        className="mx-auto w-[92%] flex items-center justify-between
                   bg-white/10 backdrop-blur-[12px]
                   border border-white/25
                   shadow-[0_8px_32px_rgba(0,0,0,0.37)]
                   rounded-full px-[6%] py-4"
      >
        {/* Logo */}
        <Link to="/">
          <img src="" alt="logoimage" className="h-8" />
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-12 list-none capitalize text-base text-white">
          <li><Link to="/" className="hover:text-gray-300 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
          <li><Link to="/features" className="hover:text-gray-300 transition">Features</Link></li>
          <li><Link to="/docs" className="hover:text-gray-300 transition">Docs.</Link></li>
          <li><Link to="/get-started" className="hover:text-gray-300 transition">Get Started</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

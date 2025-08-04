import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-8 left-0 right-0 z-50">
      <div
        className="mx-auto w-[92%] flex items-center justify-between py-5 px-[6%]
                   backdrop-blur-xl bg-white/15 border border-white/25
                   rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
        {/* Logo */}
        <Link to="/">
          <img src="" alt="logoimage" className="h-10 w-auto" />
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-12 list-none capitalize text-lg cursor-pointer">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="text-white hover:text-gray-300 transition">
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/docs"
              className="text-white hover:text-gray-300 transition">
              Docs.
            </Link>
          </li>
          <li>
            <Link
              to="/get-started"
              className="text-white hover:text-gray-300 transition">
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

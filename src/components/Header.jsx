import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <a className="flex items-center text-gray-900 title-font font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">SAMIR</span>
        </a>
        <nav className="hidden md:flex space-x-5 text-base">
          <NavLink to="/" className="hover:text-gray-900">
            Home
          </NavLink>
          <NavLink to="/AboutME" className="hover:text-gray-900">
            About ME
          </NavLink>
          <NavLink to="/Projects" className="hover:text-gray-900">
            Projects
          </NavLink>
          <NavLink to="/Contact" className="hover:text-gray-900">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
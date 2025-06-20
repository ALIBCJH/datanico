import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import Datanico from "../assets/tech/datanico.png";
import menuIcon from "../assets/menu.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 z-30 w-full bg-white py-3 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={Datanico}
            alt="Datani Logo"
            className="w-60 h-auto max-h-30 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-8 items-center text-black font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className={`px-3 py-1 rounded-md transition duration-200 ${
                  location.pathname === link.path
                    ? "text-white underline underline-offset-4 bg-[#333333]"
                    : "hover:text-white hover:bg-[#333333]"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <img
              src={menuIcon}
              alt="Menu"
              className={`w-7 h-7 transition-transform duration-300 ${
                toggle ? "rotate-90" : ""
              }`}
              style={{ filter: "invert(100%)" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#2a2a2a] shadow-lg transition-transform duration-300 z-50 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setToggle(false)}
            className="focus:outline-none"
            aria-label="Close mobile menu"
          >
            <img
              src={menuIcon}
              alt="Close menu"
              className="w-7 h-7 rotate-45"
              style={{ filter: "invert(100%)" }}
            />
          </button>
        </div>

        <ul className="flex flex-col gap-5 px-6 pt-2 text-[#e0e0e0] text-[16px]">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                onClick={() => setToggle(false)}
                className={`block px-4 py-2 rounded-md transition duration-200 ${
                  location.pathname === link.path
                    ? "text-white underline"
                    : "hover:bg-[#444444] hover:text-white"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 bg-white bg-opacity-40 z-40"
        />
      )}
    </nav>
  );
};

export default Navbar;

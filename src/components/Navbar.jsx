import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks } from "../constants";
import Datanico from "../assets/tech/datanico.png";
import menuIcon from "../assets/menu.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="w-full  bg-white text-color-grey py-4 px-6 sm:px-10 shadow-md z-50 ">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img className="w-56" src={Datanico} alt="logo" />

          <Link
            to="/"
            onClick={() => {
              setToggle(false);
              window.scrollTo(0, 0);
            }}
          ></Link>

          {/* Desktop Nav */}
          <div className="hidden sm:flex gap-8 items-center text-black font-light ">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`px-4 py-2 rounded-md transition duration-200 text-xl ${
                  location.pathname === link.path
                    ? "font-semibold underline"
                    : ""
                }`}
              >
                {link.title}
              </Link>
            ))}

            <a
              href="https://wa.me/254714046604"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1EBE5D] text-white px-5 py-3 rounded-md text-xl font-semibold"
            >
              <FaWhatsapp className="text-2xl" />
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
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

        {/* Mobile Sidebar */}
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

          <ul className="flex flex-col gap-5 px-6 pt-2 text-[#e0e0e0] text-lg">
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

        {/* Mobile Overlay */}
        {toggle && (
          <div
            onClick={() => setToggle(false)}
            className="fixed inset-0 bg-white bg-opacity-40 z-40"
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;

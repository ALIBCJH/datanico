import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { navLinks } from "../constants";
import Datanico from "../assets/tech/datanico.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top Purple Bar */}
      <div className="w-full bg-[#3B2B78] text-white text-sm py-2 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left Info */}
          <div className="flex items-center gap-6 flex-wrap">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-orange-500" />
              Mawaidha House, Nyeri Town
            </span>
            <span className="flex items-center gap-1">
              <FaEnvelope className="text-orange-500" />
              info@datani.co.ke
            </span>
          </div>

          <div className="flex items-center gap-6 mt-2 sm:mt-0">
            <Link to="/faqs">FAQs</Link>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white text-lg hover:text-orange-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-[#F5F5F5] shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 sm:px-10">
          {/* Logo */}
          <Link to="/">
            <img className="w-44 sm:w-52" src={Datanico} alt="logo" />
          </Link>

          {/* Center Nav Links (hidden on mobile) */}
          <div className="hidden sm:flex flex-1 justify-center items-center gap-6 font-medium text-md text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`px-3 py-1 rounded-md transition duration-200 ${
                  location.pathname === link.path
                    ? "font-semibold text-orange-600"
                    : "hover:text-orange-600"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* WhatsApp CTA (visible on large screens) */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/254714046604"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-90"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-2xl shadow-md">
                <FaWhatsapp className="text-white" />
              </div>
              <div className="text-right leading-tight">
                <div className="text-[#3B2B78] font-bold text-sm">
                  Chat on WhatsApp
                </div>
                <div className="text-gray-500 text-xs">0714 046 604</div>
              </div>
            </a>
          </div>

          {/* Hamburger Icon (visible only on mobile) */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setToggle(true)}
              className="text-2xl text-[#3B2B78] focus:outline-none"
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {toggle && (
          <>
            <div className="fixed top-0 right-0 h-full w-64 bg-[#2a2a2a] z-50 shadow-lg transition-all duration-300">
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setToggle(false)}
                  className="text-white text-xl focus:outline-none"
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Sidebar Links */}
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

                {/* WhatsApp in mobile */}
                <li className="mt-6">
                  <a
                    href="https://wa.me/254714046604"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] px-4 py-2 rounded-md hover:opacity-90"
                  >
                    <FaWhatsapp className="text-white text-xl" />
                    <span className="text-white text-sm">Chat on WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Overlay */}
            <div
              onClick={() => setToggle(false)}
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
            />
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;

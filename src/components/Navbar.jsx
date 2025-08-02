import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookCircleFill } from "react-icons/ri";
import FacebookIcon from "../assets/tech/facebookicon.png";

import { navLinks } from "../constants";
import Datanico from "../assets/tech/datanico.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="w-full bg-[#3B2B78] text-white text-sm py-2 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">

          <div className="flex items-center gap-6 flex-wrap">
            <span className="flex items-center gap-1">
              <FaPhoneAlt className="text-orange-500" />
              0714 046 604
            </span>
            <span className="flex items-center gap-1">
              <FaEnvelope className="text-orange-500" />
              info@datani.co.ke
            </span>
          </div>

          <div className="flex items-center gap-6 mt-2 sm:mt-0">
            <Link to="/faqs">FAQs</Link>

            <a
              href="https://x.com/DataniInsuranceAgency"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Datani on X"
            >
              <FaXTwitter className="text-white text-lg hover:text-orange-400" />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100064025505143"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Datani on Facebook"
            >
              <img
                src={FacebookIcon}
                alt="Facebook"
                className="w-4 h-4 sm:w-6 sm:h-6 object-contain hover:opacity-80 transition "
              />
            </a>
          </div>
        </div>
      </div>

      <nav
        className="w-full sticky top-0 bg-gray-200 shadow-md z-50 border-b-2"
        style={{ borderBottomColor: "#68579A" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 sm:px-10">
          {/* Logo */}
          <Link to="/">
            <img className="w-44 sm:w-52" src={Datanico} alt="logo" />
          </Link>

          <div className="hidden sm:flex flex-1 justify-center items-center font-montserrat">
            <div className="bg-[#d1d5db] px-6 py-2 rounded-md shadow-sm flex gap-6 text-gray-700 text-1xl">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`px-2 py-1 rounded-md transition duration-200 ${
                    location.pathname === link.path
                      ? "font-semibold text-orange-600"
                      : "hover:text-orange-600"
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

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
                <div className="text-[#352969] font-bold text-sm">
                  0714 046 604
                </div>
                <div className="text-gray-500 text-xs">Chat on WhatsApp</div>
              </div>
            </a>
          </div>

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

        {toggle && (
          <>
            <div className="fixed top-0 right-0 h-full w-64 bg-[#2a2a2a] z-50 shadow-lg transition-all duration-300">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setToggle(false)}
                  className="text-white text-xl focus:outline-none"
                  aria-label="Close menu"
                >
                  <FaTimes />
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

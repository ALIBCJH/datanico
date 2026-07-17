"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaEnvelope,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FacebookIcon from "@/assets/facebookicon.png";
import Datanico from "@/assets/datanico.png";
import { navLinks, CONTACT } from "@/data/constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    const base = path.split("#")[0] || "/";
    return pathname === base;
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="w-full bg-brand-purple text-white text-sm py-2 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 flex-wrap">
            <a href={`tel:+${CONTACT.phoneIntl}`} className="flex items-center gap-1">
              <FaPhoneAlt className="text-orange-500" />
              {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1">
              <FaEnvelope className="text-orange-500" />
              {CONTACT.email}
            </a>
          </div>

          <div className="flex items-center gap-6 mt-2 sm:mt-0">
            <Link href="/faqs">FAQs</Link>
            <a
              href={CONTACT.twitter}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Datani on X"
            >
              <FaXTwitter className="text-white text-lg hover:text-orange-400" />
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Datani on Facebook"
            >
              <Image
                src={FacebookIcon}
                alt="Datani on Facebook"
                className="w-4 h-4 sm:w-6 sm:h-6 object-contain hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="w-full sticky top-0 bg-gray-200 shadow-md z-50 border-b-2 border-[#68579A]">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 sm:px-10">
          <Link href="/" aria-label="Datani Insurance Agency home">
            <Image
              className="w-44 sm:w-52 h-auto"
              src={Datanico}
              alt="Datani Insurance Agency logo"
              priority
            />
          </Link>

          <div className="hidden sm:flex flex-1 justify-center items-center font-montserrat">
            <div className="bg-[#d1d5db] px-6 py-2 rounded-md shadow-sm flex gap-6 text-gray-700">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  className={`px-2 py-1 rounded-md transition duration-200 ${
                    isActive(link.path)
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
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-90"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-2xl shadow-md">
                <FaWhatsapp className="text-white" />
              </div>
              <div className="text-right leading-tight">
                <div className="text-brand-deep font-bold text-sm">{CONTACT.phone}</div>
                <div className="text-gray-500 text-xs">Chat on WhatsApp</div>
              </div>
            </a>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setToggle(true)}
              className="text-2xl text-brand-purple focus:outline-none"
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
                      href={link.path}
                      onClick={() => setToggle(false)}
                      className={`block px-4 py-2 rounded-md transition duration-200 ${
                        isActive(link.path)
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
                    href={CONTACT.whatsapp}
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

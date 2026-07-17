"use client";

import { useState, useEffect } from "react";
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

  // Close the mobile drawer on Escape and lock body scroll while it's open.
  useEffect(() => {
    if (!toggle) return;
    const onKey = (e) => {
      if (e.key === "Escape") setToggle(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [toggle]);

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
              className="p-2 -mr-2 text-2xl text-brand-purple rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              aria-label="Open menu"
              aria-expanded={toggle}
              aria-controls="mobile-menu"
            >
              <FaBars />
            </button>
          </div>
        </div>

        {toggle && (
          <div className="sm:hidden" id="mobile-menu">
            {/* Dimmed backdrop */}
            <div
              onClick={() => setToggle(false)}
              aria-hidden="true"
              className="fixed inset-0 bg-black/50 z-40 animate-overlay-in"
            />

            {/* Slide-in drawer */}
            <aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-gradient-to-b from-brand-purple to-brand-deep text-white z-50 shadow-2xl flex flex-col animate-drawer-in"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/15">
                <span className="font-semibold text-base tracking-wide">Datani Insurance</span>
                <button
                  onClick={() => setToggle(false)}
                  className="p-2 -mr-2 text-xl rounded-md text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              <ul className="flex flex-col gap-1 px-3 py-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.path}
                      onClick={() => setToggle(false)}
                      className={`flex items-center px-4 py-3 rounded-lg border-l-4 text-base transition duration-200 ${
                        isActive(link.path)
                          ? "bg-white/10 border-brand-orange text-white font-semibold"
                          : "border-transparent text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto px-5 py-5 border-t border-white/15 space-y-4">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] px-4 py-3 rounded-lg font-medium hover:brightness-95 transition"
                >
                  <FaWhatsapp className="text-xl" />
                  <span className="text-sm">Chat on WhatsApp</span>
                </a>

                <div className="space-y-2 text-sm">
                  <a
                    href={`tel:+${CONTACT.phoneIntl}`}
                    className="flex items-center gap-2 text-white/90 hover:text-white"
                  >
                    <FaPhoneAlt className="text-brand-orange" /> {CONTACT.phone}
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-2 text-white/90 hover:text-white break-all"
                  >
                    <FaEnvelope className="text-brand-orange" /> {CONTACT.email}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

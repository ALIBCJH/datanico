import { FaFacebookF, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-white border-t border-gray-200 text-black py-16"
      style={{ fontFamily: "Segoe UI, SegoeUI, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
        {/* Brand & Motto */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Datani Insurance Agency
          </h3>
          <p className="text-orange-600 text-xl md:text-2xl font-medium mt-2">
            Service that Shields – Trusted. Personal. Kenyan.
          </p>
        </div>

        {/* Social Icons in Cards */}
        <div className="flex justify-center gap-8">
          <div className="p-4 rounded-lg border border-gray-200 hover:shadow-lg hover:shadow-orange-200 transition duration-300">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-orange-700 hover:text-orange-600 transition"
            >
              <FaFacebookF size={28} />
            </a>
          </div>

          <div className="p-4 rounded-lg border border-gray-200 hover:shadow-lg hover:shadow-orange-200 transition duration-300">
            <a
              href="info@datani.co.ke"
              aria-label="Email"
              className="text-orange-700 hover:text-orange-600 transition"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 w-4/5 mx-auto" />

        {/* Copyright */}
        <p className="text-base md:text-lg text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-light text-grey">
            Datani Insurance Agency
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

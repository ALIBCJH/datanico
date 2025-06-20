import { FaFacebookF, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-black py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Brand Name */}
        <h3 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-gray-900">
          Datani Insurance Agency
        </h3>
        <p className="text-orange-600 text-lg font-medium mb-8">
          Service that Shields – Trusted. Personal. Kenyan.
        </p>

        {/* Contact Call to Action */}
        <h4 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight">
          Get in Touch
        </h4>
        <p className="text-gray-600 text-base mb-8 max-w-xl mx-auto">
          Have a question or need a quote? Reach out — we’re here to help you
          protect what matters most.
        </p>

        {/* Contact Icons */}
        <div className="flex justify-center gap-10 mb-10">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-orange-600 transition duration-300"
          >
            <FaFacebookF size={24} />
          </a>

          <a
            href="mailto:contact@dataninsure.com"
            aria-label="Email"
            className="hover:text-grey transition duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 w-4/5 mx-auto mb-6" />

        {/* Footer bottom */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-black">
            Datani Insurance Agency
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

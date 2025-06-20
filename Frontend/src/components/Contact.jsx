import { useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      className="bg-white py-20 px-6 sm:px-10"
      style={{ fontFamily: "Segoe UI, SegoeUI, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Have a question or want to work with us? Fill out the form and we’ll
            respond shortly.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-700 font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 bg-white rounded-md px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 bg-white rounded-md px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 font-medium">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 bg-white rounded-md px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 bg-white rounded-md px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF5722] hover:bg-orange-600 text-white py-3 rounded-md text-lg font-medium transition duration-200"
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <div className="mt-4 text-green-600 text-sm">
              ✅ Thank you! Your message has been sent.
            </div>
          )}
        </div>

        {/* Contact Info Card */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-center text-left space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-2 flex items-center gap-2">
              <FaPhoneAlt className="text-[#FF5722]" /> Call Us
            </h3>
            <p className="text-lg text-gray-700 mb-1">0714 046 604</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-2 flex items-center gap-2">
              <FaClock className="text-[#FF5722]" /> Office Hours
            </h3>
            <p className="text-sm text-gray-600">
              Monday – Saturday
              <br />
              8:00 AM – 5:00 PM (EAT)
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#FF5722]" /> Visit Us
            </h3>
            <div className="h-48 w-full rounded-md overflow-hidden">
              <iframe
                title="Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.163749304218!2d36.94575842268005!3d-0.42464219999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182899365e21973f%3A0xc25b2e3c217a0ac!2sKimathi%20Street%2C%20Nyeri!5e0!3m2!1sen!2ske!4v1718209999999!5m2!1sen!2ske"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div>
            <a
              href="https://wa.me/254714046604"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start gap-3 text-white bg-[#FF5722] hover:bg-[#1EBE5D] px-4 py-2 rounded-md text-lg font-medium transition"
            >
              <FaWhatsapp className="text-xl" /> WhatsApp Us – 0714 046604
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

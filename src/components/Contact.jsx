"use client";

import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/data/constants";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setError("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "Contact form" }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "mt-1 block w-full border border-gray-300 bg-white rounded-md px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange";

  return (
    <section className="bg-white pt-11 pb-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-4xl font-light text-black mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-6">
            Have a question or want to work with us? Fill out the form and we&apos;ll
            respond shortly.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 font-medium">
                Name <span className="text-brand-orange">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm text-gray-700 font-medium">
                Phone <span className="text-brand-orange">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-700 font-medium">
                Message <span className="text-brand-orange">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md text-lg font-medium transition duration-300 ${
                loading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-brand-orange-soft text-brand-orange hover:bg-brand-orange hover:text-white"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {submitted && (
            <div className="mt-4 text-green-600 text-sm">
              ✅ Thank you! Your message has been sent.
            </div>
          )}
          {error && <div className="mt-4 text-red-600 text-sm">⚠️ {error}</div>}
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-center text-left space-y-6">
          <div>
            <h2 className="text-2xl font-light text-black mb-2 flex items-center gap-2">
              <FaPhoneAlt className="text-brand-orange" /> Call Us
            </h2>
            <p className="text-lg text-gray-700 mb-1">{CONTACT.phone}</p>
          </div>

          <div>
            <h2 className="text-2xl font-light text-black mb-2 flex items-center gap-2">
              <FaClock className="text-brand-orange" /> Office Hours
            </h2>
            <p className="text-sm text-gray-600">
              Monday – Saturday
              <br />
              8:00 AM – 5:00 PM (EAT)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light text-black mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-brand-orange" /> Visit Us
            </h2>
            <div className="h-48 w-full rounded-md overflow-hidden">
              <iframe
                title="Datani Insurance office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.706716783397!2d36.95399971442664!3d-0.4253854996573771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182899375a5d9973%3A0x39d2c92f7a1b230b!2sMawaidha%20House%2C%20Kimathi%20St%2C%20Nyeri!5e0!3m2!1sen!2ske!4v1719246993383!5m2!1sen!2ske"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start gap-3 text-brand-orange bg-brand-orange-soft hover:bg-[#1EBE5D] hover:text-white px-4 py-2 rounded-md text-lg font-medium transition duration-300"
            >
              <FaWhatsapp className="text-xl" /> WhatsApp Us – {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { FaFacebookF, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#352969] text-white pt-20 pb-10"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="text-1xl font-bold text-[#FF770F] mb-4">
              Head Office
            </h4>
            <p>Mawaidha House, Ground Floor</p>
            <p>Kimathi Street</p>
            <p>P.O. Box 492 - 10100 Nyeri</p>
            <p>Tel: 0714 046 604</p>
            <p>Email: info@datani.co.ke</p>
          </div>

          <div>
            <h4 className="text-1xl font-bold text-[#FF770F] mb-4">Products</h4>
            <ul className="space-y-2">
              <li>Motor Insurance</li>
              <li>Medical Insurance</li>
              <li>Property Insurance</li>
              <li>Marine & Goods in Transit</li>
              <li>Liability Insurance</li>
              <li>Life Assurance</li>
              <li>Retirement & Pension Plan</li>
              <li>Investment Plans</li>
            </ul>
          </div>

          <div>
            <h4 className="text-1xl font-bold text-[#FF770F] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#FF770F] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FF770F] transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-[#FF770F] transition"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/claims" className="hover:text-[#FF770F] transition">
                  Claims
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF770F] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-1xl font-bold text-[#FF770F] mb-4">
              Business Hours
            </h4>
            <ul className="space-y-2">
              <li>Mon – Fri: 8:00 AM – 5:00 PM</li>
              <li>Saturday: 9:00 AM – 1:00 PM</li>
              <li>Sunday & Holidays: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-1xl text-white/80">
          <p>© {year} Datani Insurance Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

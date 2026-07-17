import Link from "next/link";
import { CONTACT } from "@/data/constants";

const year = new Date().getFullYear();

const products = [
  "Motor Insurance",
  "Medical Insurance",
  "Property Insurance",
  "Marine & Goods in Transit",
  "Liability Insurance",
  "Life Assurance",
  "Retirement & Pension Plan",
  "Investment Plans",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Our Products", href: "/products" },
  { label: "Claims", href: "/claims" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-brand-deep text-white pt-11 pb-10 font-montserrat">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-bold text-brand-orange mb-4">Head Office</h3>
            <p>Mawaidha House, Ground Floor</p>
            <p>Kimathi Street</p>
            <p>P.O. Box 492 - 10100 Nyeri</p>
            <p>Tel: {CONTACT.phone}</p>
            <p>Email: {CONTACT.email}</p>
          </div>

          <div>
            <h3 className="font-bold text-brand-orange mb-4">Products</h3>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-brand-orange mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-brand-orange transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-brand-orange mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Mon – Fri: 8:00 AM – 5:00 PM</li>
              <li>Saturday: 9:00 AM – 1:00 PM</li>
              <li>Sunday &amp; Holidays: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-white/80">
          <p>© {year} Datani Insurance Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

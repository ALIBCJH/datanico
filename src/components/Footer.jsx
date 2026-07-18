import Link from "next/link";
import { CONTACT } from "@/data/constants";

const year = new Date().getFullYear();

const products = [
  { label: "Motor Insurance", href: "/insurance/motor" },
  { label: "Medical Insurance", href: "/insurance/medical" },
  { label: "Property Insurance", href: "/insurance/property" },
  { label: "Marine & Goods in Transit", href: "/insurance/marine" },
  { label: "Liability Insurance", href: "/insurance/liability" },
  { label: "Life Assurance", href: "/insurance/life" },
  { label: "Retirement & Pension Plan", href: "/insurance/pension" },
  { label: "Investment Plans", href: "/insurance/investment" },
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
                <li key={p.label}>
                  <Link href={p.href} className="hover:text-brand-orange transition">
                    {p.label}
                  </Link>
                </li>
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

        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/80">
          <p>© {year} Datani Insurance Agency. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-brand-orange transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

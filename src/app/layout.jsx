import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppFab from "@/components/WhatsAppFab";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://datani.co.ke";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Datani Insurance Agency | Service That Shields",
    template: "%s | Datani Insurance Agency",
  },
  description:
    "Datani Insurance Agency in Nyeri, Kenya offers motor, medical, property, life, travel and business insurance. Expert advice, reliable protection and fast claims. Get a free quote today.",
  keywords: [
    "insurance Kenya",
    "insurance Nyeri",
    "motor insurance",
    "medical insurance",
    "life insurance",
    "Datani Insurance",
    "insurance agency Kenya",
  ],
  authors: [{ name: "Datani Insurance Agency" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    siteName: "Datani Insurance Agency",
    title: "Datani Insurance Agency | Service That Shields",
    description:
      "Motor, medical, property, life, travel and business insurance in Nyeri, Kenya. Get a free quote today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datani Insurance Agency",
    description:
      "Motor, medical, property, life, travel and business insurance in Nyeri, Kenya.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-white text-gray-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <WhatsAppFab />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}

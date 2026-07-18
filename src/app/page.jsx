import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonial";
import BlogList from "@/components/BlogList";
import Resources from "@/components/Resources";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/data/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://datani.co.ke";

export const metadata = {
  description:
    "Datani Insurance Agency in Kenya — motor, medical, property, life, travel and business insurance. Expert advice, reliable protection and fast claims. Get a free quote today.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Datani Insurance Agency | Service That Shields",
    description:
      "Motor, medical, property, life, travel and business insurance across Kenya. Get a free quote today.",
  },
};

const agencyJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": `${SITE_URL}/#organization`,
  name: "Datani Insurance Agency",
  description:
    "Motor, medical, property, life, travel and business insurance across Kenya.",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/icon.png`,
  telephone: "+254714046604",
  email: "info@datani.co.ke",
  priceRange: "$$",
  currenciesAccepted: "KES",
  sameAs: [CONTACT.facebook, CONTACT.twitter],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mawaidha House, Ground Floor, Kimathi Street",
    addressLocality: "Nyeri",
    addressRegion: "Nyeri County",
    addressCountry: "KE",
    postOfficeBoxNumber: "492 - 10100",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -0.4253855,
    longitude: 36.9539997,
  },
  areaServed: [
    { "@type": "City", name: "Nyeri" },
    { "@type": "Country", name: "Kenya" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Insurance products",
    itemListElement: [
      "Motor Insurance",
      "Medical Insurance",
      "Property Insurance",
      "Marine & Goods in Transit Insurance",
      "Liability Insurance",
      "Life Insurance",
      "Retirement & Pension Plans",
      "Investment Plans",
      "Travel Insurance",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={agencyJsonLd} />
      <Hero />
      <About />
      <Partners />
      <Testimonials variant="preview" />
      <BlogList variant="preview" />
      <Resources />
    </>
  );
}

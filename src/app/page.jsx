import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
import BlogList from "@/components/BlogList";
import Resources from "@/components/Resources";
import JsonLd from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://datani.co.ke";

export const metadata = {
  description:
    "Datani Insurance Agency in Nyeri, Kenya — motor, medical, property, life, travel and business insurance. Expert advice, reliable protection and fast claims. Get a free quote today.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Datani Insurance Agency | Service That Shields",
    description:
      "Motor, medical, property, life, travel and business insurance in Nyeri, Kenya. Get a free quote today.",
  },
};

const agencyJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Datani Insurance Agency",
  description:
    "Motor, medical, property, life, travel and business insurance in Nyeri, Kenya.",
  url: SITE_URL,
  telephone: "+254714046604",
  email: "info@datani.co.ke",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mawaidha House, Ground Floor, Kimathi Street",
    addressLocality: "Nyeri",
    addressCountry: "KE",
    postOfficeBoxNumber: "492 - 10100",
  },
  areaServed: "KE",
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
      <BlogList variant="preview" />
      <Resources />
    </>
  );
}

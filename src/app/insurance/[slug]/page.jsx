import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, PhoneCall, Mail } from "lucide-react";
import { products, getProductBySlug } from "@/data/products";
import { CONTACT } from "@/data/constants";
import JsonLd from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://datani.co.ke";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.metaTitle || product.title,
    description: product.metaDescription,
    alternates: { canonical: `/insurance/${product.slug}` },
    openGraph: {
      title: `${product.metaTitle || product.title} | Datani Insurance Agency`,
      description: product.metaDescription,
      url: `/insurance/${product.slug}`,
    },
  };
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const { title, subtitle, icon: Icon, intro, coverage, whoFor } = product;
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    serviceType: title,
    description: product.metaDescription,
    url: `${SITE_URL}/insurance/${product.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Nyeri" },
      { "@type": "Country", name: "Kenya" },
    ],
  };

  return (
    <section className="bg-white px-6 pt-11 pb-20 font-montserrat">
      <JsonLd data={serviceJsonLd} />
      <div className="max-w-4xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/products" className="hover:text-brand-orange">
            Products
          </Link>{" "}
          / <span className="text-gray-700">{title}</span>
        </nav>

        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
          <Icon className="w-8 h-8 text-brand-orange" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-light text-black mb-3">{title}</h1>
        <p className="text-xl text-brand-orange font-medium mb-8">{subtitle}</p>

        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          {intro.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-black mt-12 mb-5">What&apos;s covered</h2>
        <ul className="space-y-3">
          {coverage.map((point) => (
            <li key={point} className="flex items-start gap-3 text-gray-700">
              <Check className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-12 mb-3">Who it&apos;s for</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{whoFor}</p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/quote"
            className="bg-brand-orange text-white font-semibold px-8 py-3 rounded-xl hover:brightness-95 transition"
          >
            Get a Quote
          </Link>
          <a
            href={`tel:+${CONTACT.phoneIntl}`}
            className="inline-flex items-center gap-2 border border-brand-orange text-brand-orange font-semibold px-8 py-3 rounded-xl hover:bg-orange-50 transition"
          >
            <PhoneCall className="w-5 h-5" /> {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-xl hover:bg-gray-50 transition"
          >
            <Mail className="w-5 h-5" /> Email us
          </a>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-black mb-6">Other cover you may need</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/insurance/${p.slug}`}
                className="flex items-center gap-3 border border-gray-200 rounded-xl p-4 hover:border-brand-orange hover:bg-orange-50 transition"
              >
                <div className="bg-orange-100 text-brand-orange p-2 rounded-full">
                  <p.icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-gray-800">{p.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

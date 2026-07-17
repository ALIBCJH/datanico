import Link from "next/link";
import { PhoneCall, Mail, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { CONTACT } from "@/data/constants";

const Products = () => {
  return (
    <section className="min-h-screen bg-white px-6 pt-11 pb-20 max-w-7xl mx-auto font-montserrat">
      <h1 className="text-4xl sm:text-5xl font-light text-black mb-4 text-center">
        Our Insurance Products
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl text-center mx-auto mb-12">
        Cover for every part of life and business in Nyeri and across Kenya. Choose a
        product to learn what it includes, or request a free quote.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {products.map(({ slug, title, subtitle, icon: Icon }) => (
          <div
            key={slug}
            className="bg-white rounded-3xl shadow-md hover:shadow-lg border border-gray-200 transition duration-300 p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 bg-brand-orange-muted rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
                <Icon className="w-8 h-8 text-brand-orange" />
              </div>
              <h2 className="text-xl font-semibold text-center text-black mb-2">
                <Link href={`/insurance/${slug}`} className="hover:text-brand-orange transition">
                  {title}
                </Link>
              </h2>
              <p className="text-center text-gray-700 font-medium mb-6">{subtitle}</p>
              <Link
                href={`/insurance/${slug}`}
                className="flex items-center justify-center gap-1 text-brand-orange font-medium text-sm hover:underline"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <Link
              href="/quote"
              className="block bg-brand-orange hover:brightness-95 text-white text-sm font-semibold px-5 py-3 rounded-xl text-center mt-6 transition duration-200"
            >
              Get a Quote
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-28 text-center">
        <h2 className="text-2xl font-light text-black mb-4">
          Let&apos;s Help You Pick the Right Product
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Whether you&apos;re getting started with insurance or reviewing your current
          policy, our team is here to support you every step of the way.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={`tel:+${CONTACT.phoneIntl}`}
            className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-md hover:shadow-lg hover:border-brand-orange hover:bg-brand-orange-tint transition duration-300 w-[300px]"
          >
            <div className="bg-brand-orange-muted text-brand-orange p-3 rounded-full">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Call us</p>
              <p className="text-gray-600 text-sm">{CONTACT.phone}</p>
            </div>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-md hover:shadow-lg hover:border-brand-orange hover:bg-brand-orange-tint transition duration-300 w-[300px]"
          >
            <div className="bg-brand-orange-muted text-brand-orange p-3 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Email Us</p>
              <p className="text-gray-600 text-sm">{CONTACT.email}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;

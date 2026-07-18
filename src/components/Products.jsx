import Link from "next/link";
import { PhoneCall, Mail, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { CONTACT } from "@/data/constants";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";

// Group the products so the grid is scannable rather than one long list.
const groups = [
  { name: "Personal & family", slugs: ["motor", "medical", "property", "travel"] },
  { name: "Life & wealth", slugs: ["life", "pension", "investment"] },
  { name: "Business", slugs: ["marine", "liability"] },
];

const bySlug = Object.fromEntries(products.map((p) => [p.slug, p]));

const ProductCard = ({ slug }) => {
  const product = bySlug[slug];
  if (!product) return null;
  const { title, subtitle, icon: Icon } = product;

  return (
    <Card
      as={Link}
      href={`/insurance/${slug}`}
      className="group flex h-full flex-col p-6 transition duration-300 hover:border-brand-orange hover:shadow-lg motion-safe:hover:-translate-y-1"
    >
      <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-orange-muted text-brand-orange transition-transform duration-300 motion-safe:group-hover:scale-110">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-black">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange-dark">
        Learn more
        <ArrowRight
          size={16}
          aria-hidden="true"
          className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
        />
      </span>
    </Card>
  );
};

const Products = () => {
  return (
    <section className="bg-white px-6 pt-11 pb-20 max-w-7xl mx-auto font-montserrat">
      <PageHeader
        className="mb-6"
        title="Our Insurance Products"
        intro="Cover for every part of life and business, across Kenya. Explore a product to see what it includes — or get a free quote in minutes."
      />

      <div className="mb-14 flex justify-center">
        <Button href="/quote" variant="primary" size="lg">
          Get a free quote
        </Button>
      </div>

      <div className="space-y-14">
        {groups.map((group) => (
          <div key={group.name}>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide text-gray-500">
              {group.name}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.slugs.map((slug) => (
                <ProductCard key={slug} slug={slug} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Help band */}
      <div className="mt-20 rounded-2xl bg-brand-orange-tint px-6 py-12 text-center">
        <h2 className="text-2xl font-light text-black">Not sure which cover you need?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-700">
          Tell us a little about yourself and our advisors will help you pick the right
          product — no pressure, no jargon.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Card
            as="a"
            href={`tel:+${CONTACT.phoneIntl}`}
            className="flex items-center gap-4 px-6 py-5 transition duration-300 hover:border-brand-orange hover:shadow-lg w-full sm:w-[300px]"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-orange-muted text-brand-orange">
              <PhoneCall className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block font-semibold text-gray-800">Call us</span>
              <span className="block text-sm text-gray-600">{CONTACT.phone}</span>
            </span>
          </Card>

          <Card
            as="a"
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-4 px-6 py-5 transition duration-300 hover:border-brand-orange hover:shadow-lg w-full sm:w-[300px]"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-orange-muted text-brand-orange">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block font-semibold text-gray-800">Email us</span>
              <span className="block text-sm text-gray-600 break-all">{CONTACT.email}</span>
            </span>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;

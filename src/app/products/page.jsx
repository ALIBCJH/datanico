import Products from "@/components/Products";

export const metadata = {
  title: "Our Insurance Products",
  description:
    "Explore Datani Insurance products: motor, medical, property, marine, liability, life, pension, investment and travel insurance in Kenya.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return <Products />;
}

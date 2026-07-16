import BlogList from "@/components/BlogList";

export const metadata = {
  title: "Insurance Blog",
  description:
    "Expert insights and practical advice on insurance in Kenya — life, health, motor, microinsurance, healthtech and more, from Datani Insurance Agency.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return <BlogList />;
}

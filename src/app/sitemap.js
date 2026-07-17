import { blogPosts } from "@/data/blogPosts";
import { products } from "@/data/products";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://datani.co.ke";

export default function sitemap() {
  const routes = [
    "",
    "/products",
    "/claims",
    "/claims/process",
    "/claims/file",
    "/contact",
    "/quote",
    "/blogs",
    "/insurance-tips",
    "/faqs",
    "/testimonial",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const productPages = products.map((p) => ({
    url: `${SITE_URL}/insurance/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const posts = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.id}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...routes, ...productPages, ...posts];
}

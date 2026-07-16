import { blogPosts } from "@/data/blogPosts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://datani.co.ke";

export default function sitemap() {
  const routes = [
    "",
    "/products",
    "/claims",
    "/contact",
    "/quote",
    "/blogs",
    "/insurancetips",
    "/claimpage",
    "/requirementclaim",
    "/faqs",
    "/testimonial",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const posts = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.id}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...routes, ...posts];
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostById } from "@/data/blogPosts";

// Pre-render every blog post at build time (SSG) for fast loads and full SEO.
export function generateStaticParams() {
  return blogPosts.map((p) => ({ id: String(p.id) }));
}

export function generateMetadata({ params }) {
  const post = getPostById(params.id);
  if (!post) return { title: "Blog not found" };
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.id}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
    },
  };
}

export default function BlogPost({ params }) {
  const post = getPostById(params.id);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.id !== post.id);
  const paragraphs = post.fullContent.split("\n\n");

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 font-montserrat">
      <article className="lg:col-span-2">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8 text-sm">
          {post.date} • {post.readTime}
        </p>
        <div className="max-w-none text-gray-800 text-lg leading-relaxed space-y-5">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <Link
          href="/blogs"
          className="mt-10 inline-block text-orange-600 font-semibold hover:underline"
        >
          ← Back to Blog
        </Link>
      </article>

      <aside className="lg:col-span-1 border-l border-gray-200 pl-6">
        <h2 className="text-2xl font-semibold mb-6">Other Blogs</h2>
        <ul className="space-y-4">
          {otherPosts.map((p) => (
            <li key={p.id}>
              <Link
                href={`/blog/${p.id}`}
                className="text-lg font-medium text-orange-600 hover:underline"
              >
                {p.title}
              </Link>
              <p className="text-sm text-gray-500">{p.date}</p>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

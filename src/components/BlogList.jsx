import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

/**
 * variant="full"    → the canonical /blogs index: <h1>, intro, every post.
 * variant="preview" → homepage teaser: <h2>, 3 latest posts, "View all" link.
 * Keeping these distinct avoids two URLs (/ and /blogs) shipping identical
 * markup and competing for the same query.
 */
const BlogList = ({ variant = "full" }) => {
  const isPreview = variant === "preview";
  const posts = isPreview ? blogPosts.slice(0, 3) : blogPosts;
  const CardHeading = isPreview ? "h3" : "h2";

  return (
    <section
      className={`bg-white px-6 ${isPreview ? "py-16" : "pt-11 pb-24 min-h-screen"}`}
    >
      <div className="max-w-7xl mx-auto">
        {isPreview ? (
          <h2 className="text-4xl font-light text-black mb-12 text-center">
            Latest from our blog
          </h2>
        ) : (
          <>
            <h1 className="text-5xl font-light text-black mb-12 text-center">
              Our Insurance Blog
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl text-center mx-auto mb-16">
              Discover expert insights, practical advice, and the latest updates in the
              world of insurance. We cover life, health, travel, business, and more.
            </p>
          </>
        )}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ id, title, date, summary, readTime, icon: Icon }) => (
            <article
              key={id}
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 p-6 flex flex-col justify-between"
            >
              <div className="mb-5">
                <div className="w-14 h-14 flex justify-center items-center rounded-full bg-orange-100 shadow-sm mx-auto mb-4">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>

                <div className="flex justify-center items-center text-sm text-gray-500 gap-4 mb-2">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" /> {date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {readTime}
                  </span>
                </div>

                <CardHeading className="text-xl font-semibold text-black mb-3 hover:text-orange-600 transition text-center">
                  <Link href={`/blog/${id}`}>{title}</Link>
                </CardHeading>

                <p className="text-gray-700 leading-relaxed text-center">{summary}</p>
              </div>

              <Link
                href={`/blog/${id}`}
                className="text-orange-600 font-semibold text-sm hover:underline mx-auto"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>

        {isPreview && (
          <div className="text-center mt-12">
            <Link
              href="/blogs"
              className="inline-block bg-[#FFE5D3] text-brand-orange font-medium px-6 py-3 rounded-full transition duration-300 hover:bg-brand-orange hover:text-white"
            >
              View all articles →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;

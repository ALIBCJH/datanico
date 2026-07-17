import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";

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
      className={`bg-white px-6 ${isPreview ? "py-16" : "pt-11 pb-20"}`}
    >
      <div className="max-w-7xl mx-auto">
        <PageHeader
          as={isPreview ? "h2" : "h1"}
          title={isPreview ? "Latest from our blog" : "Our Insurance Blog"}
          intro={
            isPreview
              ? undefined
              : "Discover expert insights, practical advice, and the latest updates in the world of insurance. We cover life, health, travel, business, and more."
          }
          className="mb-16"
        />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ id, title, date, summary, readTime, icon: Icon }) => (
            <Card
              as="article"
              key={id}
              className="p-6 flex flex-col justify-between hover:shadow-md transition"
            >
              <div className="mb-5">
                <div className="w-14 h-14 flex justify-center items-center rounded-full bg-brand-orange-muted shadow-sm mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand-orange-dark" />
                </div>

                <div className="flex justify-center items-center text-sm text-gray-500 gap-4 mb-2">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" /> {date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {readTime}
                  </span>
                </div>

                <CardHeading className="text-xl font-semibold text-black mb-3 hover:text-brand-orange-dark transition text-center">
                  <Link href={`/blog/${id}`}>{title}</Link>
                </CardHeading>

                <p className="text-gray-700 leading-relaxed text-center">{summary}</p>
              </div>

              <Link
                href={`/blog/${id}`}
                className="text-brand-orange-dark font-semibold text-sm hover:underline mx-auto"
              >
                Read More →
              </Link>
            </Card>
          ))}
        </div>

        {isPreview && (
          <div className="text-center mt-12">
            <Button href="/blogs" variant="soft" size="sm">
              View all articles →
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;

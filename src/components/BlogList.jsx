import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";

/**
 * variant="full"    → the canonical /blogs index: <h1>, intro, a featured post,
 *                     then every other post.
 * variant="preview" → homepage teaser: <h2>, 3 latest posts, "View all" link.
 * Keeping these distinct avoids two URLs (/ and /blogs) shipping identical
 * markup and competing for the same query.
 */

const Meta = ({ date, readTime }) => (
  <div className="flex items-center gap-3 text-xs text-gray-500">
    <span className="flex items-center gap-1">
      <CalendarDays size={14} aria-hidden="true" /> {date}
    </span>
    <span className="flex items-center gap-1">
      <Clock size={14} aria-hidden="true" /> {readTime}
    </span>
  </div>
);

const ReadMore = () => (
  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange-dark">
    Read more
    <ArrowRight
      size={16}
      aria-hidden="true"
      className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
    />
  </span>
);

const ArticleCard = ({ post, Heading }) => {
  const { id, title, date, summary, readTime, icon: Icon } = post;
  return (
    <Card
      as={Link}
      href={`/blog/${id}`}
      className="group flex h-full flex-col p-6 transition duration-300 hover:border-brand-orange hover:shadow-lg motion-safe:hover:-translate-y-1"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-orange-muted text-brand-orange-dark">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <Meta date={date} readTime={readTime} />
      </div>
      <Heading className="mt-4 text-lg font-semibold text-black">{title}</Heading>
      <p className="mt-2 flex-1 leading-relaxed text-gray-600">{summary}</p>
      <ReadMore />
    </Card>
  );
};

const FeaturedCard = ({ post }) => {
  const { id, title, date, summary, readTime, icon: Icon } = post;
  return (
    <Card
      as={Link}
      href={`/blog/${id}`}
      className="group mb-10 grid overflow-hidden transition duration-300 hover:border-brand-orange hover:shadow-lg motion-safe:hover:-translate-y-1 md:grid-cols-2"
    >
      <div className="flex items-center justify-center bg-brand-orange-tint p-10">
        <Icon className="text-brand-orange" size={72} aria-hidden="true" />
      </div>
      <div className="p-6 sm:p-8">
        <span className="inline-block rounded-full bg-brand-orange-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange-dark">
          Latest post
        </span>
        <div className="mt-3">
          <Meta date={date} readTime={readTime} />
        </div>
        <h2 className="mt-3 text-2xl font-semibold text-black">{title}</h2>
        <p className="mt-3 leading-relaxed text-gray-600">{summary}</p>
        <ReadMore />
      </div>
    </Card>
  );
};

const BlogList = ({ variant = "full" }) => {
  const isPreview = variant === "preview";
  const posts = isPreview ? blogPosts.slice(0, 3) : blogPosts;
  const Heading = isPreview ? "h3" : "h2";

  const featured = isPreview ? null : posts[0];
  const gridPosts = isPreview ? posts : posts.slice(1);

  return (
    <section className={`bg-white px-6 ${isPreview ? "py-16" : "pt-11 pb-20"}`}>
      <div className="max-w-7xl mx-auto">
        <PageHeader
          as={isPreview ? "h2" : "h1"}
          title={isPreview ? "Latest from our blog" : "Our Insurance Blog"}
          intro={
            isPreview
              ? undefined
              : "Expert insights and practical advice on insurance in Kenya — life, health, motor, travel and business, in plain language."
          }
          className="mb-12"
        />

        {featured && <FeaturedCard post={featured} />}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post) => (
            <ArticleCard key={post.id} post={post} Heading={Heading} />
          ))}
        </div>

        {isPreview && (
          <div className="text-center mt-12">
            <Button href="/blogs" variant="soft" size="sm">
              View all articles <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;

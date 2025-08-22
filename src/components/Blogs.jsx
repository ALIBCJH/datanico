import React from "react";
import { CalendarDays, Clock, HeartPulse, User, Car } from "lucide-react";
import { Link, Route, Routes } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Why Life Insurance is a Must for Every Family",
    date: "June 5, 2025",
    summary:
      "Life insurance offers peace of mind by providing financial security to your loved ones in case of unexpected events.",
    fullContent:
      "Life insurance offers peace of mind by providing financial security to your loved ones in case of unexpected events. It helps cover living expenses, debts, and even education for dependents. Having life insurance means your family won't struggle financially if something happens to you. Learn why it's not just a policy, but a long-term investment in your family’s stability.",
    readTime: "3 min read",
    icon: User,
  },
  {
    id: 2,
    title: "Top 5 Health Insurance Myths Debunked",
    date: "May 28, 2025",
    summary: "Many people avoid getting insured due to common misconceptions.",
    fullContent:
      "Many people avoid getting insured due to common misconceptions. Some think it's too expensive, or that they don’t need it when young and healthy. This post breaks down the top 5 myths and highlights why having a solid health plan is critical — no matter your age or current condition.",
    readTime: "4 min read",
    icon: HeartPulse,
  },
  {
    id: 3,
    title: "How to Choose the Right Vehicle Insurance",
    date: "May 18, 2025",
    summary: "Confused between third-party, comprehensive, or zero-dep?",
    fullContent:
      "Confused between third-party, comprehensive, or zero-dep? Choosing the right vehicle insurance depends on your usage, car value, and risk profile. This guide explains each type clearly to help you make the right call.",
    readTime: "5 min read",
    icon: Car,
  },
];

// Blog list page
const BlogList = () => {
  return (
    <section
      className="bg-white pt-11 pb-24 px-6 min-h-screen"
      style={{ fontFamily: "Segoe UI, SegoeUI, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-light text-black mb-12 text-center">
          Our Insurance Blog
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl text-center mx-auto mb-16">
          Discover expert insights, practical advice, and the latest updates in
          the world of insurance. We cover life, health, travel, business, and
          more.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(
            ({ id, title, date, summary, readTime, icon: Icon }) => (
              <div
                key={id}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 p-6 flex flex-col justify-between"
              >
                <div className="mb-5">
                  <div className="w-14 h-14 flex justify-center items-center rounded-full bg-orange-100 shadow-sm mx-auto mb-4">
                    <Icon className="text-2xl text-orange-600" />
                  </div>

                  <div className="flex justify-center items-center text-sm text-gray-500 gap-4 mb-2">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" /> {date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-black mb-3 hover:text-orange-600 transition text-center">
                    {title}
                  </h2>

                  <p className="text-gray-700 leading-relaxed text-center">
                    {summary}
                  </p>
                </div>

                <Link
                  to={`/blog/${id}`}
                  className="text-orange-600 font-semibold text-sm hover:underline focus:outline-none mx-auto"
                >
                  Read More →
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

// Blog details page
const BlogDetails = ({ id }) => {
  const post = blogPosts.find((p) => p.id === Number(id));
  if (!post) return <p className="text-center mt-20">Blog not found</p>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {post.date} • {post.readTime}
      </p>
      <p className="text-gray-800 leading-relaxed">{post.fullContent}</p>

      <Link
        to="/"
        className="mt-8 inline-block text-orange-600 font-semibold hover:underline"
      >
        ← Back to Blog
      </Link>
    </div>
  );
};

// Wrapper with routing
const Blog = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/blog/:id" element={<RouteRenderer />} />
    </Routes>
  );
};

// Small helper to read the :id param
const RouteRenderer = () => {
  const { id } = useParams();
  return <BlogDetails id={id} />;
};

export default Blog;

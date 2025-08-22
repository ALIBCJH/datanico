import React from "react";
import { Link, useParams } from "react-router-dom";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Digital Disruption: How Technology Is Changing Insurance in Kenya",
    date: "July 1, 2025",
    fullContent: `Nowadays, almost everything is on your phone, sending money, paying bills, even ordering supper. Insurance has also started catching up. The old routine of visiting an office, queuing with documents, and waiting for weeks just to get feedback on your claim is slowly fading away.

These days, you can just dial a code or tap a few buttons and your insurance is active. Behind the scenes, insurance companies are using smarter ways to assess risk. For example, weather data can help a farmer get crop cover just before the rains. And when something goes wrong, some claims are settled within the same day especially the simple ones. If it’s a bit more complicated, a customer care officer will follow up and guide you through the process.

That said, not everyone is tech-savvy or even connected all the time. That’s why many insurers still have agents on the ground — people you can talk to, who will help you understand your options and walk you through the steps. The best companies are finding a balance: making things faster and easier through your phone, but still giving you that personal help when you need it.

At the end of the day, insurance should be simple, accessible, and actually work when you need it most.`,
  },
  {
    id: 2,
    title: "Insurance in Kenya: Tapping into a Market That’s Still Growing",
    date: "June 20, 2025",
    fullContent: `Even with all the campaigns and billboards, many Kenyans still feel like insurance is not meant for them. You’ll hear a boda boda rider in Githurai say, “Hiyo ni ya watu wako na pesa.” or a mama mboga in Meru joke that saving under the mattress is more reliable. Truth is, for a long time, insurance has felt distant — complicated, expensive, and sometimes frustrating.

But slowly, things are starting to shift. More people are beginning to ask questions, especially after going through emergencies where a little cover could have made a big difference. Whether it’s for health, motor, or business protection, Kenyans are warming up to the idea that insurance is not just for the wealthy — it can actually help anyone get back on their feet when things go wrong.

What’s helping this change is the presence of agents who take time to explain things in simple language. They understand local realities and help customers choose policies that make sense for their daily lives. Some even go the extra mile to follow up on claims and make sure you’re not left in the dark.

We’re not there yet but as trust grows, and as insurers become more transparent and accessible, insurance in Kenya has the potential to become something more people see as necessary, not optional.`,
  },
  {
    id: 3,
    title: "Microinsurance: Small Premiums, Big Protection",
    date: "June 10, 2025",
    fullContent: `For many Kenyans, the word “insurance” sounds expensive. But microinsurance is slowly changing that story. With just a few shillings per day, a family can be covered for hospital visits, accidents, or even funeral costs.

This model works because it’s flexible — you can pay using mobile money, and it doesn’t require complicated forms. Farmers, boda boda riders, and mama mbogas are already starting to see the value: instead of losing everything during a tough time, insurance cushions you just enough to get back on your feet.

The challenge? Spreading awareness and ensuring that insurers keep their promises when claims come in.`,
  },
  {
    id: 4,
    title: "The Rise of Healthtech and Insurance Partnerships",
    date: "May 28, 2025",
    fullContent: `Healthcare in Kenya is getting a digital upgrade. From mobile consultations to health monitoring apps, tech is stepping into spaces that used to be complicated and time-consuming. Insurance companies are noticing this trend and starting to partner with healthtech startups.

For example, some insurers now allow you to book doctor appointments directly from an app, or they cover telemedicine sessions. This means faster care and fewer long lines at hospitals.

The big opportunity here is making healthcare affordable and accessible — not just in Nairobi, but in rural areas where hospitals are scarce.`,
  },
  {
    id: 5,
    title: "Why Trust Is the Biggest Currency in Insurance",
    date: "May 15, 2025",
    fullContent: `At the core of insurance lies one big question: Will they be there when I need them? Many Kenyans have had experiences where claims drag for months or payouts never arrive. This has made trust the real battleground for insurers.

To rebuild this trust, insurers must go beyond flashy ads. They must pay claims promptly, communicate clearly, and show empathy to customers.

When customers feel protected instead of frustrated, that’s when insurance becomes more than a policy — it becomes a safety net people actually believe in.`,
  },
];

const BlogPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post)
    return <p className="text-center mt-20 font-montserrat">Blog not found</p>;

  const otherPosts = blogPosts.filter((p) => p.id !== post.id);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 font-montserrat">
      {/* Main blog content */}
      <div className="lg:col-span-2">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8 text-sm">{post.date}</p>
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          {post.fullContent}
        </div>
        <Link
          to="/blogs"
          className="mt-10 inline-block text-orange-600 font-semibold hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Sidebar with other blogs */}
      <aside className="lg:col-span-1 border-l border-gray-200 pl-6">
        <h2 className="text-2xl font-semibold mb-6">Other Blogs</h2>
        <ul className="space-y-4">
          {otherPosts.map((p) => (
            <li key={p.id}>
              <Link
                to={`/blog/${p.id}`}
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
};

export default BlogPage;

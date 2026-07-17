import { Info, Target, Eye } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const pillars = [
  {
    Icon: Info,
    title: "Who we are",
    body: (
      <>
        Insurance is more than just cover — it&apos;s being there when it counts. We offer{" "}
        <span className="font-semibold text-black">service that shields</span>: expert advice,
        reliable protection, and personal support.
      </>
    ),
  },
  {
    Icon: Eye,
    title: "Our vision",
    body: "To be the most trusted, customer-driven insurance agency — known for personalised service and lasting impact.",
  },
  {
    Icon: Target,
    title: "Our mission",
    body: "To empower our clients with insurance that offers peace of mind, financial protection, and confidence in life's uncertain moments.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-[#FAFAFA] font-montserrat">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 pt-12 pb-20 text-gray-700">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-orange-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange-dark">
            About Datani
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-light text-black">
            Cover that fits, advice you can trust
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed">
            Datani is an independent insurance agency in Nyeri. We compare cover from Kenya&apos;s
            leading insurers and explain your options in plain language — so you get the right
            protection at the right price, from people who actually pick up the phone.
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map(({ Icon, title, body }) => (
            <Card
              key={title}
              className="group p-8 text-center transition duration-300 hover:shadow-lg motion-safe:hover:-translate-y-1"
            >
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-orange-muted text-brand-orange transition-transform duration-300 motion-safe:group-hover:scale-110">
                <Icon size={30} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-black">{title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{body}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/quote" variant="primary" size="lg">
            Get a free quote
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Talk to an advisor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;

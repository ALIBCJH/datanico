import Image from "next/image";
import { Quote } from "lucide-react";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const testimonials = [
  {
    id: 1,
    name: "Mark Maasai",
    role: "Small Business Owner, Nairobi",
    photo: person2,
    text: "Datani Insurance made the process of getting coverage for my shop incredibly easy. Their team is friendly, responsive, and very professional.",
  },
  {
    id: 2,
    name: "Mary Wambui",
    role: "Farmer, Kisumu County",
    photo: person1,
    text: "After an unfortunate incident on my farm, Datani Insurance came through quickly with support and compensation. I highly recommend their services to anyone in agriculture.",
  },
  {
    id: 3,
    name: "Esther Njeri",
    role: "Parent & Teacher, Nyeri",
    photo: person3,
    text: "With Datani, I finally feel secure about my family's health and future. Their customer service is outstanding and their policies are very affordable.",
  },
];

const TestimonialCard = ({ photo, name, role, text }) => (
  <Card className="group flex h-full flex-col p-6 transition duration-300 hover:shadow-lg motion-safe:hover:-translate-y-1">
    <Quote className="text-brand-orange" size={28} aria-hidden="true" />
    <p className="mt-3 flex-1 leading-relaxed text-gray-700">{text}</p>
    <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
      <Image
        src={photo}
        alt={`Photo of ${name}`}
        className="h-12 w-12 rounded-full border-2 border-brand-orange-line object-cover"
        placeholder="blur"
      />
      <div>
        <p className="font-semibold text-black">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </Card>
);

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-brand-orange-tint to-white pt-11 pb-20 px-5 sm:px-8 font-montserrat">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-orange-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange-dark">
            Testimonials
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-light text-black">What our clients say</h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Hear from the people and businesses we&apos;ve helped protect what matters most —
            from farms and family health to small shops.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map(({ id, photo, name, role, text }) => (
            <TestimonialCard key={id} photo={photo} name={name} role={role} text={text} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl bg-white px-6 py-10 text-center shadow-sm ring-1 ring-gray-100">
          <h2 className="text-2xl font-light text-black">Ready to protect what matters?</h2>
          <p className="mx-auto mt-2 max-w-lg text-gray-600">
            Join our clients across Kenya — get a free quote or talk to an advisor today.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/quote" variant="primary" size="lg">
              Get a free quote
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Talk to an advisor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

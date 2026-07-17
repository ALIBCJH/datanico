import Image from "next/image";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";

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
  <Card className="p-6 flex flex-col md:flex-row items-center md:items-start gap-4 hover:shadow-lg transition duration-300">
    <Image
      src={photo}
      alt={`${name}`}
      className="w-20 h-20 rounded-full object-cover border-4 border-brand-orange"
      placeholder="blur"
    />
    <div>
      <p className="text-gray-700 italic mb-4">“{text}”</p>
      <h3 className="text-xl font-semibold text-black">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </Card>
);

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-6 font-montserrat">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <PageHeader as="h2" title="What Our Clients Say" />
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map(({ id, photo, name, role, text }) => (
          <TestimonialCard key={id} photo={photo} name={name} role={role} text={text} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

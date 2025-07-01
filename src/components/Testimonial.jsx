import React from "react";

// Import local images
import person1 from "../assets/tech/person1.jpg";
import person2 from "../assets/tech/person2.jpg";
import person3 from "../assets/tech/person3.jpg";

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
    text: "With Datani, I finally feel secure about my family’s health and future. Their customer service is outstanding and their policies are very affordable.",
  },
];

const TestimonialCard = ({ photo, name, role, text }) => (
  <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-4 border border-gray-100 hover:shadow-lg transition duration-300">
    <img
      src={photo}
      alt={`${name}'s photo`}
      className="w-20 h-20 rounded-full object-cover border-4 border-orange-500"
    />
    <div>
      <p className="text-gray-700 italic mb-4">“{text}”</p>
      <h3 className="text-xl font-semibold text-black">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section
      className="bg-white py-16 px-6"
      style={{ fontFamily: "Segoe UI, SegoeUI, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-light text-black mb-6">
          What Our Clients Say
        </h2>
        
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map(({ id, photo, name, role, text }) => (
          <TestimonialCard
            key={id}
            photo={photo}
            name={name}
            role={role}
            text={text}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

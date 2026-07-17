import Testimonials from "@/components/Testimonial";

export const metadata = {
  title: "Client Testimonials",
  description:
    "Read what Datani Insurance Agency clients across Kenya say about our service, claims support and personalized cover.",
  alternates: { canonical: "/testimonial" },
};

export default function TestimonialPage() {
  return <Testimonials />;
}

import Claims from "@/components/Claims";

export const metadata = {
  title: "How Claims Work",
  description:
    "Learn how to file an insurance claim with Datani Insurance Agency in three simple steps — notify us, submit documents, get compensated.",
  alternates: { canonical: "/claims" },
};

export default function ClaimsPage() {
  return <Claims />;
}

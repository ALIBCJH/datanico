import ClaimForm from "@/components/ClaimForm";

export const metadata = {
  title: "File a Claim",
  description:
    "File your insurance claim online with Datani Insurance Agency. Submit your details and our team will process it promptly.",
  alternates: { canonical: "/claims/file" },
};

export default function ClaimPage() {
  return <ClaimForm />;
}

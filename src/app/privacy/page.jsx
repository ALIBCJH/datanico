import PageHeader from "@/components/ui/PageHeader";
import { CONTACT } from "@/data/constants";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Datani Insurance Agency collects, uses, shares and protects your personal data, and your rights under Kenya's Data Protection Act, 2019.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="pt-11 pb-20 px-6 max-w-3xl mx-auto">
      <PageHeader
        as="h1"
        align="left"
        title="Privacy Policy"
        intro="How Datani Insurance Agency collects, uses and protects your personal information."
        className="mb-3"
      />
      <p className="mb-10 text-sm text-gray-500">Last updated: July 2026</p>

      <div className="legal-content">
        <p>
          Datani Insurance Agency (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an
          insurance intermediary based at {CONTACT.address}. We are committed to protecting your
          privacy and handling your personal data responsibly and in line with the{" "}
          <strong>Data Protection Act, 2019</strong> of Kenya. This policy explains what
          information we collect, why we collect it, and the choices you have.
        </p>

        <h2>1. Information we collect</h2>
        <p>When you use our website or contact us, we may collect:</p>
        <ul>
          <li>
            <strong>Contact details</strong> you give us — your name, phone number and email
            address.
          </li>
          <li>
            <strong>Enquiry details</strong> — the type of cover you&apos;re interested in, claim
            or policy information, and anything you tell us in a message.
          </li>
          <li>
            <strong>Technical data</strong> — basic information your browser sends (such as device
            and usage data) and cookies, to help the site work and improve.
          </li>
        </ul>

        <h2>2. How we use your information</h2>
        <ul>
          <li>To respond to your enquiries and provide the insurance quotes you request.</li>
          <li>To help you arrange, review, renew or claim on a policy.</li>
          <li>To contact you about your request by phone, email or WhatsApp.</li>
          <li>To meet our legal, regulatory and record-keeping obligations.</li>
        </ul>

        <h2>3. Our legal basis</h2>
        <p>
          We process your personal data on the basis of your <strong>consent</strong> (which you
          give when you submit a form or ask us to contact you) and our{" "}
          <strong>legitimate interest</strong> in responding to and servicing your request. You
          can withdraw your consent at any time (see &ldquo;Your rights&rdquo; below).
        </p>

        <h2>4. Sharing your information</h2>
        <p>
          To arrange cover, we may share the details you provide with the{" "}
          <strong>underwriters and insurers</strong> we work with, and with service providers who
          help us operate (for example email or hosting providers). We may also disclose
          information where required by law or by a regulator. <strong>We do not sell your
          personal data.</strong>
        </p>

        <h2>5. How long we keep it</h2>
        <p>
          We keep your personal data only for as long as necessary to respond to your enquiry,
          service any resulting policy, and meet our legal and regulatory obligations, after
          which it is securely deleted or anonymised.
        </p>

        <h2>6. Your rights</h2>
        <p>Under the Data Protection Act, 2019, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Ask us to correct data that is inaccurate or incomplete.</li>
          <li>Ask us to delete your data, or object to or restrict how we use it.</li>
          <li>Withdraw your consent at any time.</li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or call{" "}
          <a href={`tel:+${CONTACT.phoneIntl}`}>{CONTACT.phone}</a>. You also have the right to
          lodge a complaint with the Office of the Data Protection Commissioner (ODPC) of Kenya.
        </p>

        <h2>7. Cookies</h2>
        <p>
          Our website uses cookies to help it function and to understand how it is used. You can
          accept or reject non-essential cookies via the banner shown on your first visit, and you
          can control cookies through your browser settings at any time.
        </p>

        <h2>8. Security</h2>
        <p>
          We take reasonable technical and organisational measures to protect your personal data
          against loss, misuse and unauthorised access. No method of transmission over the
          internet is completely secure, but we work to safeguard your information.
        </p>

        <h2>9. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The latest version will always be available
          on this page with its effective date.
        </p>

        <h2>10. Contact us</h2>
        <p>
          If you have any questions about this policy or your data, contact us at{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>,{" "}
          <a href={`tel:+${CONTACT.phoneIntl}`}>{CONTACT.phone}</a>, or {CONTACT.address}.
        </p>
      </div>
    </section>
  );
}

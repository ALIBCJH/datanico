import PageHeader from "@/components/ui/PageHeader";
import { CONTACT } from "@/data/constants";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions for using the Datani Insurance Agency website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="pt-11 pb-20 px-6 max-w-3xl mx-auto">
      <PageHeader
        as="h1"
        align="left"
        title="Terms of Service"
        intro="The terms on which you may use the Datani Insurance Agency website and services."
        className="mb-3"
      />
      <p className="mb-10 text-sm text-gray-500">Last updated: July 2026</p>

      <div className="legal-content">
        <p>
          These terms govern your use of the Datani Insurance Agency (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, &ldquo;our&rdquo;) website and the services offered through it. By
          using this website or contacting us for a quote, claim or enquiry, you agree to these
          terms.
        </p>

        <h2>1. About our service</h2>
        <p>
          Datani Insurance Agency is an <strong>insurance intermediary</strong> based in Nyeri,
          Kenya. We help individuals and businesses compare and arrange cover from licensed
          underwriters. We are not the underwriter of any policy; the insurer named on your policy
          carries the risk and issues the cover.
        </p>

        <h2>2. Quotes and cover</h2>
        <ul>
          <li>
            Quotes and information on this site are <strong>indicative</strong> and for general
            guidance only.
          </li>
          <li>
            No quote, message or page on this site is a binding offer of insurance. Cover only
            begins once an insurer has accepted your application, issued a policy, and the required
            premium has been paid.
          </li>
          <li>
            The cover you receive is subject to the terms, conditions and exclusions of the
            insurer&apos;s policy document, which will prevail.
          </li>
        </ul>

        <h2>3. Your responsibilities</h2>
        <p>
          You agree to provide accurate, complete and up-to-date information when you request a
          quote, buy a policy or make a claim. Giving false information or failing to disclose
          material facts can affect your cover and may lead an insurer to decline a claim.
        </p>

        <h2>4. Use of the website</h2>
        <p>
          You agree to use this website lawfully and not to misuse it, interfere with its
          operation, or attempt to gain unauthorised access to it. The content on this site is
          provided for general information and does not constitute financial or legal advice.
        </p>

        <h2>5. Intellectual property</h2>
        <p>
          The content, branding and materials on this website belong to Datani Insurance Agency or
          its licensors and may not be copied or reused without our permission.
        </p>

        <h2>6. Third-party links</h2>
        <p>
          Our site may link to third-party websites (for example insurers or social media). We are
          not responsible for the content or privacy practices of those sites.
        </p>

        <h2>7. Limitation of liability</h2>
        <p>
          The website is provided &ldquo;as is&rdquo;. To the extent permitted by law, we are not
          liable for any indirect or consequential loss arising from your use of the website.
          Nothing in these terms limits any liability that cannot be excluded under the laws of
          Kenya.
        </p>

        <h2>8. Governing law</h2>
        <p>
          These terms are governed by the laws of Kenya, and any disputes are subject to the
          jurisdiction of the Kenyan courts. As an insurance intermediary, we operate under the
          regulatory framework of the Insurance Regulatory Authority (IRA).
        </p>

        <h2>9. Changes to these terms</h2>
        <p>
          We may update these terms from time to time. The latest version will always be available
          on this page with its effective date.
        </p>

        <h2>10. Contact us</h2>
        <p>
          Questions about these terms? Contact us at{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>,{" "}
          <a href={`tel:+${CONTACT.phoneIntl}`}>{CONTACT.phone}</a>, or {CONTACT.address}.
        </p>
      </div>
    </section>
  );
}

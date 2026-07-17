// Renders structured data as a JSON-LD script. Passing the JSON as a text child
// (rather than raw HTML injection) keeps this XSS-safe: React escapes the text and
// the browser un-escapes it in script.textContent, so crawlers parse valid JSON.
export default function JsonLd({ data }) {
  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}

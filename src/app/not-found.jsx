import Link from "next/link";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 font-montserrat">
      <h1 className="text-6xl font-light text-brand-orange mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link
        href="/"
        className="bg-brand-orange text-white px-6 py-3 rounded-md font-medium hover:brightness-95 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}

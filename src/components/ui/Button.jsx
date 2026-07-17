import Link from "next/link";

/**
 * Shared button/link primitive — one place for the site's CTA styling.
 *
 * Renders as:
 *   - next/link  when `href` is an internal path ("/...")
 *   - <a>        when `href` is external / tel: / mailto:
 *   - <button>   otherwise (pass `type`, `onClick`, `disabled`, ...)
 */
const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

const variants = {
  primary: "bg-brand-orange text-white shadow-md hover:brightness-95",
  outline:
    "border border-brand-orange text-brand-orange-dark hover:bg-brand-orange-tint",
  soft: "bg-brand-orange-soft text-brand-orange-dark hover:bg-brand-orange hover:text-white",
  ghost: "text-brand-orange-dark hover:bg-brand-orange-tint",
  neutral:
    "border border-gray-300 text-gray-700 hover:bg-gray-50",
};

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-lg px-8 py-3.5",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const cls = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className={cls} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

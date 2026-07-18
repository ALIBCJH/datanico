import Link from "next/link";

/**
 * Shared button/link primitive — one place for the site's CTA styling.
 *
 * Renders as:
 *   - next/link  when `href` is an internal path ("/...")
 *   - <a>        when `href` is external / tel: / mailto:
 *   - <button>   otherwise (pass `type`, `onClick`, `disabled`, ...)
 */
// Buttons carry a resting shadow so they read as clickable even without hover
// (important on touch, where there's no hover state), plus a subtle lift on
// hover and a press-down on click for tactile feedback. All motion is gated
// behind motion-safe so it respects prefers-reduced-motion.
const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none motion-safe:disabled:hover:translate-y-0";

const variants = {
  primary: "bg-brand-orange text-white shadow-md hover:brightness-95 hover:shadow-lg",
  outline:
    "border border-brand-orange text-brand-orange-dark shadow-sm hover:bg-brand-orange-tint hover:shadow-md",
  soft: "bg-brand-orange-soft text-brand-orange-dark shadow-sm hover:bg-brand-orange hover:text-white hover:shadow-md",
  ghost: "text-brand-orange-dark hover:bg-brand-orange-tint",
  neutral:
    "border border-gray-300 text-gray-700 shadow-sm hover:bg-gray-50 hover:shadow-md",
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

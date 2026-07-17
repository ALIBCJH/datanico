/**
 * Standard page/section header — one consistent H1 + intro treatment across
 * the site (replaces ~12 hand-rolled heading styles).
 */
export default function PageHeader({
  title,
  intro,
  as: As = "h1",
  align = "center",
  className = "",
  children,
}) {
  const alignText = align === "center" ? "text-center" : "text-left";
  const wrap = align === "center" ? "mx-auto" : "";

  return (
    <header className={`max-w-3xl ${wrap} ${alignText} ${className}`}>
      <As className="text-4xl sm:text-5xl font-light text-black">{title}</As>
      {intro && (
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">{intro}</p>
      )}
      {children}
    </header>
  );
}

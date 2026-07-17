/**
 * Standard surface card — consistent radius / border / shadow.
 * Padding is left to the caller since it varies by context.
 */
export default function Card({ as: As = "div", className = "", children, ...props }) {
  return (
    <As
      className={`bg-white rounded-2xl border border-gray-200 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </As>
  );
}

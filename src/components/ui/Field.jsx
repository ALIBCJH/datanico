/**
 * Form field primitive — one label/input treatment shared by every form.
 *
 * Use the exported `inputClass` on the <input>/<select>/<textarea> and wrap
 * with <Field> for the associated label + required marker.
 */
export const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus:ring-2 focus:ring-brand-orange";

export default function Field({ label, htmlFor, required = false, className = "", children }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-brand-orange">*</span>}
      </label>
      {children}
    </div>
  );
}

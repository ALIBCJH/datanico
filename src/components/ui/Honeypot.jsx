/**
 * Hidden anti-spam honeypot field. Real users never see or fill it (it's
 * display:none, off-tab, no autofill); bots that fill every input give
 * themselves away. The server rejects any submission where `company` is set.
 */
export default function Honeypot({ value, onChange }) {
  return (
    <div className="hidden" aria-hidden="true">
      <label htmlFor="company">Company (leave this field blank)</label>
      <input
        id="company"
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

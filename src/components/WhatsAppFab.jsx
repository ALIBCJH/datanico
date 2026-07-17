import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { CONTACT } from "@/data/constants";

/**
 * Floating WhatsApp button — fixed to the bottom-right so it stays visible as
 * the page scrolls. Sits below the cookie banner / mobile menu (z-40).
 */
export default function WhatsAppFab() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{ "--pulse-color": "rgba(37, 211, 102, 0.55)" }}
      className="channel-icon fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:brightness-95 motion-safe:hover:scale-105"
    >
      <WhatsAppIcon className="text-2xl" />
    </a>
  );
}

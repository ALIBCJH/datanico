import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50">
      <p className="text-sm text-center md:text-left">
        We use cookies to ensure you get the best experience on our website. By
        continuing, you agree to our use of cookies.
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleAccept}
          className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-700"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="bg-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-800"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;

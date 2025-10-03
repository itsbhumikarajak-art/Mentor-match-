import React, { useEffect, useState } from 'react';

const CookieConsent = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  // Check if the user has already accepted cookies
  useEffect(() => {
    const consentCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookieConsent='));

    if (consentCookie) {
      setIsConsentGiven(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    // Set the cookie for 1 year
    document.cookie = "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365;

    // Update the state to hide the banner
    setIsConsentGiven(true);
  };

  if (isConsentGiven) {
    return null;  // Hide the banner if consent is given
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '10px',
        left: '10px',
        backgroundColor: '#fff',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
    >
      <p>
        We use cookies to enhance your experience. By continuing to visit this site, you agree to our
        <a href="/privacy-policy" style={{ textDecoration: 'underline' }}>
          Privacy Policy
        </a>.
      </p>
      <button
        onClick={handleAcceptCookies}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;

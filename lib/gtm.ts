// lib/gtm.ts
export const GTM_ID = 'G-BVV89VC2BC';

export const initializeGTM = () => {
  if (typeof window !== 'undefined') {
    const gtmScript = document.createElement('script');
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    gtmScript.async = true;
    document.head.appendChild(gtmScript);
    
  }
};

export const updateConsent = (consent: string) => {
    window.gtag('consent', 'update', {
      'ad_storage': consent,
      // Add other consent parameters as needed
    });
  };

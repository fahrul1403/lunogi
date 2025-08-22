import { updateConsent } from '@/lib/gtm';
import { useState, useEffect } from 'react';

export const ConsentManager = () => {
  const [consentGiven, setConsentGiven] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showConsent, setShowConsent] = useState(true); // State to control visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const userConsent = localStorage.getItem('userConsent');
    if (userConsent === 'accepted') {
      setConsentGiven(true);
    } else if (userConsent === 'declined') {
      setConsentGiven(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('userConsent', 'accepted');
    setConsentGiven(true);
    updateConsent('granted');
  };

  const handleDecline = () => {
    localStorage.setItem('userConsent', 'declined');
    setConsentGiven(false);
    updateConsent('denied');
  };

  const handleClose = () => {
    setShowConsent(false); // Hide the consent manager
  };

  if (loading || !showConsent) {
    return null;
  }

  return (
    <div className='w-full fixed bottom-0'>
      {!consentGiven && (
        <div className='bg-gradient-to-b p-2 from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 flex flex-row w-full justify-center px-5 space-x-10 mx-auto items-center'>
          <p className='text-xs'>We use cookies for analytics. Please consent to tracking:</p>
          <div className='flex flex-row space-x-5'>
            <button className='bg-white text-blue3 rounded-full px-5 py-1 shadow-lg text-xs' onClick={handleAccept}>Accept</button>
            <button className='text-xs underline' onClick={handleDecline}>Decline</button>
          </div>
          <button className='text-xs' onClick={handleClose}>x</button>
        </div>
      )}
    </div>
  );
};

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const SiteContext = createContext();

// Provider component
export const SiteProvider = ({ children }) => {
  // Initialize from localStorage if available, otherwise default to 'turkish'
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'turkish';
  });

  // Sync language state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    console.log('Language saved to localStorage:', language);
  }, [language]);

  return (
    <SiteContext.Provider value={{ language, setLanguage }}>
      {children}
    </SiteContext.Provider>
  );
};

// Hook to use the context easily
export const useSite = () => useContext(SiteContext);

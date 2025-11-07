// src/i18n/LanguageContext.tsx
'use client';

import { createContext, useState, useContext, PropsWithChildren } from 'react';

type Language = 'en' | 'es';

type LanguageContextProps = {
  language: Language;
  toggleLanguage: () => void;
};

// Create the context with a default value (it will be overridden by the provider)
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Define the provider component
export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>('en'); // Default to English

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const value = { language, toggleLanguage };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to easily consume the context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
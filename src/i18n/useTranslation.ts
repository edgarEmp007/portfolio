// src/i18n/useTranslation.ts
import { useLanguage } from './LanguageContext';
import en from './en.json';
import es from './es.json';

// Type assertion for safety
const translations = {
  en: en as typeof es, // Assume 'es' structure is the master type
  es: es,
};

export const useTranslation = () => {
  const { language } = useLanguage();

  // Return the translation object corresponding to the current language
  return translations[language];
};
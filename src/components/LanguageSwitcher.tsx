// src/components/LanguageSwitcher.tsx
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        onClick={language === 'en' ? toggleLanguage : undefined}
        disabled={language === 'es'}
        className={language === 'es' ? styles.active : ''}
      >
        [ES]
      </button>
      <span className={styles.divider}>/</span>
      <button
        onClick={language === 'es' ? toggleLanguage : undefined}
        disabled={language === 'en'}
        className={language === 'en' ? styles.active : ''}
      >
        [EN]
      </button>
    </div>
  );
};

export default LanguageSwitcher;
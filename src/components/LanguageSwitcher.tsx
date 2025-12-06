'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = (newLocale: 'en' | 'es') => {
    router.replace({ pathname }, { locale: newLocale });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
    >
      <button
        onClick={() => toggleLanguage('es')}
        className={`text-sm font-medium transition-colors ${locale === 'es' ? 'text-[var(--accent)]' : 'text-gray-400 hover:text-white'
          }`}
      >
        ES
      </button>
      <span className="text-gray-600">/</span>
      <button
        onClick={() => toggleLanguage('en')}
        className={`text-sm font-medium transition-colors ${locale === 'en' ? 'text-[var(--accent)]' : 'text-gray-400 hover:text-white'
          }`}
      >
        EN
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;
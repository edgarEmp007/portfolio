'use client'; // Necesario para usar useState

import Image from 'next/image';

import { useState, useEffect } from 'react';
import ContributionGraph from '@/components/ContributionGraph';

import contributionsData from '@/data/bitbucket-stats.json';
import TypingAnimation from '@/components/TypingAnimation';
import styles from './HomePage.module.css';
import { useTranslation } from '@/i18n/useTranslation';
import CaseStudies from '@/components/CaseStudies';
import Arsenal from '@/components/Arsenal';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ContactForm from '@/components/ContactForm'; // Add this import

// Esta es tu función "wrapper" para obtener los datos
/*async function getBitbucketContributions() {
  try {
    // Reemplaza esta URL con la URL real de tu función serverless
    const res = await fetch('https://bitbucket-stats.vercel.app/api/bitbucket_stats', {
      // Forzamos a que no use caché para obtener siempre datos frescos
      cache: 'no-store' 
    });

    if (!res.ok) {
      throw new Error('Falló la obtención de datos');
    }
    
    return res.json();

  } catch (error) {
    console.error('Error fetching contributions:', error);
    // Devolvemos un arreglo vacío en caso de error para que la página no se rompa
    return [];
  }
}*/

// La página ahora es un componente asíncrono
export default function HomePage() {

  // 1. Llamamos a la función para obtener los datos en el servidor
  const t = useTranslation();
  const [contributions, setContributions] = useState(contributionsData)
  const [viewMode, setViewMode] = useState<'normal' | 'fullscreen'>('normal');

  /*useEffect(() => {
    getBitbucketContributions().then(data => setContributions(data));
  }, []);*/

  // 2. Le pasamos los datos al componente a través de props
  return (
    <>
      <header className={styles.mainHeader}>
        <LanguageSwitcher />
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.leftPanel}>
              <div className={styles.photoContainer}>
                <div className={styles.terminalHeader}>
                  {t.terminalHeaders.userInfo}
                </div>
                <Image
                  src="/my-profile.png"
                  alt="Perfil de Edgar Macias"
                  width={250}
                  height={250}
                  className={styles.profileImageHacker}
                  priority
                />
                <div className={styles.userStatus}>
                  <span className={styles.statusIndicator}></span>
                  STATUS: <span className={styles.statusText}>SECURE_SESSION</span>
                </div>
              </div>
            </div>
            <div className={styles.rightPanel}>
              <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                  {t.terminalHeaders.rootAccess}
                </div>
                <div className={styles.terminalBody}>
                  <div className={`${styles.terminalLine} ${styles.title}`}>
                    <span className={styles.prompt}>&gt; </span>
                    <TypingAnimation text={t.hero.title} speed={80} delay={1000} />
                  </div>
                  <div className={`${styles.terminalLine} ${styles.subtitle}`}>
                    <span className={styles.prompt}>&gt; </span>
                    <TypingAnimation
                      text={t.hero.subtitle}
                      speed={70}
                      delay={3500}
                    />
                  </div>
                  <div className={`${styles.terminalLine} ${styles.description}`}>
                    <span className={styles.prompt}>&gt; </span>
                    <TypingAnimation
                      text={t.hero.description1}
                      speed={30}
                      delay={6000}
                    />
                  </div>
                  <div className={`${styles.terminalLine} ${styles.description}`}>
                    <span className={styles.prompt}>&gt; </span>
                    <TypingAnimation
                      text={t.hero.description2}
                      speed={30}
                      delay={8000}
                    />
                  </div>
                  <div className={`${styles.terminalLine} ${styles.socialLinks}`}>
                    <span className={styles.prompt}>&gt; </span>
                    <a
                      href="https://github.com/DevCybSec"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.hero.github}
                    </a>
                    <a
                      href="https://linkedin.com/in/edgar-macias-devcybsec"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.hero.linkedin}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW: Mission Briefing Section --- */}
        <section className={styles.contributionsSection}>
          <h2 className={styles.sectionTitle}>{t.missionBriefing.title}</h2>
          <p className={styles.sectionDescription}>{t.missionBriefing.body}</p>
        </section>

        {/* --- NEW: Case Studies Section --- */}
        <section className={styles.contributionsSection}>
          <CaseStudies
            title={t.caseStudies.title}
            projects={t.caseStudies.projects}
          />
        </section>

        {/* --- NEW: Cyber Arsenal Section --- */}
        <section className={styles.contributionsSection}>
          <Arsenal title={t.arsenal.title} items={t.arsenal.items} />
        </section>

        {/* --- Contributions Section (Refactored) --- */}
        <section className={styles.contributionsSection}>
          <h2 className={styles.sectionTitle}>{t.contributions.title}</h2>
          <p className={styles.sectionDescription}>
            {t.contributions.description}
          </p>

          <button
            onClick={() => setViewMode('fullscreen')}
            className={styles.exploreButton}
          >
            {t.contributions.button}
          </button>

          <ContributionGraph
            contributions={contributions}
            viewMode="normal"
            onClose={() => {}}
          />

          {viewMode === 'fullscreen' && (
            <ContributionGraph
              contributions={contributions}
              viewMode="fullscreen"
              onClose={() => setViewMode('normal')}
            />
          )}
        </section>
        {/* --- NEW: Contact Form Section --- */}
      <section className={styles.contributionsSection}>
        <ContactForm />
      </section>  
        {/* --- NEW: CTA Section --- */}
        <section className={styles.contributionsSection}>
          <h2 className={styles.sectionTitle}>{t.cta.title}</h2>
          <p className={styles.sectionDescription}>{t.cta.body}</p>
          <a
            href="https://devcybsec.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.exploreButton}
          >
            {t.cta.button}
          </a>
        </section>
      </main>
    </>
  );
}

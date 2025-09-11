'use client'; // Necesario para usar useState

import Image from 'next/image';

import { useState, useEffect } from 'react';
import ContributionGraph from '@/components/ContributionGraph';

import contributionsData from '@/data/bitbucket-stats.json';
import TypingAnimation from '@/components/TypingAnimation';
import styles from './HomePage.module.css';

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
  const [contributions, setContributions] = useState(contributionsData)
  const [viewMode, setViewMode] = useState<'normal' | 'fullscreen'>('normal');

  /*useEffect(() => {
    getBitbucketContributions().then(data => setContributions(data));
  }, []);*/

  // 2. Le pasamos los datos al componente a través de props
  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.leftPanel}>
            <div className={styles.photoContainer}>
              <div className={styles.terminalHeader}>[USER_INFO]</div>
              <Image
                src="/my-profile.png" // Asegúrate de que esta ruta sea correcta
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
              <div className={styles.terminalHeader}>[ROOT_ACCESS] - SESSION_ID: 8A4B2C</div>
              <div className={styles.terminalBody}>
                <div className={`${styles.terminalLine} ${styles.title}`}>
                  <span className={styles.prompt}>&gt; </span>
                  <TypingAnimation text="Hola, soy Edgar Macias" speed={80} delay={1000} />
                </div>
                <div className={`${styles.terminalLine} ${styles.subtitle}`}>
                  <span className={styles.prompt}>&gt; </span>
                  <TypingAnimation text="Software Security Engineer" speed={70} delay={3500} />
                </div>
                <div className={`${styles.terminalLine} ${styles.description}`}>
                  <span className={styles.prompt}>&gt; </span>
                  <TypingAnimation
                    text="Fortifico sistemas y construyo defensas digitales. Bienvenido a mi terminal."
                    speed={30}
                    delay={6000}
                  />
                </div>
                <div className={`${styles.terminalLine} ${styles.socialLinks}`}>
                  <span className={styles.prompt}>&gt; </span>
                  <a href="#">[GitHub]</a>
                  <a href="#">[LinkedIn]</a>
                  <a href="#">[Secure_Contact]</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contributionsSection}>
        <h2 className={styles.sectionTitle}>[SYSTEM_LOGS]: Actividad de Desarrollo</h2>
        <p className={styles.sectionDescription}>
          Análisis de commits y contribuciones. La actividad constante es clave para la detección proactiva de vulnerabilidades en el ciclo de vida del desarrollo.
        </p>
        
        <button onClick={() => setViewMode('fullscreen')} className={styles.exploreButton}>
          &gt; ejecutar visualización_animada
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
    </main>
  );
}

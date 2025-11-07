// src/components/CaseStudies.tsx
import styles from './CaseStudies.module.css';
import homeStyles from '@/app/HomePage.module.css'; // Reuse terminal styles

// Define the type for a single project based on JSON structure
type Project = {
  name: string;
  role: string;
  challenge: string;
  securityPosture: string;
};

type CaseStudiesProps = {
  title: string;
  projects: Project[];
};

const CaseStudies = ({ title, projects }: CaseStudiesProps) => {
  return (
    <>
      <h2 className={homeStyles.sectionTitle}>{title}</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={homeStyles.terminalWindow}>
            <div className={homeStyles.terminalHeader}>{project.name}</div>
            <div className={homeStyles.terminalBody}>
              <p className={styles.line}>
                <span className={styles.prompt}>&gt; {project.role}</span>
              </p>
              <p className={styles.line}>
                <span className={styles.prompt}>&gt; {project.challenge}</span>
              </p>
              <p className={styles.line}>
                <span className={styles.prompt}>
                  &gt; {project.securityPosture}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CaseStudies;
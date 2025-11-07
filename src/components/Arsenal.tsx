// src/components/Arsenal.tsx
import styles from './Arsenal.module.css';
import homeStyles from '@/app/HomePage.module.css';
import Image from 'next/image';

type ArsenalItem = {
  name: string;
  description: string;
  url: string; // <-- We now expect this 'url' property from the JSON
};

type ArsenalProps = {
  title: string;
  items: ArsenalItem[];
};

const Arsenal = ({ title, items }: ArsenalProps) => {
  return (
    <>
      <h2 className={homeStyles.sectionTitle}>{title}</h2>
      <div className={styles.grid}>
        {items.map((item, index) => (
          // The card is now an <a> tag, making the whole thing clickable
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card} // The existing styles will apply
          >
            <Image
              src="/globe.svg" // <-- Swapped file.svg for globe.svg
              alt="External link icon" // <-- Updated alt text
              width={24}
              height={24}
              className={styles.icon}
            />
            <span className={styles.name}>{item.name}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Arsenal;
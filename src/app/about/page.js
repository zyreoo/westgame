import Image from 'next/image';
import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h1>About West Interface</h1>
        <p>Embark on an epic journey through the untamed frontier</p>
      </div>

      <div className={styles.teamSection}>
        <h2>Meet the Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <div className={styles.imageWrapper}>
              <Image
                src="/Screenshot 2025-07-02 at 19.58.02 1.jpg"
                alt="Austin - Team Member"
                width={300}
                height={400}
                objectFit="cover"
              />
            </div>
            <h3>Oliver</h3>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.imageWrapper}>
              <Image
                src="/player.png"
                alt="Oliver - Team Member"
                width={300}
                height={400}
                objectFit="cover"
              />
            </div>
            <h3>Simone</h3>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.imageWrapper}>
              <Image
                src="/ChatGPT Image 2 iul. 2025, 19_38_11.png"
                alt="Simone - Team Member"
                width={300}
                height={400}
                objectFit="cover"
              />
            </div>
            <h3>Austin</h3>
          </div>
        </div>
      </div>

      <div className={styles.creditsSection}>
        <p>This project was made with love by Austin, Oliver, and Simone</p>
      </div>
    </div>
  );
} 
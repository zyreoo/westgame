import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#home">HOME</a>
          <a href="#shop">THE SHOP</a>
          <a href="#news">NEWS</a>
          <a href="#forum">FORUM</a>
          <a href="#support">SUPPORT</a>
          <a href="#map">GAME MAP</a>
          <a href="#jobs">JOBS</a>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>THE ULTIMATE<br />WESTERN SURVIVAL RPG</h1>
            <div className={styles.buyButtons}>
              <a href="#steam" className={styles.steamButton}>
                BUY ON STEAM
                <span className={styles.price}>£19.75</span>
              </a>
              <a href="#gog" className={styles.gogButton}>
                BUY ON GOG
                <span className={styles.price}>£19.75</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.whitePlaceholder}></div>
            <h3>SURVIVE</h3>
            <p>Explore the vast and unforgiving frontier. Face bandits, wildlife, and the elements in your quest for survival.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.whitePlaceholder}></div>
            <h3>BUILD</h3>
            <p>Establish your homestead, build a ranch, or create an entire frontier town from the ground up.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.whitePlaceholder}></div>
            <h3>DEFEND</h3>
            <p>Protect your land from outlaws and rival gangs. Rally your posse and fortify your territory.</p>
          </div>
        </div>

        <section className={styles.news}>
          <h2>LATEST NEWS</h2>
          <div className={styles.newsGrid}>
            <article className={styles.newsCard}>
              <div className={styles.whitePlaceholder}></div>
              <h4>BOUNTY CONTRACTS</h4>
              <p>Track down the most notorious outlaws across the territory. New bounties posted daily!</p>
              <span className={styles.date}>December 14, 2024</span>
            </article>
            
            <article className={styles.newsCard}>
              <div className={styles.whitePlaceholder}></div>
              <h4>GOLD RUSH UPDATE</h4>
              <p>Strike it rich with our latest update! New mining mechanics and trading systems.</p>
              <span className={styles.date}>December 10, 2024</span>
            </article>
            
            <article className={styles.newsCard}>
              <div className={styles.whitePlaceholder}></div>
              <h4>WHAT'S NEXT</h4>
              <p>Sneak peek at our upcoming features - including train heists and cattle drives!</p>
              <span className={styles.date}>November 28, 2024</span>
            </article>
          </div>
          <button className={styles.viewMore}>VIEW ALL NEWS</button>
        </section>
      </main>
    </div>
  );
}

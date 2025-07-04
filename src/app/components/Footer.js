import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>GAME</h4>
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
        
        <div className={styles.footerSection}>
          <h4>BUY</h4>
          <Link href="https://store.steampowered.com" target="_blank">Steam</Link>
          <Link href="https://www.gog.com" target="_blank">GOG</Link>
          <Link href="/newsletter">Newsletter</Link>
        </div>

        <div className={styles.footerSection}>
          <h4>SUPPORT</h4>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/forums">Forums</Link>
        </div>

        <div className={styles.footerSection}>
          <h4>LEGAL</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>© 2024 West Interface. All rights reserved.</p>
      </div>
    </footer>
  );
} 
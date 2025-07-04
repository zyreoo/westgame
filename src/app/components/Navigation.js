"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <div className={styles.navTop}>
          <Link href="/" className={styles.logo}>
            West Interface
          </Link>
          
          <button 
            className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <div className={styles.links}>
            <Link href="/" onClick={toggleMenu}>Home</Link>
            <Link href="/about" onClick={toggleMenu}>About</Link>
            <Link href="/shop" onClick={toggleMenu}>Shop</Link>
            <Link href="/news" onClick={toggleMenu}>News</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </div>

          <div className={styles.cta}>
            <Link href="/shop" className={styles.ctaButton} onClick={toggleMenu}>
              Play Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 
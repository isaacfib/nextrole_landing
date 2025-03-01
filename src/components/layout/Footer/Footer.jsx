// nextrole_landing/src/components/layout/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogoColumn}>
          <div className={styles.logoContainer}>
            <img src="/assets/images/logo.svg" alt="Nextrole Logo" className={styles.logoImage} />
            <span className={styles.logoText}>Nextrole</span>
          </div>
          <p className={styles.footerDescription}>
            Empowering your career with the best opportunities.
          </p>
        </div>

        <div className={styles.footerLinksColumn}>
          <h3 className={styles.footerLinksTitle}>Quick Links</h3>
          <nav className={styles.footerNavLinksContainer}>
            <Link to="/about" className={styles.footerNavLink}>About</Link>
            <Link to="/contact-us" className={styles.footerNavLink}>Contact Us</Link>
            <Link to="/privacy-policy" className={styles.footerNavLink}>Privacy Policy</Link>
            <Link to="/terms-of-service" className={styles.footerNavLink}>Terms of Service</Link>
            <Link to="/blog" className={styles.footerNavLink}>Blog</Link>
          </nav>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Nextrole. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

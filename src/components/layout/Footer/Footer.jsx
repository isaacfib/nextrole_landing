// src/components/layout/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogoAreaContainer}>
          <img
            src="/assets/images/footer-logo-graphic.svg"
            alt="Nextrole Logo Graphic"
            className={styles.footerLogoGraphic}
          />
          <span className={styles.footerLogoText}>Nextrole</span>
        </div>
        <nav className={styles.footerNavLinksContainer}>
          <Link to="/about" className={styles.footerNavLink}>About</Link>
          <Link to="/contact-us" className={styles.footerNavLink}>Contact Us</Link>
          <Link to="/privacy-policy" className={styles.footerNavLink}>Privacy Policy</Link>
          <Link to="/terms-of-service" className={styles.footerNavLink}>Terms of Service</Link>
          <Link to="/blog" className={styles.footerNavLink}>Blog</Link>
        </nav>
      </div>
      <hr className={styles.footerSeparatorLine} />
      <div className={styles.footerBottom}>
        <p className={styles.footerCopyrightText}>
          © {currentYear} Nextrole Inc. Local Development Preview
        </p>
      </div>
    </footer>
  );
};

export default Footer;

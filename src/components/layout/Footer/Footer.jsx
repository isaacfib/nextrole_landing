// nextrole_landing/src/components/layout/Footer/Footer.jsx
import React from "react";
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
          <a href="#" className={styles.footerNavLink}>
            About
          </a>
          <a href="#" className={styles.footerNavLink}>
            Contact Us
          </a>
          <a href="#" className={styles.footerNavLink}>
            Privacy Policy
          </a>
          <a href="#" className={styles.footerNavLink}>
            Term of Service
          </a>
          <a href="#" className={styles.footerNavLink}>
            Blog
          </a>
        </nav>
      </div>
      <hr className={styles.footerSeparatorLine} />
      <div className={styles.footerBottom}>
        <p className={styles.footerCopyrightText}>
          Copyright: © {currentYear} Nextrole Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

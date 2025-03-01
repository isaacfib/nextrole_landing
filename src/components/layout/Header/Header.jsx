// nextrole_landing/src/components/layout/Header/Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className={`${styles.headerSection} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContent}>
        <div className={styles.headerLogoAreaContainer}>
          <div className={styles.logoContainer}>
            <img src="/assets/images/logo.svg" alt="Nextrole Logo" className={styles.logoImage} />
            <span className={styles.logoText}>Nextrole</span>
          </div>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.menuBar} ${mobileMenuOpen ? styles.active : ""}`}></span>
          <span className={`${styles.menuBar} ${mobileMenuOpen ? styles.active : ""}`}></span>
          <span className={`${styles.menuBar} ${mobileMenuOpen ? styles.active : ""}`}></span>
        </button>

        <nav className={`${styles.headerNavBar} ${mobileMenuOpen ? styles.mobileMenuActive : ""}`}>
          <Link to="/about" className={styles.headerNavLink}>
            About
          </Link>
          <Link to="/contact" className={styles.headerNavLink}>
            Contact Us
          </Link>
          <Link to="/blog" className={styles.headerNavLink}>
            Blog
          </Link>
          <Button className={styles.headerSignupButton} primary>
            Sign up
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

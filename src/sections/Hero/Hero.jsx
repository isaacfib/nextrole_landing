// nextrole_landing/src/sections/Hero/Hero.jsx (Updated with relative image paths)
import React from "react";
import Button from "../../components/ui/Button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.background}>
        <div className={styles.blurredGradient1}></div>
        <div className={styles.blurredGradient2}></div>
        <div className={styles.ellipse1}></div>
        <div className={styles.ellipse2}></div>
        <div className={styles.ellipse3}></div>
        <div className={styles.ellipse4}></div>
        <div className={styles.ellipse5}></div>
        <div className={styles.ellipse6}></div>
        <div className={styles.ellipse7}></div>
        <div className={styles.ellipse8}></div>
        <div className={styles.rectangle}></div>
        <div className={styles.line}></div>
      </div>

      <h1 className={styles.heroMainHeading}>
        Unlock Your Career Potential with AI-Powered Tools
      </h1>

      <p className={styles.heroDescriptionText}>
        From crafting the perfect resume to nailing the interview and finding your dream job—our
        platform does it all. Get started in minutes and take control of your job search!
      </p>

      <Button className={styles.heroCTAButton} primary>
        Get Started - For free
      </Button>

      <div className={`${styles.heroBadge} ${styles.heroBadgeCongrats}`}>
        <div className={styles.badgeIconWrapper}>
          <img
            src="assets/images/star-icon.svg"  {/* Changed to relative path */}
            alt=""
            className={`${styles.badgeStarIcon} ${styles.congrats}`}
          />
        </div>
        <span className={styles.badgeText}>Congrats! You&apos;re hired! 🎉</span>
      </div>

      <div className={`${styles.heroBadge} ${styles.heroBadgeQualified}`}>
        <div className={styles.badgeIconWrapper}>
          <img
            src="assets/images/star-icon.svg"  {/* Changed to relative path */}
            alt=""
            className={`${styles.badgeStarIcon} ${styles.qualified}`}
          />
        </div>
        <span className={styles.badgeText}>You are 86% qualified for this role</span>
      </div>
    </section>
  );
};

export default Hero;
// nextrole_landing/src/sections/WhyChooseUs/WhyChooseUs.jsx
import React from "react";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUsSection}>
      <h2 className={styles.title}>Why choose us?</h2>
      <div className={`${styles.benefitPoint} ${styles.benefitPoint1}`}>
        <img
          src="/assets/images/magic-wand-01.svg"  
          alt="AI-Powered Personalization Icon"
          className={styles.benefitIcon}
          aria-hidden="true"
        />
        <div className={styles.benefitTextContainer}>
          <h3 className={styles.benefitTitle}>AI-Powered Personalization:</h3>
          <p className={styles.benefitDescription}>
            Every feature is tailored to your unique career goals.
          </p>
        </div>
      </div>
      <div className={`${styles.verticalLine} ${styles.verticalLine1}`}></div>
      <div className={`${styles.benefitPoint} ${styles.benefitPoint2}`}>
        <img
          src="/assets/images/cube-outline.svg"
          alt="One Platform, Many Solutions Icon"
          className={styles.benefitIcon}
          aria-hidden="true"
        />
        <div className={styles.benefitTextContainer}>
          <h3 className={styles.benefitTitle}>One Platform, Many Solutions:</h3>
          <p className={styles.benefitDescription}>From resumes to interviews and beyond.</p>
        </div>
      </div>
      <div className={`${styles.verticalLine} ${styles.verticalLine2}`}></div>
      <div className={`${styles.benefitPoint} ${styles.benefitPoint3}`}>
        <img
          src="/assets/images/star-02.svg"  
          alt="Results That Matter Icon"
          className={styles.benefitIcon}
          aria-hidden="true"
        />
        <div className={styles.benefitTextContainer}>
          <h3 className={styles.benefitTitle}>Results That Matter:</h3>
          <p className={styles.benefitDescription}>
            85% of our users land interviews in ~30 days.
          </p>
        </div>
      </div>
      <div className={`${styles.verticalLine} ${styles.verticalLine3}`}></div>
      <div className={`${styles.benefitPoint} ${styles.benefitPoint4}`}>
        <img
          src="/assets/images/users-03.svg"  
          alt="Trusted by Thousands Icon"
          className={styles.benefitIcon}
          aria-hidden="true"
        />
        <div className={styles.benefitTextContainer}>
          <h3 className={styles.benefitTitle}>Trusted by Thousands:</h3>
          <p className={styles.benefitDescription}>Over 10,000 users and counting.</p>
        </div>
      </div>
      <div className={`${styles.verticalLine} ${styles.verticalLine4}`}></div>
      <button className={styles.ctaButton}>Join thousands of satisfied job seekers</button>
      <div className={styles.decorativeImage}>
        <img src="/assets/images/image-27.png" alt="" aria-hidden="true" /> 
      </div>
    </section>
  );
};

export default WhyChooseUs;
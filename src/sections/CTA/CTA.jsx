// nextrole_landing/src/sections/CTA/CTA.jsx
import React from "react";
import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaSectionContainer}>
        <div className={styles.ctaDecorativeShape}></div>
        <h2 className={styles.ctaHeading}>
          Get ready to supercharge your career with Nextrole!
        </h2>
        <button className={styles.ctaButton}>Join thousands of satisfied job seekers</button>
      </div>
    </section>
  );
};

export default CTA;

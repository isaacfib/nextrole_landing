// nextrole_landing/src/sections/HowItWorks/HowItWorks.jsx
import React from "react";
import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <section className={styles.howItWorksSection}>
      <div className={styles.backgroundBlur}></div>
      <h2 className={styles.title}>How it works</h2>
      <div className={styles.stepsContainer}>
        <div className={`${styles.step} ${styles.step1}`}>
          <div className={styles.stepTopBg}>
            <img
              className={`${styles.stepImage} ${styles.stepImage1}`}
              src="/assets/images/how-it-works-step1.png"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className={styles.stepBottomContent}>
            <div className={styles.stepTextContainer}>
              <h3 className={styles.stepTitle}>Upload your resume</h3>
              <p className={styles.stepDescription}>
                Let our AI scan your resume or start fresh with our resume builder.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.step} ${styles.step2}`}>
          <div className={styles.stepTopBg}>
            <img
              className={`${styles.stepImage} ${styles.stepImage2}`}
              src="/assets/images/how-it-works-step2.png"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className={styles.stepBottomContent}>
            <div className={styles.stepTextContainer}>
              <h3 className={styles.stepTitle}>Optimise and prep</h3>
              <p className={styles.stepDescription}>
                Enhance your resume, assess your skills, and prepare for interviews with AI-powered
                insights.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.step} ${styles.step3}`}>
          <div className={styles.stepTopBg}>
            <img
              className={`${styles.stepImage} ${styles.stepImage3}`}
              src="/assets/images/how-it-works-step3.png"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className={styles.stepBottomContent}>
            <div className={styles.stepTextContainer}>
              <h3 className={styles.stepTitle}>Find and apply</h3>
              <p className={styles.stepDescription}>
                Discover curated jobs, apply with ease, and track your progress all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.button}>Start your journey - For free</button>
    </section>
  );
};

export default HowItWorks;

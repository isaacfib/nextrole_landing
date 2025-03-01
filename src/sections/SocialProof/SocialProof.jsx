// nextrole_landing/src/sections/SocialProof/SocialProof.jsx
import React from "react";
import styles from "./SocialProof.module.css";

const SocialProof = () => {
  return (
    <section className={styles.socialProofSection}>
      <h2 className={styles.title}>Trusted by over 1,000 professionals</h2>
      <div className={styles.headshotsContainer}>
        <img
          className={`${styles.headshotImage} ${styles.headshotImage1}`}
          src="/assets/images/headshot-1.png"
          alt="Professional Headshot 1"
        />
        <img
          className={`${styles.headshotImage} ${styles.headshotImage2}`}
          src="/assets/images/headshot-2.png"
          alt="Professional Headshot 2"
        />
        <img
          className={`${styles.headshotImage} ${styles.headshotImage3}`}
          src="/assets/images/headshot-3.png"
          alt="Professional Headshot 3"
        />
        <img
          className={`${styles.headshotImage} ${styles.headshotImage4}`}
          src="/assets/images/headshot-4.png"
          alt="Professional Headshot 4"
        />
        <img
          className={`${styles.headshotImage} ${styles.headshotImage5}`}
          src="/assets/images/headshot-5.png"
          alt="Professional Headshot 5"
        />
        <img
          className={`${styles.headshotImage} ${styles.headshotImage6}`}
          src="/assets/images/headshot-6.png"
          alt="Professional Headshot 6"
        />
      </div>
      <div className={styles.testimonialsContainer}>
        <div className={`${styles.testimonialBadge} ${styles.testimonialBadge1}`}>
          <img
            className={styles.testimonialIcon}
            src="/assets/images/testimonial-icon-checkmark.png"
            alt="Testimonial Checkmark Icon"
            aria-hidden="true"
          />
          <p className={styles.testimonialText}>
            Congrats! You have been accepted to join us at AmaFlix
          </p>
        </div>
        <div className={`${styles.testimonialBadge} ${styles.testimonialBadge2}`}>
          <img
            className={styles.testimonialIcon}
            src="/assets/images/testimonial-icon-checkmark.png"
            alt="Testimonial Checkmark Icon"
            aria-hidden="true"
          />
          <p className={styles.testimonialText}>
            Your resume update is complete with a 93% ATS match
          </p>
        </div>
      </div>
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className={`${styles.decorativeEllipse} ${styles[`decorativeEllipse${index + 1}`]}`}
          aria-hidden="true"
        />
      ))}
    </section>
  );
};

export default SocialProof;

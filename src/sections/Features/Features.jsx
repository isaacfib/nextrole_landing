// nextrole_landing/src/sections/Features/Features.jsx
import React from "react";
import styles from "./Features.module.css";

const Features = () => {
  const featureCards = [
    {
      id: "resume-optimizer",
      title: "Resume Optimizer",
      description:
        "Our AI analyzes your resume and provides actionable tips to make it stand out. Get past the ATS and impress hiring managers.",
      icon: "assets/images/feature-resume-optimizer-icon.svg", // Relative path
    },
    {
      id: "interview-prep",
      title: "Interview Prep",
      description:
        "Practice with AI-driven mock interviews tailored to your role. Receive feedback on body language, tone, and answers.",
      icon: "assets/images/feature-interview-prep-icon.svg", // Relative path
    },
    {
      id: "skill-assessment",
      title: "Skill Assessment",
      description:
        "Identify the skills employers are looking for in your industry and level up with personalized recommendations.",
      icon: "assets/images/feature-skill-assessment-icon.svg", // Relative path
    },
    {
      id: "matching-job-board",
      title: "Matching Job Board",
      description:
        "Stop scrolling endlessly. Discover job listings perfectly matched to your profile and preferences.",
      icon: "assets/images/feature-matching-job-board-icon.svg", // Relative path
    },
    {
      id: "easy-application",
      title: "Easy Application Process",
      description:
        "Apply with one click and track your application progress all from a single dashboard.",
      icon: "assets/images/feature-easy-application-icon.svg", // Relative path
    },
    {
      id: "skill-assessment-duplicate",
      title: "Skill Assessment",
      description:
        "Identify the skills employers are looking for in your industry and level up with personalized recommendations.",
      icon: "assets/images/feature-skill-assessment-icon.svg", // Relative path
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.featuresSectionTitle}>Our features</h2>
      <div className={styles.featuresCardsContainer}>
        <div className={styles.featureCardRow}>
          {featureCards.slice(0, 3).map((card) => (
            <div
              key={card.id}
              className={`${styles.featureCard} ${
                styles[
                  `featureCard${card.id
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join("")}`
                ]
              }`}
            >
              <div className={styles.featureIconContainer}>
                <img src={card.icon} alt={`${card.title} icon`} />
              </div>
              <div className={styles.featureTextContainer}>
                <h3 className={styles.featureCardTitle}>{card.title}</h3>
                <p className={styles.featureCardDescription}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.featureCardRow}>
          {featureCards.slice(3, 6).map((card) => (
            <div
              key={card.id}
              className={`${styles.featureCard} ${
                styles[
                  `featureCard${card.id
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join("")}`
                ]
              }`}
            >
              <div className={styles.featureIconContainer}>
                <img src={card.icon} alt={`${card.title} icon`} />
              </div>
              <div className={styles.featureTextContainer}>
                <h3 className={styles.featureCardTitle}>{card.title}</h3>
                <p className={styles.featureCardDescription}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
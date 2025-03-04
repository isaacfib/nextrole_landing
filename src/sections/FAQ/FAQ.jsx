// nextrole_landing/src/sections/FAQ/FAQ.jsx
import React, { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const faqItems = [
    {
      id: 1,
      question: "How does the resume optimizer work?",
      answer:
        "Our resume optimizer uses AI to analyze your resume against job descriptions, highlighting areas for improvement and suggesting changes to increase your match rate. It identifies missing keywords, skills gaps, and formatting issues to help your resume pass through ATS systems and catch recruiters' attention.",
    },
    {
      id: 2,
      question: "What industries does this platform support?",
      answer:
        "NextRole supports job seekers across all major industries including technology, healthcare, finance, marketing, education, engineering, retail, hospitality, and more. Our platform is designed to be versatile and can adapt to specialized fields with industry-specific keyword optimization and role matching.",
    },
    {
      id: 3,
      question: "Is there a free version?",
      answer:
        "Yes! NextRole offers a free tier that includes basic resume analysis, limited job matching, and access to essential career resources. For more advanced features like detailed optimization recommendations, unlimited job applications, and priority support, check out our affordable premium plans.",
    },
  ];

  const toggleItem = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqTitle}>Frequently asked questions</h2>
      <div className={styles.faqListContainer}>
        {faqItems.map((item) => (
          <div key={item.id} className={styles.faqItem}>
            <div
              className={styles.faqQuestionRow}
              onClick={() => toggleItem(item.id)}
              onKeyPress={(e) => e.key === "Enter" && toggleItem(item.id)}
              role="button"
              aria-expanded={expandedItems[item.id]}
              tabIndex={0}
            >
              <p className={styles.faqQuestionText}>{item.question}</p>
              <span className={styles.faqExpandIcon}>
                {expandedItems[item.id] ? "−" : "+"}
              </span>
            </div>
            {expandedItems[item.id] && (
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            )}
            <hr className={styles.faqSeparatorLine} />
          </div>
        ))}
      </div>
      <div className={styles.faqDecorativeImage} aria-hidden="true">
        <img src="assets/images/faq-bg-image.png" alt="" /> {/* Relative path */}
      </div>
    </section>
  );
};

export default FAQ;
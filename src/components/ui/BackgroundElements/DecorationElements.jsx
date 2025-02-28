// nextrole_landing/src/components/ui/BackgroundElements/DecorationElements.jsx
import React from "react";
import styles from "./DecorationElements.module.css";

export const VerticalLinesGrid = ({ className }) => {
  const lines = Array(15)
    .fill(0)
    .map((_, index) => (
      <div
        key={`vline-${index}`}
        className={styles.headerVerticalLine}
        style={{ order: index }}
      ></div>
    ));

  return <div className={`${styles.headerLinesContainer} ${className || ""}`}>{lines}</div>;
};

export const HorizontalLinesGrid = ({ className }) => {
  const lines = Array(10)
    .fill(0)
    .map((_, index) => (
      <div
        key={`hline-${index}`}
        className={styles.headerHorizontalLine}
        style={{ order: index }}
      ></div>
    ));

  return (
    <div className={`${styles.headerHorizontalLinesContainer} ${className || ""}`}>{lines}</div>
  );
};

export const BlurredBackgroundShape = ({
  className,
  color = "#D9D4F6",
  rotation = "-13.92deg",
  top,
  left,
}) => {
  return (
    <div
      className={`${styles.blurredBackgroundShape} ${className || ""}`}
      style={{
        background: color,
        transform: `rotate(${rotation})`,
        top: top,
        left: left,
      }}
    ></div>
  );
};

export const LayeredCircles = ({ className }) => {
  return (
    <div className={`${styles.layeredCirclesContainer} ${className || ""}`}>
      <div className={styles.circleOuter}></div>
      <div className={styles.circleMiddle}></div>
      <div className={styles.circleInner}></div>
    </div>
  );
};

export const GradientWashEllipse = ({ className }) => {
  return <div className={`${styles.gradientWashEllipse} ${className || ""}`}></div>;
};

export const DecorativeDot = ({ className, size = "20px", top, left }) => {
  return (
    <div
      className={`${styles.decorativeDot} ${className || ""}`}
      style={{
        width: size,
        height: size,
        top: top,
        left: left,
      }}
    ></div>
  );
};

// nextrole_landing/src/components/ui/Button/Button.jsx
import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  className = "",
  primary = false,
  type = "button",
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${primary ? styles.primary : styles.secondary} ${
        fullWidth ? styles.fullWidth : ""
      } ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      <div className={styles.buttonTextContainer}>
        <span className={styles.buttonText}>{children}</span>
      </div>
    </button>
  );
};

export default Button;

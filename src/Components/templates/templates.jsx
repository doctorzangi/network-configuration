import React from "react";
import styles from "./templates.module.css";

const Templates = () => {
  return (
      <div className={styles.template}>
        <div className={styles.preview}></div>
        <button className={styles.button}>Use this Template</button>
    </div>
  );
};

export default Templates;

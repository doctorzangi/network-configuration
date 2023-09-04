import React from "react";
import styles from "./preview.module.css";

const Preview = () => {
  return (
    <div className={styles.align}>
      <div className={styles.main}>
        <div className={styles.preview}></div>
        <div className={styles.buttons}>
          <button>Save</button>
          <button>Edit</button>
          <button>Download</button>
          <button>Discard</button>
        </div>
      </div>
    </div>
  );
};

export default Preview;

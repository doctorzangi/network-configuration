import React from "react";
import styles from './previewPage.module.css'
import Navbar from "../../Components/navbar/navbar";
import Preview from "../../Components/preview/preview";

const PreviewPage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <Preview />
      </div>
    </div>
  );
};

export default PreviewPage;

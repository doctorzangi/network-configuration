import React from "react";
import styles from './templatesPage.module.css'
import Navbar from "../../Components/navbar/navbar";
import Sidebar from "../../Components/sidebar/sidebar";
import Templates from "../../Components/templates/templates";

const TemplatesPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <div className={styles.templates}>
          <Templates />
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;

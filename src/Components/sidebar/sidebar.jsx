import React from "react";
import styles from "./sidebar.module.css";
import kumar from '../../resources/kumar.jpeg'

const Sidebar = () => {
  return (
    <div>
      <section className={styles.sideBar}>
        <div className={styles.profile}>
          <img src={kumar} alt="userImage" />
          <p>User Name</p>
        </div>
        <div className={`${styles.side} ${styles.upload}`}>
          <input type="file" name="Text" id="template" accept=".txt" />
        </div>
        <div className={styles.side}>
          <a>Saved Files</a>
        </div>
        <div className={styles.side}>
          <a>Drafts</a>
        </div>
        <div className={styles.side}>
          <a>Trash</a>
        </div>
        <button className={styles.button}>Sign Out</button>
      </section>
    </div>
  );
};

export default Sidebar;

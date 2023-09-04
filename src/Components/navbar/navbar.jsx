import React from "react";
import styles from "./navbar.module.css";
import kumar from "../../resources/kumar.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <section className={styles.navBar}>
        <a className={styles.netConfig}>Net-Config</a>
        <a className={styles.logOut}>Log Out</a>
        <a className={styles.signOut}>Templates</a>
        <div className={styles.user}>
          <img src={kumar} alt="userImage" />
          <div>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className={styles.drop}>
            <p className={styles.log}>Log Out</p>
            <p className={styles.sign}>Sign Out</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;

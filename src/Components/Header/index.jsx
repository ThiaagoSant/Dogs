import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import styles from "./index.module.css";

const Header = () => (
  <header className={styles.header}>
    <nav className={`container ${styles.nav}`}>
      <Link to="/" className={styles.logo} arial-label="Dogs - Home">
        <Dogs />
      </Link>
      <Link to="/login" className={styles.login}>
        Login / Criar
      </Link>
    </nav>
  </header>
);

export default Header;

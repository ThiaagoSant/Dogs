import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const Header = () => (
  <nav className={`container ${styles.nav}`}>
    <Link to="/">Home</Link>
    <Link to="/login">Login / Criar</Link>
  </nav>
);

export default Header;

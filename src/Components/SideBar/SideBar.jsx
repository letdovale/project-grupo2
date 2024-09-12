import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';
import logo from './Logo (3).png'
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <nav>
        <NavLink 
          exact="true" 
          to="/" 
          className={({ isActive }) => (isActive ? styles.active : styles.link)}>
          Home
        </NavLink>
        <NavLink 
          to="/gerar-relatorio" 
          className={({ isActive }) => (isActive ? styles.active : styles.link)}>
          Gerar Relatório
        </NavLink>
      </nav>
      <button className={styles.logoutButton}>Log Out
        <div className={styles.iconButton}>
          <IoIosLogOut />
        </div>
      </button>
    </div>
  );
}

export default Sidebar;
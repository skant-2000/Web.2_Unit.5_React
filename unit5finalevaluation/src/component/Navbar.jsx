import React from 'react'
import { useSelector } from 'react-redux';
import styles from "../css/Navbar.module.css";

export default function Navbar() {
    const user = useSelector((state) => state.userName);
    console.log(user)
  return (
    <div className={styles.navBar}>
        {user}
    </div>
  )
}

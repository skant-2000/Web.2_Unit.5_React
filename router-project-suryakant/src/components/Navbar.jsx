import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.navbar} >
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="cloth">Cloth</Link>
        <Link className={styles.link} to="watch">Watch</Link>
        <Link className={styles.link} to="about">About</Link>
        <Link className={styles.link} to="faq">FAQ</Link>
        <Link className={styles.link} to="contactus">Contact Us</Link>
    </div>
  )
}

import React from 'react'
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}><Link href="/">LogoHere</Link></div>
      <div className={styles.rightNav}>
        <ul className={styles.list}>
          <li className={styles.listItem}><Link href="/">Home</Link></li>
          <li className={styles.listItem}><Link href="/input">Input</Link></li>
          <li className={styles.listItem}><Link href="/chart">Chart</Link></li>
          <li className={styles.listItem}><Link href="/doc">Documentation</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
import React from 'react'
import styles from '../styles/Testing.module.css'

const testing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.top}>Top</div>
        <div className={styles.middle}>Middle</div>
        <div className={styles.bottom}>Bottom</div>
      </div>
      
    </div>
  )
}

export default testing
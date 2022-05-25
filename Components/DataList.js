import React from 'react'
import styles from '../styles/DataList.module.css'
import DataCard from './DataCard'

const Featured = () => {
  return (
      <div className={styles.container}>
            <h1 className={styles.title}>Student Data</h1>
          <div className={styles.wrapper}>
            <DataCard />
        </div>
          
        </div>
    
  )
}

export default Featured
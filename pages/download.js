import React from 'react'
import styles from '../styles/Download.module.css'
import { Card } from 'react-bootstrap'

export default function download() {
  return (
    <>
    <div className={styles.container}>
      <h3>Your document is ready!</h3>
      <div className={styles.content}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/img/preview.png" />
          <Card.Body>
            <Card.Text><a href='/file.txt' download>Click here to download</a></Card.Text>
          </Card.Body>
          </Card>
      </div>
    </div>
    </>
  )
}

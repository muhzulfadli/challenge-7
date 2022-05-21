import React from 'react'
import styles from '../styles/DataCard.module.css'
import { Card } from 'react-bootstrap'

const DataCard = () => {
  return (
    <div className={styles.container}>
      <div className='row'>
        <div className='col'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/img/animal1.jpg" />
            <Card.Body>
              <Card.Title>Ghost Bird</Card.Title>
              <Card.Text>Approximately 3 years old</Card.Text>
              <Card.Text>ghostbird@gmail.com</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DataCard
import React from 'react'
import styles from '../styles/DataCard.module.css'
import { Card } from 'react-bootstrap'

export default function DataCard () {
  const data = [{
    name: 'Student 1',
    age: '19',
    email: 'student1@gmail.com',
    image: '/img/animal1.jpg'
  },
  {
    name: 'Student 2',
    age: '20',
    email: 'student2@gmail.com',
    image: '/img/animal2.jpg'
  },
  {
    name: 'Student 3',
    age: '19',
    email: 'student3@gmail.com',
    image: '/img/animal3.jpg'
  },
  {
    name: 'Student 4',
    age: '18',
    email: 'student4@gmail.com',
    image: '/img/animal4.jpg'
  },
  {
    name: 'Student 5',
    age: '21',
    email: 'student5@gmail.com',
    image: '/img/animal5.jpg'
  },
  {
    name: 'Student 6',
    age: '19',
    email: 'student6@gmail.com',
    image: '/img/animal6.jpg'
  },
  ];

  return data.map( (props) => {
    return (
    <div className={styles.container}>
      <div className='row'>
        <div className='col'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>{props.age}</Card.Text>
              <Card.Text>{props.email}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )  
  } ) 
  

}




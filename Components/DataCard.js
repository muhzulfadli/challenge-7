import React, {  useState, useEffect } from 'react'
import axios from 'axios';
import Zoom from 'react-medium-image-zoom'
import styles from '../styles/DataCard.module.css'
import { Card } from 'react-bootstrap'
import { useRouter } from 'next/router';


const DataCard = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    axios.get(
      'https://fejs-c7-api.herokuapp.com/api/students/?populate=*'
    ).then( res => {
      console.log(res);
      setStudents([...res.data.data])
    })
  }, []);

  const router = useRouter()

  return (
    <>
     {students.map((student, id) => {
       return (
        <div className={styles.container}>
          <div className='row'>
            <div className='col'>
              <Card style={{ width: '18rem' }} onClick={ () => router.push(`/student/${id}`)}>
                <Card.Img variant="top" src={student.attributes.photo.data.attributes.url} />
                <Card.Body>
                  <Card.Text>First Name = {student.attributes.firstname}</Card.Text>
                  <Card.Text>Last Name  ={student.attributes.lastname}</Card.Text>
                  <Card.Text>Location   ={student.attributes.location}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      )  

     })}
            </>
  )

  

  // const data = [{
  //   name: 'Student 1',
  //   age: '19',
  //   email: 'student1@gmail.com',
  //   image: '/img/animal1.jpg'
  // },
  // {
  //   name: 'Student 2',
  //   age: '20',
  //   email: 'student2@gmail.com',
  //   image: '/img/animal2.jpg'
  // },
  // {
  //   name: 'Student 3',
  //   age: '19',
  //   email: 'student3@gmail.com',
  //   image: '/img/animal3.jpg'
  // },
  // {
  //   name: 'Student 4',
  //   age: '18',
  //   email: 'student4@gmail.com',
  //   image: '/img/animal4.jpg'
  // },
  // {
  //   name: 'Student 5',
  //   age: '21',
  //   email: 'student5@gmail.com',
  //   image: '/img/animal5.jpg'
  // },
  // {
  //   name: 'Student 6',
  //   age: '19',
  //   email: 'student6@gmail.com',
  //   image: '/img/animal6.jpg'
  // },
  // ];

  // return data.map( (props) => {
  //   return (
  //   <div className={styles.container}>
  //     <div className='row'>
  //       <div className='col'>
  //         <Card style={{ width: '18rem' }}>
  //           <Card.Img variant="top" src={props.image} />
  //           <Card.Body>
  //             <Card.Title>{props.name}</Card.Title>
  //             <Card.Text>{props.age}</Card.Text>
  //             <Card.Text>{props.email}</Card.Text>
  //           </Card.Body>
  //         </Card>
  //       </div>
  //     </div>
  //   </div>
  // )  
  // } ) 
  

}



export default DataCard;
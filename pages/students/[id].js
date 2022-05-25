import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { setPDFNetworkStreamFactory } from 'pdfjs-dist/types/src/display/api'

export default function Student() {

  const [student, setStudent] = useState(null)

  const router = useRouter()
  const { id }  = router.query

  const fetchStudent = async () => {
    const response = await fetch('https://fejs-c7-api.herokuapp.com/api/students/?populate=*');
    const data = await response.json()
    setCat (data);
  }

  useEffect ( () => {
    fetchStudent()
  }, [])

  return <div>
    {student && (
      <div className={style.container}>
        <img src={student.attributes.photo.data.attributes.url} alt='' />
        <div className={styles.desc}>
          <h1>{student.attributes.firstname}{student.attributes.lastname}</h1>
          <p>{student.attributes.location}</p>
        </div>
      </div>
    )}
  </div>
}

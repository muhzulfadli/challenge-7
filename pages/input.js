import React, { useRef } from 'react'
import { Button } from "react-bootstrap"
import styles from '../styles/Input.module.css'

const input = () => {

    const inputFirstname = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()
    const inputPhoto = useRef()

    const formSubmitHandler = (event) => {
        event.preventDefault()
        const data = {
            name: inputFirstname.current.value,
            age: inputAge.current.value,
            email: inputEmail.current.value,
    }
    console.log(inputPhoto.current.files)

    // // membuat object formData
    // const formData = new formData();
    // // mengisi formData
    // formData. append('data', JSON.stringify(submittedData))
    // // memasukkan photo ke formData
    // Array.from(inputPhoto.current.files).forEach( file=> {
    //   formData.append('files.photo', file, file.name)
    // } )

    }


  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Input your data here</h3>
      </div>
      <div className={styles.inputForm}>
        <form action="/" method="post" className={styles.form} onSubmit={formSubmitHandler} >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" ref={inputFirstname}/>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" ref={inputAge} />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" ref={inputEmail} />
          <label htmlFor="photo">Photo</label>
          <input type="file" id="photo" name="photo" ref={inputPhoto} />
          <Button type="submit" className={styles.btn}>Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default input
import React, { useRef } from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import { useDropzone } from 'react-dropzone'
import { Button } from "react-bootstrap"
import styles from '../styles/Input.module.css'
import '../styles/Input.module.css'

const input = () => {

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

    const inputFirstname = useRef()
    const inputLastname = useRef()
    const inputLocation = useRef()
    const inputPhoto = useRef()

    const formSubmitHandler = async (event) => {
        event.preventDefault()
        const submittedData = {
            firstname: inputFirstname.current.value,
            lastname: inputLastname.current.value,
            location: inputLocation.current.value
    }

    // membuat object formData
    const formData = new FormData();
    // mengisi formData
    formData. append('data', JSON.stringify(submittedData))
    // memasukkan photo ke formData
    acceptedFiles.forEach( file => {
      formData.append('files.photo', file, file.path)
    })

    const res = await axios.post('https://fejs-c7-api.herokuapp.com/api/students/', formData)
    console.log(res.data)

    }


  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Input your data here</h3>
      </div>
      <div className={styles.inputForm}>
        <form action="/" method="post" className={styles.form} onSubmit={formSubmitHandler} >
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" ref={inputFirstname}/>
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" ref={inputLastname} />
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" ref={inputLocation} />
          <label htmlFor="photo">Photo</label>
          <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <p>Drag and drop your file here, or click to select files</p>
          </div>
          <ul>{files}</ul>
          <Button type="submit" className={styles.btn}>Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default input
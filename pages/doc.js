import React from 'react'
import styles from '../styles/Doc.module.css'
// Core veiwer
import { Viewer, Worker } from '@react-pdf-viewer/core'
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
// import Styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const doc = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
      <div className={styles.container}>
        <Viewer 
          fileUrl='/assets/file.pdf'
          plugins={[
            // Register plugins
            defaultLayoutPluginInstance
          ]}
        />
      </div>
      
      
        
    </Worker>
    
  )
}

export default doc
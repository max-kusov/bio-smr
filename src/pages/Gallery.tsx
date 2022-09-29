import React from 'react'
import WorkSection from '../components/WorkSection/WorkSection'
import FormQuestion from '../components/FormQuestion/FormQuestion'


import styles from './Pages.module.scss'
import WoodTypes from '../components/WoodTypes/WoodTypes'


const Gallery = () => {
  return (
    <div className={styles.page}>
      <WorkSection />
      <WoodTypes />
      <FormQuestion />
    </div>
  )
}

export default Gallery
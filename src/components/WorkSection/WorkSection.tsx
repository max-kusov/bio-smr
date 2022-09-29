import React from 'react'
import styles from './WorkSection.module.scss'
import Slider from '../Slider/Slider'

const WorkSection = () => {
  return (
    <div className={styles.root}>
      <h1>Наши работы</h1>
      <Slider />
    </div>
  )
}

export default WorkSection
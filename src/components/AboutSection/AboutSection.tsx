import React from 'react'
import styles from './AboutSection.module.scss'

import img from '../../assets/img/about-3.png'
import img2 from '../../assets/img/about-1.png'
import img3 from '../../assets/img/about-2.png'


const AboutSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.root__window}>
        <div className={styles.root__text}>
          <h1>О нас</h1>
          <span>
            BIO CWT - Изготавливаем изделия из массива дерева по индивидуальным чертежам. Мы изготавливаем стулья, кресла, шкафы, кровати и многое другое в собственной мастерской, оснащенной всем необходимым промышленным оборудованием.
          </span>
        </div>
        <div className={styles.root__img}>
          <img src={img} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
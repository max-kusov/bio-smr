import React from 'react'
import AdvantageSection from '../components/AdvantageSection/AdvantageSection'
import Calculator from '../components/Calculator/Calculator'
import FormQuestion from '../components/FormQuestion/FormQuestion'

import styles from './Pages.module.scss'

import imgArrow from '../assets/img/arrow.png'

const Price = () => {
  return (
    <div className={styles.page}>
      <div className={styles.price__calculator}>
        <h1>Узнать стоимость</h1>
        <div className={styles.price__arrow}>
          <span>воспользуйтесь калькулятор для расчета стоимости</span>
          <img src={imgArrow} alt="" />
        </div>
        <Calculator />
      </div>
      <FormQuestion />
    </div>
  )
}

export default Price
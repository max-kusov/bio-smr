import React from 'react'
import styles from './AdvantageSection.module.scss'
import Btn from '../Btn/Btn'

import imgAdvantage from '../../assets/img/advantages.png'
import { animateScroll as scroll } from 'react-scroll'


const AdvantageSection = () => {
  const toggleBottom = () => {
    scroll.scrollToBottom()
  }
  return (
    <div className={styles.root}>
      <h1>Преимущества <br /> работы с нами</h1>
      <div className={styles.root__wrapp}>
        <img src={imgAdvantage} alt="" />
        <div className={styles.root__text}>
          <p>Собственное столярное производство</p>
          <p>Обрабатываем древесину только экологически чистыми и безопасными средствами</p>
          <p>Цены от производителя, без наценок</p>
        </div>
      </div>
      <div onClick={toggleBottom}>
        <Btn text={'Получить консультацию'} />
      </div>
    </div>
  )
}

export default AdvantageSection
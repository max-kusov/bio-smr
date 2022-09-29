import React from 'react'
import styles from './MainSection.module.scss'

import imgMain from '../../assets/img/main.png'

import imgWindow1 from '../../assets/img/main1.png'
import imgWindow2 from '../../assets/img/main2.png'
import imgWindow3 from '../../assets/img/main3.png'
import Btn from '../Btn/Btn'

import { animateScroll as scroll } from 'react-scroll'



const MainSection = () => {

  const toggleBottom = () => {
    scroll.scrollToBottom()
  }

  return (
    <div className={styles.main}>
      <div className={styles.main__wrapp}>
        <img src={imgMain} alt="" className={styles.main__wallpaper} />
        <div className={styles.main__window}>
          <div>
            <h1>Изделия <br /> из массива <br /> дерева</h1>
            <h2>Дуб, бук, ясень от 1700рублей за м3</h2>
            <div onClick={toggleBottom} >
              <Btn text={'Заказать'} />
            </div>
          </div>
          <div className={styles.main__img}>
            <img src={imgWindow1} alt="" />
            <img src={imgWindow2} alt="" />
            <img src={imgWindow3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
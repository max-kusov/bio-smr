import React, { FC } from 'react'
import styles from './Slider.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const SliderData = [
  { image: './work-01.jpg' },
  { image: './work-02.jpg' },
  { image: './work-03.jpg' },
]

const Slider: FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const activeBtn = (i: number) => setCurrentIndex(i)
  const activeClass = (i: number) => i === currentIndex ? `${styles.active}` : `${styles.slide}`

  const nextImg = () => {
    currentIndex >= (SliderData.length - 1) ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
  }
  const prevImg = () => {
    currentIndex <= 0 ? setCurrentIndex(2) : setCurrentIndex(currentIndex - 1)
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slider__wrapp}>
        <FontAwesomeIcon icon={faAngleLeft} onClick={prevImg} />
        <div className={styles.slider__img}>
          {SliderData.map((item: any, i: number) => {
            return <img src={item.image} key={i} alt={`img ${i + 1}`} className={activeClass(i)} />
          })}
        </div>
        <FontAwesomeIcon icon={faAngleRight} onClick={nextImg} />
      </div>
      <div className={styles.slider__btns}>
        {SliderData.map((item: any, i: number) => {
          if (currentIndex === i) {
            return <div key='active' style={{ background: '#D5DCEE' }}></div>
          } else {
            return <div key={i} onClick={() => activeBtn(i)}></div>
          }
        })}
      </div>
    </div>
  )
}

export default Slider
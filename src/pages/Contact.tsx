import React from 'react'
import styles from './Pages.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className={styles.page} >
      <div className={styles.wrapp}>
        <div className={styles.contact__info}>
          <h1>Контакты</h1>
          <div className={styles.contact__link}>
            <div style={{ marginBottom: '15px' }}>
              <FontAwesomeIcon icon={faPhone} />
              <a href='tel:8929700000'>8(929)700-00-00</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <span> г.Самара ул.Гаражная 7</span>
            </div>
          </div>
        </div>

        <div className={styles.contact__map}>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aac932e4e32208b5e95988de19b1165c99f47f956330e80ba2dbd99ab19372846&amp;source=constructor" width="500" height="400" ></iframe>
        </div>
      </div>

    </div>
  )
}

export default Contact
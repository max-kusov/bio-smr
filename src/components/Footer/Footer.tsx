import React, { FC } from 'react'
import styles from './Footer.module.scss'
import icon from '../../assets/img/icon.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom'


const Footer: FC = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <footer className={styles.root}>
      <div className={styles.root__container}>
        <Link to='/' onClick={toggleHome}>
          <img src={icon} alt="icon-bio" className={styles.root__icon} />
        </Link>
        <div className={styles.root__contact}>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <a href='tel:8929700000'>8(929)700-00-00</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span> г.Самара ул.Гаражная 7</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
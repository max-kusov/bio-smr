import React, { FC } from 'react'
import styles from './Header.module.scss'
import icon from '../../assets/img/icon.png'
import mobileIcon from '../../assets/icon/mobileNav.png'
import { Link, NavLink } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

interface PropsType {
  isOpen: boolean,
  toggle: () => void
}

const Header: FC<PropsType> = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <header className={styles.root}>
      <div className={styles.root__container}>
        <Link to='/' onClick={toggleHome}>
          <img src={icon} alt="icon-bio" className={styles.root__icon} />
        </Link>
        <nav className={styles.root__nav}>
          <img onClick={toggle} src={mobileIcon} alt="" className={styles.root__mobileIcon} />
          <ul>
            <li><NavLink to='/gallery'>Галерея</NavLink></li>
            <li><NavLink to='/price'>Цены</NavLink></li>
            <li><NavLink to='/contact'>Контакты</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
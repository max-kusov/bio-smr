import React, { FC } from 'react'
import styles from './Sidebar.module.scss'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface PropsType {
  toggle: () => void
}

const Sidebar: FC<PropsType> = ({ toggle }) => {

  return (
    <div className={styles.root}>
      <FontAwesomeIcon icon={faXmark} onClick={toggle} />
      <nav>
        <ul>
          <li><NavLink to='/gallery' onClick={toggle} >Галерея</NavLink></li>
          <li><NavLink to='/price' onClick={toggle}>Цены</NavLink></li>
          <li><NavLink to='/contact' onClick={toggle} >Контакты</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
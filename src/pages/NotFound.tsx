import React from 'react'
import { Link } from 'react-router-dom'
import img404 from '../assets/img/404.png'
import Btn from '../components/Btn/Btn'


import styles from './Pages.module.scss'

const NotFound = () => {
  return (
    <div className={styles.page} style={{ padding: '15% 0' }}>
      <img src={img404} alt="" style={{ width: '50%' }} />
      <span style={{ margin: '5% 0' }}>Должно быть, вы потерялись, такой страницы нет.</span>
      <Link to='/'>
        <Btn text={'Вернуться на главную'} />
      </Link>
    </div>
  )
}

export default NotFound
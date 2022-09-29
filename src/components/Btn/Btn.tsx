import React, { FC } from 'react'
import styles from './Btn.module.scss'

interface propsBtn {
  text: string
}

const Btn: FC<propsBtn> = ({ text }) => {
  return (
    <button className={styles.btn}>{text}</button>
  )
}

export default Btn
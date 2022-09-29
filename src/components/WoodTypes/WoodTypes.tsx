import React, { FC } from 'react'

import styles from './WoodTypes.module.scss'

import ash from '../../assets/img/ash.png'
import buk from '../../assets/img/buk.png'
import oak from '../../assets/img/oak.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'

const wood: any = [
  {
    name: 'Дуб',
    plus: ['Долговечный', 'Прекрасная структура', 'Водостойкий'],
    minuses: ['Дорогой'],
    imgLink: oak
  },
  {
    name: 'Бук',
    plus: ['Долговечный'],
    minuses: ['Сложная обработка'],
    imgLink: buk
  },
  {
    name: 'Ясень',
    plus: ['Долговечный'],
    minuses: ['Сложная обработка'],
    imgLink: ash
  }
]

const WoodTypes: FC<any> = () => {
  return (
    <div className={styles.root}>
      <h1>Дерево с которым работаем</h1>

      <div className={styles.root__list}>
        {wood.map((item: any, i: number) => {
          return <div key={item.name + i} className={styles.root__wood}>
            <img src={item.imgLink} alt={item.name} />
            <span>{item.name}</span>
            <ul>
              {item.plus && item.plus.map((plus: any, i: number) => {
                return <li key={i + plus}><FontAwesomeIcon icon={faCheck} /> {plus}</li>
              })}
              {item.minuses && item.minuses.map((minus: any) => {
                return <li key={i + minus}><FontAwesomeIcon icon={faClose} /> {minus}</li>
              })}
            </ul>
          </div>
        })}
      </div>
    </div>
  )
}

export default WoodTypes
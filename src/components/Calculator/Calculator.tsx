import React from 'react'
import styles from './Calculator.module.scss'

const Calculator = () => {

  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('2')
  const [length, setLength] = React.useState('')
  const [width, setWidth] = React.useState('')

  const isRadioSelected = (value: string): boolean => selectedRadioBtn === value
  const costCalculation = () => +length * +width * +selectedRadioBtn * 1000

  const handeleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadioBtn(e.currentTarget.value)

  return (
    <div className={styles.root}>
      <span className={styles.root__title}>Выберите материал изделия</span>
      <div className={styles.root__radio}>
        <label className={styles.root__custom}>
          <input
            type="radio"
            name="wood"
            value='2'
            checked={isRadioSelected('2')}
            onChange={handeleRadioClick}
          />
          <span>Дуб</span>
        </label>
        <label className={styles.root__custom}>
          <input
            type="radio"
            name="wood"
            value='1'
            checked={isRadioSelected('1')}
            onChange={handeleRadioClick}
          />
          <span>Бук</span>
        </label>
        <label className={styles.root__custom}>
          <input
            type="radio"
            name="wood"
            value='1.5'
            checked={isRadioSelected('1.5')}
            onChange={handeleRadioClick}
          />
          <span>Ясень</span>

        </label>
      </div>
      <span className={styles.root__title}>Укажите длину и ширину изделия</span>
      <div className={styles.root__input}>
        <input type='number' value={length} onChange={(e) => setLength(e.target.value)} required />
        <label>Длина m<sup>2</sup></label>
      </div>

      <div className={styles.root__input}>
        <input type='number' value={width} onChange={(e) => setWidth(e.target.value)} required />
        <label>Ширина m<sup>2</sup></label>
      </div>


      <h2>{costCalculation()}руб*</h2>

      *конечная стоимость изделия может отличаться
    </div>
  )
}

export default Calculator
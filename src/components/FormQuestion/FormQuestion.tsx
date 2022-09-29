import React from 'react'
import Btn from '../Btn/Btn'
import styles from './FormQuestion.module.scss'

import imgWood from '../../assets/img/wood.png'

const FormQuestion = () => {
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [question, setQuestion] = React.useState('')


  const request = {
    name: name,
    phone: name,
    question: question
  }

  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(JSON.stringify(request))
  }

  return (
    <div className={styles.root}>
      <h1>Ещё вопросы?</h1>
      <div className={styles.root__wrapp}>
        <form className={styles.root__form} onSubmit={handleSubmit}>
          <input type="text"
            className={styles.root__input}

            placeholder='Ваше имя'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="number"
            className={styles.root__input}

            placeholder='Ваш номер телефона'
            value={phone}
            onChange={(e) => setPhone(e.target.value)} />
          <textarea placeholder='Ваш вопрос'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          {/* <div onClick={handleSubmit}> */}
          {/* <Btn text={'Отправить'} /> */}
          {/* </div> */}
          <input className={styles.root__submit} type="submit" />
        </form>
        <span>
          Напишите нам и мы обязательно ответим на все ваши вопросы.
        </span>
      </div>
      <img src={imgWood} alt="" />
    </div>
  )
}

export default FormQuestion
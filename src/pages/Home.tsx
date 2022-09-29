import React, { FC } from 'react'

import styles from './Pages.module.scss'
import MainSection from '../components/MainSection/MainSection'
import WorkSection from '../components/WorkSection/WorkSection'
import AdvantageSection from '../components/AdvantageSection/AdvantageSection'
import AboutSection from '../components/AboutSection/AboutSection'
import FormQuestion from '../components/FormQuestion/FormQuestion'
import WoodTypes from '../components/WoodTypes/WoodTypes'

const Home: FC = () => {
  return (
    <div className={styles.page}>
      <MainSection />
      <WorkSection />
      <WoodTypes />
      <AdvantageSection />
      <AboutSection />
      <FormQuestion />
    </div>
  )
}

export default Home
import React, { useState } from 'react'

import { FadeAnimation } from '../ui/Animation'

import styles from './styles.css'

function Level() {
  const [visibleDesc, setVisibleDesc] = useState(false)

  function showDesc() {
    setVisibleDesc(true)
  }

  function hideDesc() {
    setVisibleDesc(false)
  }

  return (
    <div
      className={styles.level}
      onMouseEnter={showDesc}
      onMouseLeave={hideDesc}
    >
      <div className={styles['level-current']}>Низкий</div>
      <FadeAnimation className={styles['level-desc']} hidden={!visibleDesc}>
        <h5>Показатель мелких частиц в воздухе</h5>
        <div className={styles['level-excellent']}>Очень низкий</div>
        <div className={styles['level-good']}>Низкий</div>
        <div className={styles['level-normal']}>Средний</div>
        <div className={styles['level-bad']}>Высокий</div>
        <div className={styles['level-awful']}>Очень высокий</div>
        <div>Согласно CAQI</div>
      </FadeAnimation>
    </div>
  )
}

export default Level

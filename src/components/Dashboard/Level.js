import React from 'react'

import styles from './styles.css'

function Level() {
  return (
    <div className={styles.level}>
      <div className={styles['level-current']}>Низкий</div>
      <div className={styles['level-desc']}>
        <h5>Показатель мелких частиц в воздухе</h5>
        <div className={styles['level-excellent']}>Очень низкий</div>
        <div className={styles['level-good']}>Низкий</div>
        <div className={styles['level-normal']}>Средний</div>
        <div className={styles['level-bad']}>Высокий</div>
        <div className={styles['level-awful']}>Очень высокий</div>
        <div>Согласно CAQI</div>
      </div>
    </div>
  )
}

export default Level

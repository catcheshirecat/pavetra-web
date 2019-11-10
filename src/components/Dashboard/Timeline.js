import React from 'react'

import styles from './styles.css'

let key = 0
const tmpMeasures = Array.from({ length: 10 }, () => {
  ++key
  return {
    value: 10,
    time: key
  }
})

function Timeline() {

  return (
    <div className={styles.timeline}>
      {tmpMeasures.map((m, index) => (
        <div className={styles.measure} key={m.time}>
          {(index + 1) % 3 === 0 && <span>{23 - index} ч</span>}
        </div>
      ))}
      <div className={styles['average-measure']}><h5>{25}</h5></div>
    </div>
  )
}

export default Timeline

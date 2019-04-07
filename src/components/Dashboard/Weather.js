import React from 'react'

import Humidity from '../Icon/Humidity'
import Temperature from '../Icon/Temperature'
import Wind from '../Icon/Wind'

import styles from './styles.css'

const Weather = () => {
  return (
    <div className={styles.weather}>
      <span>14:38</span>
      <span title="Температура">
        <Temperature />
        +7
      </span>
      <span title="Влажность">
        <Humidity />
        20%
      </span>
      <span title="Ветер">
        <Wind />
        16 🡵
      </span>
    </div>

  )
}

export default Weather
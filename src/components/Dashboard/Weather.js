import React, { memo, useEffect, useState } from 'react'

import Humidity from '../Icon/Humidity'
import Temperature from '../Icon/Temperature'
import Wind from '../Icon/Wind'

import styles from './styles.css'

function Weather(props) {
  const { data } = props

  return (
    <div className={styles.weather}>
      <span title="Тэмпература">
        <Temperature />
        +7
      </span>
      <span title="Вільготнасць">
        <Humidity />
        20%
      </span>
      <span title="Вецер">
        <Wind />
        16 🡵
      </span>
    </div>

  )
}

export default memo(Weather)

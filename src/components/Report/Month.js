import React from 'react'
import classnames from 'classnames'
import moment from 'moment'

import styles from './styles.css'

function Month(props) {
  const { name, days } = props

  function renderDay(day) {
    const dayClass = classnames({
      [styles.day]: !day.fake && !day.future,
      [styles.future]: day.future
    })

    return (
      <span className={dayClass} key={day.number} />
    )
  }

  return (
    <div className={styles.month}>
      <span className={styles.name}>{name}</span>
      {days.map(renderDay)}
    </div>
  )
}

export default Month

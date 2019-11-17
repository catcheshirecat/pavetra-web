import React from 'react'

import Month from './Month'

import { getMonths } from './utils'
import styles from './styles.css'

function Report() {
  const months = getMonths()

  return (
    <div className={styles.report}>
      <h3>REPORT</h3>
      {months.map(m => <Month key={m.name} name={m.name} days={m.days} />)}
    </div>
  )
}

export default Report

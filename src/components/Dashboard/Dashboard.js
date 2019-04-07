import React, { Component } from 'react'

import { ReactComponent as Info } from '../../assets/images/info.svg'
import Weather from './Weather'

import styles from './styles.css'

class Dashboard extends Component {
  render () {
    return (
      <footer className={styles.dashboard}>
        <Weather />
        <div className={styles.info}>
          <Info />
        </div>
      </footer>
    )
  }
}

export default Dashboard
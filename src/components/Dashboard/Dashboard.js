import React, { useState } from 'react'
import classnames from 'classnames'

import About from './About'
import Level from './Level'
import Timeline from './Timeline'
import Weather from './Weather'
import { FadeAnimation } from '../ui/Animation'
import { ReactComponent as Info } from '../../assets/images/info.svg'

import styles from './styles.css'

function Dashboard() {
  const [visibleAbout, setAboutVisibility] = useState(false)

  function toggleAbout() {
    setAboutVisibility(!visibleAbout)
  }

  const infoClass = classnames(styles.info, {
    [styles['info-active']]: visibleAbout
  })

  return (
    <div className={styles.dashboard}>
      <FadeAnimation className={styles.about} hidden={!visibleAbout}>
        <About />
      </FadeAnimation>
      <footer>
        <Weather />
        <Timeline />
        <Level />
        <button className={infoClass} onClick={toggleAbout}>
          <span><Info /></span>
        </button>
      </footer>
    </div>
  )
}

export default Dashboard

import React, { memo, useEffect, useState } from 'react'
import classnames from 'classnames'

import About from './About'
import Level from './Level'
import Timeline from './Timeline'
import Weather from './Weather'
import { FadeAnimation } from '../ui/Animation'
import { ReactComponent as Info } from '../../assets/images/info.svg'

import Endpoints from '../../config/endpoints'
import { getApi } from '../../services/api'
import { getCenter, getKmRadius } from '../../services/map'

import styles from './styles.css'

function Dashboard() {
  const [visibleAbout, setAboutVisibility] = useState(false)

  const [data, setData] = useState(null)

  useEffect(() => {
    console.log('WHAT THE FUCK')
    getMeterages()
  }, [])

  const infoClass = classnames(styles.info, {
    [styles['info-active']]: visibleAbout
  })

  function getMeterages() {
    const params = {
      location: getCenter(),
      radius: getKmRadius(),
      year: 2019, // TODO remove this later
      month: 9,
      day: 17
    }
    getApi(Endpoints.meterages(), params)
      .then(result => {
        console.log('METERAGES', result)
        setData(result)
      })
      .catch(err => {
        // TODO handle error
      })
  }

  function toggleAbout() {
    setAboutVisibility(!visibleAbout)
  }

  return (
    <div className={styles.dashboard}>
      <FadeAnimation className={styles.about} hidden={!visibleAbout}>
        <About />
      </FadeAnimation>
      <footer>
        <Weather data={data} />
        <Timeline />
        <Level />
        <button className={infoClass} onClick={toggleAbout}>
          <span><Info /></span>
        </button>
      </footer>
    </div>
  )
}

export default memo(Dashboard)

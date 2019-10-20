import React, { useEffect } from 'react'

import Endpoints from '../../config/endpoints'
import { initMap, addFactories } from '../../services/map'
import { getApi } from '../../services/api'

import styles from './styles.css'

const ID = 'map'

const Map = () => {
  useEffect(() => {
    initMap(ID)

    getApi(Endpoints.factories())
      .then(addFactories)
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div
      className={styles.map}
      id={ID}
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  )
}

export default Map

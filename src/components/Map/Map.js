import React, { useEffect, useState } from 'react'

import { ReactComponent as Factory } from '../../assets/images/factory.svg'
import { ReactComponent as Station } from '../../assets/images/station.svg'

import Endpoints from '../../config/endpoints'
import {
  initMap,
  getCenter,
  getKmRadius,
  createFactoriesLayer,
  createStationsLayer,
  addLayer
} from '../../services/map'
import { getApi } from '../../services/api'

import styles from './styles.css'

const ID = 'map'

const Map = () => {
  const [factoriesLayer, setFactoriesLayer] = useState(null)
  const [areFactoriesVisible, setFactoriesVisibility] = useState(true)

  const [stationsLayer, setStationsLayer] = useState(null)
  const [areStationsVisible, setStationsVisibility] = useState(true)

  useEffect(() => {
    initMap(ID)

    getMeterages()

    getFactories()
    getStations()
  }, [])

  function getFactories() {
    // TODO refactor this
    getApi(Endpoints.factories())
      .then(result => {
        const layer = createFactoriesLayer(result)
        addLayer(layer)

        setFactoriesLayer(layer)
      })
      .catch(err => {
        console.error(err)
      })
  }

  function getStations() {
    getApi(Endpoints.stations())
      .then(result => {
        const layer = createStationsLayer(result)
        addLayer(layer)

        setStationsLayer(layer)
      })
      .catch(err => {
        console.error(err)
      })
  }

  function getMeterages() {
    const params = {
      location: getCenter(),
      radius: getKmRadius(),
      year: 2019,
      month: 11,
      day: 5
    }
    getApi(Endpoints.meterages(), params)
      .then(result => {
        console.log('METERAGES', result)
      })
      .catch(err => {
        console.error(err)
      })
  }

  function toggleFactories() {
    if (factoriesLayer) {
      if (areFactoriesVisible) {
        factoriesLayer.remove()
        setFactoriesVisibility(false)
      } else {
        addLayer(factoriesLayer)
        setFactoriesVisibility(true)
      }
    }
  }

  function toggleStations() {
    if (stationsLayer) {
      if (areStationsVisible) {
        stationsLayer.remove()
        setStationsVisibility(false)
      } else {
        addLayer(stationsLayer)
        setStationsVisibility(true)
      }
    }
  }

  return (
    <div>
      <div
        className={styles.map}
        id={ID}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
      <div className={styles['layers-switcher']}>
        <button
          {...areStationsVisible ? {} : { className: styles['stations-inactive'] }}
          onClick={toggleStations}
        ><Station /></button>
        <button
          {...areFactoriesVisible ? {} : { className: styles['factories-inactive'] }}
          onClick={toggleFactories}
        ><Factory /></button>
      </div>
    </div>
  )
}

export default Map
